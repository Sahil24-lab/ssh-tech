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
    overlay: {
      white: {
        "2": string; "3": string; "4": string; "5": string; "7": string;
        "8": string; "10": string; "12": string; "14": string; "15": string;
        "18": string;
      };
      black: {
        "10": string; "12": string; "14": string; "16": string; "18": string; "20": string;
        "22": string; "24": string; "25": string; "28": string; "30": string;
        "35": string;
      };
    };
    surface: {
      hero: string;
      elevated: string;
      scrim: string;
      depth: string;
      imageBlend: string;
      glass: {
        light: string; dark: string; darkElevated: string;
        darkDeep: string; scrim: string;
      };
      border: {
        subtle: string; light: string; medium: string;
        strong: string; emphasis: string;
      };
    };
  }
  interface PaletteOptions {
    overlay?: {
      white?: Partial<Palette["overlay"]["white"]>;
      black?: Partial<Palette["overlay"]["black"]>;
    };
    surface?: {
      hero?: string;
      elevated?: string;
      scrim?: string;
      depth?: string;
      imageBlend?: string;
      glass?: Partial<Palette["surface"]["glass"]>;
      border?: Partial<Palette["surface"]["border"]>;
    };
  }
  interface TypeText {
    muted: string;
    disabled: string;
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
