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
