import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Typography } from "@mui/material";

const meta: Meta = {
  title: "Primitives/Heading",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h2">Section heading</Typography>
      <Typography variant="h5">Card heading</Typography>
      <Typography variant="caption">Mono eyebrow heading</Typography>
    </Stack>
  ),
};
