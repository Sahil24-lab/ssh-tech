import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@mui/material";
import { LabelTag } from "./LabelTag";

const meta: Meta<typeof LabelTag> = {
  title: "Components/LabelTag",
  component: LabelTag,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LabelTag>;

export const Default: Story = {
  render: () => <LabelTag>// feature section</LabelTag>,
};

export const Collection: Story = {
  render: () => (
    <Stack direction="row" spacing={1.5}>
      <LabelTag>// hero</LabelTag>
      <LabelTag>// pricing</LabelTag>
      <LabelTag>// docs</LabelTag>
    </Stack>
  ),
};
