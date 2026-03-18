import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@mui/material";
import GlassCardDark from "./GlassCardDark";
import { withLegacyTheme } from "@/components/storybook/withLegacyTheme";

const meta: Meta<typeof GlassCardDark> = {
  title: "Legacy/GlassCardDark",
  component: GlassCardDark,
  decorators: [withLegacyTheme],
  args: {
    sx: { p: 4, maxWidth: 680 },
  },
};

export default meta;
type Story = StoryObj<typeof GlassCardDark>;

export const Default: Story = {
  render: (args) => (
    <GlassCardDark {...args}>
      <Typography variant="h4" sx={{ mb: 1 }}>Dark Glass Card</Typography>
      <Typography variant="body1">Primary card variant used by blog and profile sections.</Typography>
    </GlassCardDark>
  ),
};
