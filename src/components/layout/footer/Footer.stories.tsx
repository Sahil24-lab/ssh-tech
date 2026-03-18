import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import Footer from "./Footer";
import { withLegacyTheme } from "@/components/storybook/withLegacyTheme";

const meta: Meta<typeof Footer> = {
  title: "Patterns/Footer",
  component: Footer,
  decorators: [withLegacyTheme],
  parameters: {
    layout: "padded",
  },
  args: {
    mt: 0,
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: (args) => (
    <Box sx={{ minHeight: 240, display: "flex", alignItems: "flex-end" }}>
      <Footer {...args} />
    </Box>
  ),
};
