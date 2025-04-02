import { createTheme, responsiveFontSizes, ThemeOptions } from "@mui/material/styles";
import LinkStyles from "./link-styles/LinkStyles";
import ButtonStyles from "./button-styles/ButtonStyles";
import ChipStyles from "./chip-styles/ChipStyles";
import NavigationButtonStyles from "./navigation-button-styles/NavigationButtonStyles";
import ScrollbarStyles from "./scrollbar-styles/ScrollbarStyles";

// Base theme options for palette, typography, breakpoints, and component overrides
const themeOptions = {
  palette: {
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
    text: {
      primary: "#EFFEEB", // Default text color
      secondary: "#91FEE6", // Softer light turquoise
    },
  },
  typography: {
    fontFamily: "var(--font-montserrat), sans-serif",
    h1: {
      fontFamily: "var(--font-montserrat), sans-serif",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.2,
      color: "#1FE2C4", // Primary main color
    },
    h2: {
      fontFamily: "var(--font-montserrat), sans-serif",
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: 1.3,
      color: "#1FE2C4", // Primary light color
    },
    h3: {
      fontFamily: "var(--font-montserrat), sans-serif",
      fontWeight: 500,
      fontSize: "2rem",
      lineHeight: 1.4,
      color: "#029F8C", // Primary dark color
    },
    h4: {
      fontFamily: "var(--font-montserrat), sans-serif",
      fontWeight: 500,
      fontSize: "1.75rem",
      lineHeight: 1.4,
      color: "#EFFEEB", // Light text for headings
    },
    h5: {
      fontFamily: "var(--font-montserrat), sans-serif",
      fontWeight: 400,
      fontSize: "1.25rem",
      lineHeight: 1.5,
      color: "#91FEE6", // Softer light turquoise
    },
    body1: {
      fontFamily: "var(--font-montserrat), sans-serif",
      fontWeight: 400,
      fontSize: "1.1rem",
      lineHeight: 1.6,
      color: "#EFFEEB", // Default body text
    },
    body2: {
      fontFamily: "var(--font-poppins), sans-serif", // Alternative body style
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#eee", // Contrast for secondary text
    },
  },
  // Define breakpoints for responsive layouts
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
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
          color: "#EFFEEB", // Default text color for readability
        },
      },
    },
    // Include custom component styles
    ...LinkStyles,
    ...ButtonStyles,
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
