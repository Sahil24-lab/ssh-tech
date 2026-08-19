import { Stack, Typography } from "@mui/material";
import { Container, SectionShell, TestimonialStack } from "@ssh/brand-ui";
import { engineeringTestimonials } from "./content";

export default function EngineeringTestimonials() {
  return (
    <SectionShell sectionProps={{ id: "testimonials" }}>
      <Container size="wide" disableGutters>
        <Stack spacing={2.5} sx={{ mb: { xs: 6, md: 8 }, maxWidth: 720 }}>
          <Typography component="h2" variant="h2" sx={{ color: "text.primary", textWrap: "balance" }}>
            Trusted with difficult delivery.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            The useful part is turning technical complexity into a system the business can operate and keep moving.
          </Typography>
        </Stack>
        <TestimonialStack items={engineeringTestimonials} />
      </Container>
    </SectionShell>
  );
}
