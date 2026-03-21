"use client";

import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import type { ShimmerPhase } from "./useDecodeShimmer";

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

export function PerimeterTrace({
  width,
  height,
  phase,
  borderRadius: br = 6,
  orbitDuration = 5,
  traceLength = 0.22,
  color = "#07DFC1",
}: PerimeterTraceProps) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const active = phase === "loading" || phase === "settling";

  useEffect(() => {
    if (!active) {
      setProgress(0);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }
    const ms = orbitDuration * 1000;
    const animate = (ts: number) => {
      setProgress((ts % ms) / ms);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, orbitDuration]);

  if (!active || !width || !height) return null;

  const perimeter =
    2 * (width - 2 * br) + 2 * (height - 2 * br) + 2 * Math.PI * br;
  const segLen = perimeter * traceLength;
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
        strokeDasharray={`${segLen} ${perimeter - segLen}`}
        strokeDashoffset={-progress * perimeter}
        strokeLinecap="round"
        style={{ filter: `drop-shadow(0 0 2px ${color}4D)` }}
      />
    </Box>
  );
}
