import { createTheme } from "@mui/material/styles";
import LinkStyles from "./link-styles/LinkStyles";
import ButtonStyles from "./button-styles/ButtonStyles";
import NavigationButtonStyles from "./navigation-button-styles/NavigationButtonStyles";
// Define your custom theme
const theme = createTheme({
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
      default: "#0E534C", // Deep greenish-blue for base background
      paper: "#091F2C", // Darker variation for cards & panels
    },
    text: {
      primary: "#EFFEEB", // Lightest shade for readability
      secondary: "#91FEE6", // Softer light turquoise
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
      color: "#EFFEEB", // Ensuring readability
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
      color: "#91FEE6",
    },
    body1: {
      fontSize: "1rem",
      color: "#FFFF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Remove default uppercase
          borderRadius: "8px",
          backgroundColor: "#07DFC1", // Primary color
          "&:hover": {
            backgroundColor: "#029F8C", // Darker shade on hover
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
            conic-gradient(from -23.81deg at 72.82% 162.44%, #0e534c -44.57deg, #067f71 7.76deg, #029f8c 20.98deg, #067f71 52deg, #0b645c 88.68deg, #067f71 315.43deg, #029f8c 367.76deg);
          `,
          color: "#EFFEEB", // Ensure default text color is readable
        },
      },
    },
    ...LinkStyles,
    ...ButtonStyles,
    ...NavigationButtonStyles,
  },
});

export default theme;
