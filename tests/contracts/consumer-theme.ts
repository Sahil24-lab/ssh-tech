import {
  createBrandTheme,
  fontFamilyTokens,
  motionTokens,
  shapeTokens,
  zIndexTokens,
} from "@ssh/brand-ui";

const theme = createBrandTheme({
  typography: {
    body1: {
      fontSize: "1.125rem",
    },
  },
});

const overlay: string = theme.palette.overlay.white["10"];
const glassSurface: string = theme.palette.surface.glass.dark;
const mutedText: string = theme.palette.text.muted;
const contentWidth: number = theme.layout.contentMaxWidth.content;
const ultrawideQuery: string = theme.breakpoints.up("xxl");
const overriddenBodySize: string | number | undefined = theme.typography.body1.fontSize;
const fallbackFontStack: string = fontFamilyTokens.body;
const controlRadius: number = shapeTokens.control;
const standardDuration: number = motionTokens.duration.standard;
const modalLayer: number = zIndexTokens.modal;

void [
  overlay,
  glassSurface,
  mutedText,
  contentWidth,
  ultrawideQuery,
  overriddenBodySize,
  fallbackFontStack,
  controlRadius,
  standardDuration,
  modalLayer,
];
