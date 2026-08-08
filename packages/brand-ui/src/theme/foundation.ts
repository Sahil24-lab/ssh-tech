export const fontFamilyTokens = {
  display: 'var(--font-montserrat, "Montserrat"), Arial, sans-serif',
  body: 'var(--font-montserrat, "Montserrat"), Arial, sans-serif',
  supporting: 'var(--font-poppins, "Poppins"), Arial, sans-serif',
  label:
    'var(--font-jetbrains-mono, "JetBrains Mono"), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
} as const;

export const typographyTokens = {
  display: {
    fontSize: "clamp(2.7rem, 6vw, 4.5rem)",
    fontWeight: 700,
    lineHeight: 1.04,
    letterSpacing: "-0.035em",
  },
  headline: {
    fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
    fontWeight: 700,
    lineHeight: 1.15,
    letterSpacing: "-0.025em",
  },
  titleLarge: { fontSize: "2rem", fontWeight: 600, lineHeight: 1.25 },
  titleMedium: { fontSize: "1.75rem", fontWeight: 600, lineHeight: 1.4 },
  titleSmall: { fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.5 },
  bodyLarge: { fontSize: "1.1rem", fontWeight: 400, lineHeight: 1.6 },
  body: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.6 },
  labelLarge: {
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0.04em",
  },
  label: {
    fontSize: "0.8rem",
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: "0.06em",
  },
  navigation: { fontSize: "0.9rem", fontWeight: 600, lineHeight: 1.5 },
} as const;

export const shapeTokens = {
  control: 8,
  panel: 16,
  pill: 9999,
} as const;

export const surfaceTreatmentTokens = {
  canvasVeil: {
    strong: "rgba(5, 11, 43, 0.7)",
    subtle: "rgba(5, 11, 43, 0.1)",
  },
} as const;

export const motionTokens = {
  duration: {
    instant: 80,
    fast: 180,
    short: 220,
    standard: 280,
  },
  easing: {
    standard: "cubic-bezier(0.4, 0, 0.2, 1)",
    out: "cubic-bezier(0.22, 1, 0.36, 1)",
  },
} as const;

export const zIndexTokens = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
} as const;

export type FontFamilyTokens = typeof fontFamilyTokens;
export type TypographyTokens = typeof typographyTokens;
export type ShapeTokens = typeof shapeTokens;
export type SurfaceTreatmentTokens = typeof surfaceTreatmentTokens;
export type MotionTokens = typeof motionTokens;
export type ZIndexTokens = typeof zIndexTokens;
