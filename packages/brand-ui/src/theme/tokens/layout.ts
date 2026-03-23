/**
 * Responsive layout tokens for the SSH Design System.
 *
 * All spacing values are MUI spacing units (1 unit = 8px by default).
 * Grid gutter and margin values are raw pixel values (passed via theme.spacing or px strings).
 * All tokens follow the 6-breakpoint scale: xs → sm → md → lg → xl → xxl.
 *
 * xxl (≥1800px) behaviour: content is max-width capped and horizontally centered.
 * Extra screen real estate becomes breathing room — not wider content.
 */

// ─── Breakpoint-keyed type ────────────────────────────────────────────────────

export type ResponsiveScale = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

// ─── Container max-width caps (px) ───────────────────────────────────────────

/**
 * Hard pixel caps applied once content reaches xxl viewports.
 * Used by containerSx() helpers and the Container primitive.
 */
export const contentMaxWidth = {
  prose:   720,   // Narrow — blog posts, long-form reading
  content: 1080,  // Standard — most page sections
  wide:    1440,  // Wide — feature grids, dashboards
  full:    1800,  // Full — hero, full-bleed with max cap
} as const;

export type ContainerVariant = keyof typeof contentMaxWidth;

// ─── Container horizontal padding (MUI spacing units) ────────────────────────

/**
 * Responsive px (horizontal padding) for each container variant.
 * Values in MUI spacing units (×8px).
 */
export const containers: Record<ContainerVariant, ResponsiveScale> = {
  prose: {
    xs: 2,  // 16px
    sm: 3,  // 24px
    md: 4,  // 32px
    lg: 4,  // 32px
    xl: 4,  // 32px
    xxl: 4, // 32px — max-width kicks in, padding stays comfortable
  },
  content: {
    xs: 2,  // 16px
    sm: 3,  // 24px
    md: 4,  // 32px
    lg: 5,  // 40px
    xl: 6,  // 48px
    xxl: 6, // 48px
  },
  wide: {
    xs: 2,  // 16px
    sm: 3,  // 24px
    md: 4,  // 32px
    lg: 5,  // 40px
    xl: 6,  // 48px
    xxl: 8, // 64px
  },
  full: {
    xs: 2,  // 16px
    sm: 3,  // 24px
    md: 4,  // 32px
    lg: 6,  // 48px
    xl: 8,  // 64px
    xxl: 10, // 80px — full-bleed gets generous gutters on ultrawide
  },
};

// ─── Section spacing — vertical rhythm between major page sections ────────────

export type SectionSpacingVariant = "compact" | "default" | "hero";

/**
 * py values (MUI spacing units) for major page section vertical rhythm.
 * compact → everyday sections; default → standard; hero → flagship moments.
 */
export const sectionSpacing: Record<SectionSpacingVariant, ResponsiveScale> = {
  compact: {
    xs: 4,  // 32px
    sm: 5,  // 40px
    md: 6,  // 48px
    lg: 7,  // 56px
    xl: 8,  // 64px
    xxl: 9, // 72px
  },
  default: {
    xs: 6,   // 48px
    sm: 7,   // 56px
    md: 8,   // 64px
    lg: 10,  // 80px
    xl: 12,  // 96px
    xxl: 14, // 112px
  },
  hero: {
    xs: 8,   // 64px
    sm: 10,  // 80px
    md: 12,  // 96px
    lg: 15,  // 120px
    xl: 18,  // 144px
    xxl: 20, // 160px
  },
};

// ─── Content spacing — internal padding within sections / cards ───────────────

export type ContentSpacingVariant = "tight" | "default" | "relaxed";

/**
 * p values (MUI spacing units) for internal padding within content areas.
 * tight → data tables, compact cards; default → standard; relaxed → feature showcases.
 */
export const contentSpacing: Record<ContentSpacingVariant, ResponsiveScale> = {
  tight: {
    xs: 2,   // 16px
    sm: 2,   // 16px
    md: 2,   // 16px
    lg: 3,   // 24px
    xl: 3,   // 24px
    xxl: 3,  // 24px
  },
  default: {
    xs: 3,   // 24px
    sm: 3,   // 24px
    md: 4,   // 32px
    lg: 4,   // 32px
    xl: 5,   // 40px
    xxl: 5,  // 40px
  },
  relaxed: {
    xs: 4,   // 32px
    sm: 5,   // 40px
    md: 6,   // 48px
    lg: 6,   // 48px
    xl: 8,   // 64px
    xxl: 8,  // 64px
  },
};

// ─── Grid configuration ───────────────────────────────────────────────────────

/**
 * Column grid configuration.
 * columns: logical column count per breakpoint.
 * gutter: column gap in px.
 * margin: outer horizontal margin in px (matches container padding intent).
 */
export const grid = {
  columns: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 12,
    xl: 12,
    xxl: 12,
  },
  gutter: {
    xs: 16,
    sm: 16,
    md: 24,
    lg: 24,
    xl: 32,
    xxl: 32,
  },
  margin: {
    xs: 16,
    sm: 24,
    md: 32,
    lg: 40,
    xl: 48,
    xxl: 64,
  },
} as const;

// ─── Aggregated layout tokens ─────────────────────────────────────────────────

export const layoutTokens = {
  containers,
  sectionSpacing,
  contentSpacing,
  grid,
  contentMaxWidth,
} as const;

export type LayoutTokens = typeof layoutTokens;
