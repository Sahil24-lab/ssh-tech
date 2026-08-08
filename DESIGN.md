---
name: SSH Tech Brand UI
description: A precise, tactile interface system for shipping trustworthy product experiences.
colors:
  signal-teal: "#07DFC1"
  signal-teal-light: "#1FE2C4"
  signal-teal-dark: "#029F8C"
  field-green: "#0E534C"
  deep-channel: "#091F2C"
  channel-border: "#0B645C"
  near-white: "#EFFEEB"
  supporting-cyan: "#91FEE6"
  danger: "#FF5C6C"
  warning: "#F0A04B"
typography:
  display:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(2.7rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title-large:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.25
  title-medium:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.4
  title-small:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.6
  supporting:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.8rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.06em"
  label-large:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.04em"
  navigation:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.signal-teal}"
    textColor: "#003330"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "9px 20px"
    height: "44px"
  button-outlined:
    backgroundColor: "#00000000"
    textColor: "{colors.signal-teal}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "9px 20px"
    height: "44px"
  card-panel:
    backgroundColor: "{colors.deep-channel}"
    textColor: "{colors.near-white}"
    rounded: "{rounded.lg}"
    padding: "32px"
---

# Design System: SSH Tech Brand UI

## Overview

**Creative North Star: “The Signal Workshop”**

SSH Tech should feel like a well-run technical workshop: precise enough to trust, tactile enough to understand, and composed enough that the product remains the focus. The interface is dark-first and proof-led, with Signal Teal used as a directional cue instead of decorative noise. Density is moderate; generous section rhythm sits alongside compact, engineered controls.

The system rejects generic SaaS glass dashboards, decorative code theatre, interchangeable card grids, and motion that performs without communicating. Visual depth comes from the brand gradient, clear tonal layers, and occasional state-driven elevation—not a permanent stack of shadows.

**Key Characteristics:**

- One dark, teal-led brand across every product surface.
- Strong semantic hierarchy before decoration.
- Flat, bounded surfaces with visible interaction states.
- Technical detail used sparingly and only when it carries meaning.
- Accessibility and consumer verification treated as design quality.

## Theme Setup

`@ssh/brand-ui` exposes one canonical setup path: `BrandThemeProvider` for Next.js rendering and `createBrandTheme(overrides)` for tests, Storybook, and host-level customization. Consumers may extend semantic theme options, but shared font stacks, shape, motion, and layer values come from the exported foundation tokens.

The font families include local CSS-variable hooks with installed-font and system fallbacks, so an absent Next.js font variable never collapses the theme to an invalid family. Storybook and application layouts both use the same provider; do not introduce a parallel registry or a module-level theme singleton.

## Colors

The palette pairs luminous Signal Teal with deep maritime greens and navy, creating high-confidence contrast without introducing unrelated accents.

### Primary

- **Signal Teal** (`#07DFC1`): primary actions, focus rings, active indicators, and rare emphasis.
- **Signal Teal Light** (`#1FE2C4`): display headings and high-contrast hover emphasis.
- **Signal Teal Dark** (`#029F8C`): pressed states and supporting emphasis.

### Secondary

- **Field Green** (`#0E534C`): the branded page field beneath the canonical conic gradient.
- **Channel Border** (`#0B645C`): dividers, structural borders, and low-emphasis control outlines.

### Neutral

- **Deep Channel** (`#091F2C`): panels, navigation, and modal surfaces.
- **Near White** (`#EFFEEB`): primary text and text on dark surfaces.
- **Supporting Cyan** (`#91FEE6`): secondary text and supporting metadata.

**The Signal Rule.** Signal Teal is directional. Use it for hierarchy, focus, state, or action; do not wash entire screens in it.

## Typography

**Display Font:** Montserrat (with sans-serif fallback)

**Body Font:** Montserrat; Poppins is reserved for supporting body copy

**Label/Mono Font:** JetBrains Mono

**Character:** Montserrat gives the system confident geometric structure. Poppins softens secondary explanations, while JetBrains Mono marks compact operational information—not ordinary prose.

### Hierarchy

