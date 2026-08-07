"use client";

import { Paper, type PaperProps } from "@mui/material";
import { brandTokens } from "../theme/tokens";

export type CardSurfaceProps = PaperProps & {
  surface?: "glass" | "panel";
  glow?: boolean;
};

export function CardSurface({
  surface = "panel",
  glow = false,
  sx,
  ...props
}: CardSurfaceProps) {
  const isGlass = surface === "glass";

  return (
    <Paper
      elevation={0}
      sx={[
        (theme) => ({
          borderRadius: `${brandTokens.radius.lg}px`,
          border: `1px solid ${
            isGlass
              ? theme.palette.surface.border.medium
              : brandTokens.color.secondary.dark
          }`,
          background: isGlass
            ? theme.palette.surface.glass.light
            : theme.palette.background.paper,
          backgroundColor: isGlass ? "transparent" : brandTokens.color.background.paper,
          backdropFilter: isGlass ? "blur(10px)" : "none",
          boxShadow: "none",
          color: "text.primary",
          transition: `transform ${brandTokens.motion.base}, box-shadow ${brandTokens.motion.base}, border-color ${brandTokens.motion.fast}`,
          "&:hover": glow
            ? {
                boxShadow: `0 4px 8px ${theme.palette.overlay.black["20"]}`,
                borderColor: "primary.main",
              }
            : undefined,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
}
