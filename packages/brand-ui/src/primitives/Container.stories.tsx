import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography } from "@mui/material";
import { PrimitiveStoryFrame, Specimen } from "../storybook/PrimitiveStoryFrame";
import { contentMaxWidth } from "../theme/tokens/layout";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Primitives/Container",
  component: Container,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Container provides the canonical responsive gutters and width caps for prose, standard content, wide compositions, and bounded full-width sections.",
      },
    },
  },
  args: {
    size: "content",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["prose", "content", "wide", "full"],
      description: "Controls the width cap and responsive horizontal gutters.",
      table: { defaultValue: { summary: "content" } },
    },
    children: { control: false },
    sx: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: (args) => (
    <Container {...args} component="section" sx={{ py: { xs: 4, md: 6 } }}>
      <PrimitiveStoryFrame
        title="Container"
        summary="A container establishes page rhythm: consistent gutters on small screens and an intentional reading or composition width on large screens."
        useWhen="A page section needs to align with the system grid or a long-form region needs a readable measure."
        avoidWhen="Content should genuinely bleed to the viewport edge; put the full-bleed treatment outside and nest a Container for aligned content."
        accessibility="Use the component prop for main, section, article, or another appropriate landmark; do not create duplicate main landmarks."
        resilience="Width caps prevent ultrawide line lengths, while responsive gutters preserve usable space at 320px and browser zoom."
      >
        <Specimen title={`${args.size ?? "content"} container`} description="Change size in Controls to compare the four supported width contracts.">
          <Typography variant="body1" sx={{ maxWidth: "65ch" }}>
            The content remains centered, readable, and aligned without every consuming section inventing its own max-width.
          </Typography>
        </Specimen>
      </PrimitiveStoryFrame>
    </Container>
  ),
};

export const Wide: Story = {
  name: "Size comparison",
  render: () => (
    <Stack component="section" spacing={3} sx={{ py: { xs: 4, md: 6 } }}>
      {(Object.keys(contentMaxWidth) as Array<keyof typeof contentMaxWidth>).map((size) => (
        <Container key={size} size={size}>
          <Box
            sx={{
              minWidth: 0,
              p: 2.5,
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
              backgroundColor: "background.paper",
            }}
          >
            <Typography component="h2" variant="h5">
              {size}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.muted" }}>
              Maximum content width: {contentMaxWidth[size]}px
            </Typography>
          </Box>
        </Container>
      ))}
    </Stack>
  ),
};

export const NarrowViewport: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  render: () => (
    <Container size="prose" component="section" sx={{ py: 4 }}>
      <PrimitiveStoryFrame
        title="Narrow viewport"
        summary="The smallest gutter remains useful without consuming the limited reading width."
        useWhen="Validating layouts around 320–390px or at high browser zoom."
        avoidWhen="A fixed-width child would force horizontal scrolling."
        accessibility="Test reflow at 400% zoom and keep reading order intact."
        resilience="Children must use fluid widths and wrap long content rather than relying on the container alone."
      >
        <Specimen title="Long content remains contained">
          <Typography variant="body2">
            support+extra-long-routing-identifier@ssh-tech.example
          </Typography>
        </Specimen>
      </PrimitiveStoryFrame>
    </Container>
  ),
};
