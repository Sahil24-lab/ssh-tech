import { Components, Theme } from "@mui/material/styles";

const NavigationButtonStyles: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
      text: {
        color: "#91FEE6",
        fontSize: "1rem",
        position: "relative",
        display: "inline-block", // Ensures the underline appears underneath
        backgroundColor: "transparent", // Removes unwanted background overlay
        "&:hover": {
          color: "#C8FFF1",
          transform: "translateY(-2px)", // Slight lift effect
        },
        "&:after": {
          content: '""',
          position: "absolute",
          left: "0",
          bottom: "-2px", // Places underline directly under text
          width: "100%",
          height: "2px",
          backgroundColor: "#C8FFF1",
          transform: "scaleX(0)", // Initially hidden
          transformOrigin: "right",
          transition: "transform 0.2s ease-in-out",
        },
        "&:hover:after": {
          transform: "scaleX(1)", // Expands on hover
          transformOrigin: "left",
        },
        "&:active": {
          color: "#EFFEEB",
          transform: "translateY(0)", // Reset on click
        },
      },
    },
  },
};

export default NavigationButtonStyles;
