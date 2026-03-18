import type { Meta, StoryObj } from "@storybook/react";
import { Box, Typography } from "@mui/material";
import { Container } from "../primitives/Container";
import { FullWidthSection } from "./FullWidthSection";

const meta: Meta<typeof FullWidthSection> = {
  title: "Patterns/FullWidthSection",
  component: FullWidthSection,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof FullWidthSection>;

export const Default: Story = {
  render: () => (
    <FullWidthSection
      sx={{
        py: 8,
        background:
          "linear-gradient(180deg, rgba(14,83,76,0.2) 0%, rgba(5,11,43,0.9) 100%)",
      }}
    >
      <Container>
        <Box
          sx={{
            width: "100%",
            borderRadius: 4,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.04)",
            p: 4,
          }}
        >
          <Typography variant="h4">Full width wrapper</Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mt: 1 }}>
            This is the shared outer wrapper used for full-bleed sections while the inner content stays constrained.
          </Typography>
        </Box>
      </Container>
    </FullWidthSection>
  ),
};
