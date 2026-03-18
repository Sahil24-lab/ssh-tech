import type { Meta, StoryObj } from "@storybook/react";
import { Box, Typography } from "@mui/material";
import GlassCard from "./GlassCard";
import { withLegacyTheme } from "@/components/storybook/withLegacyTheme";

const meta: Meta<typeof GlassCard> = {
  title: "Legacy/GlassCard",
  component: GlassCard,
  decorators: [withLegacyTheme],
  args: {
    sx: { p: 4, maxWidth: 640 },
  },
};

export default meta;
type Story = StoryObj<typeof GlassCard>;

export const Default: Story = {
  render: (args) => (
    <GlassCard {...args}>
      <Typography variant="h4" sx={{ mb: 1 }}>Glass Card</Typography>
      <Typography variant="body1">Reusable translucent panel used across landing sections.</Typography>
    </GlassCard>
  ),
};

export const Collection: Story = {
  render: () => (
    <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, maxWidth: 900 }}>
      <GlassCard sx={{ p: 3 }}><Typography variant="h6">Card A</Typography></GlassCard>
      <GlassCard sx={{ p: 3 }}><Typography variant="h6">Card B</Typography></GlassCard>
    </Box>
  ),
};
