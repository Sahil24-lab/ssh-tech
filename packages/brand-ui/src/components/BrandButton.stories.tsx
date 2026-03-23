import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Box, Typography, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { BrandButton } from "./BrandButton";
import type { BrandButtonColor, BrandButtonVariant } from "./BrandButton";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof BrandButton> = {
  title: "Components/BrandButton",
  component: BrandButton,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: [
          "The primary interactive element across SSH Tech. Four variants form a clear hierarchy: ",
          "**contained** (high-emphasis CTA) → **outlined** (secondary action) → **text** (inline/tertiary) → **ghost** (lowest weight, dark-surface contexts).",
          "\n\n",
          "Four semantic colours map to intent: **primary** (brand action), **secondary** (supporting), **danger** (destructive), **warning** (proceed-with-care).",
          "\n\n",
          "All variants have branded `focus-visible` rings for keyboard navigation — each colour has its own ring colour.",
        ].join(""),
      },
    },
  },
  args: {
    label: "Get Started",
    href: "#",
    variant: "contained",
    color: "primary",
    size: "medium",
    glow: false,
    loading: false,
    disabled: false,
  },
  argTypes: {
    label: {
      description: "Button label text.",
      control: "text",
    },
    loadingLabel: {
      description:
        "Alternate text shown by the decode-shimmer animation while `loading` is true. Falls back to `label` when omitted.",
      control: "text",
    },
    href: {
      description:
        "When provided the button renders as a Next.js `<Link>`. Omit to render a plain `<button>`.",
      control: "text",
    },
    variant: {
      description:
        "Visual treatment. Use `contained` for the primary CTA, `outlined` for secondary actions, `text` for inline/tertiary, `ghost` for lowest-weight actions on dark surfaces.",
      control: "select",
      options: ["contained", "outlined", "text", "ghost"],
    },
    color: {
      description:
        "Semantic colour role. `primary` = brand turquoise, `secondary` = deep green, `danger` = red (destructive), `warning` = amber (cautionary).",
      control: "select",
      options: ["primary", "secondary", "danger", "warning"],
    },
    size: {
      description: "`small` for compact UI, `medium` (default) for most contexts, `large` for hero CTAs.",
      control: "select",
      options: ["small", "medium", "large"],
    },
    glow: {
      description:
        "Adds an animated ambient pulse halo. Only visible on `contained` buttons. Intended for the hero section primary CTA — use sparingly.",
      control: "boolean",
    },
    loading: {
      description:
        "Activates the decode-shimmer + perimeter-trace loading animation. The button is disabled while loading.",
      control: "boolean",
    },
    disabled: {
      description: "Disables interaction. The button stays visible at reduced opacity with a teal border.",
      control: "boolean",
    },
    fullWidth: {
      description: "Stretches the button to fill its container. Useful in forms and mobile layouts.",
      control: "boolean",
    },
    startIcon: {
      table: { disable: true },
    },
    endIcon: {
      table: { disable: true },
    },
    onClick: {
      table: { disable: true },
    },
    sx: {
      table: { disable: true },
    },
    type: {
      description: "HTML button type. Only applies when `href` is not set.",
      control: "select",
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof BrandButton>;

// ─── Shared label maps ────────────────────────────────────────────────────────

const VARIANTS: BrandButtonVariant[] = ["contained", "outlined", "text", "ghost"];
const COLORS: BrandButtonColor[] = ["primary", "secondary", "danger", "warning"];

const colorLabels: Record<BrandButtonColor, string> = {
  primary: "Primary",
  secondary: "Secondary",
  danger: "Danger",
  warning: "Warning",
};

const variantLabels: Record<BrandButtonVariant, string> = {
  contained: "Contained",
  outlined: "Outlined",
  text: "Text",
  ghost: "Ghost",
};

// ─── Section label helper ─────────────────────────────────────────────────────

function Label({ children }: { children: string }) {
  return (
    <Typography
      variant="overline"
      sx={{ color: "text.disabled", letterSpacing: "0.1em", display: "block", mb: 1.5 }}
    >
      {children}
    </Typography>
  );
}

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    size: "small",
    type: "reset",
    loadingLabel: "start testing",
    label: "Testing Button",
    variant: "text",
    glow: false,
    color: "primary"
  }
};

