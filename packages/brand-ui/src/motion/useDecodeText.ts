"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";

export type DecodeSize = "sm" | "lg";
export type DecodeGlyphSet = "matrix" | "runes" | "katakana" | "braille";

// Braille — fine detail, but reads as literal braille.
const SYMBOLS_BRAILLE = [
  "⠁",
  "⠂",
  "⠃",
  "⠄",
  "⠅",
  "⠆",
  "⠇",
  "⠈",
  "⠉",
  "⠊",
  "⠌",
  "⠍",
  "⠎",
  "⠏",
  "⠐",
  "⠑",
  "⠒",
  "⠓",
  "⠔",
  "⠕",
  "⠖",
  "⠗",
  "⠘",
  "⠙",
  "⠚",
  "⠜",
].join("");

// Runic — "mystical tech" vibe without being readable.
const SYMBOLS_RUNES = [
  "ᚠ",
  "ᚢ",
  "ᚦ",
  "ᚨ",
  "ᚺ",
  "ᚾ",
  "ᛃ",
  "ᛇ",
  "ᛈ",
  "ᛉ",
  "ᛋ",
  "ᛏ",
  "ᛒ",
  "ᛗ",
  "ᛚ",
  "ᛜ",
  "ᛟ",
].join("");

// Katakana — "matrix" vibes, but still recognizable.
const SYMBOLS_KATAKANA = [
  "ア",
  "エ",
  "オ",
  "コ",
  "サ",
  "シ",
  "ス",
  "ハ",
  "ヒ",
  "フ",
  "ヘ",
  "ホ",
  "メ",
  "モ",
].join("");

// Matrix disabled to avoid tofu/solid blocks; fall back to braille.
const SYMBOLS_MATRIX_SM = SYMBOLS_BRAILLE;
const SYMBOLS_MATRIX_LG = SYMBOLS_BRAILLE;

function getSymbolPool(glyphSet: DecodeGlyphSet, size: DecodeSize) {
  if (glyphSet === "braille") return SYMBOLS_BRAILLE;
  if (glyphSet === "runes") return SYMBOLS_RUNES;
  if (glyphSet === "katakana") return SYMBOLS_KATAKANA;
  return size === "lg" ? SYMBOLS_MATRIX_LG : SYMBOLS_MATRIX_SM;
}

/** Per-character metadata exposed to the renderer each frame. */
export type CharMeta = {
  settled: boolean;
  /** 0 → just started scrambling, 1 → about to settle */
  settleProximity: number;
  /** Deterministic per-frame "flash" flag (~8 % chance per unsettled char) */
  flash: boolean;
  /** Micro-scale jitter value, range [0.95 … 1.05] */
  scale: number;
  /** Sine-wave ripple value for this char, range [0 … 1] */
  ripple: number;
};

export type UseDecodeTextResult = {
  displayChars: string[];
  charMeta: CharMeta[];
  triggerDecode: () => void;
  tick: number;
};

export type UseDecodeTextOptions = {
  autoStart?: boolean;
  speed?: number;
  revealFrames?: number;
  size?: DecodeSize;
  glyphSet?: DecodeGlyphSet;
};

