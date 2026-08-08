# Quality contract

Run the smallest relevant checks while iterating, then run the complete design-system gate before handoff.

## Catalogue changes

```bash
npm run ui:catalog:generate
npm run ui:catalog:check
```

Commit the generated JSON with its typed registry source. Preferred entries require at least one valid Storybook story.

## Component and page changes

```bash
npm run lint --workspace packages/brand-ui
npm run build-storybook
npm run ui:impeccable -- --files <changed-ui-file...>
```

Use `node scripts/preview.mjs story <story-id>` for design-system surfaces. Use the appropriate Next.js server plus `node scripts/preview.mjs page <url>` for routes. Inspect both desktop and mobile images.

## Release checks

```bash
npm run design-system:check
npm run visual:test
```

The first command validates registry freshness, TypeScript, Storybook, serious and critical axe findings, and new Impeccable findings. The second compares reviewed Storybook snapshots.

Treat a missing Storybook contract, inaccessible interaction, fabricated content, unresolved route, broken image, horizontal overflow, or motion without a reduced-motion path as incomplete work.
