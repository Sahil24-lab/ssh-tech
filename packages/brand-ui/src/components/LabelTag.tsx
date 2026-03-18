import { Box, Typography } from "@mui/material";

export function LabelTag({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        px: 1.5,
        py: 0.65,
        borderRadius: 2,
        backgroundColor: "rgba(7, 223, 193, 0.19)",
        border: "1px solid",
        borderColor: "secondary.dark",
      }}
    >
      <Typography
        variant="caption"
        sx={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "primary.light",
          fontSize: "0.68rem",
          lineHeight: 1,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}
