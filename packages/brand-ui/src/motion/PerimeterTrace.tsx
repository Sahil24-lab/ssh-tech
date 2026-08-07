"use client";

import { Box, useMediaQuery } from "@mui/material";
import { keyframes } from "@emotion/react";
import type { ShimmerPhase } from "./useDecodeShimmer";
import { brandTokens } from "../theme/tokens";

export type PerimeterTraceProps = {
  /** Measured button width in px */
  width: number;
  /** Measured button height in px */
  height: number;
  /** Current shimmer phase */
  phase: ShimmerPhase;
  /** Border radius to match the button (default 6) */
  borderRadius?: number;
  /** Seconds per full orbit (default 5) */
  orbitDuration?: number;
  /** Fraction of perimeter lit up (default 0.22) */
  traceLength?: number;
  /** Stroke color (default "primary.main" → #07DFC1) */
  color?: string;
};

const orbit = keyframes`
  from { stroke-dashoffset: 0; }
  to { stroke-dashoffset: -1; }
`;

export function PerimeterTrace({
  width,
  height,
  phase,
  borderRadius: br = 6,
  orbitDuration = 5,
  traceLength = 0.22,
  color = brandTokens.color.primary.main,
}: PerimeterTraceProps) {
  const active = phase === "loading" || phase === "settling";
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)", { noSsr: true });

  if (!active || !width || !height || reduceMotion) return null;
  const opacity = phase === "settling" ? 0.25 : 0.55;

  return (
    <Box
      component="svg"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width,
        height,
        pointerEvents: "none",
        overflow: "visible",
        transition: "opacity 0.4s ease",
        opacity,
      }}
      viewBox={`0 0 ${width} ${height}`}
    >
      <rect
        x={0.75}
        y={0.75}
        width={width - 1.5}
        height={height - 1.5}
        rx={br}
        ry={br}
        fill="none"
        stroke={color}
        strokeWidth={1}
        pathLength={1}
        strokeDasharray={`${traceLength} ${1 - traceLength}`}
        strokeLinecap="round"
        style={{
          animation: `${orbit} ${orbitDuration}s linear infinite`,
          filter: `drop-shadow(0 0 2px ${color}4D)`,
        }}
      />
    </Box>
  );
}
