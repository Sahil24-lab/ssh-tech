import { Chip } from "@mui/material";
import { brandTokens } from "../theme/tokens";

export function BrandChip({ label }: { label: string }) {
  return (
    <Chip
      label={label}
      sx={{
        border: "1px solid",
        borderColor: "primary.main",
        color: "primary.main",
        backgroundColor: brandTokens.color.action.hover,
        fontWeight: 600,
      }}
    />
  );
}
