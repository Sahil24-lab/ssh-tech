import { Box, Divider, Stack, Typography } from "@mui/material";
import { SectionHeader } from "../patterns/SectionHeader";
import { SectionShell } from "../patterns/SectionShell";
import type { FeatureItem } from "../types/content";

export function FeatureSection({
  heading,
  subheading,
  items,
}: {
  heading: string;
  subheading: string;
  items: FeatureItem[];
}) {
  return (
    <SectionShell>
      <Box>
        <SectionHeader
          title={heading}
          description={subheading}
        />
        <Stack divider={<Divider flexItem />}>
          {items.map((item, index) => (
            <Box
              key={item.title}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "44px 1fr", md: "72px minmax(220px, 0.7fr) 1fr" },
                gap: { xs: 2, md: 4 },
                alignItems: "baseline",
                py: { xs: 3, md: 4 },
              }}
            >
              <Typography variant="caption" sx={{ color: "primary.main" }}>
                {String(index + 1).padStart(2, "0")}
              </Typography>
              <Typography component="h3" variant="h5">{item.title}</Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", gridColumn: { xs: "2", md: "auto" } }}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </SectionShell>
  );
}
