import { Box, Stack, Typography } from "@mui/material";
import { BrandButton, SectionHeader, SectionShell } from "@ssh/brand-ui";

export default function ContactPage() {
  return (
    <Box component="main">
      <SectionShell>
        <SectionHeader
          headingLevel="h1"
          label="Project enquiries"
          title="Bring the product problem, not a polished brief."
          description="Tell us what needs to work, who it needs to work for, and where the current interface is getting in the way."
        />
        <Stack spacing={2} sx={{ maxWidth: 640 }}>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            We’ll reply with the questions needed to define a useful first scope—without turning the first conversation into a sales maze.
          </Typography>
          <Box>
            <BrandButton
              label="Email SSH Tech"
              href="mailto:hello@ssh-tech.com.au?subject=Product%20interface%20enquiry"
            />
          </Box>
        </Stack>
      </SectionShell>
    </Box>
  );
}
