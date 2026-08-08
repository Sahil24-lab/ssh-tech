import fs from "node:fs/promises";
import path from "node:path";
import { catalogPath, createCatalog, loadRegistry, stableJson } from "./catalog-lib.mjs";

const entries = await loadRegistry();
const catalog = createCatalog(entries);

await fs.mkdir(path.dirname(catalogPath), { recursive: true });
await fs.writeFile(catalogPath, stableJson(catalog), "utf8");

console.log(`Generated ${entries.length} catalogue entries at ${catalogPath}`);
