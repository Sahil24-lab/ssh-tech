"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";

/* ──────────────────────────────────────────────────────────────
   Rune pool + seeded PRNG
   ────────────────────────────────────────────────────────────── */
const RUNES = "ᚠᚢᚦᚨᚺᚾᛃᛇᛈᛉᛋᛏᛒᛗᛚᛜᛟ";

function mulberry32(seed: number): number {
  let t = (seed + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

/* ──────────────────────────────────────────────────────────────
   Runic hint glyphs for "Processing"
   Hand-picked: ᚹᚱᛜᚲᛊᛇᛇᛂᚺᛈ
   ────────────────────────────────────────────────────────────── */
const HINT_GLYPH_MAP: Record<string, string> = {
  P: "ᚹ",
  r: "ᚱ",
  o: "ᛜ",
  c: "ᚲ",
  e: "ᛊ",
  s: "ᛇ",
  i: "ᛂ",
  n: "ᚺ",
  g: "ᛈ",
};
const HINT_TEXT = "Processing";
const HINT_GLYPHS = HINT_TEXT.split("").map((ch) => HINT_GLYPH_MAP[ch] ?? ch);

/* ──────────────────────────────────────────────────────────────
   Types
   ────────────────────────────────────────────────────────────── */
export type ShimmerPhase = "idle" | "loading" | "settling";

export type UseDecodeShimmerOptions = {
  label: string;
  loading: boolean;
  scrambleInterval?: number;
  settleInterval?: number;
  swapRate?: number;
  settleFrames?: number;
};

export type UseDecodeShimmerResult = {
  chars: string[];
  tick: number;
  phase: ShimmerPhase;
  lockedPositions: Set<number>;
  hintActive: boolean;
  isSettled: (index: number) => boolean;
  getCharOpacity: (index: number) => number;
};

/* ──────────────────────────────────────────────────────────────
   Hook
   ────────────────────────────────────────────────────────────── */
export function useDecodeShimmer(
  options: UseDecodeShimmerOptions,
): UseDecodeShimmerResult {
  const {
    label,
    loading,
    scrambleInterval = 75,
    settleInterval = 40,
    swapRate = 0.45,
    settleFrames = 16,
  } = options;
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)", { noSsr: true });

  const [chars, setChars] = useState<string[]>(label.split(""));
  const [tick, setTick] = useState(0);
  const [phase, setPhase] = useState<ShimmerPhase>("idle");
  const [lockedPositions, setLockedPositions] = useState<Set<number>>(
    new Set(),
  );
  const [hintActive, setHintActive] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const charsRef = useRef<string[]>(label.split(""));

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (reduceMotion) setPhase(loading ? "loading" : "idle");
    else if (loading) setPhase("loading");
    else if (phase === "loading") setPhase("settling");
  }, [loading, phase, reduceMotion]);

  useEffect(() => {
    clearTimer();

    if (reduceMotion) {
      const stableChars = label.split("");
      charsRef.current = stableChars;
      setChars(stableChars);
      setLockedPositions(new Set());
      setHintActive(false);
      return;
    }

    if (phase === "idle") {
      charsRef.current = label.split("");
      setChars(label.split(""));
      setLockedPositions(new Set());
      setHintActive(false);
      return;
    }

    if (phase === "settling") {
      let f = 0;
      const settled = new Set<number>();
      setLockedPositions(new Set());
      setHintActive(false);

      intervalRef.current = setInterval(() => {
        f += 1;
        setTick(f);
        const next = label.split("").map((ch, i) => {
          if (ch === " ") return ch;
          const settleAt = (i / label.length) * settleFrames + 2;
          if (f >= settleAt) {
            settled.add(i);
            return ch;
          }
          return RUNES[Math.floor(Math.random() * RUNES.length)]!;
        });
        charsRef.current = next;
        setChars(next);
        if (settled.size >= label.replace(/ /g, "").length) {
          clearTimer();
          setPhase("idle");
        }
      }, settleInterval);
      return clearTimer;
    }

    if (phase === "loading") {
      const labelLen = label.length;
      const padLeft = Math.max(
        0,
        Math.floor((labelLen - HINT_GLYPHS.length) / 2),
      );
      const hintMap = new Array<string | null>(labelLen).fill(null);
      for (let h = 0; h < HINT_GLYPHS.length && padLeft + h < labelLen; h++) {
        if (HINT_TEXT[h] === " ") continue;
        hintMap[padLeft + h] = HINT_GLYPHS[h]!;
      }
      const hintIndices = hintMap
        .map((g, i) => (g ? i : null))
        .filter((i): i is number => i !== null);

      const revealOrder = [...hintIndices];
      for (let j = revealOrder.length - 1; j > 0; j--) {
        const k = Math.floor(mulberry32(j * 7919 + 3571) * (j + 1));
        [revealOrder[j], revealOrder[k]] = [revealOrder[k]!, revealOrder[j]!];
      }
      const scatterOrder = [...hintIndices];
      for (let j = scatterOrder.length - 1; j > 0; j--) {
        const k = Math.floor(mulberry32(j * 1217 + 9973) * (j + 1));
        [scatterOrder[j], scatterOrder[k]] = [
          scatterOrder[k]!,
          scatterOrder[j]!,
        ];
      }

      const SCRAMBLE_ONLY = 40,
        REVEAL_TICKS = 20,
        HOLD_TICKS = 18,
        SCATTER_TICKS = 14,
        COOLDOWN = 8;
      const CYCLE_LEN =
        SCRAMBLE_ONLY + REVEAL_TICKS + HOLD_TICKS + SCATTER_TICKS + COOLDOWN;
      const lockedSet = new Set<number>();
      let f = 0;

      const initial = label
        .split("")
        .map((ch) =>
          ch === " " ? " " : RUNES[Math.floor(Math.random() * RUNES.length)]!,
        );
      charsRef.current = initial;
      setChars(initial);
      setTick(0);
      setLockedPositions(new Set());
      setHintActive(false);

      const run = () => {
        f += 1;
        setTick(f);
        const prev = charsRef.current;
        const cyclePos = f % CYCLE_LEN;
        lockedSet.clear();
        let isActive = false;

        if (
          cyclePos >= SCRAMBLE_ONLY &&
          cyclePos < SCRAMBLE_ONLY + REVEAL_TICKS
        ) {
          isActive = true;
          const num = Math.floor(
            ((cyclePos - SCRAMBLE_ONLY) / REVEAL_TICKS) * revealOrder.length,
          );
          for (let r = 0; r < num && r < revealOrder.length; r++)
            lockedSet.add(revealOrder[r]!);
        } else if (
          cyclePos >= SCRAMBLE_ONLY + REVEAL_TICKS &&
          cyclePos < SCRAMBLE_ONLY + REVEAL_TICKS + HOLD_TICKS
        ) {
          isActive = true;
          for (const idx of hintIndices) lockedSet.add(idx);
        } else if (
          cyclePos >= SCRAMBLE_ONLY + REVEAL_TICKS + HOLD_TICKS &&
          cyclePos < SCRAMBLE_ONLY + REVEAL_TICKS + HOLD_TICKS + SCATTER_TICKS
        ) {
          isActive = true;
          const num = Math.floor(
            ((cyclePos - (SCRAMBLE_ONLY + REVEAL_TICKS + HOLD_TICKS)) /
              SCATTER_TICKS) *
              scatterOrder.length,
          );
          for (const idx of hintIndices) lockedSet.add(idx);
          for (let s = 0; s < num && s < scatterOrder.length; s++)
            lockedSet.delete(scatterOrder[s]!);
        }

        setLockedPositions(new Set(lockedSet));
        setHintActive(isActive);

        const next = label.split("").map((ch, i) => {
          if (ch === " ") return " ";
          if (lockedSet.has(i) && hintMap[i]) return hintMap[i]!;
          const shouldSwap = mulberry32(f * 3571 + i * 1217) < swapRate;
          if (!shouldSwap && prev[i] && RUNES.includes(prev[i]!))
            return prev[i]!;
          return RUNES[Math.floor(Math.random() * RUNES.length)]!;
        });
        charsRef.current = next;
        setChars(next);
      };

      intervalRef.current = setInterval(run, scrambleInterval);
      return clearTimer;
    }
  }, [
    phase,
    label,
    clearTimer,
    scrambleInterval,
    settleInterval,
    swapRate,
    settleFrames,
    reduceMotion,
  ]);

  const isSettled = useCallback(
    (index: number): boolean => {
      if (phase === "idle") return true;
      if (phase === "settling") return chars[index] === label[index];
      return false;
    },
    [phase, chars, label],
  );

  const getCharOpacity = useCallback(
    (index: number): number => {
      if (phase === "idle") return 1;
      if (isSettled(index)) return 1;
      const isLocked = lockedPositions.has(index);
      const ripple = Math.sin(tick * 0.15 + index * 0.4) * 0.5 + 0.5;
      const flash = mulberry32(tick * 9973 + index * 7919) < 0.05;
      if (isLocked) return 0.75;
      if (hintActive) return 0.1 + ripple * 0.12;
      if (flash) return 0.85;
      return 0.22 + ripple * 0.4;
    },
    [phase, tick, isSettled, lockedPositions, hintActive],
  );

  return {
    chars,
    tick,
    phase,
    lockedPositions,
    hintActive,
    isSettled,
    getCharOpacity,
  };
}
