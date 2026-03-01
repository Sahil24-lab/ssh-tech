# SSH-Tech — Design Direction Brief

> **Purpose:** This document is a design spec for Claude Code (or any developer) to reference when building or refactoring SSH-Tech landing pages. It bridges the existing brand identity from the live site with a new design direction that introduces more visual depth, animation, and spatial confidence.

---

## 1. Context & Site Architecture

SSH-Tech operates three subdomain sites to keep messaging focused per audience, plus a personal profile:

| Subdomain               | Focus                      | Landing Component                                           |
| ----------------------- | -------------------------- | ----------------------------------------------------------- |
| `web3.ssh-tech.xyz`     | Web3 & Product Engineering | `Web3Landing` (also default fallback)                       |
| `embedded.ssh-tech.xyz` | Embedded, Robotics & IoT   | `EmbeddedLanding` (currently `RoboticsLanding` placeholder) |
| `ai.ssh-tech.xyz`       | AI Systems & Automation    | `AILanding` (not yet built)                                 |
| `sahil.ssh-tech.xyz`    | Personal Profile           | `ProfileLanding`                                            |

**Rename note:** The current codebase uses `robotics.ssh-tech.xyz` and `RoboticsLanding`. This should be migrated to `embedded.ssh-tech.xyz` and `EmbeddedLanding`. "Embedded" is the correct umbrella term — it covers firmware, IoT, sensor integration, telemetry, industrial systems, EVs, _and_ robotics. A customer arriving with an IoT monitoring project or EV telemetry system shouldn't land on a "robotics" URL. The rename involves:

1. Update `LandingRouter.tsx` — change the `robotics` case to `embedded`
2. Rename the component from `RoboticsLanding` to `EmbeddedLanding`
3. Update `getUmamiWebsiteId()` in `layout.tsx` — add `embedded` key (can reuse the robotics Umami ID or create a new one)
4. DNS/hosting — add `embedded.ssh-tech.xyz` subdomain, consider a redirect from `robotics.ssh-tech.xyz` → `embedded.ssh-tech.xyz` for any existing links
5. Update `Header.tsx` subdomain logic if it has robotics-specific behaviour

**Codebase architecture reference:**

- Subdomain routing lives in `src/components/landing/LandingRouter.tsx`
- Subdomain detection is server-side via `host` header in `RootLayout`, passed through `SubdomainProvider` context
- `middleware.ts` sets a subdomain cookie that is currently unused (can be cleaned up or leveraged later)
- Header nav and CTA behaviour varies by subdomain in `src/components/layout/header/Header.tsx`
- Analytics are tracked per-subdomain via Umami with separate site IDs

**Critical:** These subdomains share a single brand identity — same fonts, same core components, same design system. The separation is purely about _messaging and audience targeting_. The audiences are distinct and arrive through different channels, so there's zero risk of brand confusion. Maintaining one visual system means one shared component library, simpler maintenance, and stronger brand equity.

The existing live site (`web3.ssh-tech.xyz`) is built with **Next.js** and uses `next/image` for optimised assets. All new work should stay within the existing React/Next.js architecture.

### Technical Stack (from existing codebase)

- **Framework:** Next.js (React)
- **UI Library:** MUI (Material UI) with a custom theme (`createTheme` + `responsiveFontSizes`)
- **Fonts:** Montserrat (primary, via CSS variable `--font-montserrat`), Poppins (body2, via `--font-poppins`)
- **Custom component styles:** Separate style modules for Buttons, Links, NavigationButtons, Chips, Scrollbars — imported into the theme
- **Images:** `next/image` for optimisation

Claude Code should work within MUI's theming and component system. New components should use `sx` prop or `styled()` for custom styling, and reference `theme.palette`, `theme.typography`, etc. rather than hardcoding colour values. The design reference HTML file uses raw CSS — translate those patterns into MUI-compatible implementations.

---

## 2. Current Brand DNA (from the live site)

### What to preserve

