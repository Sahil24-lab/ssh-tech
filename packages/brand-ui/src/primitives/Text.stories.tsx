import type { Meta, StoryObj } from "@storybook/react";
import { Link, Stack, Typography } from "@mui/material";
import { PrimitiveStoryFrame, Specimen } from "../storybook/PrimitiveStoryFrame";

const meta: Meta = {
  title: "Primitives/Text",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Text uses the shared body, supporting, and label roles. Choose a role from meaning and density, keep line length readable, and preserve complete content by default.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  name: "Text roles",
  render: () => (
    <PrimitiveStoryFrame
      title="Text"
      summary="Body text carries the interface. Strong contrast, comfortable line height, and a restrained measure matter more than decorative styling."
      useWhen="Presenting paragraphs, supporting detail, metadata, labels, and inline links with a consistent type role."
      avoidWhen="A heading, control label, data value, or code sample has a more specific semantic and typographic treatment."
      accessibility="Preserve native paragraph and link semantics, descriptive link text, sufficient contrast, and browser text resizing."
      resilience="Cap long-form copy near 65–70 characters, wrap long tokens, and let blocks grow vertically instead of clipping."
    >
      <Specimen title="Primary and supporting copy">
        <Stack spacing={2} sx={{ maxWidth: "68ch" }}>
          <Typography variant="body1">
            Primary text explains the main idea with enough line height for sustained reading.
          </Typography>
          <Typography variant="body2" sx={{ color: "text.muted" }}>
            Supporting text adds context without competing with the primary message.
          </Typography>
          <Typography variant="body2">
            Read the <Link href="#text-guidance">text guidance</Link> for implementation details.
          </Typography>
        </Stack>
      </Specimen>
    </PrimitiveStoryFrame>
  ),
};

export const Density: Story = {
  render: () => (
    <PrimitiveStoryFrame
      title="Text density"
      summary="Use the larger body role for high-signal prose and the supporting role for compact descriptions or metadata."
      useWhen="Adjusting information density while keeping the hierarchy quiet and legible."
      avoidWhen="Reducing type size to force too much information into a constrained layout."
      accessibility="The smallest system text remains at least 0.8rem with comfortable line height; zoom and reflow still apply."
      resilience="Short labels can use the mono role sparingly, but explanatory copy stays in the body or supporting family."
    >
      <Specimen title="Role comparison">
        <Stack spacing={2.5} sx={{ maxWidth: "68ch" }}>
          <Stack spacing={0.5}>
            <Typography variant="body1">Body 1 · High-signal prose</Typography>
            <Typography variant="body2" sx={{ color: "text.muted" }}>
              1.1rem / 1.6 line height
            </Typography>
          </Stack>
          <Stack spacing={0.5}>
            <Typography variant="body2">Body 2 · Supporting detail</Typography>
            <Typography variant="body2" sx={{ color: "text.muted" }}>
              1rem / 1.6 line height
            </Typography>
          </Stack>
          <Typography variant="caption" sx={{ textTransform: "none" }}>
            Label · Compact operational metadata
          </Typography>
        </Stack>
      </Specimen>
    </PrimitiveStoryFrame>
  ),
};

export const InternationalAndLongContent: Story = {
  render: () => (
    <PrimitiveStoryFrame
      title="International and long content"
      summary="Mixed writing systems and unbroken values should remain visible without forcing horizontal page scroll."
      useWhen="Testing localization, identifiers, email addresses, URLs, or user-authored copy."
      avoidWhen="Ellipsis would remove information without another way to reveal the complete value."
      accessibility="Language and direction are declared on the relevant text so pronunciation and reading order remain correct."
      resilience="Global overflow wrapping is a safety net; content design should still prefer concise, scannable language."
    >
      <Specimen title="Mixed content">
        <Stack spacing={2} sx={{ maxWidth: 520 }}>
          <Typography variant="body2">
            incident-response-owner+production-escalation@ssh-tech.example
          </Typography>
          <Typography variant="body2" lang="ja">
            複数の文字体系でも、本文は自然に折り返され、読みやすさを維持します。
          </Typography>
          <Typography variant="body2" lang="ar" dir="rtl">
            يحافظ النص العربي على اتجاه القراءة الصحيح والمسافات الواضحة.
          </Typography>
        </Stack>
      </Specimen>
    </PrimitiveStoryFrame>
  ),
};
