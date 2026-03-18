import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Typography } from "@mui/material";

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Scale: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="caption">Mono eyebrow / caption</Typography>
      <Typography variant="h1">Hero heading</Typography>
      <Typography variant="h2">Section heading</Typography>
      <Typography variant="h5">Card heading</Typography>
      <Typography variant="body1">
        Body copy for lead paragraphs and section descriptions.
      </Typography>
      <Typography variant="body2">
        Supporting copy for cards, metadata, and secondary detail.
      </Typography>
    </Stack>
  ),
};