- **Dark-first theme** — the site already commits to a dark background with light text. Keep this.
- **Confidence in tone** — copy like "Not here for the hype" and "Bulletproof Interfaces, Brilliant Experiences" is direct and assured. Maintain this voice.
- **Proof-heavy structure** — real case studies with real metrics (LlamaRisk, PlayLobby, Buzzkill). This is a major trust asset. Always feature proof prominently.
- **Transparent pricing** — fixed-cost tiers displayed openly. This is a brand differentiator. Keep it visible and clear.
- **Process clarity** — Blueprint → Validate → Build → Launch. Keep this framework; it signals maturity.
- **Social proof with real people** — testimonials from named individuals with photos. These carry weight.

### What to evolve

- **Visual depth** — the current site is clean but somewhat flat. The new direction should introduce layered backgrounds, subtle grid/noise textures, and atmospheric glow effects to create more spatial depth without going heavy.
- **Animation & micro-interactions** — the current site is largely static. Introduce scroll-triggered reveals (staggered fade-up on cards, sections), hover states on cards (subtle lift + border glow), and entrance animations on the hero.
- **Typography hierarchy** — tighten the type scale. Use a distinctive display font for headlines and a mono font for labels, tags, and technical elements. The contrast between display and mono creates the "engineering meets product" feel.
- **Card & component refinement** — service cards and pricing cards should have more intentional hover states, top-edge accent lines, and better visual separation from the background.
- **Spatial composition** — be more generous with whitespace between sections. Let content breathe. Use asymmetric layouts where appropriate (e.g., the "Why Us" section with text on one side, decorative code block on the other).

---

## 3. Design Language (New Direction)

### Aesthetic

**Terminal-meets-product.** The site should feel like it was built by engineers who also understand design. Not "techy for the sake of techy" — purposeful, clean, and confident. Think: a well-designed developer tool landing page, not a hackathon project.

### Colour System

These are the **actual brand colours** from the existing MUI theme. All new work must use these — do not introduce new palette values.

```
// Primary
--primary-main:        #07DFC1    (vibrant turquoise — primary accent, CTAs, highlights)
--primary-light:       #1FE2C4    (headings h1–h3, hover emphasis)
--primary-dark:        #029F8C    (hover states on buttons, secondary emphasis)
--primary-contrast:    #003330    (text on primary-coloured backgrounds)

// Secondary
--secondary-main:      #067F71    (deep greenish-blue — supporting elements)
--secondary-light:     #52F6D7    (light cyan — sparkle accents, glows)
--secondary-dark:      #0B645C    (darker shade — borders, subtle fills)
--secondary-contrast:  #EFFEEB    (lightest — used for contrast text)

// Backgrounds
--bg-default:          #0E534C    (base page background)
--bg-paper:            #091F2C    (cards, panels, elevated surfaces)

// Text
--text-primary:        #EFFEEB    (default body text, headings h4+)
--text-secondary:      #91FEE6    (softer turquoise — supporting text, labels)
--text-muted:          #eee       (body2 style, secondary paragraphs)

// Derived (for the new design elements)
--accent-dim:          #07DFC130  (primary-main at ~19% opacity — glows, tag backgrounds)
--accent-glow:         #07DFC118  (primary-main at ~9% opacity — large atmospheric orbs)
--border:              #0B645C    (secondary-dark — card borders, dividers)
--border-subtle:       #0E534C80  (bg-default at ~50% opacity — section separators)
```

**Background treatment:** The existing site uses a conic gradient overlay on the base background:

```css
background-color: #0e534c;
background-image:
  linear-gradient(rgba(5, 11, 43, 0.7), rgba(5, 11, 43, 0.1)),
  conic-gradient(
    from -23.81deg at 72.82% 162.44%,
    #0e534c -44.57deg,
    #067f71 7.76deg,
    #029f8c 20.98deg,
    #067f71 52deg,
    #0b645c 88.68deg,
    #067f71 315.43deg,
    #029f8c 367.76deg
  );
```

This gradient is part of the brand. Preserve it on the main body. New atmospheric effects (grid patterns, glow orbs) should layer on top of this, not replace it.

**Single brand palette across all subdomains — no accent variation.** Every subdomain uses the same `#07DFC1` turquoise primary accent. Do NOT introduce per-subdomain colour variations. SSH-Tech is one brand with one visual identity. The subdomains exist to separate _messaging and audience_, not to create distinct visual brands. One design system, one component library, one colour palette. This keeps maintenance simple and brand equity compounding in one direction.

