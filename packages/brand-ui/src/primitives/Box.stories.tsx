import type { Meta, StoryObj } from "@storybook/react";
import { Box, Typography } from "@mui/material";
import { CardSurface } from "../components/CardSurface";

const meta: Meta = {
  title: "Primitives/Box",
};

export default meta;
type Story = StoryObj;

export const SurfaceBlock: Story = {
  render: () => (
    <CardSurface surface="glass" sx={{ p: 4, maxWidth: 640 }}>
      <Box>
        <Typography variant="h5">Box primitive</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Use plain Box for layout when you do not need a new abstraction.
        </Typography>
      </Box>
    </CardSurface>
  ),
};
