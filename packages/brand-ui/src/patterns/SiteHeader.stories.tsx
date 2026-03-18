import type { Meta, StoryObj } from "@storybook/react";
import { Box, Typography } from "@mui/material";
import { SiteHeader } from "./SiteHeader";

const meta: Meta<typeof SiteHeader> = {
  title: "Patterns/SiteHeader",
  component: SiteHeader,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof SiteHeader>;

export const Default: Story = {
  render: () => (
    <Box sx={{ minHeight: "100vh", background: "#050b2b" }}>
      <SiteHeader
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
      <Box sx={{ pt: 16, px: 4 }}>
        <Typography variant="h2">Header pattern</Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mt: 2, maxWidth: 720 }}>
          Package-safe header shell with desktop and mobile navigation, prop-driven links, and no Next router dependency.
        </Typography>
      </Box>
    </Box>
  ),
};
