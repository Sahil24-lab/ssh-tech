import type { Preview } from "@storybook/react";
import { Box, GlobalStyles } from "@mui/material";
import { BrandThemeProvider } from "../packages/brand-ui/src/providers/BrandThemeProvider";
import { brandTokens } from "../packages/brand-ui/src/theme/tokens";
import { docsTheme } from "./docsTheme";
import "./fonts.css";

const STORYBOOK_RADIUS = 12;

const brandGradient = `
  linear-gradient(rgba(5, 11, 43, 0.72), rgba(5, 11, 43, 0.20)),
  conic-gradient(
    from -23.81deg at 72.82% 162.44%,
    ${brandTokens.color.background.default} -44.57deg,
    ${brandTokens.color.secondary.main} 7.76deg,
    ${brandTokens.color.primary.dark} 20.98deg,
    ${brandTokens.color.secondary.main} 52deg,
    ${brandTokens.color.secondary.dark} 88.68deg,
    ${brandTokens.color.secondary.main} 315.43deg,
    ${brandTokens.color.primary.dark} 367.76deg
  )
`;

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const topLevel = context.title?.split("/")[0];
      const isDocs = context.viewMode === "docs";
      const isFullscreen = context.parameters.layout === "fullscreen";
      const contentPadding = context.parameters.contentPadding ?? !isFullscreen;
      const isComponentStory = topLevel === "Components" || topLevel === "Patterns";

      return (
        <BrandThemeProvider>
          <GlobalStyles
            styles={{
              "html, body": {
                backgroundColor: brandTokens.color.background.default,
                backgroundImage: brandGradient,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              },
              // Scrollbars (match brand theme)
              "*": {
                scrollbarWidth: "thin",
                scrollbarColor: `${brandTokens.color.primary.main} ${brandTokens.color.background.paper}`,
              },
              "*::-webkit-scrollbar": {
                width: 10,
                height: 10,
              },
              "*::-webkit-scrollbar-track": {
                backgroundColor: brandTokens.color.background.paper,
              },
              "*::-webkit-scrollbar-thumb": {
                backgroundColor: brandTokens.color.primary.main,
                borderRadius: 5,
                border: `2px solid ${brandTokens.color.background.paper}`,
              },
              "*::-webkit-scrollbar-thumb:hover": {
                backgroundColor: brandTokens.color.primary.dark,
              },
              // Let the brand gradient show through Storybook docs shells.
              ".sbdocs-wrapper, .sbdocs-content": {
                background: "transparent",
              },

              ...(isDocs
                ? {
                    // Docs page should feel invisible (gradient behind), but the *canvas* itself
                    // should sit on a dark panel surface for readability.
                    ".sbdocs-content": {
                      borderRadius: 0,
                      border: "none",
                      background: "transparent",
                      backdropFilter: "none",
                      WebkitBackdropFilter: "none",
                      boxShadow: "none",
                      overflow: "visible",
                    },

                    // Canvas wrapper
                    ".sbdocs-preview, [class*='PreviewWrapper'], [class*='Canvas-']": {
                      borderRadius: STORYBOOK_RADIUS,
                      border: `1px solid ${brandTokens.color.divider.default}`,
                      background: "rgba(9, 31, 44, 0.88)", // bg.paper-ish panel
                      boxShadow: brandTokens.shadow.soft,
                      overflow: "hidden",
                    },
                    ".docs-story": {
                      background: "transparent",
                      border: "none",
                      boxShadow: "none",
                      borderRadius: 0,
                      padding: 12,
                    },
                    // Reduce the "empty" canvas feel (Storybook sets a min height on inner wrappers)
                    ".docs-story > div": {
                      minHeight: "unset",
                      height: "auto",
                    },

                    // Code section inside canvas: solid darkest surface to clearly
                    // separate it from the canvas wrapper above.
                    ".sbdocs-preview .docblock-source": {
                      margin: 0,
                      borderTop: `1px solid ${brandTokens.color.divider.default}`,
                      borderRadius: 0,
                      background: brandTokens.color.surface.hero,
                    },
                    ".sbdocs-preview .docblock-source pre": {
                      margin: 0,
                      padding: 14,
                      background: "transparent",
                      color: brandTokens.color.text.secondary,
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "0.82rem",
                    },
                    ".sbdocs-preview .docblock-source .token.tag, .sbdocs-preview .docblock-source .token.selector": {
                      color: brandTokens.color.primary.light,
                    },
                    ".sbdocs-preview .docblock-source .token.attr-name": {
                      color: brandTokens.color.secondary.light,
                    },
                    ".sbdocs-preview .docblock-source .token.attr-value, .sbdocs-preview .docblock-source .token.string": {
                      color: brandTokens.color.text.primary,
                    },
                    ".sbdocs-preview .docblock-source .token.punctuation": {
                      color: brandTokens.color.text.muted,
                    },
                  }
                : {}),

              // Args / props table: readable dark panel (not invisible)
              ".docblock-argstable, .sbdocs table": {
                borderRadius: STORYBOOK_RADIUS,
                border: `1px solid ${brandTokens.color.divider.default}`,
                background: "rgba(9, 31, 44, 0.80)",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                overflow: "hidden",
                borderCollapse: "separate",
                borderSpacing: 0,
                boxShadow: "none",
              },
              ".docblock-argstable th, .docblock-argstable td, .sbdocs table th, .sbdocs table td": {
                background: "transparent",
                borderBottom: "1px solid rgba(7, 223, 193, 0.22)",
              },
              ".docblock-argstable th:not(:last-child), .docblock-argstable td:not(:last-child), .sbdocs table th:not(:last-child), .sbdocs table td:not(:last-child)": {
                borderRight: "1px solid rgba(7, 223, 193, 0.12)",
              },
              ".docblock-argstable thead th, .sbdocs table thead th": {
                background: "rgba(7, 223, 193, 0.08)",
                color: brandTokens.color.primary.main,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontWeight: 700,
                fontSize: "0.72rem",
                borderBottom: "1px solid rgba(7, 223, 193, 0.28)",
              },
              // Prevent the docs "table wrappers" from reintroducing solid backgrounds.
              ".docblock-argstable-body, .docblock-argstable-head, .docblock-argstable-row": {
                background: "transparent",
              },

              // Component/pattern stories can still get a subtle surface behind content (not in docs preview chrome).
              ...(isDocs
                ? {}
                : isComponentStory
                  ? {
                      "#storybook-root": {
                        borderRadius: STORYBOOK_RADIUS,
                        border: `1px solid ${brandTokens.color.divider.default}`,
                        background: "rgba(9, 31, 44, 0.28)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                      },
                    }
                  : {}),
            }}
          />
          <Box
            sx={{
              background: "transparent",
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
      // Prefer the brand gradient; background values remain available per-story if needed.
      default: "brand",
      values: [
        { name: "brand", value: "transparent" },
        { name: "canvas", value: "transparent" },
      ],
    },
  },
};

export default preview;
