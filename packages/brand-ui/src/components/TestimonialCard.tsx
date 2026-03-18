import { useState } from "react";
import { Avatar, Box, Rating, Stack, Typography } from "@mui/material";
import { CardSurface } from "./CardSurface";

export type TestimonialCardProps = {
  preview: string;
  quote: string;
  author: string;
  role: string;
  rating?: number;
  image?: string;
};

function truncateAtWord(text: string, limit: number) {
  if (text.length <= limit) return text;
  const truncated = text.slice(0, limit);
  return `${truncated.slice(0, truncated.lastIndexOf(" "))}...`;
}

export function TestimonialCard({
  preview,
  quote,
  author,
  role,
  rating = 5,
  image,
}: TestimonialCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <CardSurface surface="glass" glow sx={{ p: 5, height: "100%" }}>
      <Stack spacing={2.25} height="100%">
        <Rating value={rating} readOnly />
        <Typography variant="h5">{preview}</Typography>
        <Typography variant="body2" sx={{ color: "text.primary", lineHeight: 1.65 }}>
          {expanded ? quote : truncateAtWord(quote, 160)}
        </Typography>
        <Typography
          component="button"
          type="button"
          onClick={() => setExpanded((value) => !value)}
          sx={{
            alignSelf: "flex-start",
            color: "primary.main",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            background: "transparent",
            border: 0,
            px: 0,
            cursor: "pointer",
          }}
        >
          {expanded ? "Show less" : "Read more"}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: "auto" }}>
          <Avatar
            src={image}
            alt={author}
            sx={{
              width: 48,
              height: 48,
              bgcolor: "rgba(7, 223, 193, 0.12)",
              color: "primary.main",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontWeight: 700,
            }}
          >
            {author.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {author}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {role}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </CardSurface>
  );
}
