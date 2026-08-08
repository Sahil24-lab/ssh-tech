import { alpha, type Components, type Theme } from "@mui/material/styles";
import { motionTokens, shapeTokens, typographyTokens } from "../foundation";

const buttonColors = ["primary", "secondary", "error", "warning"] as const;
type BrandButtonColor = (typeof buttonColors)[number];

const containedStyle = (theme: Theme, color: BrandButtonColor) => {
  const palette = theme.palette[color];

  return {
    backgroundColor: palette.main,
    backgroundImage: "none",
    border: "1px solid transparent",
    color: palette.contrastText,
    boxShadow: "none",
    "&:hover": {
      backgroundColor: palette.dark,
      backgroundImage: "none",
      boxShadow: `0 4px 8px ${alpha(palette.main, 0.2)}`,
    },
    "&:active": {
      backgroundColor: palette.dark,
      boxShadow: "none",
    },
    "&:focus-visible": {
      outlineColor: palette.main,
    },
  };
};

const outlinedStyle = (theme: Theme, color: BrandButtonColor) => {
  const palette = theme.palette[color];
  const emphasisColor = color === "secondary" ? palette.light : palette.main;

  return {
    backgroundColor: "transparent",
    border: `1px solid ${emphasisColor}`,
    color: emphasisColor,
    boxShadow: "none",
    "&:hover": {
      backgroundColor: alpha(emphasisColor, 0.08),
      borderColor: palette.light,
      color: palette.light,
      boxShadow: "none",
    },
    "&:active": {
      backgroundColor: alpha(emphasisColor, 0.14),
      boxShadow: "none",
    },
    "&:focus-visible": {
      outlineColor: emphasisColor,
    },
  };
};

const textStyle = (theme: Theme, color: BrandButtonColor) => {
  const palette = theme.palette[color];
  const emphasisColor = color === "secondary" ? theme.palette.text.secondary : palette.main;
  const hoverColor = color === "secondary" ? theme.palette.primary.main : palette.light;

  return {
    backgroundColor: "transparent",
    color: emphasisColor,
    overflow: "visible",
    "&::after": {
      backgroundColor: "currentColor",
      bottom: theme.spacing(0.75),
      content: '\"\"',
      height: 1,
      left: theme.spacing(1.75),
      position: "absolute",
      right: theme.spacing(1.75),
      transform: "scaleX(0)",
      transformOrigin: "left",
      transition: `transform ${motionTokens.duration.standard}ms ${motionTokens.easing.standard}`,
    },
    "&:hover": {
      backgroundColor: alpha(hoverColor, 0.08),
      color: hoverColor,
      transform: "none",
      "&::after": {
        transform: "scaleX(1)",
      },
    },
    "&:active": {
      backgroundColor: alpha(hoverColor, 0.14),
      transform: "scale(0.98)",
    },
    "&:focus-visible": {
      outlineColor: emphasisColor,
    },
  };
};

const ButtonStyles: Components<Theme> = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        ...typographyTokens.labelLarge,
        borderRadius: shapeTokens.control,
        boxShadow: "none",
        minHeight: 44,
        position: "relative",
        textTransform: "none",
        transition: theme.transitions.create(
          ["background-color", "border-color", "box-shadow", "color", "transform"],
          {
            duration: motionTokens.duration.short,
            easing: motionTokens.easing.standard,
          },
        ),
        "&:hover": {
          transform: "translateY(-1px)",
        },
        "&:active": {
          transform: "scale(0.98)",
          transitionDuration: `${motionTokens.duration.instant}ms`,
        },
        "&:focus-visible": {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: 3,
          zIndex: 1,
        },
        "&&.Mui-disabled": {
          backgroundColor: theme.palette.surface.glass.scrim,
          backgroundImage: "none",
          border: `1px solid ${alpha(theme.palette.primary.main, 0.34)}`,
          boxShadow: "none",
          color: alpha(theme.palette.text.primary, 0.5),
          cursor: "not-allowed",
          opacity: 1,
          pointerEvents: "auto",
          transform: "none",
        },
      }),
      sizeSmall: {
        ...typographyTokens.label,
        borderRadius: shapeTokens.control,
        minHeight: 44,
        padding: "8px 14px",
      },
      sizeMedium: {
        minHeight: 44,
        padding: "9px 20px",
      },
      sizeLarge: {
        minHeight: 48,
        padding: "11px 28px",
      },
      text: {
        "&&.Mui-disabled": {
          backgroundColor: "transparent",
          border: 0,
          color: "text.disabled",
        },
      },
    },
    variants: buttonColors.flatMap((color) => [
      {
        props: { variant: "contained" as const, color },
        style: ({ theme }: { theme: Theme }) => containedStyle(theme, color),
      },
      {
        props: { variant: "outlined" as const, color },
        style: ({ theme }: { theme: Theme }) => outlinedStyle(theme, color),
      },
      {
        props: { variant: "text" as const, color },
        style: ({ theme }: { theme: Theme }) => textStyle(theme, color),
      },
    ]),
  },
};

export default ButtonStyles;
