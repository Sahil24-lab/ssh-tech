import { Stack, Typography } from "@mui/material";
import { Container, SectionShell, TestimonialStack } from "@ssh/brand-ui";
import { engineeringTestimonials } from "./content";

export default function EngineeringTestimonials() {
  return (
    <SectionShell sectionProps={{ id: "testimonials", sx: { py: { xs: 9, md: 14 } } }}>
      <Container size="wide" disableGutters>
        <Stack spacing={2.5} sx={{ mb: { xs: 6, md: 8 }, maxWidth: 720 }}>
          <Typography component="h2" variant="h2" sx={{ color: "text.primary", textWrap: "balance" }}>
            What clients say.
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(239, 254, 235, 0.7)" }}>
            Clear thinking, dependable delivery and systems built for the real operation.
          </Typography>
        </Stack>
        <TestimonialStack items={engineeringTestimonials} />
      </Container>
    </SectionShell>
  );
}
