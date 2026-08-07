"use client";

import { Paper, type PaperProps } from "@mui/material";
import { brandTokens } from "../theme/tokens";

// ─── Types ────────────────────────────────────────────────────────────────────

/**
 * Visual treatment of the glass surface.
 *
 * - `light`        Frosted-glass tint — for use on dark navy backgrounds
 * - `dark`         Deep opaque dark glass — panels, modals, drawers
 * - `darkElevated` Semi-transparent dark — layered cards, overlapping surfaces
 */
export type GlassCardVariant = "light" | "dark" | "darkElevated";

export type GlassCardProps = Omit<PaperProps, "variant"> & {
  /** Glass surface treatment. Defaults to `"light"`. */
  variant?: GlassCardVariant;
  /**
   * Alpha offset for dark variants only.
   * Added to the variant's base alpha (dark: 0.92, darkElevated: 0.75).
   * Positive → more opaque; negative → more transparent.
   * Example: `opacity={0.06}` on `"dark"` → `rgba(8, 24, 36, 0.98)`.
   */
  opacity?: number;
};

// ─── Base RGB values for dark variants ───────────────────────────────────────
// Kept here so dynamic alpha computation stays in sync with the named tokens.
const DARK_BASE_RGB = "8, 24, 36"; // matches surface.glass.dark base
const DARK_ELEVATED_BASE_RGB = "9, 31, 44"; // matches surface.glass.darkElevated base
const DARK_BASE_ALPHA = 0.92;
const DARK_ELEVATED_BASE_ALPHA = 0.75;

// ─── Component ────────────────────────────────────────────────────────────────

export function GlassCard({
  variant = "light",
  opacity,
  sx,
  children,
  ...props
}: GlassCardProps) {
  return (
    <Paper
      elevation={0}
      sx={[
        (theme) => {
          const ov = theme.palette.overlay;
          const sf = theme.palette.surface;

          // When opacity is provided, compute the background dynamically so
          // callers can fine-tune the alpha without reaching for raw strings.
          const darkBg =
            opacity !== undefined
              ? `rgba(${DARK_BASE_RGB}, ${DARK_BASE_ALPHA + opacity})`
              : sf.glass.dark;

          const darkElevatedBg =
            opacity !== undefined
              ? `rgba(${DARK_ELEVATED_BASE_RGB}, ${DARK_ELEVATED_BASE_ALPHA + opacity})`
              : sf.glass.darkElevated;

          return {
            borderRadius: `${brandTokens.radius.lg}px`,
            color: "text.primary",
            transition: [
              `border-color ${brandTokens.motion.fast}`,
              `box-shadow ${brandTokens.motion.base}`,
            ].join(", "),

            ...(variant === "light" && {
              background: sf.glass.light,
              backdropFilter: "blur(10px)",
              border: `1px solid ${sf.border.strong}`,
              boxShadow: "none",
            }),

            ...(variant === "dark" && {
              background: darkBg,
              backdropFilter: "none",
              border: `1px solid ${sf.border.light}`,
              boxShadow: "none",
              backgroundColor: theme.palette.background.paper,
            }),

            ...(variant === "darkElevated" && {
              background: darkElevatedBg,
              backdropFilter: "blur(8px)",
              border: `1px solid ${sf.border.subtle}`,
              boxShadow: `0 4px 8px ${ov.black["16"]}`,
            }),
          };
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {children}
    </Paper>
  );
}
