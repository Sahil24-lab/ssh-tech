import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import type { LinkItem } from "../types/content";

export function FooterSection({ leftText, links }: { leftText: string; links: LinkItem[] }) {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 4,
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "secondary.dark",
        boxShadow: "0 -6px 24px rgba(0, 0, 0, 0.18)",
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          spacing={2}
        >
          <Typography
            variant="caption"
            sx={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              letterSpacing: "0.06em",
              color: "text.secondary",
            }}
          >
            {leftText}
          </Typography>
          <Stack direction="row" spacing={2.5}>
            {links.map((link) => (
              <Typography
                key={link.href}
                component={Link}
                href={link.href}
                variant="caption"
              sx={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "text.secondary",
                "&:hover": { color: "primary.light" },
              }}
              >
                {link.label}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
