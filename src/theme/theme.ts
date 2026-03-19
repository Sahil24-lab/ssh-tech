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
import { themeTokens } from "./tokens";

// Base theme options for palette, typography, breakpoints, and component overrides
const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#07DFC1", // Vibrant turquoise
      light: "#1FE2C4", // Lighter turquoise
      dark: "#029F8C", // Darker turquoise
      contrastText: "#003330", // Ensures text readability
    },
    secondary: {
      main: "#067F71", // Deep greenish-blue
      light: "#52F6D7", // Light cyan
      dark: "#0B645C", // Darker shade
      contrastText: "#EFFEEB", // Lightest color for contrast
    },
    background: {
      default: "#0E534C", // Base background
      paper: "#091F2C", // For cards and panels
    },
    surface: {
      hero: "#0b0c10",
      elevated: "#0e1a24",
      scrim: "#121212",
      depth: "#0F2E3D",
      imageBlend: themeTokens.palette.surface.imageBlend,
    },
    text: {
      primary: "#EFFEEB", // Default text color
      secondary: "#91FEE6", // Softer light turquoise
      muted: "#dde3e9",
      disabled: "#B0B0B0",
    },
    error: {
      main: "#FF5C6C",
      light: "#FF8A96",
      dark: "#CC3A48",
      contrastText: "#EFFEEB",
    },
    warning: {
      main: "#F0A04B",
      light: "#F5BC7A",
      dark: "#C07A2E",
      contrastText: "#091F2C",
    },
    success: {
      main: "#07DFC1",
      light: "#1FE2C4",
      dark: "#029F8C",
      contrastText: "#003330",
    },
    info: {
      main: "#52F6D7",
      light: "#85F9E3",
      dark: "#029F8C",
      contrastText: "#091F2C",
    },
    divider: "rgba(7, 223, 193, 0.15)",
    action: {
      hover: "rgba(7, 223, 193, 0.08)",
      selected: "rgba(7, 223, 193, 0.16)",
      disabled: "rgba(239, 254, 235, 0.3)",
      disabledBackground: "rgba(7, 223, 193, 0.08)",
      focus: "rgba(7, 223, 193, 0.12)",
    },
  },
  typography: {
    fontFamily: "var(--font-play), sans-serif",
    h1: {
      fontFamily: "var(--font-play), sans-serif",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.2,
      color: "#EFFEEB",
    },
    h2: {
      fontFamily: "var(--font-exo2), sans-serif",
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: 1.3,
      color: "#1FE2C4",
    },
    h3: {
      fontFamily: "var(--font-exo2), sans-serif",
      fontWeight: 500,
      fontSize: "2rem",
      lineHeight: 1.4,
      color: "#1FE2C4",
    },
    h4: {
      fontFamily: "var(--font-exo2), sans-serif",
      fontWeight: 500,
      fontSize: "1.75rem",
      lineHeight: 1.4,
      color: "#EFFEEB",
    },
    h5: {
      fontFamily: "var(--font-exo2), sans-serif",
      fontWeight: 400,
      fontSize: "1.25rem",
      lineHeight: 1.5,
      color: "#91FEE6",
    },
    h6: {
      fontFamily: "var(--font-play), sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "#91FEE6",
    },
    body1: {
      fontFamily: "var(--font-play), sans-serif",
      fontWeight: 400,
      fontSize: "1.1rem",
      lineHeight: 1.6,
      color: "#EFFEEB",
    },
    body2: {
      fontFamily: "var(--font-exo2), sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#91FEE6",
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
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          backgroundColor: "#07DFC1",
          "&:hover": {
            backgroundColor: "#029F8C",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0E534C",
          backgroundImage: `
            linear-gradient(rgba(5, 11, 43, 0.7), rgba(5, 11, 43, 0.1)),
            conic-gradient(from -23.81deg at 72.82% 162.44%, #0e534c -44.57deg, #067f71 7.76deg, #029f8c 20.98deg, #067f71 52deg, #0b645c 88.68deg, #067f71 315.43deg, #029f8c 367.76deg)
          `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
          color: "#EFFEEB", // Default text color for readability
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
