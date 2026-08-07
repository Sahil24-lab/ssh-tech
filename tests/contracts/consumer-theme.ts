import { createBrandTheme } from "@ssh/brand-ui";

const theme = createBrandTheme();

const overlay: string = theme.palette.overlay.white["10"];
const glassSurface: string = theme.palette.surface.glass.dark;
const mutedText: string = theme.palette.text.muted;
const contentWidth: number = theme.layout.contentMaxWidth.content;
const ultrawideQuery: string = theme.breakpoints.up("xxl");

void [overlay, glassSurface, mutedText, contentWidth, ultrawideQuery];
