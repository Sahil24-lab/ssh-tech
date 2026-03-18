import type { Preview } from "@storybook/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrandTheme } from "../packages/brand-ui/src/theme/createBrandTheme";
import "./fonts.css";

const theme = createBrandTheme();

const preview: Preview = {
  decorators: [
    (Story) => (
      <div>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
    options: {
      storySort: {
        order: ["Foundations", "Primitives", "Components", "Patterns", "Legacy"],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "brand",
      values: [{ name: "brand", value: "#0E534C" }],
    },
  },
};

export default preview;
