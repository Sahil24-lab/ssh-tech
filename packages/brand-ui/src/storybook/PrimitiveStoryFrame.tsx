import type { ReactNode } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { shapeTokens } from "../theme/foundation";
import { brandTokens } from "../theme/tokens";

type PrimitiveStoryFrameProps = {
  title: string;
  summary: string;
  useWhen: string;
  avoidWhen: string;
  accessibility: string;
  resilience: string;
  children: ReactNode;
};

type SpecimenProps = {
  title: string;
  description?: string;
  children: ReactNode;
  dir?: "ltr" | "rtl";
};

const guidanceLabels = {
  useWhen: "Use when",
  avoidWhen: "Avoid when",
  accessibility: "Accessibility",
  resilience: "Resilience",
} as const;

export function PrimitiveStoryFrame({
  title,
  summary,
  useWhen,
  avoidWhen,
  accessibility,
  resilience,
  children,
}: PrimitiveStoryFrameProps) {
  const guidance = { useWhen, avoidWhen, accessibility, resilience };

  return (
    <Stack spacing={{ xs: 4, md: 5 }} sx={{ width: "100%", maxWidth: 1120, mx: "auto" }}>
      <Stack spacing={1.5} sx={{ maxWidth: "70ch" }}>
        <Typography
          variant="caption"
          sx={{ color: "primary.main", textTransform: "none" }}
        >
          Primitive guidance
        </Typography>
        <Typography component="h2" variant="h3">
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {summary}
        </Typography>
      </Stack>

      <Box
        component="dl"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
          m: 0,
          borderBlock: `1px solid ${brandTokens.color.divider.default}`,
        }}
      >
        {Object.entries(guidance).map(([key, value], index) => (
          <Box
            component="div"
            key={key}
            sx={{
              minWidth: 0,
              py: 2.5,
              pr: { md: index % 2 === 0 ? 3 : 0 },
              pl: { md: index % 2 === 1 ? 3 : 0 },
              borderBottom: {
                xs: index < 3 ? `1px solid ${brandTokens.color.divider.default}` : "none",
                md: index < 2 ? `1px solid ${brandTokens.color.divider.default}` : "none",
              },
              borderLeft: {
                md: index % 2 === 1 ? `1px solid ${brandTokens.color.divider.default}` : "none",
              },
            }}
          >
            <Typography
              component="dt"
              variant="caption"
              sx={{ mb: 0.75, color: "primary.main", textTransform: "none" }}
            >
              {guidanceLabels[key as keyof typeof guidanceLabels]}
            </Typography>
            <Typography component="dd" variant="body2" sx={{ m: 0, color: "text.muted" }}>
              {value}
            </Typography>
          </Box>
        ))}
      </Box>

      <Stack spacing={3}>{children}</Stack>
    </Stack>
  );
}

export function Specimen({ title, description, children, dir = "ltr" }: SpecimenProps) {
  return (
    <Box
      component="section"
      dir={dir}
      sx={{
        minWidth: 0,
        p: { xs: 2.5, sm: 3.5 },
        border: `1px solid ${brandTokens.color.divider.default}`,
        borderRadius: `${shapeTokens.panel}px`,
        backgroundColor: "background.paper",
        overflow: "hidden",
      }}
    >
      <Stack spacing={description ? 0.75 : 0} sx={{ mb: 2.5 }}>
        <Typography component="h3" variant="h5">
          {title}
        </Typography>
        {description ? (
          <Typography variant="body2" sx={{ color: "text.muted", maxWidth: "70ch" }}>
            {description}
          </Typography>
        ) : null}
      </Stack>
      {children}
    </Box>
  );
}
