import { Components, Theme } from "@mui/material/styles";

const LinkStyles: Components<Omit<Theme, "components">> = {
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: "none",
        color: "text.secondary",
        transition: "color 0.2s ease-in-out",
        "&:hover": {
          color: "text.primary", // Brighter color when hovering
        },
        "&:active": {
          color: "text.primary", // High contrast when clicked
        },
      },
    },
  },
};

export default LinkStyles;