- **Display** (700, `clamp(2.7rem, 6vw, 4.5rem)`, 1.04): one visible `h1` per page.
- **Headline** (700, `clamp(1.9rem, 3.5vw, 2.8rem)`, 1.15): section-level `h2` headings.
- **Title** (600, `1.25rem`, 1.5): component and content-group headings.
- **Body** (400, `1rem–1.1rem`, 1.6): prose, generally constrained to about 70 characters per line.
- **Label** (700, `0.8rem`, `0.06em`): buttons and short metadata. Uppercase is optional, never automatic.

**The Plain-Language Rule.** Mono typography may label a technical fact; it must not turn ordinary navigation or marketing copy into terminal cosplay.

## Elevation

The system is flat by default. Depth comes from the body gradient, tonal separation, borders, and overlap. Shadows appear only for transient interaction or genuinely elevated UI such as a focused modal; glass blur is reserved for one or two spatial moments, never every container.

### Shadow Vocabulary

- **Interactive lift** (`0 4px 8px rgba(0,0,0,0.20)`): optional hover feedback on a highlighted actionable surface.
- **Signal glow** (`0 0 18px rgba(7,223,193,0.28)`): rare primary-action emphasis, limited in duration.

**The Flat-by-Default Rule.** A bordered surface at rest has no broad shadow. Do not combine a visible border with a diffuse shadow larger than 8px.

## Components

### Buttons

- **Shape:** engineered rounded rectangle (`8px`), never pill-shaped for ordinary actions.
- **Primary:** Signal Teal with Deep Teal text, minimum `44px` target height.
- **Hover / Focus:** slight tonal change and up to `1px` lift; a `2px` Signal Teal focus ring sits `3px` outside the control.
- **Outlined / Ghost / Text:** progressively lower emphasis; text underlines animate with transforms, not layout width.

### Chips

- **Style:** compact mono label, restrained fill or `1px` Channel Border.
- **State:** selected chips may use Signal Teal; static metadata should remain quieter.

### Cards / Containers

- **Corner Style:** `16px` maximum for broad surfaces.
- **Background:** Deep Channel for panels; translucent glass only for an intentional focal moment.
- **Shadow Strategy:** flat at rest; optional `0 4px 8px` response for interactive lift.
- **Border:** one low-contrast structural border, not a glowing outline around every item.
- **Internal Padding:** `24–32px` on desktop, reduced responsively on small screens.

### Inputs / Fields

- **Style:** Deep Channel fill, `1px` Channel Border, `8px` corners, and a minimum `44px` target height.
- **Focus:** Signal Teal border or external focus ring with no layout shift.
- **Error / Disabled:** semantic danger or muted text remains readable; disabled controls keep their shape and state legible.

### Navigation

- The fixed navigation uses a restrained translucent Deep Channel surface, clear text links, and a labelled mobile drawer control. Links have visible keyboard focus and at least a `44px` target on touch layouts.

### Decode Motion

- Rune decoding may accompany a short loading state, but the accessible name remains stable. Reduced-motion users receive the final text immediately, and perimeter progress runs as a CSS stroke animation rather than a React frame loop.

## Do's and Don'ts

### Do:

- **Do** preserve the canonical dark conic gradient and the single `#07DFC1` brand accent.
- **Do** use one visible `h1`, a `main` landmark, and logical heading order on every page.
- **Do** keep interactive targets at least `44px` high and provide visible `:focus-visible` treatment.
- **Do** let content determine composition; lists, diagrams, editorial layouts, and pricing grids should look meaningfully different.
- **Do** provide a reduced-motion path for every non-essential animation.

### Don't:

- **Don't** create generic SaaS glass dashboards or place every section inside a floating rounded card.
- **Don't** repeat equal card grids when a sequence, comparison, list, or diagram communicates the relationship better.
- **Don't** use tiny uppercase labels as decoration, terminal punctuation as costume, or mono type for substantial prose.
- **Don't** use bounce or elastic easing, animate layout dimensions, or run ambient motion forever.
- **Don't** ship placeholder links, fabricated testimonials, hidden duplicate headings, or controls without accessible names.
