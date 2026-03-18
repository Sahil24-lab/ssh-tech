import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Typography } from "@mui/material";
import { CardSurface } from "./CardSurface";

const meta: Meta<typeof CardSurface> = {
  title: "Components/CardSurface",
  component: CardSurface,
};

export default meta;
type Story = StoryObj<typeof CardSurface>;

export const Variants: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 720 }}>
      <CardSurface surface="glass" sx={{ p: 4 }}>
        <Typography variant="h5">Glass Surface</Typography>
        <Typography variant="body2">Primary translucent card treatment extracted from the stronger landing sections.</Typography>
      </CardSurface>
      <CardSurface surface="panel" glow sx={{ p: 4 }}>
        <Typography variant="h5">Panel Surface</Typography>
        <Typography variant="body2">Dense dark panel with border emphasis for pricing, docs, and content-heavy blocks.</Typography>
      </CardSurface>
    </Stack>
  ),
};
