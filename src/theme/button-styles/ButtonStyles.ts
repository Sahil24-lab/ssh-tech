import { Components, Theme } from "@mui/material/styles";

const ButtonStyles: Components<Omit<Theme, "components">> = {
  MuiIconButton: {
    styleOverrides: {
      root: {
        color: "#91FEE6",
        fontWeight: "600",
        transition: "color 0.2s ease-in-out, transform 0.1s ease-in-out",
        "&:hover": { 
          transform: "scale(1.1)", // Slight scaling effect
        },
        "&:active": { 
          transform: "scale(0.95)", // Press effect
        },
      },
    },
  },
};

export default ButtonStyles;
