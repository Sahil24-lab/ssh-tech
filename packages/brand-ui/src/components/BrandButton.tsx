"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button, SxProps, Theme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import Link from "next/link";
import { DecodeShimmerLabel } from "../motion/DecodeShimmerLabel";
import { PerimeterTrace } from "../motion/PerimeterTrace";
import { useDecodeShimmer } from "../motion/useDecodeShimmer";
import { brandTokens } from "../theme/tokens";

// ─── Types ────────────────────────────────────────────────────────────────────

/**
 * Visual treatment of the button.
 *
 * - `contained`  Solid filled — primary / high-emphasis action
 * - `outlined`   Border-only — secondary action, still clearly interactive
 * - `text`       Label only — inline or tertiary action
 * - `ghost`      Ultra-subtle 1px border, muted text — lowest visual weight
 */
export type BrandButtonVariant = "contained" | "outlined" | "text" | "ghost";

/**
 * Semantic colour role.
 *
 * - `primary`   Turquoise — default brand CTA
 * - `secondary` Deep green — supporting action
 * - `danger`    Red — destructive / irreversible action
 * - `warning`   Amber — cautionary / proceed-with-care action
 */
export type BrandButtonColor = "primary" | "secondary" | "danger" | "warning";

export type BrandButtonProps = {
  /** Button label text */
  label: string;
  /**
   * Alternate text shown by the shimmer animation while loading.
   * Falls back to `label` when omitted.
   */
  loadingLabel?: string;
  /** When provided the button renders as a Next.js `<Link>`. Omit for a plain `<button>`. */
  href?: string;
  variant?: BrandButtonVariant;
  color?: BrandButtonColor;
  size?: "small" | "medium" | "large";
  /**
   * Adds an animated ambient glow halo. Only has a visual effect on `contained` buttons.
   * Ideal for hero / primary CTA placement.
   */
  glow?: boolean;
  /** Activates the decode-shimmer + perimeter-trace loading animation. */
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  /** Only applies when `href` is not set. */
  type?: "button" | "submit" | "reset";
  sx?: SxProps<Theme>;
};

// ─── Internal helpers ─────────────────────────────────────────────────────────

/** Map BrandButton semantic colours to MUI palette keys */
const muiColorMap = {
  primary: "primary",
  secondary: "secondary",
  danger: "error",
  warning: "warning",
} as const satisfies Record<BrandButtonColor, "primary" | "secondary" | "error" | "warning">;

// ─── Animations ───────────────────────────────────────────────────────────────

