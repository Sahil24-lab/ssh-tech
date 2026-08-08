import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

export const repoRoot = path.resolve(import.meta.dirname, "../..");
export const registryPath = path.join(
  repoRoot,
  "packages/brand-ui/src/catalog/component-registry.ts",
);
export const catalogPath = path.join(
  repoRoot,
  "packages/brand-ui/catalog/component-catalog.json",
);

export async function loadRegistry() {
  const moduleUrl = `${pathToFileURL(registryPath).href}?catalog=${Date.now()}`;
  const module = await import(moduleUrl);
  return module.componentRegistry;
}

export function createCatalog(entries) {
  return {
    schemaVersion: 1,
    package: "@ssh/brand-ui",
    generatedFrom: "packages/brand-ui/src/catalog/component-registry.ts",
    queryCommand: "npm run ui:catalog -- --intent \"pricing proof\"",
    entries,
  };
}

export async function readGeneratedCatalog() {
  return JSON.parse(await fs.readFile(catalogPath, "utf8"));
}

export function stableJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}
