import { Box, Chip, Skeleton, Stack, Typography } from "@mui/material";
import { CardSurface } from "./CardSurface";

export type MetricCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  highlights?: string[];
  loading?: boolean;
};

export function MetricCard({
  eyebrow,
  title,
  description,
  highlights = [],
  loading = false,
}: MetricCardProps) {
  if (loading) return <MetricCardSkeleton />;
  return (
    <CardSurface surface="panel" sx={{ p: 4, height: "100%" }}>
      <Stack spacing={2.25} height="100%">
        {eyebrow ? (
          <Typography variant="caption" sx={{ fontSize: "0.7rem" }}>
            {eyebrow}
          </Typography>
        ) : null}
        <Typography component="h3" variant="h5">{title}</Typography>
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

function MetricCardSkeleton() {
  return (
    <CardSurface surface="panel" sx={{ p: 4, height: "100%" }}>
      <Stack spacing={2.25} height="100%">
        <Skeleton variant="text" width={60} sx={{ fontSize: "0.7rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1.25rem" }} />
        <Box>
          <Skeleton variant="text" sx={{ fontSize: "1.1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1.1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1.1rem", width: "65%" }} />
        </Box>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: "auto" }}>
          <Skeleton variant="rounded" width={72} height={28} />
          <Skeleton variant="rounded" width={88} height={28} />
        </Box>
      </Stack>
    </CardSurface>
  );
}
