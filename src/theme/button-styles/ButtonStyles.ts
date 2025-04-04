import { Components, Theme } from "@mui/material/styles";

const ButtonStyles: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: 8,
        fontWeight: 700,
        transition: "all 0.2s ease-in-out",
      },
      sizeSmall: {
        fontSize: "0.85rem",
        padding: "6px 12px",
      },
      sizeMedium: {
        fontSize: "1rem",
        padding: "8px 18px",
      },
      sizeLarge: {
        fontSize: "1.1rem",
        padding: "12px 24px",
      },
    },

    variants: [
      {
        props: { variant: "contained", color: "primary" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        }),
      },
      {
        props: { variant: "contained", color: "secondary" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
          },
        }),
      },
      {
        props: { variant: "outlined", color: "primary" },
        style: ({ theme }) => ({
          border: `2px solid ${theme.palette.primary.main}`,
          color: theme.palette.primary.main,
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: theme.palette.primary.light,
            backgroundColor: `${theme.palette.primary.main}14`,
          },
        }),
      },
      {
        props: { variant: "outlined", color: "secondary" },
        style: ({ theme }) => ({
          border: `2px solid ${theme.palette.secondary.contrastText}`,
          color: theme.palette.secondary.contrastText,
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: theme.palette.text.secondary,
            color: theme.palette.text.secondary,
            backgroundColor: `${theme.palette.text.secondary}14`,
          },
        }),
      },
      {
        props: { variant: "text", color: "primary" },
        style: ({ theme }) => ({
          color: theme.palette.primary.main,
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: `${theme.palette.primary.main}1A`,
          },
        }),
      },
      {
        props: { variant: "text", color: "secondary" },
        style: ({ theme }) => ({
          color: theme.palette.secondary.contrastText,
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: `${theme.palette.secondary.contrastText}1A`,
          },
        }),
      },
    ],
  },
};

export default ButtonStyles;
