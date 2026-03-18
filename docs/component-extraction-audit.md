# Component Extraction Audit

## Promoted now

- `src/components/layout/header/Header.tsx` -> `packages/brand-ui/src/patterns/SiteHeader.tsx`
- `src/components/layout/container/constrained-container.tsx` -> `packages/brand-ui/src/primitives/Container.tsx`
- `src/components/layout/container/full-width-container.tsx` -> `packages/brand-ui/src/patterns/FullWidthSection.tsx`

## Next extraction wave

### Extract

- `src/components/table-of-contents/TableOfContents.tsx`
  - target: `Patterns/TableOfContents`
  - split generic rendering from Contentful parsing
  - keep scroll-progress and active-section logic

- `src/components/table-of-contents/StickyWrapper.tsx`
  - target: `Patterns/StickySidebar`
  - make width and top offset configurable
  - remove hard-coded `280px`

### Keep legacy for now

- `src/components/products/ssh-echo/SSHEchoBlueprint.tsx`
  - strong visual system
  - still too product-specific to promote wholesale
  - extract feature rail and blueprint card primitives first

- `src/components/feature-image/FeatureImage.tsx`
  - media API is not stable enough yet

### Keep app-specific

- `src/components/book-call-modal/BookCallModal.tsx`
  - tied to Cal embed and app-specific lead flow

## Removal rule

- Do not reintroduce AI/Web3 app trees into Storybook navigation.
- Shared library stories should stay at the level of foundations, primitives, components, patterns, and migration-only legacy references.