// ─── Variant × Color matrix ───────────────────────────────────────────────────

export const AllVariants: Story = {
  name: "All Variants × Colors",
  parameters: {
    docs: {
      description: {
        story:
          "Full matrix of all 4 variants × 4 semantic colours. Use this to verify colour consistency and contrast across the hierarchy.",
      },
    },
  },
  render: () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
      {VARIANTS.map((variant) => (
        <Box key={variant}>
          <Label>{variantLabels[variant]}</Label>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            {COLORS.map((color) => (
              <BrandButton
                key={color}
                label={colorLabels[color]}
                href="#"
                variant={variant}
                color={color}
              />
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  ),
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`small` for dense UI (table actions, chips), `medium` for standard usage, `large` for hero CTAs. All three sizes are shown for the main surface-level variants.",
      },
    },
  },
  render: () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {(["contained", "outlined", "ghost"] as BrandButtonVariant[]).map((variant) => (
        <Box key={variant}>
          <Label>{variantLabels[variant]}</Label>
          <Stack direction="row" spacing={2} alignItems="center">
            <BrandButton label="Small" href="#" variant={variant} size="small" />
            <BrandButton label="Medium" href="#" variant={variant} size="medium" />
            <BrandButton label="Large" href="#" variant={variant} size="large" />
          </Stack>
        </Box>
      ))}
    </Box>
  ),
};

// ─── Glow ─────────────────────────────────────────────────────────────────────

export const GlowEffect: Story = {
  name: "Glow Effect (Hero CTA)",
  parameters: {
    contentPadding: false,
    docs: {
      description: {
        story:
          "The ambient pulse halo (`glow`) is reserved for the **single primary CTA** in the hero section. It draws the eye without competing with secondary actions. Never use glow on more than one button in a viewport.",
      },
    },
  },
  render: () => (
    <Box
      sx={{
        background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(7, 223, 193, 0.08) 0%, transparent 70%)",
        borderRadius: 3,
        py: 8,
        px: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="overline"
          sx={{ color: "text.disabled", letterSpacing: "0.12em", display: "block", mb: 1 }}
        >
          Hero CTA — Primary Action
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center" alignItems="center" flexWrap="wrap" useFlexGap>
          <BrandButton
            label="Launch Your Project"
            href="#"
            variant="contained"
            size="large"
            glow
            startIcon={<RocketLaunchIcon />}
            endIcon={<ArrowForwardIcon />}
          />
          <BrandButton label="See How It Works" href="#" variant="ghost" size="large" />
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="overline"
          sx={{ color: "text.disabled", letterSpacing: "0.12em", display: "block", mb: 1 }}
        >
          Glow vs No Glow
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center" alignItems="center">
          <BrandButton label="No Glow" href="#" variant="contained" glow={false} />
          <BrandButton label="With Glow" href="#" variant="contained" glow />
        </Stack>
      </Box>
    </Box>
  ),
};

// ─── Ghost in context ─────────────────────────────────────────────────────────

export const GhostInContext: Story = {
  name: "Ghost — Dark Surface Context",
  parameters: {
    docs: {
      description: {
        story:
          "`ghost` is the lowest visual-weight variant. Its ultra-subtle 1px border and muted text are specifically tuned for placement on dark navy surfaces where `outlined` would feel too heavy. It's also the standard pairing for hero secondary actions alongside a glowing `contained` primary.",
      },
    },
  },
  render: () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Box>
        <Label>All Colors — Ghost</Label>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {COLORS.map((color) => (
            <BrandButton key={color} label={colorLabels[color]} href="#" variant="ghost" color={color} />
          ))}
        </Stack>
      </Box>

      <Box>
        <Label>Paired with Contained CTA (typical hero layout)</Label>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
          <BrandButton label="Start Your Project" href="#" variant="contained" size="large" glow endIcon={<ArrowForwardIcon />} />
          <BrandButton label="See How It Works" href="#" variant="ghost" size="large" />
        </Stack>
      </Box>

      <Box>
        <Label>Paired with Contained Danger (confirmation dialogs)</Label>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
          <BrandButton label="Delete Project" variant="contained" color="danger" startIcon={<DeleteOutlineIcon />} />
          <BrandButton label="Cancel" variant="ghost" />
        </Stack>
      </Box>
    </Box>
  ),
};

// ─── Icons ────────────────────────────────────────────────────────────────────

export const WithIcons: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Icons work on all variants and sizes. `startIcon` for action-leading (launch, delete), `endIcon` for directional (arrows). Icons are hidden during the loading state.",
      },
    },
  },
  render: () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box>
        <Label>Start Icon</Label>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <BrandButton label="Start Project" href="#" startIcon={<RocketLaunchIcon />} />
          <BrandButton label="Start Project" href="#" variant="outlined" startIcon={<RocketLaunchIcon />} />
          <BrandButton label="Delete" href="#" variant="outlined" color="danger" startIcon={<DeleteOutlineIcon />} />
          <BrandButton label="Caution" href="#" variant="contained" color="warning" startIcon={<WarningAmberIcon />} />
        </Stack>
      </Box>
      <Box>
        <Label>End Icon</Label>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <BrandButton label="Learn More" href="#" endIcon={<ArrowForwardIcon />} />
          <BrandButton label="Learn More" href="#" variant="text" endIcon={<ArrowForwardIcon />} />
          <BrandButton label="Go Back" href="#" variant="ghost" startIcon={<ArrowBackIcon />} />
        </Stack>
      </Box>
      <Box>
        <Label>Sizes with Icons</Label>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
          <BrandButton label="Small" href="#" size="small" startIcon={<CheckCircleOutlineIcon />} />
          <BrandButton label="Medium" href="#" size="medium" startIcon={<CheckCircleOutlineIcon />} />
          <BrandButton label="Large" href="#" size="large" startIcon={<CheckCircleOutlineIcon />} endIcon={<ArrowForwardIcon />} />
        </Stack>
      </Box>
    </Box>
  ),
};

