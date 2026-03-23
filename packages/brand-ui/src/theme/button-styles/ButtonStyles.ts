import { Components, Theme } from "@mui/material/styles";

// ─── Shared timing ─────────────────────────────────────────────────────────────
// Spring for transform — fast out, gentle overshoot settle.
// Ease for color/opacity/shadow — smooth and neutral.
const SPRING = "cubic-bezier(0.34, 1.26, 0.64, 1)";
const EASE   = "cubic-bezier(0.4, 0, 0.2, 1)";

const ButtonStyles: Components<Theme> = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      // Convert to function so we can reference theme for focus-visible.
      root: ({ theme }) => ({
        textTransform: "none",
        borderRadius: 6,
        fontWeight: 600,
        letterSpacing: "0.03em",
        lineHeight: 1.5,
        position: "relative",
        transition: [
          `background 0.22s ${EASE}`,
          `box-shadow 0.22s ${EASE}`,
          `border-color 0.22s ${EASE}`,
          `color 0.22s ${EASE}`,
          `transform 0.18s ${SPRING}`,
        ].join(", "),
        boxShadow: "none",

        "&:hover": {
          transform: "translateY(-1px)",
        },
        // Physical press — scale down + snap back to baseline
        "&:active": {
          transform: "scale(0.97) translateY(0px)",
          transition: `transform 0.08s ${EASE}, box-shadow 0.08s ${EASE}`,
          boxShadow: "none !important",
        },

        // Keyboard focus ring — brand-teal by default, overridden per color variant below.
        // 3px offset pushes the ring clear of the border so it's always visible.
        // We only show it on :focus-visible (keyboard nav), not :focus (click).
        "&:focus-visible": {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: "3px",
          zIndex: 1,
        },

        // Disabled — dark navy surface so the button stays legible against the
        // brand teal gradient background. A pure teal fill (rgba 7,223,193,0.08)
        // blends into the gradient and becomes invisible.
        // The muted near-white text + teal border signal "unavailable" while
        // keeping the button clearly readable.
        "&.Mui-disabled": {
          opacity: 1,
          cursor: "not-allowed",
          pointerEvents: "auto",
          transform: "none",
          boxShadow: "none",
          background: "rgba(14, 26, 36, 0.75) !important",
          backgroundImage: "none !important",
          color: "rgba(239, 254, 235, 0.50) !important",
          border: "1px solid rgba(7, 223, 193, 0.38) !important",
        },
      }),

      sizeSmall: {
        fontSize: "0.78rem",
        padding: "5px 14px",
        borderRadius: 5,
        letterSpacing: "0.035em",
      },
      sizeMedium: {
        fontSize: "0.875rem",
        padding: "8px 20px",
      },
      sizeLarge: {
        fontSize: "0.9375rem",
        padding: "11px 28px",
        letterSpacing: "0.025em",
      },

      // ── Disabled state — redeclared at slot level to beat MUI's higher-specificity
      // .MuiButton-contained.Mui-disabled / .MuiButton-outlined.Mui-disabled rules.
      // root-level &.Mui-disabled loses the cascade to these compound selectors.
      contained: {
        "&.Mui-disabled": {
          background: "rgba(14, 26, 36, 0.75) !important",
          backgroundImage: "none !important",
          color: "rgba(239, 254, 235, 0.50) !important",
          border: "1px solid rgba(7, 223, 193, 0.38) !important",
          boxShadow: "none",
        },
      },
      outlined: {
        "&.Mui-disabled": {
          background: "rgba(14, 26, 36, 0.75) !important",
          backgroundImage: "none !important",
          color: "rgba(239, 254, 235, 0.50) !important",
          border: "1px solid rgba(7, 223, 193, 0.38) !important",
          boxShadow: "none",
        },
      },
      text: {
        "&.Mui-disabled": {
          background: "transparent !important",
          backgroundImage: "none !important",
          color: "rgba(239, 254, 235, 0.35) !important",
          border: "none !important",
          boxShadow: "none",
        },
      },
    },

    variants: [
      // ─── CONTAINED ──────────────────────────────────────────────────────────
      //
      // Two-layer background:
      //   Top layer:  soft top-highlight simulates a light source hitting the
      //               button face — gives physical depth without being skeuomorphic.
      //   Base layer: brand colour gradient.
      // Inset box-shadow adds a thin rim highlight at the top edge.

      {
        props: { variant: "contained", color: "primary" },
        style: ({ theme }) => ({
          background: [
            "linear-gradient(to bottom, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 55%)",
            `linear-gradient(160deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 55%, ${theme.palette.primary.dark} 100%)`,
          ].join(", "),
          color: theme.palette.primary.contrastText,
          boxShadow: [
            "inset 0 1px 0 rgba(255,255,255,0.14)",
            "0 1px 3px rgba(0,0,0,0.22)",
          ].join(", "),
          "&:hover": {
            background: [
              "linear-gradient(to bottom, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 55%)",
              `linear-gradient(160deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            ].join(", "),
            boxShadow: [
              "inset 0 1px 0 rgba(255,255,255,0.18)",
              "0 4px 16px rgba(7,223,193,0.36)",
              "0 2px 6px rgba(0,0,0,0.24)",
            ].join(", "),
          },
          "&:active": {
            background: theme.palette.primary.dark,
            boxShadow: "inset 0 1px 0 rgba(0,0,0,0.12), inset 0 2px 4px rgba(0,0,0,0.10)",
          },
          // Inherits teal focus ring from root — correct for primary.
        }),
      },

      {
        props: { variant: "contained", color: "secondary" },
        style: ({ theme }) => ({
          background: [
            "linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 55%)",
            `linear-gradient(160deg, ${theme.palette.secondary.light}55 0%, ${theme.palette.secondary.main} 40%, ${theme.palette.secondary.dark} 100%)`,
          ].join(", "),
          color: theme.palette.secondary.contrastText,
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10), 0 1px 3px rgba(0,0,0,0.22)",
          "&:hover": {
            background: [
              "linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 55%)",
              `linear-gradient(160deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
            ].join(", "),
            boxShadow: [
              "inset 0 1px 0 rgba(255,255,255,0.14)",
              "0 4px 16px rgba(6,127,113,0.38)",
              "0 2px 6px rgba(0,0,0,0.24)",
            ].join(", "),
          },
          "&:active": {
            background: theme.palette.secondary.dark,
            boxShadow: "inset 0 1px 0 rgba(0,0,0,0.12)",
          },
          "&:focus-visible": {
            outline: `2px solid ${theme.palette.secondary.light}`,
          },
        }),
      },

      {
        props: { variant: "contained", color: "error" },
        style: ({ theme }) => ({
          background: [
            "linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 50%)",
            `linear-gradient(160deg, ${theme.palette.error.main} 0%, ${theme.palette.error.dark} 100%)`,
          ].join(", "),
          color: theme.palette.error.contrastText,
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10), 0 1px 3px rgba(0,0,0,0.24)",
          "&:hover": {
            background: [
              "linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 50%)",
              `linear-gradient(160deg, ${theme.palette.error.light} 0%, ${theme.palette.error.main} 100%)`,
            ].join(", "),
            boxShadow: [
              "inset 0 1px 0 rgba(255,255,255,0.14)",
              "0 4px 16px rgba(255,92,108,0.34)",
              "0 2px 6px rgba(0,0,0,0.24)",
            ].join(", "),
          },
          "&:active": {
            background: theme.palette.error.dark,
            boxShadow: "inset 0 1px 0 rgba(0,0,0,0.12)",
          },
          "&:focus-visible": {
            outline: `2px solid ${theme.palette.error.main}`,
          },
        }),
      },

      {
        props: { variant: "contained", color: "warning" },
        style: ({ theme }) => ({
          background: [
            "linear-gradient(to bottom, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 55%)",
            `linear-gradient(160deg, ${theme.palette.warning.light} 0%, ${theme.palette.warning.main} 55%, ${theme.palette.warning.dark} 100%)`,
          ].join(", "),
          color: theme.palette.warning.contrastText,
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.14), 0 1px 3px rgba(0,0,0,0.22)",
          "&:hover": {
            background: [
              "linear-gradient(to bottom, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 55%)",
              `linear-gradient(160deg, ${theme.palette.warning.main} 0%, ${theme.palette.warning.dark} 100%)`,
            ].join(", "),
            boxShadow: [
              "inset 0 1px 0 rgba(255,255,255,0.18)",
              "0 4px 16px rgba(240,160,75,0.34)",
              "0 2px 6px rgba(0,0,0,0.22)",
            ].join(", "),
          },
          "&:active": {
            background: theme.palette.warning.dark,
            boxShadow: "inset 0 1px 0 rgba(0,0,0,0.12)",
          },
          "&:focus-visible": {
            outline: `2px solid ${theme.palette.warning.main}`,
          },
        }),
      },

      // ─── OUTLINED ───────────────────────────────────────────────────────────
      //
      // "Engineered precision" — 1px border reads as machined, not heavy.
      // Inset rim shadow creates a recessed-panel edge at rest.
      // Hover: translucent wash floods inward + outer halo.

      {
        props: { variant: "outlined", color: "primary" },
        style: ({ theme }) => ({
          border: `1px solid ${theme.palette.primary.main}`,
          color: theme.palette.primary.main,
          backgroundColor: "transparent",
          boxShadow: "inset 0 1px 0 rgba(7,223,193,0.08)",
          "&:hover": {
            border: `1px solid ${theme.palette.primary.light}`,
            color: theme.palette.primary.light,
            backgroundColor: "rgba(7,223,193,0.07)",
            boxShadow: [
              "inset 0 0 20px rgba(7,223,193,0.06)",
              "0 0 14px rgba(7,223,193,0.20)",
              "0 2px 8px rgba(0,0,0,0.16)",
            ].join(", "),
          },
          "&:active": {
            backgroundColor: "rgba(7,223,193,0.12)",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.10)",
          },
          // Inherits teal focus ring from root — correct for primary.
        }),
      },

      {
        props: { variant: "outlined", color: "secondary" },
        style: ({ theme }) => ({
          // secondary.light (#52F6D7) — visible on dark navy while staying in the
          // secondary palette (secondary.main #067F71 is too dark to read as a border).
          border: `1px solid ${theme.palette.secondary.light}`,
          color: theme.palette.secondary.light,
          backgroundColor: "transparent",
          boxShadow: "inset 0 1px 0 rgba(82,246,215,0.06)",
          "&:hover": {
            border: `1px solid ${theme.palette.secondary.light}`,
            color: theme.palette.secondary.light,
            backgroundColor: "rgba(82,246,215,0.07)",
            boxShadow: [
              "inset 0 0 20px rgba(82,246,215,0.05)",
              "0 0 12px rgba(82,246,215,0.18)",
              "0 2px 8px rgba(0,0,0,0.14)",
            ].join(", "),
          },
          "&:active": {
            backgroundColor: "rgba(82,246,215,0.12)",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.10)",
          },
          "&:focus-visible": {
            outline: `2px solid ${theme.palette.secondary.light}`,
          },
        }),
      },

      {
        props: { variant: "outlined", color: "error" },
        style: ({ theme }) => ({
          border: `1px solid ${theme.palette.error.main}`,
          color: theme.palette.error.main,
          backgroundColor: "transparent",
          "&:hover": {
            border: `1px solid ${theme.palette.error.light}`,
            color: theme.palette.error.light,
            backgroundColor: "rgba(255,92,108,0.07)",
            boxShadow: "inset 0 0 16px rgba(255,92,108,0.05), 0 0 12px rgba(255,92,108,0.20)",
          },
          "&:active": {
            backgroundColor: "rgba(255,92,108,0.12)",
          },
          "&:focus-visible": {
            outline: `2px solid ${theme.palette.error.main}`,
          },
        }),
      },

      {
        props: { variant: "outlined", color: "warning" },
        style: ({ theme }) => ({
          border: `1px solid ${theme.palette.warning.main}`,
          color: theme.palette.warning.main,
          backgroundColor: "transparent",
          "&:hover": {
            border: `1px solid ${theme.palette.warning.light}`,
            color: theme.palette.warning.light,
            backgroundColor: "rgba(240,160,75,0.07)",
            boxShadow: "0 0 12px rgba(240,160,75,0.20)",
          },
          "&:active": {
            backgroundColor: "rgba(240,160,75,0.12)",
          },
          "&:focus-visible": {
            outline: `2px solid ${theme.palette.warning.main}`,
          },
        }),
      },

      // ─── TEXT ───────────────────────────────────────────────────────────────
      //
      // Underline-slide via ::after — the bar grows left-to-right on hover.
      // No vertical lift (text buttons have no physical weight).
      // Background fade-in adds the hover affordance without the lift.

      {
        props: { variant: "text", color: "primary" },
        style: ({ theme }) => ({
          color: theme.palette.primary.main,
          backgroundColor: "transparent",
          overflow: "visible",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "7px",
            left: "14px",
            width: 0,
            height: "1.5px",
            borderRadius: "1px",
            background: theme.palette.primary.main,
            transition: `width 0.28s ${EASE}, background-color 0.22s ${EASE}`,
          },
          "&:hover": {
            color: theme.palette.primary.light,
            backgroundColor: "rgba(7,223,193,0.07)",
            transform: "none",
            "&::after": {
              width: "calc(100% - 28px)",
              background: theme.palette.primary.light,
            },
          },
          "&:active": {
            transform: "scale(0.97)",
          },
          // Inherits teal focus ring from root.
        }),
      },

      {
        props: { variant: "text", color: "secondary" },
        style: ({ theme }) => ({
          color: theme.palette.text.secondary,
          backgroundColor: "transparent",
          overflow: "visible",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "7px",
            left: "14px",
            width: 0,
            height: "1.5px",
            borderRadius: "1px",
            background: theme.palette.text.secondary,
            transition: `width 0.28s ${EASE}, background-color 0.22s ${EASE}`,
          },
          "&:hover": {
            color: theme.palette.primary.main,
            backgroundColor: "rgba(7,223,193,0.05)",
            transform: "none",
            "&::after": {
              width: "calc(100% - 28px)",
              background: theme.palette.primary.main,
            },
          },
          "&:active": {
            transform: "scale(0.97)",
          },
          "&:focus-visible": {
            outline: `2px solid ${theme.palette.text.secondary}`,
          },
        }),
      },

      {
        props: { variant: "text", color: "error" },
        style: ({ theme }) => ({
          color: theme.palette.error.main,
          backgroundColor: "transparent",
          overflow: "visible",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "7px",
            left: "14px",
            width: 0,
            height: "1.5px",
            borderRadius: "1px",
            background: theme.palette.error.main,
            transition: `width 0.28s ${EASE}`,
          },
          "&:hover": {
            color: theme.palette.error.light,
            backgroundColor: "rgba(255,92,108,0.07)",
            transform: "none",
            "&::after": {
              width: "calc(100% - 28px)",
              background: theme.palette.error.light,
            },
          },
          "&:active": {
            transform: "scale(0.97)",
          },
          "&:focus-visible": {
            outline: `2px solid ${theme.palette.error.main}`,
          },
        }),
      },

      // Previously missing — text/warning fell back to raw MUI defaults.
      {
        props: { variant: "text", color: "warning" },
        style: ({ theme }) => ({
          color: theme.palette.warning.main,
          backgroundColor: "transparent",
          overflow: "visible",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "7px",
            left: "14px",
            width: 0,
            height: "1.5px",
            borderRadius: "1px",
            background: theme.palette.warning.main,
            transition: `width 0.28s ${EASE}`,
          },
          "&:hover": {
            color: theme.palette.warning.light,
            backgroundColor: "rgba(240,160,75,0.07)",
            transform: "none",
            "&::after": {
              width: "calc(100% - 28px)",
              background: theme.palette.warning.light,
            },
          },
          "&:active": {
            transform: "scale(0.97)",
          },
          "&:focus-visible": {
            outline: `2px solid ${theme.palette.warning.main}`,
          },
        }),
      },
    ],
  },
};

export default ButtonStyles;
