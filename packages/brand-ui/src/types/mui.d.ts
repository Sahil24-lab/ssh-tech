import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true;
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
