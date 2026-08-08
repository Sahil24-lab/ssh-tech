import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography } from "@mui/material";
import { BrandChip } from "../components/BrandChip";
import { PrimitiveStoryFrame, Specimen } from "../storybook/PrimitiveStoryFrame";

const meta: Meta = {
  title: "Primitives/Stack",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Stack applies a single, predictable spacing relationship to a group of children. Prefer it for one-dimensional flow before reaching for custom margins.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const SpacingRhythm: Story = {
  name: "Overview",
  render: () => (
    <PrimitiveStoryFrame
      title="Stack"
      summary="Stack is the default rhythm primitive for related content. Spacing belongs to the parent relationship, so children stay portable."
      useWhen="Items share one vertical or horizontal flow and need a consistent gap."
      avoidWhen="Rows and columns both need alignment; use CSS Grid for genuinely two-dimensional layout."
      accessibility="Stack does not change semantics. Use component and child elements that match the content, such as ul and li for a list."
      resilience="Let horizontal groups wrap, use responsive direction, and keep every child at minWidth: 0 when content may grow."
    >
      <Specimen title="Vertical rhythm">
        <Stack spacing={2.5} sx={{ maxWidth: 600 }}>
          <Typography component="h4" variant="h5">
            One relationship owns the spacing
          </Typography>
          <Typography variant="body2" sx={{ color: "text.muted" }}>
            No child needs a one-off top or bottom margin to stay aligned with its siblings.
          </Typography>
          <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1.25}>
            <BrandChip label="Predictable" />
            <BrandChip label="Responsive" />
            <BrandChip label="Composable" />
          </Stack>
        </Stack>
      </Specimen>
    </PrimitiveStoryFrame>
  ),
};

export const ResponsiveDirection: Story = {
  render: () => (
    <PrimitiveStoryFrame
      title="Responsive direction"
      summary="A related group can remain vertical on narrow screens and move horizontally only when each item has enough room."
      useWhen="The same items form a single flow at every breakpoint."
      avoidWhen="Changing direction would alter reading order or the meaning of the group."
      accessibility="DOM order remains stable across breakpoints so focus and reading sequences stay predictable."
      resilience="Use flex wrapping and avoid fixed child widths that create horizontal overflow."
    >
      <Specimen title="Column to row" description="Resize below 600px to see the vertical layout.">
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          {["Discovery", "Delivery", "Support"].map((label) => (
            <Box key={label} sx={{ minWidth: 0, flex: 1, p: 2.5, backgroundColor: "surface.depth" }}>
              <Typography variant="body2">{label}</Typography>
            </Box>
          ))}
        </Stack>
      </Specimen>
    </PrimitiveStoryFrame>
  ),
};

export const WrappingAndRtl: Story = {
  render: () => (
    <PrimitiveStoryFrame
      title="Wrapping and right-to-left flow"
      summary="Horizontal stacks should absorb longer localized labels and reverse their visual flow when direction changes."
      useWhen="Validating action groups, filters, tags, or metadata across locales."
      avoidWhen="Content is being squeezed into one line at the cost of readable labels or touch targets."
      accessibility="Direction is declared on the relevant region and source order remains meaningful."
      resilience="useFlexGap with flexWrap preserves spacing when labels grow or the canvas narrows."
    >
      <Specimen title="Localized labels" dir="rtl">
        <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1.25}>
          <BrandChip label="الأمان والخصوصية" />
          <BrandChip label="إدارة الحساب" />
          <BrandChip label="الدعم الفني" />
        </Stack>
      </Specimen>
    </PrimitiveStoryFrame>
  ),
};
