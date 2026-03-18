import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Typography } from "@mui/material";
import { BrandChip } from "../components/BrandChip";

const meta: Meta = {
  title: "Primitives/Stack",
};

export default meta;
type Story = StoryObj;

export const SpacingRhythm: Story = {
  render: () => (
    <Stack spacing={2.5} sx={{ maxWidth: 480 }}>
      <Typography variant="h5">Stack primitive</Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Stack is the default vertical rhythm primitive for content groups.
      </Typography>
      <Stack direction="row" spacing={1.25}>
        <BrandChip label="tight" />
        <BrandChip label="predictable" />
        <BrandChip label="responsive" />
      </Stack>
    </Stack>
  ),
};