// ─── Loading ──────────────────────────────────────────────────────────────────

export const LoadingState: Story = {
  name: "Loading State (Decode Shimmer)",
  parameters: {
    docs: {
      description: {
        story:
          "The loading state uses `DecodeShimmerLabel` (rune glyphs scramble → resolve) + `PerimeterTrace` (border orbit animation). The button locks to its idle dimensions so layout doesn't shift when rune glyphs appear. Use `loadingLabel` for a contextual message (e.g. \"Scheduling\" instead of \"Book a Call\").",
      },
    },
  },
  render: () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Box>
        <Label>All Variants</Label>
        <Stack direction="row" spacing={3} alignItems="center" flexWrap="wrap" useFlexGap>
          <BrandButton label="Saving Changes" loading variant="contained" color="primary" />
          <BrandButton label="Saving Changes" loading variant="outlined" color="primary" />
          <BrandButton label="Saving Changes" loading variant="text" color="primary" />
          <BrandButton label="Saving Changes" loading variant="ghost" color="primary" />
        </Stack>
      </Box>
      <Box>
        <Label>By Size — Contained</Label>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
          <BrandButton label="Submitting" loading size="small" />
          <BrandButton label="Submitting" loading size="medium" />
          <BrandButton label="Submitting" loading size="large" />
        </Stack>
      </Box>
      <Box>
        <Label>Custom Loading Label</Label>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
          <BrandButton label="Book a Call" loadingLabel="Scheduling" loading variant="contained" color="primary" startIcon={<RocketLaunchIcon />} />
          <BrandButton label="Delete Project" loadingLabel="Deleting" loading variant="outlined" color="danger" startIcon={<DeleteOutlineIcon />} />
        </Stack>
      </Box>
    </Box>
  ),
};

// ─── Disabled ─────────────────────────────────────────────────────────────────

