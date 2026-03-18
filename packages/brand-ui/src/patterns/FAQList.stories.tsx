import type { Meta, StoryObj } from "@storybook/react";
import { FAQList } from "./FAQList";

const meta: Meta<typeof FAQList> = {
  title: "Patterns/FAQList",
  component: FAQList,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof FAQList>;

export const Default: Story = {
  args: {
    items: [
      {
        question: "What sets you apart from hiring in-house developers?",
        answer:
          "You get immediate access to product-focused engineering without long-term headcount lock-in.",
      },
      {
        question: "How do you handle security and product quality?",
        answer:
          "We integrate QA, analytics, and security checks through delivery instead of treating them as bolt-ons.",
      },
    ],
  },
};
