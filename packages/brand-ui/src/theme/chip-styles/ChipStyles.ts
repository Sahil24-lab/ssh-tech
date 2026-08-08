import { alpha, type Components, type Theme } from "@mui/material/styles";
import { fontFamilyTokens, shapeTokens, typographyTokens } from "../foundation";

const ChipStyles: Components<Theme> = {
  MuiChip: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        ...typographyTokens.label,
        borderRadius: shapeTokens.pill,
        fontFamily: fontFamilyTokens.label,
        minHeight: 28,
        paddingLeft: theme.spacing(1.25),
        paddingRight: theme.spacing(1.25),
      }),

      icon: ({ theme }: { theme: Theme }) => ({
        fontSize: theme.typography.body1.fontSize,
        color: theme.palette.primary.contrastText,
      }),

      filledPrimary: ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        "& .MuiChip-icon": {
          color: theme.palette.primary.contrastText,
        },
      }),

      filledSecondary: ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        "& .MuiChip-icon": {
          color: theme.palette.secondary.contrastText,
        },
      }),

      outlined: ({ theme }: { theme: Theme }) => ({
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
        border: `1px solid ${theme.palette.secondary.dark}`,
        borderRadius: shapeTokens.pill,
        color: theme.palette.primary.light,
        "& .MuiChip-icon": {
          color: theme.palette.primary.main,
        },
      }),
    },
  },
};

export default ChipStyles;
