# `@ssh/brand-ui` Package Guide

## What is included

- Theme tokens (`brandTokens`, `fontFamilyTokens`, `typographyTokens`, `shapeTokens`, `surfaceTreatmentTokens`, `motionTokens`, `zIndexTokens`)
- Theme factory (`createBrandTheme`)
- App provider (`BrandThemeProvider`)
- Reusable components (`BrandButton`, `BrandChip`, `LabelTag`, `BlogCard`)
- Reusable templates (`HeroSection`, `FeatureSection`, `ProofSection`, `PricingSection`, `CTASection`, `FooterSection`, `BlogListTemplate`, `DocsPageTemplate`)

## Monorepo structure

- `apps/new-site`: consuming Next.js app
- `packages/brand-ui`: reusable UI package

## Guardrails

- Consume package components directly. Do not copy package internals into apps.
- Wrap Next.js and Storybook surfaces with the exported `BrandThemeProvider`; do not add another registry or module-level theme singleton.
- Customize host-level defaults through `themeOptions` or `createBrandTheme(overrides)` and use exported foundation tokens for component-level work.
- Avoid deep CSS overrides on package internals.
- Publish semver releases once stabilized for cross-repo consumption.

## Theme setup

```tsx
import { BrandThemeProvider } from "@ssh/brand-ui";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return <BrandThemeProvider>{children}</BrandThemeProvider>;
}
```

Hosts can make a bounded semantic override without rebuilding the theme:

```tsx
<BrandThemeProvider
  themeOptions={{ typography: { body1: { fontSize: "1.125rem" } } }}
>
  {children}
</BrandThemeProvider>
```

Keep a passed `themeOptions` object stable (module-level or memoized) so the provider does not recreate the MUI theme on every render.

## Local development

```bash
npm install
npm run dev
```

## Legacy app scripts

The legacy site at repo root is still runnable:

```bash
npm run dev:legacy
```

## Storybook and visual baselines

Storybook is configured with `@storybook/nextjs`.

```bash
npm run storybook
npm run build-storybook
npm run visual:baseline
npm run visual:test
```

Visual tests are located at:

- `tests/visual-regression/storybook.spec.ts`
- `tests/visual-regression/playwright.config.cjs`

## Notes

- Storybook static build is generated during visual test runs and not required in git.
- Baseline snapshots are written to `tests/visual-regression/storybook.spec.ts-snapshots`.
