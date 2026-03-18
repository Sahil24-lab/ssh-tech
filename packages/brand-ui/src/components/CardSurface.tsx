import { Paper, type PaperProps } from "@mui/material";
import { brandTokens } from "../theme/tokens";

export type CardSurfaceProps = PaperProps & {
  surface?: "glass" | "panel";
  glow?: boolean;
};

export function CardSurface({
  surface = "glass",
  glow = false,
  sx,
  ...props
}: CardSurfaceProps) {
  const isGlass = surface === "glass";

  return (
    <Paper
      elevation={0}
      sx={[
        {
          borderRadius: `${brandTokens.radius.xl}px`,
          border: `1px solid ${
            isGlass
              ? "rgba(255, 255, 255, 0.12)"
              : brandTokens.color.secondary.dark
          }`,
          background: isGlass
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(8, 24, 36, 0.92)",
          backgroundColor: isGlass
            ? "transparent"
            : brandTokens.color.background.paper,
          backdropFilter: isGlass ? "blur(15px)" : "blur(8px)",
          boxShadow: isGlass
            ? brandTokens.shadow.soft
            : brandTokens.shadow.raised,
          color: "text.primary",
          transition: `transform ${brandTokens.motion.base}, box-shadow ${brandTokens.motion.base}, border-color ${brandTokens.motion.fast}`,
          "&:hover": glow
            ? {
                boxShadow: `${brandTokens.shadow.raised}, ${brandTokens.shadow.glow}`,
                borderColor: "primary.main",
              }
            : undefined,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
}
