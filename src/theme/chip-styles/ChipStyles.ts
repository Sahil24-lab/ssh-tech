import { Components, Theme } from "@mui/material/styles";

const ChipStyles: Components<Theme> = {
  MuiChip: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        ...theme.typography.body2,
        fontWeight: 400,
        paddingLeft: theme.spacing(1.4),
        paddingRight: theme.spacing(1.4),
        borderRadius: "9999px",
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
        borderRadius: "9999px",
        border: `1px solid ${theme.palette.primary.dark}`,
        color: theme.palette.primary.light,
        paddingTop: theme.spacing(1.1),
        paddingBottom: theme.spacing(1.4),
        backgroundColor: "rgba(7, 223, 193, 0.2)",
        "& .MuiChip-icon": {
          color: theme.palette.primary.main,
        },
      }),
    },
  },
};

export default ChipStyles;
