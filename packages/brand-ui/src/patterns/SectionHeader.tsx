import { Stack, Typography } from "@mui/material";
import { LabelTag } from "../components/LabelTag";

export type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  maxWidth?: number;
  headingLevel?: "h1" | "h2" | "h3";
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  maxWidth = 720,
  headingLevel = "h2",
}: SectionHeaderProps) {
  return (
    <Stack
      spacing={2}
      sx={{
        mb: 4,
        maxWidth: align === "center" ? maxWidth : undefined,
        mx: align === "center" ? "auto" : undefined,
        textAlign: align,
      }}
    >
      {label ? (
        <Stack alignItems={align === "center" ? "center" : "flex-start"}>
          <LabelTag>{label}</LabelTag>
        </Stack>
      ) : null}
      <Typography
        component={headingLevel}
        variant={headingLevel === "h1" ? "h1" : "h2"}
        sx={{ fontSize: headingLevel === "h1" ? { xs: "2.7rem", md: "4.5rem" } : { xs: "1.9rem", md: "2.8rem" } }}
      >
        {title}
      </Typography>
      {description ? (
        <Typography variant="body1" sx={{ color: "text.secondary", maxWidth }}>
          {description}
        </Typography>
      ) : null}
    </Stack>
  );
}
