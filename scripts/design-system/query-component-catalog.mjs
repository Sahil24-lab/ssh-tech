import { readGeneratedCatalog } from "./catalog-lib.mjs";

const args = process.argv.slice(2);
const valueFor = (flag) => {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : undefined;
};

if (args.includes("--help")) {
  console.log(`Usage: npm run ui:catalog -- [options]

Options:
  --intent <words>       Rank entries by a short app or section intent
  --id <component-id>    Return one exact entry
  --kind <kind>          Filter primitive, component, motion, pattern, or template
  --capability <value>   Filter by one capability
  --full                 Return complete contracts instead of compact summaries
  --include-restricted   Include components agents should not select by default
  --limit <number>       Maximum matches (default 8)
`);
  process.exit(0);
}

const catalog = await readGeneratedCatalog();
const exactId = valueFor("--id");
const kind = valueFor("--kind");
const capability = valueFor("--capability");
const intent = valueFor("--intent") ?? "";
const includeRestricted = args.includes("--include-restricted");
const full = args.includes("--full") || Boolean(exactId);
const limit = Number.parseInt(valueFor("--limit") ?? "8", 10);

if (!Number.isInteger(limit) || limit < 1 || limit > 50) {
  console.error("--limit must be an integer between 1 and 50");
  process.exit(1);
}

const stopWords = new Set(["app", "application", "frontend", "page", "route", "section", "with"]);
const normalizeTerm = (term) =>
  term.length > 3 && term.endsWith("s") ? term.slice(0, -1) : term;
const terms = intent
  .toLowerCase()
  .split(/[^a-z0-9]+/)
  .map(normalizeTerm)
  .filter((term) => term.length > 1 && !stopWords.has(term));
const kindWeight = { template: 10, pattern: 6, component: 3, motion: 2, primitive: 1 };

const matches = catalog.entries
  .filter((entry) => !exactId || entry.id === exactId)
  .filter((entry) => !kind || entry.kind === kind)
  .filter((entry) => !capability || entry.capabilities.includes(capability))
  .filter((entry) => includeRestricted || entry.agent.selection !== "restricted")
  .map((entry) => {
    const searchable = normalizeTerm([
      entry.id,
      entry.name,
      entry.summary,
      ...entry.capabilities,
      ...entry.useWhen,
      ...entry.contentTypes,
    ].join(" ").toLowerCase());
    const score = terms.reduce((total, term) => total + (searchable.includes(term) ? 10 : 0), 0)
      + kindWeight[entry.kind]
      + (entry.agent.selection === "preferred" ? 2 : 0);
    return { entry, score };
  })
  .filter(({ score }) => terms.length === 0 || score > kindWeight.template)
  .sort((a, b) => b.score - a.score || a.entry.id.localeCompare(b.entry.id))
  .slice(0, limit)
  .map(({ entry }) =>
    full
      ? entry
      : {
          id: entry.id,
          kind: entry.kind,
          import: `${entry.source.exportName} from ${entry.source.package}`,
          summary: entry.summary,
          capabilities: entry.capabilities,
          selection: entry.agent.selection,
          storyIds: entry.storyIds,
        },
  );

if (exactId && matches.length === 0) {
  console.error(`No catalogue entry found for ${exactId}`);
  process.exit(1);
}

console.log(JSON.stringify({ schemaVersion: catalog.schemaVersion, matches }, null, 2));
