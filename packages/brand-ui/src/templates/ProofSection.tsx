import { Box, Button } from "@mui/material";
import { ProofCardGrid } from "../patterns/ProofCardGrid";
import { SectionHeader } from "../patterns/SectionHeader";
import { SectionShell } from "../patterns/SectionShell";
import type { QuoteItem } from "../types/content";

export function ProofSection({
  heading,
  quotes,
}: {
  heading: string;
  quotes: QuoteItem[];
}) {
  return (
    <SectionShell sectionProps={{ sx: { backgroundColor: "background.paper" } }}>
      <Box>
        <SectionHeader
          label="Proof of work"
          title={heading}
          description="Deployed examples with measurable results."
          align="center"
        />
        <ProofCardGrid
          items={quotes.map((item) => ({
            eyebrow: item.eyebrow ?? item.author,
            title: item.author,
            description: item.quote,
            highlights: item.highlights,
          }))}
        />
        <Box sx={{ mt: { xs: 6, md: 8 }, display: "flex", justifyContent: "center" }}>
          <Button variant="contained" href="/proof-of-work" sx={{ fontWeight: 700 }}>
            View proof of work
          </Button>
        </Box>
      </Box>
    </SectionShell>
  );
}
