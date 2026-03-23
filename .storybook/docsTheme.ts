import { brandTokens } from "../packages/brand-ui/src/theme/tokens";

const t = brandTokens.color;

export const docsTheme = {
  base: "dark",
  brandTitle: "SSH Design System",

  // Docs can be transparent because they render inside docs/preview surfaces
  appBg: "transparent",
  appContentBg: "transparent",
  appPreviewBg: "transparent",

  appBorderColor: "transparent",
  appBorderRadius: 4,

  barBg: t.surface.elevated,
  barTextColor: t.text.primary,
  barSelectedColor: t.primary.main,
  barHoverColor: t.primary.light,

  textColor: t.text.primary,
  textMutedColor: t.text.muted,

  // In docs, keep this readable, but do not reuse this object for manager UI
  textInverseColor: "#08131a",

  inputBg: t.surface.elevated,
  inputBorder: t.divider.default,
  inputTextColor: t.text.primary,
  inputBorderRadius: 4,

  colorPrimary: t.primary.main,
  colorSecondary: t.secondary.light,

  fontBase: '"Play", sans-serif',
  fontCode: '"JetBrains Mono", monospace',
};
