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

## Visual Feedback Loop

When building or modifying UI components, use the screenshot loop to validate visually before considering a task done.

### Finding Storybook story IDs

Story IDs follow the pattern `[path]--[variant]` in kebab-case. To discover available IDs:

```bash
grep -r "export const" packages/brand-ui/src/**/*.stories.tsx src/**/*.stories.tsx 2>/dev/null | grep -v "^Binary"
```

A story exported as `export const Primary` in `components/BrandButton.stories.tsx` becomes `components-brandbutton--primary`.

### Which server to use

| What you're working on | Server | Start command |
|---|---|---|
| `packages/brand-ui` components/patterns | Storybook `localhost:6006` | `npm run storybook` |
| `apps/new-site` pages | Next.js `localhost:3000` | `npm run dev` |
| `src/` (root app / production) | Next.js `localhost:3000` | `npm run dev:legacy` |

### Taking screenshots

```bash
# brand-ui component — isolated in Storybook (localhost:6006)
node scripts/preview.mjs story components-brandbutton--primary

# new-site page — full Next.js app (localhost:3000, npm run dev)
node scripts/preview.mjs page http://localhost:3000
node scripts/preview.mjs page http://localhost:3000/about

# root app page — legacy Next.js app (localhost:3000, npm run dev:legacy)
node scripts/preview.mjs page http://localhost:3000/blog

# Mobile viewport (375px) — add --mobile to any command
node scripts/preview.mjs page http://localhost:3000 --mobile
node scripts/preview.mjs story components-hero--default --mobile

# Custom output path
node scripts/preview.mjs story components-hero--default /tmp/hero.png
```

The script will exit with an error if the required server isn't running, so a successful screenshot means you're looking at real UI.

### Critical: always READ the screenshot file

Running the script is not enough. After every screenshot, use the Read tool to open the saved image:

```
Read /tmp/preview.png
```

Do NOT skip this step. "Screenshot saved" in stdout only means the file was written — it does not mean the UI looks correct.

### Iteration loop

1. Make code changes.
2. Run the screenshot command.
3. **Read `/tmp/preview.png`** and assess against the checklist below.
4. Fix issues and repeat until satisfied.
5. For any layout work, take both desktop and `--mobile` screenshots before marking done.
6. When done: `npm run visual:baseline` to lock in the new baseline.

### Visual self-assessment checklist

- **Contrast** — Is text legible against its background? Does the teal glow read clearly on dark navy?
- **Hierarchy** — What draws the eye first? Is that the right element?
- **Spacing** — Does padding feel intentional, or cramped/floaty?
- **Brand fidelity** — Does it feel SSH Tech (dark, technical, refined) or generic?
- **Interactive affordance** — Are buttons/links visually distinct from static content?
- **Mobile** — On 375px: does anything overflow, collapse badly, or lose hierarchy?

---

## Code Style Notes

- `@typescript-eslint/no-explicit-any` is a warning, not an error
- Unused variables prefixed with `_` are allowed
- Path alias: `@/*` → `./src/*`
