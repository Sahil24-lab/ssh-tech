import type { Preview } from "@storybook/react";
import { Box } from "@mui/material";
import { BrandThemeProvider } from "../packages/brand-ui/src/providers/BrandThemeProvider";
import { docsTheme } from "./docsTheme";
import "./fonts.css";

const brandedBackground = `
  linear-gradient(rgba(5, 11, 43, 0.72), rgba(5, 11, 43, 0.2)),
  conic-gradient(from -23.81deg at 72.82% 162.44%, #0e534c -44.57deg, #067f71 7.76deg, #029f8c 20.98deg, #067f71 52deg, #0b645c 88.68deg, #067f71 315.43deg, #029f8c 367.76deg)
`;

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const topLevel = context.title?.split("/")[0];
      const defaultSurface =
        topLevel === "Components" || topLevel === "Patterns" ? "brand" : "canvas";
      const surface = context.parameters.surface ?? defaultSurface;
      const isDocs = context.viewMode === "docs";
      const isFullscreen = context.parameters.layout === "fullscreen";
      const contentPadding = context.parameters.contentPadding ?? !isFullscreen;

      const wrapperSx =
        isDocs || surface === "canvas"
          ? {
              backgroundColor: "#07131D",
              minHeight: "100vh",
            }
          : surface === "brand"
            ? {
                backgroundColor: "#0E534C",
                backgroundImage: brandedBackground,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                minHeight: "100vh",
              }
            : undefined;

      return (
        <BrandThemeProvider>
          <Box sx={wrapperSx}>
            <Box
              sx={{
                minHeight: "100vh",
                px: contentPadding ? { xs: 2, md: 3 } : 0,
                py: contentPadding ? { xs: 2, md: 3 } : 0,
              }}
            >
              <Story />
            </Box>
          </Box>
        </BrandThemeProvider>
      );
    },
  ],
  parameters: {
    layout: "padded",
    options: {
      storySort: {
        order: ["Foundations", "Primitives", "Components", "Patterns", "Legacy"],
      },
    },
    docs: {
      theme: docsTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas", value: "#07131D" },
        { name: "brand", value: "#0E534C" },
      ],
    },
  },
};

export default preview;
