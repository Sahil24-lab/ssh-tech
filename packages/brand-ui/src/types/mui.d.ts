import "@mui/material/styles";
import type { LayoutTokens } from "../theme/tokens/layout";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true;
  }

  interface Theme {
    layout: LayoutTokens;
  }
  interface ThemeOptions {
    layout?: Partial<LayoutTokens>;
  }

  interface Palette {
    surface: {
      hero: string;
      elevated: string;
      scrim: string;
      depth: string;
      imageBlend: string;
    };
  }
  interface PaletteOptions {
    surface?: {
      hero?: string;
      elevated?: string;
      scrim?: string;
      depth?: string;
      imageBlend?: string;
    };
  }
  interface TypeText {
    muted: string;
    disabled: string;
  }
}
