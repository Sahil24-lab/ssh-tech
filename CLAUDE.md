# CLAUDE.md

## Commands

```bash
# Development
npm run dev              # Start apps/new-site Next.js dev server
npm run dev:legacy       # Start root-level Next.js dev server (legacy/production)
npm run storybook        # Start Storybook on port 6006

# Build
npm run build            # Build apps/new-site
npm run build-storybook  # Build static Storybook

# Lint
npm run lint             # Lint both app and brand-ui package

# Visual regression testing
npm run visual:test      # Run Playwright visual regression tests
npm run visual:baseline  # Update visual baseline snapshots
```

No unit tests — quality is enforced via TypeScript, ESLint, Storybook stories, and Playwright visual regression.

## Architecture

npm workspaces monorepo:

- **`packages/brand-ui` (`@ssh/brand-ui`)** — Shared design system. Organized: `components/` (atoms), `patterns/` (composites), `templates/` (full sections), `theme/`, `motion/`, `primitives/`. Exported via `packages/brand-ui/src/index.ts`.
- **`src/`** — Root-level Next.js 15 App Router app (currently active, `dev:legacy`).
- **`apps/new-site/`** — Forward-looking Next.js app importing `@ssh/brand-ui` (`dev`).

### Theme

- MUI `createTheme` with tokens in `packages/brand-ui/src/theme/tokens.ts`
- Dark mode — primary `#07DFC1` (turquoise), secondary `#067F71` (deep green), dark navy `#091F2C`
- Per-component style files: `ButtonStyles.ts`, `LinkStyles.ts`, `NavigationButtonStyles.ts`, `ScrollbarStyles.ts`
- Wrap apps with `BrandThemeProvider` from `@ssh/brand-ui`
- Root app has its own parallel theme in `src/theme/` that mirrors/extends brand-ui

### Integrations

Contentful (CMS, images from `images.ctfassets.net`), Supabase (backend), Cal.com (`@calcom/embed-react`).

## Frontend Design Guidelines

When building or modifying any UI component, page, or visual element, follow these principles. This is what separates professional output from generic AI slop.

### Design Thinking (do this before coding)

1. **Purpose** — What problem does this interface solve? Who uses it?
2. **Tone** — Commit to a specific aesthetic direction: brutally minimal, retro-futuristic, luxury/refined, editorial/magazine, industrial/utilitarian, etc. For SSH Tech, the established direction is **dark, technical, refined** — circuit aesthetics, teal glow on dark navy, precision engineering feel.
3. **Differentiation** — What makes this memorable? What's the one detail someone will remember?

Choose a clear conceptual direction and execute with precision. Bold maximalism and refined minimalism both work — the key is intentionality, not intensity.

### Aesthetics Rules

- **Typography**: Choose distinctive, characterful fonts. NEVER default to Inter, Roboto, Arial, or system fonts. Pair a display font with a refined body font. SSH Tech uses Play as the brand font.
- **Color**: Use the established token palette (`#07DFC1`, `#091F2C`, `#0E534C`, `#067F71`). Dominant colors with sharp accents outperform timid, evenly-distributed palettes. NEVER use purple gradients on white backgrounds or other cliché AI color schemes.
- **Motion**: Prioritize high-impact moments — one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggered animations and hover states that surprise. Use framer-motion / Motion library for React. SSH Tech already has `DecodeText` in `motion/`.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Grid-breaking elements. Generous negative space OR controlled density — not bland middle-ground.
- **Backgrounds & Depth**: Create atmosphere — gradient meshes, noise textures, geometric patterns, layered transparencies, grain overlays. Never default to flat solid backgrounds.

### Anti-Patterns (never do these)

- Generic AI aesthetics: overused fonts, cliché color schemes, predictable card grids
- Cookie-cutter layouts with no context-specific character
- Converging on the same "safe" choices (e.g. Space Grotesk) across components
- Timid design that tries to please everyone and impresses no one

Match implementation complexity to the vision. Maximalist designs need elaborate animation code. Minimal designs need extreme precision in spacing, typography, and subtle details.

## Code Style Notes

- `@typescript-eslint/no-explicit-any` is a warning, not an error
- Unused variables prefixed with `_` are allowed
- Path alias: `@/*` → `./src/*`
