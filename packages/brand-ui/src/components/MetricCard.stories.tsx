import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import { MetricCard } from "./MetricCard";

const meta: Meta<typeof MetricCard> = {
  title: "Components/MetricCard",
  component: MetricCard,
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

export const Default: Story = {
  args: {
    eyebrow: "Gaming Platform",
    title: "Playlobby",
    description:
      "Led technical delivery for a platform rebuild that supported new launches, partner integrations, and paid conversion growth.",
    highlights: ["400% user growth", "60% paid conversions"],
  },
};

export const LongText: Story = {
  render: () => (
    <Box sx={{ maxWidth: 420 }}>
      <MetricCard
        eyebrow="Financial Services"
        title="Talk to a Broker"
        description="Built an AI-assisted lending workflow that extracts lender policy, evaluates borrower scenarios, and produces structured recommendations through a review-ready pipeline designed for operational speed and consistency."
        highlights={["Faster policy assessment", "More consistent recommendations"]}
      />
    </Box>
  ),
};