/* ------------------------------------------------------------------ */
/*  Deterministic seeded pseudo-random (Mulberry32)                    */
/* ------------------------------------------------------------------ */
function mulberry32(seed: number): number {
  let t = (seed + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

export function useDecodeText(
  target: string,
  options: UseDecodeTextOptions = {},
): UseDecodeTextResult {
  const {
    autoStart = true,
    speed = 28,
    revealFrames = 30,
    size = "sm",
    glyphSet = "runes",
  } = options;
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)", { noSsr: true });

  const [displayChars, setDisplayChars] = useState(() => target.split(""));
  const [charMeta, setCharMeta] = useState<CharMeta[]>(() =>
    target.split("").map(() => ({
      settled: true,
      settleProximity: 1,
      flash: false,
      scale: 1,
      ripple: 1,
    })),
  );
  const [tick, setTick] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const settledRef = useRef<Set<number>>(new Set());

  const symbolPool = getSymbolPool(glyphSet, size);

  const clearDecodeInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const triggerDecode = useCallback(() => {
    clearDecodeInterval();
    const chars = target.split("");
    if (reduceMotion) {
      setDisplayChars(chars);
      setCharMeta(chars.map(() => ({ settled: true, settleProximity: 1, flash: false, scale: 1, ripple: 1 })));
      return;
    }
    const nonSpaceIndices = chars
      .map((char, index) => (char === " " ? null : index))
      .filter((index): index is number => index !== null);
    settledRef.current = new Set();

    let frame = 0;
    const nonSpaceCharCount = nonSpaceIndices.length;

    const updateFrame = (currentFrame: number) => {
      setTick(currentFrame);

      const nextChars: string[] = [];
      const nextMeta: CharMeta[] = [];

      for (let i = 0; i < chars.length; i++) {
        const char = chars[i]!;

        if (char === " ") {
          nextChars.push(char);
          nextMeta.push({
            settled: true,
            settleProximity: 1,
            flash: false,
            scale: 1,
            ripple: 1,
          });
          continue;
        }

        const settleFrame = (i / chars.length) * revealFrames + 3;
        const framesUntilSettle = settleFrame - currentFrame;
        const isSettled =
          currentFrame >= settleFrame || settledRef.current.has(i);

        if (currentFrame >= settleFrame) {
          settledRef.current.add(i);
        }

        if (isSettled) {
          nextChars.push(char);
          nextMeta.push({
            settled: true,
            settleProximity: 1,
            flash: false,
            scale: 1,
            ripple: 1,
          });
          continue;
        }

        // --- Scramble character ---
        let nextChar = char;
        while (nextChar === char) {
          nextChar =
            symbolPool[Math.floor(Math.random() * symbolPool.length)] ?? char;
        }
        nextChars.push(nextChar);

        // --- Per-char metadata ---

        // 1. Settle proximity: 0 = far from settling, 1 = about to lock
        const totalScrambleFrames = settleFrame - 3; // earliest possible start
        const elapsed = currentFrame;
        const proximity =
          totalScrambleFrames > 0
            ? Math.min(1, Math.max(0, elapsed / totalScrambleFrames))
            : 0;

        // 2. Velocity-based ramp: last ~5 frames before settle → ramp 0→1
        const rampWindow = 5;
        const velocityRamp =
          framesUntilSettle <= rampWindow
            ? 1 - framesUntilSettle / rampWindow
            : 0;

        // 3. Flash: deterministic ~8% chance per unsettled char per frame
        const flashSeed = currentFrame * 9973 + i * 7919;
        const flashRand = mulberry32(flashSeed);
        const isFlash = flashRand < 0.08;

        // 4. Scale micro-jitter: seeded per frame+index, range [0.95, 1.05]
        const scaleSeed = currentFrame * 6359 + i * 4217;
        const scaleRand = mulberry32(scaleSeed);
        const scale = 0.95 + scaleRand * 0.1;

        // 5. Sine-wave ripple: phase offset by char index
        const ripple = Math.sin(currentFrame * 0.3 + i * 0.7) * 0.5 + 0.5;

        nextMeta.push({
          settled: false,
          settleProximity: Math.max(proximity, velocityRamp),
          flash: isFlash,
          scale,
          ripple,
        });
      }

      setDisplayChars(nextChars);
      setCharMeta(nextMeta);

      if (settledRef.current.size >= nonSpaceCharCount) {
        clearDecodeInterval();
      }
    };

    updateFrame(frame);

    intervalRef.current = setInterval(() => {
      frame += 1;
      updateFrame(frame);
    }, speed);
  }, [clearDecodeInterval, target, speed, revealFrames, symbolPool, reduceMotion]);

  useEffect(() => {
    if (!autoStart) return clearDecodeInterval;

    triggerDecode();
    return clearDecodeInterval;
  }, [autoStart, clearDecodeInterval, triggerDecode]);

  return { displayChars, charMeta, triggerDecode, tick };
}
