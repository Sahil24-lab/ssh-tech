import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeader } from "./SectionHeader";

const meta: Meta<typeof SectionHeader> = {
  title: "Patterns/SectionHeader",
  component: SectionHeader,
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: {
    label: "Proof of work",
    title: "Deployed. Measured. Running.",
    description: "Systems in production delivering measurable ROI for real organisations.",
    align: "center",
  },
};
