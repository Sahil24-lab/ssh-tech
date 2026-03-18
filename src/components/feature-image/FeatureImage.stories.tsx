import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import FeatureImage from "./FeatureImage";
import { withLegacyTheme } from "@/components/storybook/withLegacyTheme";

const meta: Meta<typeof FeatureImage> = {
  title: "Legacy/FeatureImage",
  component: FeatureImage,
  decorators: [withLegacyTheme],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Status: `keep legacy`. Revisit only after the shared media component API is stable enough to support multiple image treatments.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeatureImage>;

export const Gallery: Story = {
  render: () => (
    <Box sx={{ maxWidth: 960, mx: "auto", p: 3 }}>
      <FeatureImage
        src="/Hero/hero-image.png"
        alt="Product showcase"
        title="Product gallery"
        description="Interactive modal gallery with keyboard and touch navigation."
        images={["/Hero/hero-image.png", "/Hero/hero-background.png"]}
      />
    </Box>
  ),
};
