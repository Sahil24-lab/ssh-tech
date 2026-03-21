import type { Meta, StoryObj } from "@storybook/react";
import { Box, Typography } from "@mui/material";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Patterns/Header",
  component: Header,
  parameters: { layout: "fullscreen", contentPadding: false },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <Box sx={{ width: "100%", minHeight: 420, position: "relative" }}>
      <Header
        brandLabel="SSH Tech"
        navItems={[
          { label: "Services", sectionId: "services" },
          { label: "Process", sectionId: "process" },
          { label: "Proof of Work", href: "/proof-of-work" },
          { label: "Pricing", sectionId: "pricing" },
          { label: "FAQ", sectionId: "faq" },
        ]}
        onCtaClick={() => undefined}
        onSectionNavigate={() => undefined}
      />
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 3, md: 6 },
          pt: 18,
          pb: 10,
        }}
      >
        <Typography variant="h2">Header pattern</Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mt: 2, maxWidth: 720 }}
        >
          Package-safe header shell with desktop and mobile navigation,
          prop-driven links, and no Next router dependency.
        </Typography>
      </Box>
    </Box>
  ),
};
