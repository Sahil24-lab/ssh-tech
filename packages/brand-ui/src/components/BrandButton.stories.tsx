import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Box, Typography, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { BrandButton } from "./BrandButton";
import type { BrandButtonColor, BrandButtonVariant } from "./BrandButton";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof BrandButton> = {
  title: "Components/BrandButton",
  component: BrandButton,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
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
    variant: {
      control: "select",
      options: ["contained", "outlined", "text", "ghost"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "danger", "warning"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
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

export const Playground: Story = {};

export const AllVariants: Story = {
  name: "All Variants × Colors",
  render: () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
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

export const Sizes: Story = {
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

export const GlowEffect: Story = {
  name: "Glow Effect (Hero CTA)",
  parameters: { contentPadding: false },
  render: () => (
    <Box
      sx={{
        background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(7, 223, 193, 0.08) 0%, transparent 70%)",
        backdropFilter: "none",
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

export const WithIcons: Story = {
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
    </Box>
  ),
};

export const LoadingState: Story = {
  name: "Loading State (Decode Shimmer)",
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

export const DisabledState: Story = {
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

export const FullWidth: Story = {
  render: () => (
    <Box sx={{ maxWidth: 400, display: "flex", flexDirection: "column", gap: 2 }}>
      <BrandButton label="Book a Call" href="#" fullWidth size="large" glow />
      <BrandButton label="View Pricing" href="#" variant="outlined" fullWidth />
      <BrandButton label="Maybe later" href="#" variant="ghost" fullWidth />
    </Box>
  ),
};

export const SemanticUseCases: Story = {
  name: "Real-World Use Cases",
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
        <Label>Warning Action</Label>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <BrandButton label="Proceed Anyway" variant="outlined" color="warning" startIcon={<WarningAmberIcon />} />
          <BrandButton label="Go Back" variant="ghost" startIcon={<ArrowBackIcon />} />
        </Stack>
      </Box>
    </Box>
  ),
};

export const AsButton: Story = {
  name: "As <button> (no href)",
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
      <BrandButton label="Submit Form" type="submit" />
      <BrandButton label="Reset" type="reset" variant="ghost" />
      <BrandButton label="Open Modal" onClick={() => alert("clicked")} variant="outlined" />
    </Stack>
  ),
};
