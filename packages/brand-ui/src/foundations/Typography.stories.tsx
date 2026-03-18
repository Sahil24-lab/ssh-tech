import type { Meta, StoryObj } from "@storybook/react";
import { Box, Divider, Stack, Typography } from "@mui/material";

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

const typographyRows = [
  {
    label: "Display",
    variant: "h1" as const,
    element: "<h1>",
    usage: "Primary page heading",
    sample: "Accelerate product delivery with focused engineering.",
  },
  {
    label: "Heading 2",
    variant: "h2" as const,
    element: "<h2>",
    usage: "Primary section heading",
    sample: "Built for ambitious teams shipping quickly.",
  },
  {
    label: "Heading 5",
    variant: "h5" as const,
    element: "<h5>",
    usage: "Card or feature title",
    sample: "Composable systems with strong defaults.",
  },
  {
    label: "Caption",
    variant: "caption" as const,
    element: "<span>",
    usage: "Label, overline, metadata",
    sample: "SYSTEM LABEL",
  },
  {
    label: "Body 1",
    variant: "body1" as const,
    element: "<p>",
    usage: "Lead paragraph and primary copy",
    sample:
      "Clear structure improves readability across landing pages, product surfaces, and documentation.",
  },
  {
    label: "Body 2",
    variant: "body2" as const,
    element: "<p>",
    usage: "Supporting copy and secondary detail",
    sample:
      "Supporting text provides context without competing with the primary message.",
  },
];

export const Scale: Story = {
  render: () => (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          px: { xs: 3, md: 6 },
          py: { xs: 4, md: 6 },
        }}
      >
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography variant="caption" sx={{ color: "primary.light" }}>
              TYPOGRAPHY
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 720 }}>
              Type scale and semantic defaults for the SSH Tech design system.
            </Typography>
          </Stack>

          {typographyRows.map((row) => (
            <Box key={row.label} sx={{ py: { xs: 2.5, md: 3 } }}>
              <Stack spacing={1.25}>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={{ xs: 0.75, md: 2 }}
                  sx={{ alignItems: { xs: "flex-start", md: "center" } }}
                >
                  <Typography variant="caption" sx={{ color: "primary.light" }}>
                    {row.label}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    Variant: {row.variant}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    Default output: {row.element}
                  </Typography>
                </Stack>

                <Typography variant={row.variant}>{row.sample}</Typography>

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Usage: {row.usage}
                </Typography>
              </Stack>
              <Divider sx={{ mt: { xs: 2.5, md: 3 }, borderColor: "rgba(113, 255, 243, 0.14)" }} />
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  ),
};
