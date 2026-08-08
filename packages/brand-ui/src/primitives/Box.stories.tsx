import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography } from "@mui/material";
import { PrimitiveStoryFrame, Specimen } from "../storybook/PrimitiveStoryFrame";

const meta: Meta = {
  title: "Primitives/Box",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Box is the lowest-level layout primitive. It provides theme-aware styling without imposing visual semantics or a new component abstraction.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const SurfaceBlock: Story = {
  name: "Overview",
  render: () => (
    <PrimitiveStoryFrame
      title="Box"
      summary="Use Box to compose one-off layout and surface rules directly from the theme. It should disappear into the interface rather than announce itself as a component."
      useWhen="A layout need is local, semantic HTML can be expressed with the component prop, and a reusable component would add no meaningful behavior."
      avoidWhen="The same visual recipe appears repeatedly, carries interaction state, or needs a stable public API. Promote those cases to a named component."
      accessibility="Choose the correct semantic element with component; Box does not add landmarks, labels, roles, or keyboard behavior for you."
      resilience="Always allow children to shrink with minWidth: 0 and wrap untrusted text. Avoid fixed heights for content-bearing surfaces."
    >
      <Specimen
        title="Semantic composition"
        description="This section uses Box as a semantic article and keeps decoration flat and token-driven."
      >
        <Box
          component="article"
          sx={{
            maxWidth: 680,
            p: { xs: 2.5, sm: 3 },
            borderLeft: 3,
            borderColor: "primary.main",
            backgroundColor: "surface.elevated",
          }}
        >
          <Typography component="h4" variant="h5" gutterBottom>
            Local layout, meaningful markup
          </Typography>
          <Typography variant="body2" sx={{ color: "text.muted" }}>
            Styling remains close to the content while the article element preserves its document meaning.
          </Typography>
        </Box>
      </Specimen>
    </PrimitiveStoryFrame>
  ),
};

export const ResponsiveComposition: Story = {
  render: () => (
    <PrimitiveStoryFrame
      title="Responsive Box composition"
      summary="Responsive values should follow content needs: one readable column on narrow screens, then a denser arrangement only when space supports it."
      useWhen="A small layout changes shape across breakpoints without requiring grid-specific behavior."
      avoidWhen="The relationship is a reusable grid, page container, or interaction pattern with its own contract."
      accessibility="Keep DOM order aligned with reading order. Visual rearrangement must not create a confusing keyboard or screen-reader sequence."
      resilience="Use minmax(0, 1fr), minWidth: 0, and intrinsic height so translated or user-generated content can expand safely."
    >
      <Specimen title="One column to two" description="Resize the canvas to verify the transition.">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
            gap: 2,
          }}
        >
          {["Primary content remains first", "Supporting content follows naturally"].map((label) => (
            <Box key={label} sx={{ minWidth: 0, p: 2.5, backgroundColor: "surface.depth" }}>
              <Typography variant="body2">{label}</Typography>
            </Box>
          ))}
        </Box>
      </Specimen>
    </PrimitiveStoryFrame>
  ),
};

export const LongContent: Story = {
  render: () => (
    <PrimitiveStoryFrame
      title="Box under content pressure"
      summary="Layout primitives must survive long words and mixed writing systems without clipping or widening the page."
      useWhen="You need to validate the boundary behavior of a local surface."
      avoidWhen="Overflow is being hidden to conceal a content or layout bug."
      accessibility="Visible content must remain readable at browser zoom and with larger text settings."
      resilience="Prefer wrapping and intrinsic growth; reserve truncation for cases with an accessible full-value affordance."
    >
      <Specimen title="Unbroken and multilingual content">
        <Stack spacing={2}>
          <Typography variant="body2">
            Donaudampfschifffahrtsgesellschaftskapitänsverantwortungsbereich
          </Typography>
          <Typography variant="body2" lang="ja">
            設計システムは、長い文章や異なる文字体系でも読みやすさを保ちます。
          </Typography>
        </Stack>
      </Specimen>
    </PrimitiveStoryFrame>
  ),
};
