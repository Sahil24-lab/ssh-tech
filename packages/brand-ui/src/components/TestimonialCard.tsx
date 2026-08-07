"use client";

import { useState } from "react";
import { Avatar, Box, Rating, Skeleton, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { CardSurface } from "./CardSurface";

export type TestimonialCardProps = {
  preview: string;
  quote: string;
  author: string;
  role: string;
  rating?: number;
  image?: string;
  loading?: boolean;
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
  loading = false,
}: TestimonialCardProps) {
  const [expanded, setExpanded] = useState(false);

  if (loading) return <TestimonialCardSkeleton />;

  return (
    <CardSurface surface="panel" sx={{ p: 5, height: "100%" }}>
      <Stack spacing={2.25} height="100%">
        <Rating value={rating} readOnly />
        <Typography variant="h5">{preview}</Typography>
        <Typography variant="body2" sx={{ color: "text.primary", lineHeight: 1.65 }}>
          {expanded ? quote : truncateAtWord(quote, 160)}
        </Typography>
        <Typography
          component="button"
          type="button"
          aria-expanded={expanded}
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
            minHeight: 44,
            px: 1,
            cursor: "pointer",
          }}
        >
          {expanded ? "Show less" : "Read more"}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: "auto" }}>
          <Avatar
            src={image}
            alt={author}
            sx={(theme) => ({
              width: 48,
              height: 48,
              bgcolor: alpha(theme.palette.primary.main, 0.12),
              color: "primary.main",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontWeight: 700,
            })}
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

function TestimonialCardSkeleton() {
  return (
    <CardSurface surface="panel" sx={{ p: 5, height: "100%" }}>
      <Stack spacing={2.25} height="100%">
        {/* Stars */}
        <Box sx={{ display: "flex", gap: 0.5 }}>
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} variant="rounded" width={20} height={20} />
          ))}
        </Box>
        {/* Preview heading */}
        <Skeleton variant="text" sx={{ fontSize: "1.25rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1.25rem", width: "80%" }} />
        {/* Quote body */}
        <Box>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "70%" }} />
        </Box>
        {/* Read more link */}
        <Skeleton variant="text" width={72} sx={{ fontSize: "0.8rem" }} />
        {/* Author footer */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: "auto" }}>
          <Skeleton variant="circular" width={48} height={48} />
          <Box sx={{ flexGrow: 1 }}>
            <Skeleton variant="text" width="50%" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="text" width="38%" sx={{ fontSize: "0.9rem" }} />
          </Box>
        </Box>
      </Stack>
    </CardSurface>
  );
}
