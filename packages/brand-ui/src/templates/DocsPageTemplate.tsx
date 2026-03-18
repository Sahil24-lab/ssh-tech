import { Box, Stack, Typography } from "@mui/material";
import { CardSurface } from "../components/CardSurface";
import { SectionHeader } from "../patterns/SectionHeader";
import { SectionShell } from "../patterns/SectionShell";
import type { DocsSection } from "../types/content";

export function DocsPageTemplate({
  title,
  description,
  sections,
}: {
  title: string;
  description: string;
  sections: DocsSection[];
}) {
  return (
    <SectionShell>
      <SectionHeader title={title} description={description} />
      <Stack spacing={2}>
        {sections.map((section) => (
          <Box key={section.heading}>
            <CardSurface surface="panel" sx={{ p: 3 }}>
              <Stack spacing={1}>
                <Typography variant="h5">{section.heading}</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.65 }}>
                  {section.body}
                </Typography>
              </Stack>
            </CardSurface>
          </Box>
        ))}
      </Stack>
    </SectionShell>
  );
}
