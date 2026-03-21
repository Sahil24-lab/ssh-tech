import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@mui/material/styles";
import LinkStyles from "./link-styles/LinkStyles";
import ButtonStyles from "./button-styles/ButtonStyles";
import ChipStyles from "./chip-styles/ChipStyles";
import NavigationButtonStyles from "./navigation-button-styles/NavigationButtonStyles";
import ScrollbarStyles from "./scrollbar-styles/ScrollbarStyles";
import { brandTokens } from "./tokens";

// Base theme options for palette, typography, breakpoints, and component overrides
const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: brandTokens.color.primary.main, // Vibrant turquoise
      light: brandTokens.color.primary.light, // Lighter turquoise
      dark: brandTokens.color.primary.dark, // Darker turquoise
      contrastText: brandTokens.color.primary.contrast, // Ensures text readability
    },
    secondary: {
      main: brandTokens.color.secondary.main, // Deep greenish-blue
      light: brandTokens.color.secondary.light, // Light cyan
      dark: brandTokens.color.secondary.dark, // Darker shade
      contrastText: brandTokens.color.secondary.contrast, // Lightest color for contrast
    },
    background: {
      default: brandTokens.color.background.default, // Base background
      paper: brandTokens.color.background.paper, // For cards and panels
    },
    surface: {
      hero: brandTokens.color.surface.hero,
      elevated: brandTokens.color.surface.elevated,
      scrim: brandTokens.color.surface.scrim,
      depth: brandTokens.color.surface.depth,
      imageBlend: brandTokens.color.surface.imageBlend,
    },
    text: {
      primary: brandTokens.color.text.primary, // Default text color
      secondary: brandTokens.color.text.secondary, // Softer light turquoise
      muted: brandTokens.color.text.muted,
      disabled: brandTokens.color.text.disabled,
    },
    error: {
      main: brandTokens.color.error.main,
      light: brandTokens.color.error.light,
      dark: brandTokens.color.error.dark,
      contrastText: brandTokens.color.error.contrast,
    },
    warning: {
      main: brandTokens.color.warning.main,
      light: brandTokens.color.warning.light,
      dark: brandTokens.color.warning.dark,
      contrastText: brandTokens.color.warning.contrast,
    },
    success: {
      main: brandTokens.color.success.main,
      light: brandTokens.color.success.light,
      dark: brandTokens.color.success.dark,
      contrastText: brandTokens.color.success.contrast,
    },
    info: {
      main: brandTokens.color.info.main,
      light: brandTokens.color.info.light,
      dark: brandTokens.color.info.dark,
      contrastText: brandTokens.color.info.contrast,
    },
    divider: brandTokens.color.divider.default,
    action: {
      hover: brandTokens.color.action.hover,
      selected: brandTokens.color.action.selected,
      disabled: brandTokens.color.action.disabled,
      disabledBackground: brandTokens.color.action.disabledBackground,
      focus: brandTokens.color.action.focus,
    },
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
      lineHeight: 1.6,
      color: brandTokens.color.text.primary,
    },
    body2: {
      fontFamily: "var(--font-exo2), sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.6,
      color: brandTokens.color.text.secondary,
    },
  },
  // Define breakpoints for responsive layouts
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1536,
      xxl: 1800,
    },
  },
  // Component overrides to keep styling consistent
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: brandTokens.color.background.default,
          backgroundImage: `
            linear-gradient(rgba(5, 11, 43, 0.7), rgba(5, 11, 43, 0.1)),
            conic-gradient(from -23.81deg at 72.82% 162.44%, ${brandTokens.color.background.default} -44.57deg, ${brandTokens.color.secondary.main} 7.76deg, ${brandTokens.color.primary.dark} 20.98deg, ${brandTokens.color.secondary.main} 52deg, ${brandTokens.color.secondary.dark} 88.68deg, ${brandTokens.color.secondary.main} 315.43deg, ${brandTokens.color.primary.dark} 367.76deg)
          `,
          color: brandTokens.color.text.primary, // Default text color for readability
        },
      },
    },
    // Include custom component styles
    ...ButtonStyles,
    ...LinkStyles,
    ...NavigationButtonStyles,
    ...ChipStyles,
    ...ScrollbarStyles,
  },
};

// Create theme and apply responsive typography settings
let theme = createTheme({
  ...themeOptions,
  components: themeOptions.components as ThemeOptions["components"],
});
theme = responsiveFontSizes(theme);

export default theme;
