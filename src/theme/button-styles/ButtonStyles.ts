import { Components, Theme } from "@mui/material/styles";

const LinkStyles: Components<Omit<Theme, "components">> = {
  MuiIconButton: {
    styleOverrides: {
      root: {
        color: "#91FEE6",
        transition: "color 0.2s ease-in-out, transform 0.1s ease-in-out",
        "&:hover": {
          color: "#C8FFF1", // Brighter hover color
          transform: "scale(1.1)", // Slight scaling effect
        },
        "&:active": {
          color: "#EFFEEB", // Highest contrast when pressed
          transform: "scale(0.95)", // Press effect
        },
      },
    },
  },
};

export default LinkStyles;
