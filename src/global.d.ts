import "@mui/material/styles";
import "@mui/system";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true; 
  }

  interface Palette {
    surface: {
      hero: string;
      elevated: string;
      scrim: string;
    };
  }
  interface PaletteOptions {
    surface?: {
      hero?: string;
      elevated?: string;
      scrim?: string;
    };
  }
  interface TypeText {
    muted: string;
  }
}

declare module "@mui/system" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true; 
  }
}
