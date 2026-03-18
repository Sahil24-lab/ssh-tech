import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@mui/material";
import { BrandButton } from "./BrandButton";

const meta: Meta<typeof BrandButton> = {
  title: "Components/BrandButton",
  component: BrandButton,
  tags: ["autodocs"],
  args: {
    label: "Start Project",
    href: "#",
  },
};

export default meta;
type Story = StoryObj<typeof BrandButton>;

export const Contained: Story = {
  args: {
    variant: "contained",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
  },
};

export const AllVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <BrandButton label="Contained" href="#" variant="contained" />
      <BrandButton label="Outlined" href="#" variant="outlined" />
      <BrandButton label="Text" href="#" variant="text" />
    </Stack>
  ),
};
