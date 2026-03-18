import type { Decorator } from "@storybook/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";

export const withLegacyTheme: Decorator = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);
