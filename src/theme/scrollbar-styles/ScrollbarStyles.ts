import { Components, Theme } from "@mui/material/styles";

const ScrollbarStyles: Components<Omit<Theme, "components">> = {
  MuiCssBaseline: {
    styleOverrides: {
      // Define scroll bar width for all elements
      "*::-webkit-scrollbar": {
        width: "10px",
      },
      // Set the track background using your dark paper color
      "*::-webkit-scrollbar-track": {
        backgroundColor: "#091F2C", // Darker variation for cards & panels
      },
      // Customize the thumb with your primary color and border
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "#07DFC1", // Primary vibrant turquoise
        borderRadius: "5px",
        border: "2px solid #091F2C", // Matches the track background
      },
      // Change thumb color on hover using the darker primary tone
      "*::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#029F8C", // Darker turquoise on hover
      },
    },
  },
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

export default ScrollbarStyles;
