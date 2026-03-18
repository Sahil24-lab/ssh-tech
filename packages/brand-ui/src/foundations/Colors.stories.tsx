import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography } from "@mui/material";
import { brandTokens } from "../theme/tokens";

const meta: Meta = {
  title: "Foundations/Colors",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

const colorGroups = [
  ["Primary", brandTokens.color.primary],
  ["Secondary", brandTokens.color.secondary],
  ["Error", brandTokens.color.error],
  ["Warning", brandTokens.color.warning],
  ["Success", brandTokens.color.success],
  ["Info", brandTokens.color.info],
  ["Divider", brandTokens.color.divider],
  ["Action", brandTokens.color.action],
  ["Background", brandTokens.color.background],
  ["Text", brandTokens.color.text],
] as const;

export const Palette: Story = {
  render: () => (
    <Stack spacing={4} sx={{ p: 4 }}>
      {colorGroups.map(([label, group]) => (
        <Stack key={label} spacing={1.5}>
          <Typography variant="h5">{label}</Typography>
          <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
            {Object.entries(group).map(([name, value]) => (
              <Box
                key={name}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "secondary.dark",
                  backgroundColor: "background.paper",
                }}
              >
                <Box sx={{ height: 88, borderRadius: 2, bgcolor: value, mb: 1.5 }} />
                <Typography variant="subtitle1">{name}</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Stack>
      ))}
    </Stack>
  ),
};
