import { createTheme, type ThemeOptions } from "@mui/material/styles";
import { brandTokens, overlayTokens, surfaceTokens } from "./tokens";
import { layoutTokens } from "./tokens/layout";
import {
  fontFamilyTokens,
  motionTokens,
  shapeTokens,
  surfaceTreatmentTokens,
  typographyTokens,
  zIndexTokens,
} from "./foundation";
import ButtonStyles from "./button-styles/ButtonStyles";
import ChipStyles from "./chip-styles/ChipStyles";
import LinkStyles from "./link-styles/LinkStyles";

export type BrandThemeOptions = ThemeOptions;

const baseThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
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
    overlay: overlayTokens,
    surface: {
      hero: brandTokens.color.surface.hero,
      elevated: brandTokens.color.surface.elevated,
      scrim: brandTokens.color.surface.scrim,
      depth: brandTokens.color.surface.depth,
      imageBlend: brandTokens.color.surface.imageBlend,
      glass: surfaceTokens.glass,
      border: surfaceTokens.border,
    },
    text: {
      primary: brandTokens.color.text.primary,
      secondary: brandTokens.color.text.secondary,
      muted: brandTokens.color.text.muted,
      disabled: brandTokens.color.text.disabled,
    },
    error: brandTokens.color.error,
    warning: brandTokens.color.warning,
    success: brandTokens.color.success,
    info: brandTokens.color.info,
    divider: brandTokens.color.divider.default,
    action: brandTokens.color.action,
  },
  shape: {
    borderRadius: shapeTokens.control,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
      xxl: 1800,
    },
  },
  transitions: {
    duration: {
      shortest: motionTokens.duration.instant,
      shorter: motionTokens.duration.fast,
      short: motionTokens.duration.short,
      standard: motionTokens.duration.standard,
    },
    easing: {
      easeInOut: motionTokens.easing.standard,
      easeOut: motionTokens.easing.out,
    },
  },
  zIndex: zIndexTokens,
  typography: {
    fontFamily: fontFamilyTokens.body,
    h1: {
      fontFamily: fontFamilyTokens.display,
      ...typographyTokens.display,
      color: brandTokens.color.primary.light,
    },
    h2: {
      fontFamily: fontFamilyTokens.display,
      ...typographyTokens.headline,
      color: brandTokens.color.primary.light,
    },
    h3: {
      fontFamily: fontFamilyTokens.display,
      ...typographyTokens.titleLarge,
      color: brandTokens.color.primary.light,
    },
    h4: {
      fontFamily: fontFamilyTokens.display,
      ...typographyTokens.titleMedium,
      color: brandTokens.color.text.primary,
    },
    h5: {
      fontFamily: fontFamilyTokens.display,
      ...typographyTokens.titleSmall,
      color: brandTokens.color.text.secondary,
    },
    h6: {
      fontFamily: fontFamilyTokens.display,
      ...typographyTokens.body,
      fontWeight: 600,
      color: brandTokens.color.text.secondary,
    },
    body1: {
      fontFamily: fontFamilyTokens.body,
      ...typographyTokens.bodyLarge,
      color: brandTokens.color.text.primary,
    },
    body2: {
      fontFamily: fontFamilyTokens.supporting,
      ...typographyTokens.body,
      color: brandTokens.color.text.secondary,
    },
    button: {
      fontFamily: fontFamilyTokens.label,
      ...typographyTokens.labelLarge,
      textTransform: "none",
    },
    caption: {
      fontFamily: fontFamilyTokens.label,
      ...typographyTokens.label,
      color: brandTokens.color.primary.main,
      textTransform: "uppercase",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          colorScheme: "dark",
        },
        body: {
          backgroundColor: brandTokens.color.background.default,
          backgroundImage: `
            linear-gradient(${surfaceTreatmentTokens.canvasVeil.strong}, ${surfaceTreatmentTokens.canvasVeil.subtle}),
            conic-gradient(from -23.81deg at 72.82% 162.44%, ${brandTokens.color.background.default} -44.57deg, ${brandTokens.color.secondary.main} 7.76deg, ${brandTokens.color.primary.dark} 20.98deg, ${brandTokens.color.secondary.main} 52deg, ${brandTokens.color.secondary.dark} 88.68deg, ${brandTokens.color.secondary.main} 315.43deg, ${brandTokens.color.primary.dark} 367.76deg)
          `,
          color: brandTokens.color.text.primary,
          minHeight: "100dvh",
        },
        "::selection": {
          backgroundColor: `color-mix(in srgb, ${brandTokens.color.primary.main} 28%, transparent)`,
          color: brandTokens.color.text.primary,
        },
        "*": {
          scrollbarColor: `${brandTokens.color.primary.main} ${brandTokens.color.background.paper}`,
          scrollbarWidth: "thin",
        },
        "*::-webkit-scrollbar": {
          width: 10,
        },
        "*::-webkit-scrollbar-track": {
          backgroundColor: brandTokens.color.background.paper,
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: brandTokens.color.primary.main,
          border: `2px solid ${brandTokens.color.background.paper}`,
          borderRadius: shapeTokens.control,
        },
        "*::-webkit-scrollbar-thumb:hover": {
          backgroundColor: brandTokens.color.primary.dark,
        },
        "@media (prefers-reduced-motion: reduce)": {
          "*, *::before, *::after": {
            animationDuration: "0.01ms !important",
            animationIterationCount: "1 !important",
            scrollBehavior: "auto !important",
            transitionDuration: "0.01ms !important",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          overflowWrap: "anywhere",
        },
        h1: {
          textWrap: "balance",
        },
        h2: {
          textWrap: "balance",
        },
        body1: {
          textWrap: "pretty",
        },
        body2: {
          textWrap: "pretty",
        },
      },
    },
    ...ButtonStyles,
    ...ChipStyles,
    ...LinkStyles,
  },
};

export const createBrandTheme = (overrides: BrandThemeOptions = {}) =>
  createTheme({ ...baseThemeOptions, layout: layoutTokens }, overrides);
