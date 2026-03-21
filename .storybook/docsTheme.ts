import { brandTokens } from "../packages/brand-ui/src/theme/tokens";

const t = brandTokens.color;

export const docsTheme = {
  base: "dark",
  brandTitle: "SSH Design System",

  // Transparent — let the conical gradient show through (we apply it in preview too).
  appBg: "transparent",
  appContentBg: "transparent",
  appPreviewBg: "transparent",

  appBorderColor: "transparent",
  appBorderRadius: 4,

  // Toolbar — floats above the gradient as a distinct surface
  barBg: t.surface.elevated + "F2",    // #0e1a24 at ~95% opacity
  barTextColor: t.text.primary,        // #EFFEEB — legible on any background
  barSelectedColor: t.primary.main,    // #07DFC1
  barHoverColor: t.primary.light,      // #1FE2C4

  // Docs typography
  textColor: t.text.primary,           // #EFFEEB
  textMutedColor: t.text.muted,        // #DDE3E9
  textInverseColor: t.primary.contrast,// #003330

  // Controls panel inputs
  inputBg: t.surface.elevated + "CC",
  inputBorder: t.divider.default,
  inputTextColor: t.text.primary,      // #EFFEEB
  inputBorderRadius: 4,

  // Accent used for links, focus rings, highlights
  colorPrimary: t.primary.main,        // #07DFC1
  colorSecondary: t.secondary.light,   // #52F6D7

  fontBase: '"Play", sans-serif',
  fontCode: '"JetBrains Mono", monospace',
};
