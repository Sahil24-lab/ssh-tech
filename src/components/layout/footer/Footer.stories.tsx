import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import Footer from "./Footer";
import { withLegacyTheme } from "@/components/storybook/withLegacyTheme";

const meta: Meta<typeof Footer> = {
  title: "Patterns/Footer",
  component: Footer,
  decorators: [withLegacyTheme],
  parameters: {
    layout: "fullscreen",
    contentPadding: false,
  },
  args: {
    mt: 0,
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: (args) => (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Box sx={{ width: "100%", mt: "auto" }}>
        <Footer {...args} />
      </Box>
    </Box>
  ),
};