### Typography

The existing theme uses:

```
Display / Headings / Body:   Montserrat  (via var(--font-montserrat))
                             Weights: 400, 500, 600, 700
Alternative Body (body2):    Poppins     (via var(--font-poppins))
                             Weight: 400
```

**Adding a monospace font** for technical labels, tags, navigation, code snippets, pricing values, and metadata. This is the key typographic addition from the new design direction:

```
Mono / Technical:            JetBrains Mono  (weights: 400, 500, 700)
```

The mono font creates the "engineering meets product" contrast. Use it for: section labels (`// what we build`), tech stack tags, nav links, button text, pricing figures, step numbers, footer text, and any code-like decorative elements. Montserrat remains the primary font for headlines, body copy, and all substantial text content.

**Heading colours from the existing theme (preserve these):**

- h1, h2, h3: `#1FE2C4` (primary light)
- h4: `#EFFEEB` (text primary)
- h5: `#91FEE6` (text secondary)
- body1: `#EFFEEB`
- body2: `#eee`

**Type scale guidelines (from new design direction — adapt to MUI's responsive typography):**

- Hero headline: `clamp(2.8rem, 6vw, 5rem)`, Montserrat weight 700, tight letter-spacing (-0.035em)
- Section titles: `clamp(1.8rem, 3.5vw, 2.6rem)`, Montserrat weight 600–700
- Body text: `1rem–1.15rem`, weight 400, line-height 1.6–1.7
- Mono labels: `0.75rem–0.85rem`, JetBrains Mono, letter-spacing 0.04–0.1em, uppercase for section labels

### Backgrounds & Atmosphere

- **Preserve the existing conic gradient** on `body` — this is core brand. All new atmospheric effects layer on top.
- **Subtle grid pattern** on the hero — using CSS `linear-gradient` lines in `#0B645C` (secondary-dark) with a radial `mask-image` to fade out toward edges. Just enough to suggest structure without competing with the conic gradient beneath.
- **Glow orbs** — large radial gradients of `#07DFC1` (primary-main) at very low opacity (~6-9%), positioned behind key sections (hero, CTA). Creates depth that harmonises with the existing teal palette.
- **Noise/grain overlay** — a fixed SVG noise texture at ~2-3% opacity across the entire page. Adds analogue texture.
- **Section alternation** — alternate between the base body background and elevated sections using `#091F2C` (bg-paper) with `1px solid #0B645C` borders. Cards use `#091F2C` as their surface.

### Animation Principles

Keep animations restrained. The site should feel polished, not performative.

- **Hero entrance only** — the hero tag, headline, subtitle, and CTA buttons animate in sequentially using CSS `@keyframes fadeUp` with staggered `animation-delay` values (0s, 0.1s, 0.2s, 0.3s). This is the one orchestrated moment on the page.
- **Section-level scroll reveals** — apply `.reveal` to section-level containers (the grid wrapper, the diff-grid, the metrics-inner) — NOT to individual cards, labels, titles, or list items. When a section enters the viewport, the entire block fades in together with a gentle `opacity 0→1` and `translateY(12px→0)` over `0.5s ease`. No staggering between children.
- **No per-card reveals** — individual cards, process steps, pricing cards, FAQ items, and testimonials should NOT have their own reveal animations. They appear when their parent container does.
- **Hover states** — cards lift `translateY(-3px)` with a border colour shift toward `--accent-dim` and a subtle `::before` top-edge accent line that fades in. These are the main micro-interactions.
- **Button hover** — primary buttons transition from `#07DFC1` to `#029F8C` (already in theme), gain a box-shadow glow (`0 0 30px var(--accent-dim)`), and slight lift. Secondary/outlined buttons shift border and text colour toward `#1FE2C4`.
- **Timing** — use `0.5s ease` for reveals. `0.2s–0.3s ease` for hover transitions. Avoid cubic-bezier or spring curves — keep it simple.

### Component Patterns

**Section structure:**

```
<section-label>   // MONO, uppercase, accent colour, with leading dash or line
<section-title>   // Display font, large, tight leading, can break across 2 lines
<section-subtitle> // Secondary colour, lighter weight, max-width ~580px
<content>         // Cards, grid, etc.
```

**Service / feature cards:**

- Card bg uses `theme.palette.background.paper` (`#091F2C`) with `1px solid #0B645C` border
- Rounded corners (8px) — matches existing MUI button border-radius
- `::before` top accent line (gradient from `#07DFC1` to transparent, opacity 0 → 1 on hover)
- Mono-font tag/badge at the top (e.g., `01 — AI`) in `#07DFC1` with `#07DFC130` background
- Tech tag pills at the bottom: JetBrains Mono, tiny, bordered with `#0B645C`

**Process steps:**

- Large mono step number in very dim accent colour
- Title + short description
- 4-column grid (2-col on tablet, 1-col on mobile)

**Testimonial cards:**

- Italic quote text in secondary colour
- Author row: avatar circle (initials in mono if no photo, or actual photo), name, role
- Same card styling as service cards

**Pricing cards (already on the live site):**

- Keep the existing tier structure (Launch / Growth / Premium)
- Apply the new card styling, hover states, and accent treatment
- "Most Popular" badge on the middle tier
- Mono font for price values

**CTA section:**

- Centred layout
- Background glow orb
- Large headline + subtitle + button row
- Keep it clean and high-contrast

### Navigation

- Fixed top nav with `backdrop-filter: blur(20px)` and semi-transparent background
- Logo left (mono font, with a `~/` or `>_` prompt character as a brand motif)
- Links right in mono font, small size
- CTA button with accent background
- Mobile: hamburger toggle that reveals a dropdown menu

### Footer

- Minimal. One row: copyright left, social/contact links right
- Mono font throughout
- Same subtle border-top separator

---

## 4. Responsive Breakpoints

```
Desktop:    > 900px    (full grid layouts)
Tablet:     640–900px  (2-col grids, stacked where needed)
Mobile:     < 640px    (single column, hamburger nav, tighter padding)
```

Key responsive adjustments:

- Service cards: 3-col → 1-col
- Process steps: 4-col → 2-col → 1-col
- Pricing cards: 3-col → stacked
- Diff/Why Us section: 2-col → stacked (visual element moves above text on mobile)
- Metrics strip: 4-col → 2-col → 1-col
- Nav: inline links → hamburger menu below 640px

---

## 5. Reference Files

The following file in this repo is a **complete HTML reference** of the target design direction. It is a standalone HTML page (not React) that demonstrates the layout, animations, colour system, typography, and component patterns described above.

**File:** `design-reference/landing-page.html`

Claude Code should:

1. Read this file to understand the visual target
2. Identify patterns from the **existing React codebase** (component structure, styling approach, state management)
3. Rebuild the landing page within the existing Next.js architecture, using the project's established patterns
4. Apply the existing brand assets (logos, images, favicons) from the current site
5. Match the design reference's layout, animation, and atmosphere while using the project's CSS methodology

**Do NOT** copy-paste the HTML file into React. Interpret and rebuild it using proper React components, the project's styling system, and Next.js conventions.

---

## 6. Content Notes

- All copy from the existing live site is real and approved — preserve it
- The technical capability overview document (in project knowledge) provides the full business context and messaging for all three domains
- Testimonials and case studies are real — keep them prominent
- Pricing is real and current — do not alter amounts or tier names
- For new sections or pages (AI subdomain, embedded subdomain), use placeholder copy clearly marked as `[PLACEHOLDER]` until real copy is provided

---

## 7. Priority Order

If building incrementally:

1. **Hero section** — first impression, biggest visual impact
2. **Navigation** — fixed nav with blur, mobile support
3. **Services section** — card grid with hover states and tags
4. **Social proof / case studies** — trust signals
5. **Process section** — step cards
6. **Pricing section** — apply new card styling to existing tiers
7. **Testimonials** — refined card layout
8. **CTA section** — with glow effect
9. **Footer** — minimal cleanup
10. **Global polish** — scroll animations, grain overlay, glow orbs, transitions

---

_This document should be kept in the repo root or a `/docs` directory and updated as the design evolves._
