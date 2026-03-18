import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import BlogCard from "./BlogCard";
import { withLegacyTheme } from "@/components/storybook/withLegacyTheme";

const meta: Meta<typeof BlogCard> = {
  title: "Legacy/BlogCard",
  component: BlogCard,
  decorators: [withLegacyTheme],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

const samplePost = {
  fields: {
    title: "Shipping a reusable Next.js design system",
    slug: "shipping-reusable-design-system",
    shortDescription:
      "How to move from one-off components to a stable package with visual regression testing.",
    publishedDate: "2026-03-01",
    tags: ["Design System", "Next.js", "Storybook"],
    featuredImage: {
      fields: {
        file: { url: "/hero/hero-background.png" },
        title: "Feature image",
      },
    },
  },
};

export const Default: Story = {
  render: () => (
    <Box sx={{ maxWidth: 420 }}>
      <BlogCard post={samplePost} />
    </Box>
  ),
};
