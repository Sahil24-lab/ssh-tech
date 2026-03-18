import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialStack } from "./TestimonialStack";

const meta: Meta<typeof TestimonialStack> = {
  title: "Patterns/TestimonialStack",
  component: TestimonialStack,
};

export default meta;
type Story = StoryObj<typeof TestimonialStack>;

export const Default: Story = {
  args: {
    items: [
      {
        preview: "Bridging the gap between vision and execution",
        quote:
          "He translated complex requirements into production-ready systems and kept delivery moving under pressure.",
        author: "Ben Howen",
        role: "Head of Product at Playlobby",
      },
      {
        preview: "Prioritising what matters most",
        quote:
          "He balanced business outcomes with technical complexity and turned it into practical execution.",
        author: "Mack Saraswat",
        role: "Serial Entrepreneur",
      },
    ],
  },
};
