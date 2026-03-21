"use client";

import { Box } from "@mui/material";
import {
  useDecodeShimmer,
  type UseDecodeShimmerOptions,
} from "./useDecodeShimmer";

const SCRAMBLE_FONT = [
  '"Noto Sans Runic"',
  '"Segoe UI Historic"',
  '"Noto Sans Symbols 2"',
  '"Apple Symbols"',
  '"Segoe UI Symbol"',
  "sans-serif",
].join(", ");

export type DecodeShimmerLabelProps = Pick<
  UseDecodeShimmerOptions,
  | "label"
  | "loading"
  | "scrambleInterval"
  | "settleInterval"
  | "swapRate"
  | "settleFrames"
>;

export function DecodeShimmerLabel({
  label,
  loading,
  scrambleInterval,
  settleInterval,
  swapRate,
  settleFrames,
  }: DecodeShimmerLabelProps) {
  const {
    chars,
    isSettled,
    getCharOpacity,
  } = useDecodeShimmer({
    label,
    loading,
    scrambleInterval,
    settleInterval,
    swapRate,
    settleFrames,
  });

  return (
    <Box
      component="span"
      sx={{ position: "relative", display: "inline-block" }}
    >
      {/* Invisible measure — real label in real font defines width */}
      <Box
        component="span"
        sx={{
          visibility: "hidden",
          whiteSpace: "pre",
          fontFamily: "inherit",
          fontWeight: "inherit",
          fontSize: "inherit",
          letterSpacing: "inherit",
        }}
      >
        {label}
      </Box>

      {/* Visible scramble layer — clipped to measure width */}
      <Box
        component="span"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "inline-flex",
          whiteSpace: "pre",
          overflow: "hidden",
        }}
      >
        {chars.map((ch, i) => {
          const settled = isSettled(i);
          const opacity = getCharOpacity(i);

          return (
            <Box
              component="span"
              key={`${label}-${i}`}
              sx={{
                display: "inline-block",
                opacity,
                fontFamily: settled ? "inherit" : SCRAMBLE_FONT,
                fontWeight: settled ? "inherit" : 400,
                transition: "opacity 0.2s ease",
                whiteSpace: "pre",
              }}
            >
              {ch}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
