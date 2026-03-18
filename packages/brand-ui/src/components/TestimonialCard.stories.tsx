import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import { TestimonialCard } from "./TestimonialCard";

const meta: Meta<typeof TestimonialCard> = {
  title: "Components/TestimonialCard",
  component: TestimonialCard,
};

export default meta;
type Story = StoryObj<typeof TestimonialCard>;

export const Default: Story = {
  render: () => (
    <Box sx={{ maxWidth: 560 }}>
      <TestimonialCard
        preview="Bridging the gap between vision and execution"
        quote="Working with Sahil was a game-changer. He translated complex requirements into production-ready systems, connected multiple workflows into one architecture, and kept delivery moving under pressure."
        author="Ben Howen"
        role="Head of Product at Playlobby"
        rating={5}
      />
    </Box>
  ),
};
