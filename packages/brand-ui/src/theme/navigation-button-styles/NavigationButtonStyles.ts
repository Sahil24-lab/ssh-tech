import { Components, Theme } from "@mui/material/styles";

const NavigationButtonStyles: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
      text: {
        color: "text.secondary",
        fontSize: "0.9rem",
        position: "relative",
        backgroundColor: "transparent",
        boxShadow: "none",
        transition: "none",
        
        "&:hover": {
          backgroundColor: "transparent", // Removes default MUI hover bg
          color: "text.primary",
          transform: "translateY(-1px)",
        },
        "&:after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: -2,
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(200, 255, 241, 0.7)",
          transform: "scaleX(0)",
          transformOrigin: "right",
          transition: "transform 0.2s ease-in-out",
        },
        "&:hover:after": {
          transform: "scaleX(1)",
          transformOrigin: "left",
        },
        "&:active": {
          color: "text.primary",
          transform: "translateY(0)",
          backgroundColor: "transparent",
        },
        "&:focus": {
          backgroundColor: "transparent",
        },
      },
    },
  },
};

export default NavigationButtonStyles;
