import { Box } from "@mui/material";
import { PricingSummary } from "../patterns/PricingSummary";
import { SectionHeader } from "../patterns/SectionHeader";
import { SectionShell } from "../patterns/SectionShell";
import type { PricingPlan } from "../types/content";

export function PricingSection({
  heading,
  plans,
  id,
}: {
  heading: string;
  plans: PricingPlan[];
  id?: string;
}) {
  return (
    <SectionShell sectionProps={{ id }}>
      <Box>
        <SectionHeader title={heading} description="Fixed scope and highlighted plans with shared card treatment." />
        <PricingSummary plans={plans} />
      </Box>
    </SectionShell>
  );
}
