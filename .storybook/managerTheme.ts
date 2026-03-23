import { create } from "storybook/theming";
import { brandTokens } from "../packages/brand-ui/src/theme/tokens";

const t = brandTokens.color;

export const managerTheme = create({
  base: "dark",
  brandTitle: "SSH Design System",

  // Fully opaque manager surfaces
  appBg: t.surface.hero,
  appContentBg: t.surface.elevated,
  appPreviewBg: t.surface.hero,

  appBorderColor: t.divider.default,
  appBorderRadius: 4,

  // Sidebar / toolbar
  barBg: t.surface.elevated,
  barTextColor: t.text.primary,
  barSelectedColor: "#062b27", // dark text on selected/highlighted rows
  barHoverColor: t.primary.main,

  textColor: t.text.primary,
  textInverseColor: "#062b27",

  inputBg: t.surface.depth,
  inputBorder: t.divider.default,
  inputTextColor: t.text.primary,
  inputBorderRadius: 4,

  colorPrimary: t.primary.main,
  colorSecondary: t.primary.main,

  fontBase: '"Play", sans-serif',
  fontCode: '"JetBrains Mono", monospace',
});
