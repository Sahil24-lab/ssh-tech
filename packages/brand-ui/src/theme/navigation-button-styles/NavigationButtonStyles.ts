import { Components, Theme } from "@mui/material/styles";

const NavigationButtonStyles: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
      text: {
        color: "#91FEE6",
        fontSize: "1rem",
        position: "relative",
        backgroundColor: "transparent",
        boxShadow: "none",
        transition: "none",
        
        "&:hover": {
          backgroundColor: "transparent", // Removes default MUI hover bg
          color: "#C8FFF1",
          
          transform: "translateY(-2px)",
        },
        "&:after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: -2,
          width: "100%",
          height: "2px",
          backgroundColor: "#C8FFF1",
          transform: "scaleX(0)",
          transformOrigin: "right",
          transition: "transform 0.2s ease-in-out",
        },
        "&:hover:after": {
          transform: "scaleX(1)",
          transformOrigin: "left",
        },
        "&:active": {
          color: "#EFFEEB",
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
