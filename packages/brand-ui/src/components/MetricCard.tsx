import { Box, Chip, Stack, Typography } from "@mui/material";
import { CardSurface } from "./CardSurface";

export type MetricCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  highlights?: string[];
};

export function MetricCard({
  eyebrow,
  title,
  description,
  highlights = [],
}: MetricCardProps) {
  return (
    <CardSurface surface="glass" glow sx={{ p: 4, height: "100%" }}>
      <Stack spacing={2.25} height="100%">
        {eyebrow ? (
          <Typography variant="caption" sx={{ fontSize: "0.7rem" }}>
            {eyebrow}
          </Typography>
        ) : null}
        <Typography variant="h5">{title}</Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", lineHeight: 1.7 }}
        >
          {description}
        </Typography>
        {highlights.length > 0 ? (
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: "auto" }}>
            {highlights.map((highlight) => (
              <Chip
                key={highlight}
                label={highlight}
                variant="outlined"
                color="primary"
                sx={{
                  borderColor: "primary.main",
                  color: "primary.main",
                  "& .MuiChip-label": { px: 1.5 },
                }}
              />
            ))}
          </Box>
        ) : null}
      </Stack>
    </CardSurface>
  );
}
