import { Components, Theme } from "@mui/material/styles";

const ButtonStyles: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: 8,
        fontWeight: 600,
      },
      containedPrimary: {
        backgroundColor: "#07DFC1",
        color: "#003330",
        "&:hover": {
          backgroundColor: "#029F8C",
        },
      },
      outlinedSecondary: {
        borderWidth: 2,
        borderColor: "#EFFEEB", // Near-white for strong contrast
        color: "#EFFEEB",
        "&:hover": {
          borderColor: "#91FEE6",
          color: "#91FEE6",
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        color: "#91FEE6",
        fontWeight: 600,
        transition: "color 0.2s ease-in-out, transform 0.1s ease-in-out",
        "&:hover": {
          transform: "scale(1.1)",
        },
        "&:active": {
          transform: "scale(0.95)",
        },
      },
    },
  },
};

export default ButtonStyles;
