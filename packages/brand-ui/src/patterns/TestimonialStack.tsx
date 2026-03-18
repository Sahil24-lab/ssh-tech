import { Grid } from "@mui/material";
import { TestimonialCard } from "../components/TestimonialCard";
import type { TestimonialItem } from "../types/content";

export function TestimonialStack({ items }: { items: TestimonialItem[] }) {
  return (
    <Grid container spacing={4} alignItems="stretch">
      {items.map((item) => (
        <Grid item xs={12} md={6} key={`${item.author}-${item.preview}`}>
          <TestimonialCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
}
