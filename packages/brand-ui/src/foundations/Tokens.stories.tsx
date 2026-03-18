import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography } from "@mui/material";
import { brandTokens } from "../theme/tokens";

const meta: Meta = {
  title: "Foundations/Tokens",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const SpacingRadiusShadowsMotion: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h5">Spacing</Typography>
      <Typography variant="body2">
        card: {brandTokens.spacing.card} | cardDense: {brandTokens.spacing.cardDense} | sectionY: {brandTokens.spacing.sectionY}
      </Typography>
      <Typography variant="h5">Radius</Typography>
      <Typography variant="body2">
        sm: {brandTokens.radius.sm}px | md: {brandTokens.radius.md}px | lg: {brandTokens.radius.lg}px | xl: {brandTokens.radius.xl}px
      </Typography>
      <Typography variant="h5">Shadows</Typography>
      <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {Object.entries(brandTokens.shadow).map(([name, value]) => (
          <Box
            key={name}
            sx={{
              p: 3,
              borderRadius: `${brandTokens.radius.xl}px`,
              bgcolor: "background.paper",
              boxShadow: value,
              border: "1px solid",
              borderColor: "secondary.dark",
            }}
          >
            <Typography variant="subtitle1">{name}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {value}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography variant="h5">Motion</Typography>
      <Typography variant="body2">
        fast: {brandTokens.motion.fast} | base: {brandTokens.motion.base}
      </Typography>
    </Stack>
  ),
};
