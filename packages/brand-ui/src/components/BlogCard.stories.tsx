import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import { BlogCard } from "./BlogCard";

const meta: Meta<typeof BlogCard> = {
  title: "Components/BlogCard",
  component: BlogCard,
  parameters: {
    layout: "padded",
    surface: "canvas",
  },
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {
  render: () => (
    <Box sx={{ maxWidth: 420 }}>
      <BlogCard
        title="Shipping a reusable Next.js design system"
        description="How to move from app-specific sections to a stable internal package with Storybook, visual testing, and future extraction in mind."
        href="#"
        tag="Design System"
        imageSrc="/hero/hero-background.png"
      />
    </Box>
  ),
};

export const MissingImage: Story = {
  render: () => (
    <Box sx={{ maxWidth: 420 }}>
      <BlogCard
        title="Missing image fallback"
        description="Stories should still look intentional when the mock asset is unavailable or not yet provided."
        href="#"
        tag="Fallback"
      />
    </Box>
  ),
};
