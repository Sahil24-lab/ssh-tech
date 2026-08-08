import type { Preview } from "@storybook/react";
import { Box, GlobalStyles } from "@mui/material";
import {
  BrandThemeProvider,
  brandTokens,
  fontFamilyTokens,
  shapeTokens,
  surfaceTokens,
  typographyTokens,
} from "@ssh/brand-ui";
import { docsTheme } from "./docsTheme";
import "./fonts.css";

const colors = brandTokens.color;

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const isDocs = context.viewMode === "docs";
      const isFullscreen = context.parameters.layout === "fullscreen";
      const contentPadding = context.parameters.contentPadding ?? !isFullscreen;

      return (
        <BrandThemeProvider>
          <GlobalStyles
            styles={{
              "#storybook-root": {
                minWidth: 0,
              },
              ".sbdocs-wrapper, .sbdocs-content": {
                background: "transparent",
              },
              ".sbdocs-content": {
                color: colors.text.primary,
                maxWidth: 1200,
              },
              ".sbdocs-title": {
                fontFamily: fontFamilyTokens.display,
                overflowWrap: "anywhere",
                textWrap: "balance",
              },
              ".sbdocs p, .sbdocs li": {
                fontFamily: fontFamilyTokens.body,
                lineHeight: typographyTokens.body.lineHeight,
              },
              ".sbdocs a:focus-visible, .sbdocs button:focus-visible, .sbdocs input:focus-visible, .sbdocs select:focus-visible": {
                outline: `3px solid ${colors.primary.main}`,
                outlineOffset: 3,
              },
              ...(isDocs
                ? {
                    ".sbdocs-preview, [class*='PreviewWrapper'], [class*='Canvas-']": {
                      border: `1px solid ${colors.divider.default}`,
                      borderRadius: shapeTokens.panel,
                      backgroundColor: surfaceTokens.glass.dark,
                      boxShadow: "none",
                      overflow: "hidden",
                    },
                    ".docs-story": {
                      minWidth: 0,
                      padding: "clamp(16px, 3vw, 32px)",
                      background: "transparent",
                    },
                    ".docs-story > div": {
                      minWidth: 0,
                      minHeight: "unset",
                      height: "auto",
                    },
                    ".sbdocs-preview .docblock-source, .sbdocs-preview pre.prismjs": {
                      margin: 0,
                      borderTop: `1px solid ${colors.divider.default}`,
                      borderRadius: 0,
                      background: `${colors.surface.depth} !important`,
                      boxShadow: "none",
                    },
                    ".sbdocs-preview .docblock-source pre, .sbdocs-preview pre.prismjs": {
                      margin: 0,
                      padding: 16,
                      background: "transparent !important",
                      color: colors.text.secondary,
                      fontFamily: fontFamilyTokens.label,
                      fontSize: typographyTokens.label.fontSize,
                    },
                    ".sbdocs-preview .docblock-source code, .sbdocs-preview pre.prismjs code": {
                      background: "transparent !important",
                    },
                  }
                : {}),
              ".docblock-argstable, .sbdocs table": {
                display: "block",
                maxWidth: "100%",
                overflowX: "auto",
                border: `1px solid ${colors.divider.default}`,
                borderRadius: shapeTokens.control,
                backgroundColor: colors.background.paper,
                borderCollapse: "separate",
                borderSpacing: 0,
                boxShadow: "none",
              },
              ".docblock-argstable th, .docblock-argstable td, .sbdocs table th, .sbdocs table td": {
                background: "transparent",
                borderBottom: `1px solid ${colors.divider.default} !important`,
              },
              ".docblock-argstable thead th, .sbdocs table thead th": {
                color: colors.text.secondary,
                fontFamily: fontFamilyTokens.label,
                fontSize: typographyTokens.label.fontSize,
                fontWeight: typographyTokens.label.fontWeight,
                letterSpacing: typographyTokens.label.letterSpacing,
                textTransform: "none",
              },
            }}
          />
          <Box
            sx={{
              minWidth: 0,
              px: contentPadding ? { xs: 2, md: 3 } : 0,
              py: contentPadding ? { xs: 2, md: 3 } : 0,
            }}
          >
            <Story />
          </Box>
        </BrandThemeProvider>
      );
    },
  ],
  parameters: {
    layout: "padded",
    a11y: {
      test: "error",
    },
    options: {
      storySort: {
        order: ["Foundations", "Primitives", "Components", "Patterns", "Legacy"],
      },
    },
    docs: {
      theme: docsTheme,
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "brand",
      values: [{ name: "brand", value: "transparent" }],
    },
  },
};

export default preview;
