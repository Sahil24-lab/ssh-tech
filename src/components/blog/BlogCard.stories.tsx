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
    docs: {
      description: {
        component:
          "Status: `keep legacy`. This card still assumes app blog content, but its spacing, surface, and typography informed the shared card primitives.",
      },
    },
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
        file: {
          url: "//images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
        },
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