function getAccentTokens(color: BrandButtonColor) {
  switch (color) {
    case "secondary":
      return brandTokens.color.secondary;
    case "danger":
      return brandTokens.color.error;
    case "warning":
      return brandTokens.color.warning;
    case "primary":
    default:
      return brandTokens.color.primary;
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export function BrandButton({
  label,
  loadingLabel,
  href,
  variant = "contained",
  color = "primary",
  size = "medium",
  glow = false,
  loading = false,
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  onClick,
  type = "button",
  sx,
}: BrandButtonProps) {
  const isGhost = variant === "ghost";
  const isContained = variant === "contained";
  const accent = getAccentTokens(color);
  const baseRadius = size === "small" ? 5 : 6;

  const muiVariant = isGhost ? "outlined" : variant;
  const muiColor = muiColorMap[color];

  // ── Shimmer integration ────────────────────────────────────────────────────
  const shimmerLabel = loadingLabel ?? label;
  const { phase } = useDecodeShimmer({ label: shimmerLabel, loading });
  const showLoadingStyle = phase === "loading" || phase === "settling";

  // Capture idle pixel dimensions once so the button never resizes when
  // rune glyphs (which are often wider) replace Latin characters.
  const btnRef = useRef<HTMLButtonElement>(null);
  const [idleDims, setIdleDims] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    if (phase === "idle" && btnRef.current) {
      requestAnimationFrame(() => {
        if (btnRef.current) {
          const r = btnRef.current.getBoundingClientRect();
          setIdleDims({ w: r.width, h: r.height });
        }
      });
    }
  }, [phase, shimmerLabel]);

  // ── glow effect (contained only) ──────────────────────────────────────────
  // Three-layer ambient pulse — keep it subtle (small radii + restrained alpha)
  const glowPulse = keyframes`
    0%, 100% {
      box-shadow:
        0 0  4px ${alpha(accent.main, 0.26)},
        0 0 10px ${alpha(accent.main, 0.14)},
        0 0 20px ${alpha(accent.main, 0.06)},
        0 4px 12px rgba(0, 0, 0, 0.30);
    }
    50% {
      box-shadow:
        0 0  6px ${alpha(accent.main, 0.34)},
        0 0 14px ${alpha(accent.main, 0.20)},
        0 0 28px ${alpha(accent.main, 0.10)},
        0 4px 16px rgba(0, 0, 0, 0.30);
    }
  `;

  const glowSx: SxProps<Theme> =
    glow && isContained
      ? {
          animation: `${glowPulse} 2.6s ease-in-out infinite`,
          "&:hover": {
            animation: "none",
            transform: "none !important",
            boxShadow: [
              `0 0  6px ${alpha(accent.main, 0.34)}`,
              `0 0 14px ${alpha(accent.main, 0.20)}`,
              `0 0 28px ${alpha(accent.main, 0.10)}`,
              "0 6px 20px rgba(0, 0, 0, 0.36)",
            ].join(", "),
          },
          "&:active": {
            animation: "none",
            transform: "scale(0.97) translateY(0px)",
            boxShadow: `0 0 6px ${alpha(accent.main, 0.16)}, 0 2px 6px rgba(0,0,0,0.28)`,
          },
        }
      : {};

  // ── ghost styling override ─────────────────────────────────────────────────
  const ghostSx: SxProps<Theme> = isGhost
    ? {
        border: `1px solid ${alpha(accent.main, 0.30)}`,
        color: "text.secondary",
        backgroundColor: "transparent",
        boxShadow: `inset 0 1px 0 ${alpha(accent.main, 0.06)}`,
        "&.Mui-disabled": {
          opacity: "1 !important",
          cursor: "not-allowed",
          pointerEvents: "auto",
          transform: "none",
          border: `1px solid ${alpha(accent.main, 0.28)} !important`,
          backgroundColor: `${alpha(accent.main, 0.08)} !important`,
          color: "rgba(255, 255, 255, 0.38) !important",
          boxShadow: "none !important",
        },
        "&:hover": {
          border: `1px solid ${alpha(accent.main, 0.58)}`,
          color: `${accent.light}`,
          backgroundColor: alpha(accent.main, 0.07),
          boxShadow: [
            `inset 0 0 16px ${alpha(accent.main, 0.05)}`,
            `0 0 12px ${alpha(accent.main, 0.18)}`,
            "0 2px 8px rgba(0, 0, 0, 0.14)",
          ].join(", "),
          transform: "translateY(-1px)",
        },
        "&:active": {
          backgroundColor: alpha(accent.main, 0.11),
          transform: "scale(0.97) translateY(0px)",
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.10)",
        },
      }
    : {};

  const baseSx: SxProps<Theme> = {
    // Keep radius consistent even if consumers forget BrandThemeProvider
    // (and ensure the perimeter trace matches the button).
    borderRadius: `${baseRadius}px !important`,
  };

  // ── shimmer loading overlay ────────────────────────────────────────────────
  // During loading/settling: dark almost-transparent surface + teal text.
  // Overrides the base disabled state so the shimmer text color is visible.
  // Width/height are locked to idle dimensions to prevent layout shift from rune glyphs.
  const shimmerSx: SxProps<Theme> = showLoadingStyle
    ? {
        ...(idleDims ? { width: idleDims.w, height: idleDims.h } : {}),
        background: "none !important",
        backgroundImage: "none !important",
        backgroundColor: `${alpha(accent.main, 0.04)} !important`,
        border: `1px solid ${alpha(accent.main, 0.18)} !important`,
        color: `${accent.main} !important`,
        boxShadow: "none !important",
        filter: "none !important",
        transition: "background 0.35s ease, color 0.35s ease, border-color 0.35s ease",
        overflow: "visible",
        position: "relative",
        "&.Mui-disabled": {
          background: "none !important",
          backgroundImage: "none !important",
          backgroundColor: `${alpha(accent.main, 0.04)} !important`,
          border: `1px solid ${alpha(accent.main, 0.18)} !important`,
          color: `${accent.main} !important`,
          boxShadow: "none !important",
        },
      }
    : {
        transition: "background 0.35s ease, color 0.35s ease, border-color 0.35s ease",
        overflow: "visible",
        position: "relative",
      };

  const linkProps = href ? { component: Link, href } : {};

  return (
    <Button
      ref={btnRef}
      {...linkProps}
      variant={muiVariant}
      color={muiColor}
      size={size}
      disabled={disabled || showLoadingStyle}
      fullWidth={fullWidth}
      startIcon={showLoadingStyle ? undefined : startIcon}
      endIcon={showLoadingStyle ? undefined : endIcon}
      onClick={onClick}
      type={href ? undefined : type}
      sx={[baseSx, glowSx, ghostSx, shimmerSx, sx].filter(Boolean) as SxProps<Theme>}
    >
      {/* Perimeter orbit trace — positioned outside the button bounds */}
      {idleDims && (
        <PerimeterTrace
          width={idleDims.w}
          height={idleDims.h}
          phase={phase}
          borderRadius={baseRadius}
          color={accent.main}
        />
      )}

      {/* Content: decode-shimmer when loading, normal label+icons when idle */}
      {showLoadingStyle ? (
        <DecodeShimmerLabel label={shimmerLabel} loading={loading} />
      ) : (
        label
      )}
    </Button>
  );
}
