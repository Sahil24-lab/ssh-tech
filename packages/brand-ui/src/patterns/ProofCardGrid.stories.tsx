import type { Meta, StoryObj } from "@storybook/react";
import { ProofCardGrid } from "./ProofCardGrid";

const meta: Meta<typeof ProofCardGrid> = {
  title: "Patterns/ProofCardGrid",
  component: ProofCardGrid,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof ProofCardGrid>;

export const Default: Story = {
  args: {
    items: [
      {
        eyebrow: "Financial Services",
        title: "Talk to a Broker",
        description: "AI-assisted lending workflow with structured recommendations and review-ready output.",
        highlights: ["Faster assessment", "Consistent recommendations"],
      },
      {
        eyebrow: "Member Platform",
        title: "TEN",
        description: "Structured legal content and delivery workflows to make launches more reliable.",
        highlights: ["Cleaner operations", "Better publishing flow"],
      },
      {
        eyebrow: "Gaming Platform",
        title: "Playlobby",
        description: "Platform rebuild supporting launches, partner integrations, and commercial optimisation.",
        highlights: ["400% user growth", "60% paid conversions"],
      },
    ],
  },
};
