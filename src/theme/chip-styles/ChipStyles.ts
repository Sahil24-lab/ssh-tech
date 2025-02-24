import { Components, Theme } from "@mui/material/styles";

const ChipStyles: Components<Omit<Theme, "components">> = {
  MuiChip: {
    styleOverrides: {
      root: {
        fontSize: "1rem",
        fontWeight: 400,
      },
      label: {
        fontSize: "1rem",
        fontFamily: "var(--font-montserrat), sans-serif",
      },
    },
  },
};

export default ChipStyles;
