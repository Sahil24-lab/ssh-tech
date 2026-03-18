import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Typography } from "@mui/material";

const meta: Meta = {
  title: "Primitives/Text",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Stack spacing={1.5} sx={{ maxWidth: 640 }}>
      <Typography variant="body1">
        Primary text is used for lead descriptions and high-signal content.
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Secondary text carries supporting detail, metadata, and card descriptions.
      </Typography>
    </Stack>
  ),
};
