import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography } from "@mui/material";
import { PrimitiveStoryFrame, Specimen } from "../storybook/PrimitiveStoryFrame";

const meta: Meta = {
  title: "Primitives/Heading",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Headings combine a semantic document level with a visual typography variant. Choose the HTML level from page structure, then choose the variant from visual hierarchy.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const headingRows = [
  { level: "h1", variant: "h1", label: "Page title" },
  { level: "h2", variant: "h2", label: "Major section" },
  { level: "h3", variant: "h3", label: "Section group" },
  { level: "h4", variant: "h4", label: "Subsection" },
  { level: "h5", variant: "h5", label: "Card or compact region" },
  { level: "h6", variant: "h6", label: "Dense supporting region" },
] as const;

export const Default: Story = {
  name: "Hierarchy",
  render: () => (
    <PrimitiveStoryFrame
      title="Heading hierarchy"
      summary="A clear, sequential heading outline lets people scan visually and navigate with assistive technology. Visual size can vary without breaking that outline."
      useWhen="Introducing a page, region, card, dialog, or other named section of content."
      avoidWhen="Text is only decorative metadata or a label; not every emphasized line should enter the document outline."
      accessibility="Keep heading levels sequential. Do not skip from h2 to h4 because the h4 style looks convenient."
      resilience="Headings use fluid display sizes and wrap anywhere so long translated titles do not clip or escape their container."
    >
      <Specimen title="Visual scale" description="These samples are paragraphs styled with heading variants so this reference does not alter the surrounding Storybook document outline.">
        <Stack spacing={3}>
          {headingRows.map(({ level, variant, label }) => (
            <Box key={level} sx={{ minWidth: 0 }}>
              <Typography component="p" variant={variant}>
                {label}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.muted" }}>
                {`<${level}> rendered with variant="${variant}"`}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Specimen>
    </PrimitiveStoryFrame>
  ),
};

export const SemanticMapping: Story = {
  render: () => (
    <PrimitiveStoryFrame
      title="Semantic level, independent style"
      summary="Use component for document meaning and variant for visual weight. This keeps the outline coherent in compact interfaces."
      useWhen="A nested section needs the next logical heading level but a smaller or larger visual treatment."
      avoidWhen="Styling would disguise the actual hierarchy or create several equally dominant titles."
      accessibility="Verify the outline with a heading navigator, not only by visual inspection."
      resilience="One dominant page title and restrained supporting levels keep dense layouts understandable."
    >
      <Specimen title="An h3 with h5 styling">
        <Typography component="h3" variant="h5">
          Integration details
        </Typography>
      </Specimen>
    </PrimitiveStoryFrame>
  ),
};

export const WrappingStress: Story = {
  render: () => (
    <PrimitiveStoryFrame
      title="Heading under content pressure"
      summary="Headings must remain legible at narrow widths, with long translations, and with words the browser cannot naturally hyphenate."
      useWhen="Reviewing responsive behavior, localization, or user-authored titles."
      avoidWhen="A fixed height or ellipsis would hide information users need to understand the section."
      accessibility="The complete heading stays in the accessibility tree and remains visible at text zoom."
      resilience="Balanced wrapping improves short titles; overflow wrapping protects unusually long tokens."
    >
      <Specimen title="320px content region">
        <Box sx={{ width: "100%", maxWidth: 320 }}>
          <Typography component="h4" variant="h2">
            Unternehmenssicherheitsanforderungsübersicht
          </Typography>
        </Box>
      </Specimen>
    </PrimitiveStoryFrame>
  ),
};
