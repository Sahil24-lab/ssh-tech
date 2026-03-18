import { createTheme, responsiveFontSizes, type ThemeOptions } from "@mui/material/styles";
import { brandTokens } from "./tokens";

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
    text: {
      primary: brandTokens.color.text.primary,
      secondary: brandTokens.color.text.secondary,
    },
  },
  shape: {
    borderRadius: brandTokens.radius.md,
  },
  typography: {
    fontFamily: "var(--font-montserrat), sans-serif",
    h1: {
      fontFamily: "var(--font-montserrat), sans-serif",
      fontWeight: 700,
      color: brandTokens.color.primary.light,
      lineHeight: 1.15,
    },
    h2: {
      fontFamily: "var(--font-montserrat), sans-serif",
      fontWeight: 700,
      color: brandTokens.color.primary.light,
    },
    h3: {
      fontFamily: "var(--font-montserrat), sans-serif",
      fontWeight: 600,
      color: brandTokens.color.primary.light,
    },
    h4: {
      fontFamily: "var(--font-montserrat), sans-serif",
      fontWeight: 600,
      color: brandTokens.color.text.primary,
    },
    h5: {
      fontFamily: "var(--font-montserrat), sans-serif",
      fontWeight: 700,
      color: brandTokens.color.text.primary,
      letterSpacing: "-0.02em",
    },
    body1: {
      color: brandTokens.color.text.primary,
      lineHeight: 1.65,
    },
    body2: {
      fontFamily: "var(--font-poppins), sans-serif",
      color: brandTokens.color.text.muted,
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
            conic-gradient(from -23.81deg at 72.82% 162.44%, #0e534c -44.57deg, #067f71 7.76deg, #029f8c 20.98deg, #067f71 52deg, #0b645c 88.68deg, #067f71 315.43deg, #029f8c 367.76deg)
          `,
          color: brandTokens.color.text.primary,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: brandTokens.radius.sm,
          paddingInline: "1rem",
          paddingBlock: "0.625rem",
          transition: `transform ${brandTokens.motion.base}, box-shadow ${brandTokens.motion.base}, background-color ${brandTokens.motion.fast}`,
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: brandTokens.shadow.glow,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: brandTokens.radius.sm,
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontWeight: 600,
        },
      },
    },
  },
};

export const createBrandTheme = () => responsiveFontSizes(createTheme(baseThemeOptions));
