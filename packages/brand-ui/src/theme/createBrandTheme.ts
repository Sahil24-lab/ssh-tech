import { createTheme, responsiveFontSizes, type ThemeOptions } from "@mui/material/styles";
import { brandTokens } from "./tokens";
import ButtonStyles from "./button-styles/ButtonStyles";
import ChipStyles from "./chip-styles/ChipStyles";
import LinkStyles from "./link-styles/LinkStyles";
import NavigationButtonStyles from "./navigation-button-styles/NavigationButtonStyles";
import ScrollbarStyles from "./scrollbar-styles/ScrollbarStyles";

const baseThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: brandTokens.color.primary.main,
      light: brandTokens.color.primary.light,
      dark: brandTokens.color.primary.dark,
      contrastText: brandTokens.color.primary.contrast,
    },
    secondary: {
      main: brandTokens.color.secondary.main,
      light: brandTokens.color.secondary.light,
      dark: brandTokens.color.secondary.dark,
      contrastText: brandTokens.color.secondary.contrast,
    },
    background: {
      default: brandTokens.color.background.default,
      paper: brandTokens.color.background.paper,
    },
    surface: {
      hero: brandTokens.color.surface.hero,
      elevated: brandTokens.color.surface.elevated,
      scrim: brandTokens.color.surface.scrim,
      depth: brandTokens.color.surface.depth,
      imageBlend: brandTokens.color.surface.imageBlend,
    },
    text: {
      primary: brandTokens.color.text.primary,
      secondary: brandTokens.color.text.secondary,
      muted: brandTokens.color.text.muted,
      disabled: brandTokens.color.text.disabled,
    },
  },
  shape: {
    borderRadius: 1,
  },
  typography: {
    fontFamily: "var(--font-play), sans-serif",
    h1: {
      fontFamily: "var(--font-play), sans-serif",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.2,
      color: brandTokens.color.text.primary,
    },
    h2: {
      fontFamily: "var(--font-exo2), sans-serif",
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: 1.3,
      color: brandTokens.color.primary.light,
    },
    h3: {
      fontFamily: "var(--font-exo2), sans-serif",
      fontWeight: 500,
      fontSize: "2rem",
      lineHeight: 1.4,
      color: brandTokens.color.primary.light,
    },
    h4: {
      fontFamily: "var(--font-exo2), sans-serif",
      fontWeight: 500,
      fontSize: "1.75rem",
      lineHeight: 1.4,
      color: brandTokens.color.text.primary,
    },
    h5: {
      fontFamily: "var(--font-exo2), sans-serif",
      fontWeight: 400,
      fontSize: "1.25rem",
      lineHeight: 1.5,
      color: brandTokens.color.text.secondary,
    },
    h6: {
      fontFamily: "var(--font-play), sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      color: brandTokens.color.text.secondary,
    },
    body1: {
      fontFamily: "var(--font-play), sans-serif",
      fontWeight: 400,
      fontSize: "1.1rem",
      color: brandTokens.color.text.primary,
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: "var(--font-exo2), sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      color: brandTokens.color.text.secondary,
      lineHeight: 1.6,
    },
    button: {
      fontFamily: "var(--font-jetbrains-mono), monospace",
      letterSpacing: "0.04em",
      textTransform: "none",
      fontWeight: 600,
    },
    caption: {
      fontFamily: "var(--font-jetbrains-mono), monospace",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: brandTokens.color.primary.main,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: brandTokens.color.background.default,
          backgroundImage: `
            linear-gradient(rgba(5, 11, 43, 0.7), rgba(5, 11, 43, 0.1)),
            conic-gradient(from -23.81deg at 72.82% 162.44%, ${brandTokens.color.background.default} -44.57deg, ${brandTokens.color.secondary.main} 7.76deg, ${brandTokens.color.primary.dark} 20.98deg, ${brandTokens.color.secondary.main} 52deg, ${brandTokens.color.secondary.dark} 88.68deg, ${brandTokens.color.secondary.main} 315.43deg, ${brandTokens.color.primary.dark} 367.76deg)
          `,
          color: brandTokens.color.text.primary,
        },
      },
    },
    ...ButtonStyles,
    ...ChipStyles,
    ...LinkStyles,
    ...NavigationButtonStyles,
    ...ScrollbarStyles,
  },
};

export const createBrandTheme = () => responsiveFontSizes(createTheme(baseThemeOptions));
