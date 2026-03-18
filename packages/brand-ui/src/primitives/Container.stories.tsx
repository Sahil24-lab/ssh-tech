import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@mui/material";
import { CardSurface } from "../components/CardSurface";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Primitives/Container",
  component: Container,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Container>;

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

export const Wide: Story = {
  render: () => (
    <Container size="wide" sx={{ py: 6 }}>
      <CardSurface surface="panel" sx={{ p: 4, width: "100%" }}>
        <Typography variant="h5">Wide container</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Use the wide mode for complex landing sections that need more horizontal span.
        </Typography>
      </CardSurface>
    </Container>
  ),
};
