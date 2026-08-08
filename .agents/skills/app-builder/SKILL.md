---
name: app-builder
description: Build or modify SSH Tech frontend applications and routes from the repository design system. Use when Codex must select @ssh/brand-ui primitives, components, patterns, or templates; compose a page from a product brief; add a reusable frontend surface; or validate generated UI against Storybook, accessibility, responsive, and Impeccable contracts while keeping context usage small.
---

# SSH frontend app builder

Compose from the design system instead of recreating it. Keep the catalogue and Impeccable out of production bundles; emit ordinary static React imports.

## Bootstrap with bounded context

1. Read `PRODUCT.md` and `DESIGN.md` when present.
2. Read and follow `.agents/skills/impeccable/SKILL.md` for UI implementation and validation.
3. Do not read the complete registry or generated JSON into context.
4. Query a compact shortlist:

```bash
npm run ui:catalog -- --intent "<route, audience, content, and interaction intent>"
```

5. Load full contracts only for shortlisted IDs:

```bash
npm run ui:catalog -- --id <component-id>
```

6. Inspect the returned Storybook IDs before changing or composing UI.

## Compose top-down

Select in this order:

1. Use a template when it fits the route or complete section.
2. Fill it with compatible patterns.
3. Use components for established behaviour and content surfaces.
4. Use primitives only for local layout, spacing, typography, and semantics.

Prefer `preferred` entries. Use `allowed` entries when their instruction and review requirements are satisfied. Do not select `restricted` entries unless the user explicitly requires the legacy treatment.

Import public runtime elements from `@ssh/brand-ui`. Import MUI primitives from `@mui/material`. Never deep-import package internals into an application.

## Handle gaps deliberately

If no contract fits:

1. Confirm the need is not a local primitive composition.
2. Record the missing capability and proposed public API.
3. Add the component or pattern to `component-registry.ts`.
4. Add Storybook states for default, interaction, loading, empty, error, overflow, mobile, keyboard, and reduced motion where applicable.
5. Regenerate and validate the catalogue.

Do not silently invent a parallel token, component, or styling system.

## Complete the build

Preserve truthful supplied content. Do not fabricate routes, pricing, metrics, testimonials, or product capabilities. Verify real links and assets.

Run the gates in `references/quality-contract.md`. Inspect desktop and mobile rendered output whenever layout or visual code changes. Keep visual snapshot updates explicit and review the images before accepting them.
