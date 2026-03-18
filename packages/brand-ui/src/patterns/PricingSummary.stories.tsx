import type { Meta, StoryObj } from "@storybook/react";
import { PricingSummary } from "./PricingSummary";

const meta: Meta<typeof PricingSummary> = {
  title: "Patterns/PricingSummary",
  component: PricingSummary,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof PricingSummary>;

export const Default: Story = {
  args: {
    plans: [
      {
        name: "Launch",
        price: "$6K /month",
        description: "Tight scope, production-ready builds for lean teams.",
        features: ["Blueprint call", "1-2 week POC", "Wallet/connect flows"],
      },
      {
        name: "Growth",
        price: "$9K /month",
        description: "Continuous feature delivery for scaling product teams.",
        features: ["API integrations", "Monitoring", "Analytics"],
        highlighted: true,
        tag: "Most Popular",
      },
      {
        name: "Premium",
        price: "$13K /month",
        description: "Full-spectrum delivery and ongoing operational support.",
        features: ["24/7 support", "Audits", "Training"],
      },
    ],
  },
};
