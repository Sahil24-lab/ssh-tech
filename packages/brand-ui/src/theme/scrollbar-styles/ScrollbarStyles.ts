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
        backgroundColor: "background.paper", // Darker variation for cards & panels
      },
      // Customize the thumb with your primary color and border
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "primary.main", // Primary vibrant turquoise
        borderRadius: "5px",
        border: "2px solid",
        borderColor: "background.paper", // Matches the track background
      },
      // Change thumb color on hover using the darker primary tone
      "*::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "primary.dark", // Darker turquoise on hover
      },
    },
  },
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

export default ScrollbarStyles;
