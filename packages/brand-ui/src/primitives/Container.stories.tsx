import type { Meta, StoryObj } from "@storybook/react";
import { Container, Typography } from "@mui/material";
import { CardSurface } from "../components/CardSurface";

const meta: Meta = {
  title: "Primitives/Container",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Container sx={{ py: 6 }}>
      <CardSurface surface="glass" sx={{ p: 4 }}>
        <Typography variant="h5">Container primitive</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Shared page-width constraint for sections and composable patterns.
        </Typography>
      </CardSurface>
    </Container>
  ),
};
