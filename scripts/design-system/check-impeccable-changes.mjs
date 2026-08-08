import { spawnSync } from "node:child_process";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "../..");
const args = process.argv.slice(2);
const filesIndex = args.indexOf("--files");
const explicitFiles = filesIndex >= 0 ? args.slice(filesIndex + 1) : [];
const uiPattern = /\.(css|html|jsx|tsx)$/i;

function changedFiles() {
  if (explicitFiles.length > 0) return explicitFiles;

  const baseIndex = args.indexOf("--base");
  const configuredBase = baseIndex >= 0 ? args[baseIndex + 1] : undefined;
  const githubBase = process.env.GITHUB_BASE_REF
    ? `origin/${process.env.GITHUB_BASE_REF}`
    : undefined;
  const base = configuredBase ?? githubBase;
  if (!base) {
    const staged = spawnSync(
      "git",
      ["diff", "--cached", "--name-only", "--diff-filter=ACMR"],
      { cwd: repoRoot, encoding: "utf8" },
    );
    const stagedFiles = staged.stdout.split("\n").filter(Boolean);
    if (staged.status === 0 && stagedFiles.length > 0) return stagedFiles;
  }
  const gitArgs = base
    ? ["diff", "--name-only", "--diff-filter=ACMR", `${base}...HEAD`]
    : ["diff", "--name-only", "--diff-filter=ACMR", "HEAD"];
  const result = spawnSync("git", gitArgs, { cwd: repoRoot, encoding: "utf8" });

  if (result.status !== 0) {
    console.error(result.stderr || `Unable to determine changed files from ${base ?? "HEAD"}`);
    process.exit(result.status ?? 1);
  }

  return result.stdout.split("\n").filter(Boolean);
}

const files = [...new Set(changedFiles())]
  .filter((file) => uiPattern.test(file))
  .filter((file) => !file.includes(".stories.tsx-snapshots/"));

if (files.length === 0) {
  console.log("Impeccable change gate: no changed frontend source files.");
  process.exit(0);
}

const detector = path.join(repoRoot, ".agents/skills/impeccable/scripts/detect.mjs");
const result = spawnSync(process.execPath, [detector, "--quiet", ...files], {
  cwd: repoRoot,
  encoding: "utf8",
});

process.stdout.write(result.stdout);
process.stderr.write(result.stderr);
if (result.status !== 0) process.exit(result.status ?? 1);

console.log(`Impeccable change gate passed for ${files.length} frontend source file(s).`);
