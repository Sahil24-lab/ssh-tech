import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { extname, join, relative, sep } from "node:path";
import test from "node:test";

const projectRoot = process.cwd();
const appRoot = join(projectRoot, "apps/new-site/app");
const sourceRoots = [appRoot, join(projectRoot, "packages/brand-ui/src")];

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolutePath = join(directory, entry.name);
    return entry.isDirectory() ? walk(absolutePath) : [absolutePath];
  });
}

function sourceFiles() {
  return sourceRoots
    .flatMap(walk)
    .filter((file) => [".ts", ".tsx"].includes(extname(file)) && !file.endsWith(".stories.tsx"));
}

function routePatterns() {
  return walk(appRoot)
    .filter((file) => file.endsWith(`${sep}page.tsx`))
    .map((file) => {
      const directory = relative(appRoot, file.slice(0, -`${sep}page.tsx`.length));
      const route = directory ? `/${directory.split(sep).join("/")}` : "/";
      const expression = route
        .replace(/\[\.\.\.([^/]+)\]/g, ".+")
        .replace(/\[([^/]+)\]/g, "[^/]+");
      return new RegExp(`^${expression}$`);
    });
}

function literalLinks() {
  const patterns = [
    /\bhref\s*=\s*["'`]([^"'`]+)["'`]/g,
    /\bhref\s*:\s*["'`]([^"'`]+)["'`]/g,
  ];

  return sourceFiles().flatMap((file) => {
    const source = readFileSync(file, "utf8");
    return patterns.flatMap((pattern) =>
      [...source.matchAll(pattern)].map((match) => ({
        href: match[1],
        file,
        source,
        line: source.slice(0, match.index).split("\n").length,
      })),
    );
  });
}

test("internal literal links resolve to an app route or local fragment", () => {
  const routes = routePatterns();
  const failures = [];

  for (const link of literalLinks()) {
    const location = `${relative(projectRoot, link.file)}:${link.line}`;

    if (/^(?:https?:|mailto:|tel:)/.test(link.href)) continue;

    if (link.href.startsWith("#")) {
      const fragment = link.href.slice(1);
      const escapedFragment = fragment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (!fragment || !new RegExp(`\\bid\\s*=\\s*["']${escapedFragment}["']`).test(link.source)) {
        failures.push(`${location} -> ${link.href}`);
      }
      continue;
    }

    if (!link.href.startsWith("/")) continue;

    const pathname = link.href.split(/[?#]/, 1)[0] || "/";
    if (!routes.some((route) => route.test(pathname))) {
      failures.push(`${location} -> ${link.href}`);
    }
  }

  assert.deepEqual(failures, [], `Unresolved links:\n${failures.join("\n")}`);
});
