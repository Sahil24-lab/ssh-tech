import { Box, Stack, Typography } from "@mui/material";
import { BrandButton, type BrandButtonProps } from "../components/BrandButton";
import { CardSurface } from "../components/CardSurface";
import { SectionShell } from "../patterns/SectionShell";
import { SectionHeader } from "../patterns/SectionHeader";

export type HeroSectionProps = {
  label: string;
  title: string;
  subtitle: string;
  primaryCta: BrandButtonProps;
  secondaryCta?: BrandButtonProps;
};

export function HeroSection({ label, title, subtitle, primaryCta, secondaryCta }: HeroSectionProps) {
  return (
    <SectionShell sectionProps={{ sx: { py: { xs: 10, md: 14 } } }}>
      <CardSurface surface="glass" sx={{ p: { xs: 4, md: 6 } }}>
        <Box sx={{ maxWidth: 760 }}>
          <SectionHeader
            label={label}
            title={title}
            description={subtitle}
          />
          <Typography variant="h1" sx={{ display: "none" }}>
            {title}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <BrandButton {...primaryCta} />
            {secondaryCta ? <BrandButton {...secondaryCta} variant="outlined" /> : null}
          </Stack>
        </Box>
      </CardSurface>
    </SectionShell>
  );
}
