import { create } from "storybook/theming";
import { brandTokens, fontFamilyTokens, shapeTokens } from "@ssh/brand-ui";

const colors = brandTokens.color;

export const managerTheme = create({
  base: "dark",
  brandTitle: "SSH Design System",

  appBg: colors.surface.hero,
  appContentBg: colors.surface.elevated,
  appPreviewBg: colors.surface.hero,
  appBorderColor: colors.divider.default,
  appBorderRadius: shapeTokens.control,

  barBg: colors.surface.elevated,
  barTextColor: colors.text.primary,
  barSelectedColor: colors.primary.main,
  barHoverColor: colors.primary.light,

  textColor: colors.text.primary,
  textInverseColor: colors.primary.contrast,

  inputBg: colors.surface.depth,
  inputBorder: colors.divider.default,
  inputTextColor: colors.text.primary,
  inputBorderRadius: shapeTokens.control,

  colorPrimary: colors.primary.main,
  colorSecondary: colors.secondary.light,

  fontBase: fontFamilyTokens.body,
  fontCode: fontFamilyTokens.label,
});
