import type { Preview } from "@storybook/react";
import { Box, GlobalStyles } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { BrandThemeProvider } from "../packages/brand-ui/src/providers/BrandThemeProvider";
import { brandTokens } from "../packages/brand-ui/src/theme/tokens";
import { docsTheme } from "./docsTheme";
import "./fonts.css";

// ─── Shortcuts ────────────────────────────────────────────────────────────────
const t = brandTokens.color;
const primary = t.primary.main; // #07DFC1
const bgPaper = t.background.paper; // #091F2C
const surfaceDepth = t.surface.depth; // #0F2E3D

// ─── Alpha-computed surface tokens ────────────────────────────────────────────
// Mirror the CSS custom properties in manager-head.html so both frames
// use the same logical values sourced from the same token primitives.
const PANEL_BG = alpha(bgPaper, 0.88); // --ssh-panel-bg
const PANEL_80 = alpha(bgPaper, 0.8); // --ssh-panel-80
const PANEL_92 = alpha(bgPaper, 0.92); // --ssh-panel-92
const PANEL_28 = alpha(bgPaper, 0.28); // canvas root subtle surface
const PRIMARY_22 = alpha(primary, 0.22); // --ssh-primary-22  (control borders)
const PRIMARY_28 = alpha(primary, 0.28); // --ssh-primary-28  (row separators)
const PRIMARY_12 = alpha(primary, 0.12); // --ssh-accent-dim  (focus ring glow)

// Gradient overlay — not a token, specific to the background gradient construction.
const OVERLAY_DARK = "rgba(5, 11, 43, 0.72)";
const OVERLAY_MID = "rgba(5, 11, 43, 0.20)";

// ─── Brand gradient ───────────────────────────────────────────────────────────
const STORYBOOK_RADIUS = 12;

const brandGradient = `
  linear-gradient(${OVERLAY_DARK}, ${OVERLAY_MID}),
  conic-gradient(
    from -23.81deg at 72.82% 162.44%,
    ${t.background.default} -44.57deg,
    ${t.secondary.main}      7.76deg,
    ${t.primary.dark}       20.98deg,
    ${t.secondary.main}     52deg,
    ${t.secondary.dark}     88.68deg,
    ${t.secondary.main}    315.43deg,
    ${t.primary.dark}      367.76deg
  )
`;

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const topLevel = context.title?.split("/")[0];
      const isDocs = context.viewMode === "docs";
      const isFullscreen = context.parameters.layout === "fullscreen";
      const contentPadding = context.parameters.contentPadding ?? !isFullscreen;
      const isComponentStory =
        topLevel === "Components" || topLevel === "Patterns";

      return (
        <BrandThemeProvider>
          <GlobalStyles
            styles={{
              "html, body": {
                backgroundColor: t.background.default,
                backgroundImage: brandGradient,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              },
              // Scrollbars — match brand theme
              "*": {
                scrollbarWidth: "thin",
                scrollbarColor: `${primary} ${bgPaper}`,
              },
              "*::-webkit-scrollbar": { width: 10, height: 10 },
              "*::-webkit-scrollbar-track": { backgroundColor: bgPaper },
              "*::-webkit-scrollbar-thumb": {
                backgroundColor: primary,
                borderRadius: 5,
                border: `2px solid ${bgPaper}`,
              },
              "*::-webkit-scrollbar-thumb:hover": {
                backgroundColor: t.primary.dark,
              },
              // Let the brand gradient show through Storybook docs shells.
              ".sbdocs-wrapper, .sbdocs-content": {
                background: "transparent",
              },

              ...(isDocs
                ? {
                    // Docs page should feel invisible (gradient behind), but the
                    // *canvas* itself should sit on a dark panel surface.
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
                    ".sbdocs-preview, [class*='PreviewWrapper'], [class*='Canvas-']":
                      {
                        borderRadius: STORYBOOK_RADIUS,
                        border: `1px solid ${t.divider.default}`,
                        background: PANEL_BG,
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
                    ".docs-story > div": {
                      minHeight: "unset",
                      height: "auto",
                    },

                    // Code block — solid surface-depth so it sits clearly below the canvas
                    ".sbdocs-preview .docblock-source, .sbdocs-preview pre.prismjs, .docs-story pre, .docs-story pre.prismjs":
                      {
                        margin: 0,
                        borderTop: `1px solid ${t.divider.default}`,
                        borderRadius: 0,
                        background: `${surfaceDepth} !important`,
                      },
                    ".sbdocs-preview .docblock-source pre, .sbdocs-preview pre.prismjs":
                      {
                        margin: 0,
                        padding: 14,
                        background: "transparent !important",
                        color: t.text.secondary,
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "0.82rem",
                      },
                    ".sbdocs-preview .docblock-source code, .sbdocs-preview pre.prismjs code, .docs-story pre code, .docs-story pre.prismjs code":
                      {
                        background: "transparent !important",
                      },
                    ".sbdocs-preview .docblock-source .token.tag, .sbdocs-preview .docblock-source .token.selector":
                      {
                        color: t.primary.light,
                      },
                    ".sbdocs-preview .docblock-source .token.attr-name": {
                      color: t.secondary.light,
                    },
                    ".sbdocs-preview .docblock-source .token.attr-value, .sbdocs-preview .docblock-source .token.string":
                      {
                        color: t.text.primary,
                      },
                    ".sbdocs-preview .docblock-source .token.punctuation": {
                      color: t.text.muted,
                    },
                  }
                : {}),

              // Args / props table
              ".docblock-argstable, .sbdocs table": {
                borderRadius: STORYBOOK_RADIUS,
                border: `1px solid ${t.divider.default}`,
                background: PANEL_80,
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                overflow: "hidden",
                borderCollapse: "separate",
                borderSpacing: 0,
                boxShadow: "none",
              },
              ".docblock-argstable th, .docblock-argstable td, .sbdocs table th, .sbdocs table td":
                {
                  background: "transparent",
                  borderBottom: `1px solid ${PRIMARY_22} !important`,
                },
              ".docblock-argstable tbody tr td, .sbdocs table tbody tr td": {
                borderBottom: `1px solid ${PRIMARY_22} !important`,
              },
              ".docblock-argstable th:not(:last-child), .docblock-argstable td:not(:last-child), .sbdocs table th:not(:last-child), .sbdocs table td:not(:last-child)":
                {
                  borderRight: `1px solid ${PRIMARY_12}`,
                },
              ".docblock-argstable thead th, .sbdocs table thead th": {
                // Solid dark navy — matches the canvas toolbar above
                backgroundColor: PANEL_92,
                color: t.text.secondary,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontWeight: 700,
                fontSize: "0.72rem",
                borderBottom: `1px solid ${PRIMARY_28} !important`,
                boxShadow: "none",
              },
              ".docblock-argstable-body, .docblock-argstable-head, .docblock-argstable-row":
                {
                  background: "transparent",
                },

              ...(isDocs
                ? {}
                : isComponentStory
                  ? {
                      "#storybook-root": {
                        borderRadius: STORYBOOK_RADIUS,
                        border: `1px solid ${t.divider.default}`,
                        background: PANEL_28,
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
        order: [
          "Foundations",
          "Primitives",
          "Components",
          "Patterns",
          "Legacy",
        ],
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
      default: "brand",
      values: [
        { name: "brand", value: "transparent" },
        { name: "canvas", value: "transparent" },
      ],
    },
  },
};

export default preview;
