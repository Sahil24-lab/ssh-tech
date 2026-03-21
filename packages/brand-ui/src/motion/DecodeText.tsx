"use client";

import { Box } from "@mui/material";
import {
  useDecodeText,
  type DecodeGlyphSet,
  type UseDecodeTextOptions,
} from "./useDecodeText";

export type DecodeTextProps = {
  text: string;
  clipOverflow?: boolean;
  measure?: "text" | "scramble";
  scrambleOpacityRange?: [number, number];
  trimMeasure?: boolean;
  scrambleFontFamily?: string;
} & UseDecodeTextOptions;

export function DecodeText({
  text,
  autoStart = true,
  speed,
  revealFrames,
  size,
  glyphSet,
  clipOverflow = false,
  measure = "text",
  scrambleOpacityRange = [0.18, 0.8],
  trimMeasure = false,
  scrambleFontFamily = [
    '"Noto Sans Runic"',
    '"Segoe UI Historic"',
    '"Noto Sans Symbols 2"',
    '"Noto Sans Symbols"',
    '"Apple Symbols"',
    '"Segoe UI Symbol"',
    "sans-serif",
  ].join(", "),
}: DecodeTextProps) {
  const { displayChars, charMeta, triggerDecode } = useDecodeText(text, {
    autoStart,
    speed,
    revealFrames,
    size,
    glyphSet,
  });

  const activeGlyphSet: DecodeGlyphSet = glyphSet ?? "runes";

  const measurePlaceholder =
    activeGlyphSet === "braille"
      ? "\u2801"
      : activeGlyphSet === "runes"
        ? "ᚠ"
        : "·";

  const baseMeasureText =
    measure === "scramble" ? text.replace(/[^ ]/g, measurePlaceholder) : text;
  const measureText = trimMeasure
    ? baseMeasureText.replace(/\s+$/u, "")
    : baseMeasureText;

  /* ------------------------------------------------------------------ */
  /*  Glyph intensity (braille dot-count for density-aware opacity)      */
  /* ------------------------------------------------------------------ */
  const getGlyphIntensity = (char: string) => {
    if (activeGlyphSet !== "braille") return 4;
    const code = char.codePointAt(0) ?? 0;
    if (code < 0x2800 || code > 0x28ff) return 4;
    let bits = code - 0x2800;
    let count = 0;
    while (bits) {
      bits &= bits - 1;
      count += 1;
    }
    return count;
  };

  /* ------------------------------------------------------------------ */
  /*  Scramble opacity — now enhanced with ripple, flash, velocity ramp  */
  /* ------------------------------------------------------------------ */
  const getScrambleOpacity = (char: string, index: number): number => {
    const meta = charMeta[index];
    if (!meta || meta.settled) return 1;

    const density = getGlyphIntensity(char);
    const [minOpacity, maxOpacity] = scrambleOpacityRange;
    const range = maxOpacity - minOpacity;

    // Base opacity from density
    const densityFactor = density / 8;
    let opacity = maxOpacity - densityFactor * range * 0.4;

    // Sine-wave ripple modulation: adds ±30% of range
    opacity += (meta.ripple - 0.5) * range * 0.6;

    // Velocity ramp: as char approaches settle, push toward maxOpacity
    opacity += meta.settleProximity * range * 0.4;

    // Flash override: spike to near-full for one frame
    if (meta.flash) {
      opacity = maxOpacity * 0.95;
    }

    return Math.min(maxOpacity, Math.max(minOpacity, opacity));
  };

  return (
    <Box
      component="span"
      onMouseEnter={triggerDecode}
      sx={{
        display: "inline-block",
        position: "relative",
        overflow: clipOverflow ? "hidden" : "visible",
      }}
    >
      {/* Invisible measure layer */}
      <Box component="span" sx={{ visibility: "hidden" }}>
        {measureText}
      </Box>

      {/* Visible decode layer */}
      <Box
        component="span"
        sx={{
          position: "absolute",
          inset: 0,
          display: "inline-block",
          whiteSpace: "pre",
          pointerEvents: "none",
        }}
      >
        {displayChars.map((char, index) => {
          const meta = charMeta[index];
          const settled =
            text[index] === " " || char === text[index] || meta?.settled;
          const scrambleOpacity = settled ? 1 : getScrambleOpacity(char, index);
          const scale = settled ? 1 : (meta?.scale ?? 1);

          return (
            <Box
              component="span"
              key={`${text}-${index}`}
              sx={{
                display: "inline-block",
                color: settled ? "inherit" : "primary.main",
                opacity: settled ? 1 : scrambleOpacity,
                fontFamily: settled ? "inherit" : scrambleFontFamily,
                fontWeight: settled ? "inherit" : 400,
                fontSynthesis: settled ? "auto" : "none",
                transform: settled ? "none" : `scale(${scale})`,
                transition: settled
                  ? "color 0.12s ease, opacity 0.12s ease, transform 0.12s ease"
                  : "none",
              }}
            >
              {char}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
