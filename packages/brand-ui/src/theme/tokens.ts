export const brandTokens = {
  color: {
    primary: {
      main: "#07DFC1",
      light: "#1FE2C4",
      dark: "#029F8C",
      contrast: "#003330",
    },
    secondary: {
      main: "#067F71",
      light: "#52F6D7",
      dark: "#0B645C",
      contrast: "#EFFEEB",
    },
    background: {
      default: "#0E534C",
      paper: "#091F2C",
    },
    surface: {
      hero: "#0b0c10",
      elevated: "#0e1a24",
      scrim: "#121212",
      depth: "#0F2E3D",
      imageBlend: "#003338",
    },
    text: {
      primary: "#EFFEEB",
      secondary: "#91FEE6",
      muted: "#DDE3E9",
      disabled: "#B0B0B0",
    },
    link: {
      default: "#91FEE6",
      hover: "#C8FFF1",
      active: "#EFFEEB",
    },
    error: {
      main: "#FF5C6C",
      light: "#FF8A96",
      dark: "#CC3A48",
      contrast: "#EFFEEB",
    },
    warning: {
      main: "#F0A04B",
      light: "#F5BC7A",
      dark: "#C07A2E",
      contrast: "#091F2C",
    },
    success: {
      main: "#07DFC1",
      light: "#1FE2C4",
      dark: "#029F8C",
      contrast: "#003330",
    },
    info: {
      main: "#52F6D7",
      light: "#85F9E3",
      dark: "#029F8C",
      contrast: "#091F2C",
    },
    divider: {
      default: "rgba(7, 223, 193, 0.15)",
    },
    action: {
      hover: "rgba(7, 223, 193, 0.08)",
      selected: "rgba(7, 223, 193, 0.16)",
      disabled: "rgba(239, 254, 235, 0.3)",
      disabledBackground: "rgba(7, 223, 193, 0.08)",
      focus: "rgba(7, 223, 193, 0.12)",
    },
    derived: {
      accentDim: "#07DFC130",
      accentGlow: "#07DFC118",
      border: "#0B645C",
      borderSubtle: "#0E534C80",
    },
  },
  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
  },
  spacing: {
    card: 4,
    cardDense: 3,
    sectionY: 10,
    sectionYMobile: 7,
    sectionGap: 3,
  },
  shadow: {
    soft: "0 8px 24px rgba(0, 0, 0, 0.16)",
    raised: "0 12px 28px rgba(0, 0, 0, 0.28)",
    glow: "0 0 18px rgba(7, 223, 193, 0.28)",
  },
  motion: {
    fast: "180ms ease",
    base: "260ms ease",
  },
} as const;

export type BrandTokens = typeof brandTokens;

// ─── Overlay tokens ───────────────────────────────────────────────────────────
// Canonical rgba(white/black, opacity) values for glass effects, borders,
// shadows, and surface treatments across the dark theme.

export const overlayTokens = {
  white: {
    "2":  "rgba(255, 255, 255, 0.02)",
    "3":  "rgba(255, 255, 255, 0.035)",
    "4":  "rgba(255, 255, 255, 0.04)",
    "5":  "rgba(255, 255, 255, 0.05)",
    "7":  "rgba(255, 255, 255, 0.07)",
    "8":  "rgba(255, 255, 255, 0.08)",
    "10": "rgba(255, 255, 255, 0.10)",
    "12": "rgba(255, 255, 255, 0.12)",
    "14": "rgba(255, 255, 255, 0.14)",
    "15": "rgba(255, 255, 255, 0.15)",
    "18": "rgba(255, 255, 255, 0.18)",
    "85": "rgba(255, 255, 255, 0.85)",
  },
  black: {
    "10": "rgba(0, 0, 0, 0.10)",
    "12": "rgba(0, 0, 0, 0.12)",
    "14": "rgba(0, 0, 0, 0.14)",
    "16": "rgba(0, 0, 0, 0.16)",
    "20": "rgba(0, 0, 0, 0.20)",
    "22": "rgba(0, 0, 0, 0.22)",
    "24": "rgba(0, 0, 0, 0.24)",
    "25": "rgba(0, 0, 0, 0.25)",
    "28": "rgba(0, 0, 0, 0.28)",
    "30": "rgba(0, 0, 0, 0.30)",
    "35": "rgba(0, 0, 0, 0.35)",
  },
} as const;

export type OverlayTokens = typeof overlayTokens;

// ─── Surface tokens ───────────────────────────────────────────────────────────
// Recurring background treatments for cards, panels, and glass effects.

export const surfaceTokens = {
  glass: {
    light:        "rgba(255, 255, 255, 0.08)",
    dark:         "rgba(8, 24, 36, 0.92)",
    darkElevated: "rgba(9, 31, 44, 0.75)",
    darkDeep:     "rgba(9, 31, 44, 0.9)",
    scrim:        "rgba(14, 26, 36, 0.75)",
  },
  border: {
    subtle:   "rgba(255, 255, 255, 0.05)",
    light:    "rgba(255, 255, 255, 0.08)",
    medium:   "rgba(255, 255, 255, 0.12)",
    strong:   "rgba(255, 255, 255, 0.15)",
    emphasis: "rgba(255, 255, 255, 0.18)",
  },
} as const;

export type SurfaceTokens = typeof surfaceTokens;
