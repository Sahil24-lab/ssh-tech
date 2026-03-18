import { Box } from "@mui/material";
import { ProofCardGrid } from "../patterns/ProofCardGrid";
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
          label="// features"
          title={heading}
          description={subheading}
        />
        <ProofCardGrid
          items={items.map((item) => ({
            eyebrow: item.eyebrow,
            title: item.title,
            description: item.description,
          }))}
        />
      </Box>
    </SectionShell>
  );
}
