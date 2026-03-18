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
    text: {
      primary: "#EFFEEB",
      secondary: "#91FEE6",
      muted: "#EEEEEE",
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
