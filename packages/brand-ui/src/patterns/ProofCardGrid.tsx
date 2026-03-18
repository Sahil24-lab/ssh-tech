import { Grid } from "@mui/material";
import { MetricCard } from "../components/MetricCard";
import type { MetricItem } from "../types/content";

export function ProofCardGrid({ items }: { items: MetricItem[] }) {
  return (
    <Grid container spacing={{ xs: 3, md: 4 }}>
      {items.map((item) => (
        <Grid item xs={12} md={6} lg={4} key={`${item.title}-${item.description.slice(0, 12)}`}>
          <MetricCard
            eyebrow={item.eyebrow}
            title={item.title}
            description={item.description}
            highlights={item.highlights}
          />
        </Grid>
      ))}
    </Grid>
  );
}
