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
        tags={["Design System", "Next.js", "Storybook"]}
        publishedDate="2026-03-01"
        readTime={12}
        imageSrc="/Hero/hero-background.png"
        imageAlt="Feature image"
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
        tags={["Fallback"]}
        publishedDate="2026-02-10"
        readTime={6}
      />
    </Box>
  ),
};
