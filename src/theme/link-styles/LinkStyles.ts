import { Components, Theme } from "@mui/material/styles";

const LinkStyles: Components<Omit<Theme, "components">> = {
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: "none",
        color: "#91FEE6",
        transition: "color 0.2s ease-in-out",
        "&:hover": {
          color: "#C8FFF1", // Brighter color when hovering
        },
        "&:active": {
          color: "#EFFEEB", // High contrast when clicked
        },
      },
    },
  },
};

export default LinkStyles;
