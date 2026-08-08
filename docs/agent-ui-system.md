# Agent-ready frontend system

The frontend harness has four deliberately separate responsibilities:

1. `@ssh/brand-ui` owns runtime tokens, components, patterns, and templates.
2. Storybook owns human-readable usage and accessibility evidence.
3. The generated component catalogue gives agents a small, queryable selection contract.
4. Impeccable and CI reject new design-system, accessibility, and visual-quality regressions.

Impeccable and the catalogue are build-time tools. Generated applications use ordinary static imports from `@ssh/brand-ui` and `@mui/material`; they do not load the catalogue at runtime.

## Catalogue workflow

The typed source of truth is `packages/brand-ui/src/catalog/component-registry.ts`.

```bash
npm run ui:catalog:generate
npm run ui:catalog:check
```

Agents query the catalogue instead of loading the full registry into context:

```bash
npm run ui:catalog -- --intent "pricing page with proof and FAQs"
npm run ui:catalog -- --id pattern.pricing-summary
npm run ui:catalog -- --kind template --limit 5
```

The first command returns compact candidates. The exact-id command returns the complete contract only for a shortlisted component.

## Selection hierarchy

Choose the highest useful level:

1. Template for the route or full section.
2. Pattern for a meaningful content relationship.
3. Component for established behaviour or presentation.
4. Primitive only for local layout and typography gaps.

Restricted entries require an explicit existing-brand need. If the catalogue has no suitable entry, record the gap and add a Storybook contract before promoting a new public component.

## Required gates

```bash
npm run design-system:check
npm run visual:test
```

`design-system:check` validates catalogue freshness, typechecks `@ssh/brand-ui`, builds Storybook, runs axe against preferred component stories, and applies Impeccable to changed frontend files. Visual regression remains a separate CI job so snapshot review stays explicit.
