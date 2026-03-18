import { Chip } from "@mui/material";

export function BrandChip({ label }: { label: string }) {
  return (
    <Chip
      label={label}
      sx={{
        border: "1px solid",
        borderColor: "primary.main",
        color: "primary.main",
        backgroundColor: "rgba(7, 223, 193, 0.08)",
        fontWeight: 600,
      }}
    />
  );
}
