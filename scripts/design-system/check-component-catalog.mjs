import fs from "node:fs/promises";
import path from "node:path";
import {
  catalogPath,
  createCatalog,
  loadRegistry,
  readGeneratedCatalog,
  repoRoot,
  stableJson,
} from "./catalog-lib.mjs";

const errors = [];
const entries = await loadRegistry();
const ids = new Set();
const storyIds = new Set();

for (const entry of entries) {
  if (ids.has(entry.id)) errors.push(`Duplicate component id: ${entry.id}`);
  ids.add(entry.id);

  if (!entry.id.startsWith(`${entry.kind}.`)) {
    errors.push(`${entry.id}: id must start with ${entry.kind}.`);
  }

  for (const field of ["capabilities", "useWhen", "avoidWhen", "accessibility", "resilience"]) {
    if (!Array.isArray(entry[field]) || entry[field].length === 0) {
      errors.push(`${entry.id}: ${field} must contain at least one item`);
    }
  }

  if (entry.agent.selection === "preferred" && entry.storyIds.length === 0) {
    errors.push(`${entry.id}: preferred entries require at least one Storybook story`);
  }

  if (entry.source.sourcePath) {
    try {
      await fs.access(path.join(repoRoot, entry.source.sourcePath));
    } catch {
      errors.push(`${entry.id}: missing source file ${entry.source.sourcePath}`);
    }
  }

  for (const storyId of entry.storyIds) {
    if (storyIds.has(storyId)) errors.push(`Duplicate story id: ${storyId}`);
    storyIds.add(storyId);
  }
}

for (const entry of entries) {
  for (const dependency of entry.composition.requires) {
    if (!ids.has(dependency)) errors.push(`${entry.id}: unknown dependency ${dependency}`);
  }
}

const indexSource = await fs.readFile(
  path.join(repoRoot, "packages/brand-ui/src/index.ts"),
  "utf8",
);
for (const entry of entries) {
  if (
    entry.source.package === "@ssh/brand-ui" &&
    !indexSource.includes(`export { ${entry.source.exportName} }`)
  ) {
    errors.push(`${entry.id}: ${entry.source.exportName} is not a public @ssh/brand-ui export`);
  }
}

const storyFiles = [];
async function collectStories(directory) {
  for (const item of await fs.readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, item.name);
    if (item.isDirectory()) await collectStories(absolute);
    else if (item.name.endsWith(".stories.tsx")) storyFiles.push(absolute);
  }
}

await collectStories(path.join(repoRoot, "packages/brand-ui/src"));
const discoveredStoryIds = new Set();
const toTitleId = (value) =>
  value
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
const toExportId = (value) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

for (const file of storyFiles) {
  const source = await fs.readFile(file, "utf8");
  const title = source.match(/title:\s*["']([^"']+)["']/)?.[1];
  if (!title) continue;
  for (const match of source.matchAll(/^export const ([A-Za-z0-9_]+)\s*:/gm)) {
    discoveredStoryIds.add(`${toTitleId(title)}--${toExportId(match[1])}`);
  }
}

for (const storyId of storyIds) {
  if (!discoveredStoryIds.has(storyId)) errors.push(`Unknown Storybook story id: ${storyId}`);
}

const expected = stableJson(createCatalog(entries));
let actual = "";
try {
  actual = stableJson(await readGeneratedCatalog());
} catch {
  errors.push(`Missing generated catalogue: ${path.relative(repoRoot, catalogPath)}`);
}

if (actual && actual !== expected) {
  errors.push("Generated catalogue is stale. Run npm run ui:catalog:generate.");
}

if (errors.length > 0) {
  console.error(`Component catalogue validation failed:\n- ${errors.join("\n- ")}`);
  process.exit(1);
}

console.log(`Component catalogue valid: ${entries.length} entries, ${storyIds.size} story contracts.`);