export const DisabledState: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Disabled buttons retain a subtle teal border and surface to remain visible — they're intentionally not invisible. `pointer-events: auto` is kept so the cursor signals unavailability.",
      },
    },
  },
  render: () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Box>
        <Label>By Variant (primary)</Label>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {VARIANTS.map((variant) => (
            <BrandButton key={variant} label={variantLabels[variant]} href="#" variant={variant} disabled />
          ))}
        </Stack>
      </Box>
      <Box>
        <Label>By Color (contained)</Label>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {COLORS.map((color) => (
            <BrandButton key={color} label={colorLabels[color]} href="#" variant="contained" color={color} disabled />
          ))}
        </Stack>
      </Box>
    </Box>
  ),
};

// ─── Full width ───────────────────────────────────────────────────────────────

export const FullWidth: Story = {
  parameters: {
    docs: {
      description: {
        story: "Use `fullWidth` in forms, mobile layouts, or anywhere the button should fill its container.",
      },
    },
  },
  render: () => (
    <Box sx={{ maxWidth: 400, display: "flex", flexDirection: "column", gap: 2 }}>
      <BrandButton label="Book a Call" href="#" fullWidth size="large" glow />
      <BrandButton label="View Pricing" href="#" variant="outlined" fullWidth />
      <BrandButton label="Maybe later" href="#" variant="ghost" fullWidth />
    </Box>
  ),
};

// ─── Real-world use cases ─────────────────────────────────────────────────────

export const SemanticUseCases: Story = {
  name: "Real-World Use Cases",
  parameters: {
    docs: {
      description: {
        story:
          "Common button pairings by context. The rule: one high-emphasis button per section, secondary actions recede. The hierarchy is maintained by variant weight, not just colour.",
      },
    },
  },
  render: () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box>
        <Label>Hero Section</Label>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <BrandButton label="Start Your Project" href="#" size="large" glow endIcon={<ArrowForwardIcon />} />
          <BrandButton label="See How It Works" href="#" variant="ghost" size="large" />
        </Stack>
      </Box>

      <Divider sx={{ borderColor: "divider" }} />

      <Box>
        <Label>Feature / CTA Section</Label>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <BrandButton label="Get Started" href="#" />
          <BrandButton label="View Case Studies" href="#" variant="outlined" color="secondary" />
        </Stack>
      </Box>

      <Divider sx={{ borderColor: "divider" }} />

      <Box>
        <Label>Card / Inline</Label>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <BrandButton label="Read More" href="#" variant="text" endIcon={<ArrowForwardIcon />} />
          <BrandButton label="Learn More" href="#" variant="text" color="secondary" endIcon={<ArrowForwardIcon />} />
          <BrandButton label="Dismiss" href="#" variant="text" color="warning" endIcon={<ArrowForwardIcon />} />
        </Stack>
      </Box>

      <Divider sx={{ borderColor: "divider" }} />

      <Box>
        <Label>Destructive / Confirmation Dialog</Label>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <BrandButton label="Delete Project" variant="contained" color="danger" startIcon={<DeleteOutlineIcon />} />
          <BrandButton label="Cancel" variant="ghost" />
        </Stack>
      </Box>

      <Divider sx={{ borderColor: "divider" }} />

      <Box>
        <Label>Warning / Proceed-with-care</Label>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <BrandButton label="Proceed Anyway" variant="outlined" color="warning" startIcon={<WarningAmberIcon />} />
          <BrandButton label="Go Back" variant="ghost" startIcon={<ArrowBackIcon />} />
        </Stack>
      </Box>
    </Box>
  ),
};

// ─── As plain button ──────────────────────────────────────────────────────────

export const AsButton: Story = {
  name: "As <button> (no href)",
  parameters: {
    docs: {
      description: {
        story:
          "When `href` is omitted the component renders as a plain `<button>` element. Use `type=\"submit\"` for forms. The `onClick` handler works on both the `<button>` and `<Link>` variants.",
      },
    },
  },
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
      <BrandButton label="Submit Form" type="submit" />
      <BrandButton label="Reset" type="reset" variant="ghost" />
      <BrandButton label="Open Modal" onClick={() => alert("clicked")} variant="outlined" />
    </Stack>
  ),
};
