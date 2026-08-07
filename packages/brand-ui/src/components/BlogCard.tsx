"use client";

import { useState } from "react";
import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Link from "next/link";
import { brandTokens } from "../theme/tokens";

export type BlogCardProps = {
  title: string;
  description: string;
  href: string;
  tag?: string;
  tags?: string[];
  publishedDate?: string;
  readTime?: number;
  imageSrc?: string;
  imageAlt?: string;
  loading?: boolean;
};

const DESCRIPTION_MAX_LENGTH = 150;

export function BlogCard({
  title,
  description,
  href,
  tag,
  tags,
  publishedDate,
  readTime,
  imageSrc,
  imageAlt,
  loading = false,
}: BlogCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  if (loading) return <BlogCardSkeleton />;

  const safeTags =
    Array.isArray(tags) && tags.length > 0
      ? tags.filter((t): t is string => typeof t === "string")
      : tag
        ? [tag]
        : [];

  const safeTitle = title?.trim() || "Untitled Post";

  const safeDescription =
    typeof description === "string" && description.trim()
      ? description.length > DESCRIPTION_MAX_LENGTH
        ? description.slice(0, DESCRIPTION_MAX_LENGTH - 3) + "..."
        : description
      : "";

  const formattedDate =
    typeof publishedDate === "string"
      ? new Date(publishedDate).toLocaleDateString("en-GB", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })
      : "Unknown date";

  const displayReadTime =
    typeof readTime === "number" && Number.isFinite(readTime)
      ? `${readTime} min read`
      : "12 min read";

  const showImage =
    typeof imageSrc === "string" && imageSrc.length > 0 && !imageFailed;

  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "secondary.dark",
        borderRadius: `${brandTokens.radius.xl}px`,
        transition: `border-color ${brandTokens.motion.fast}`,
        "&:hover": {
          borderColor: "primary.dark",
        },
      }}
    >
      <CardActionArea
        component={Link}
        href={href}
        sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        {showImage ? (
          <CardMedia
            component="img"
            image={imageSrc}
            alt={imageAlt ?? safeTitle}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            sx={{
              width: "100%",
              height: 220,
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <Box
            role="img"
            aria-label={imageAlt ?? "Feature image"}
            sx={(theme) => ({
              width: "100%",
              height: 220,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              backgroundImage: `linear-gradient(${theme.palette.divider} 1px, transparent 1px), linear-gradient(90deg, ${theme.palette.divider} 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
              backgroundColor: theme.palette.surface.glass.darkElevated,
              borderBottom: `1px solid ${theme.palette.divider}`,
              color: theme.palette.text.secondary,
            })}
          >
            <InsertPhotoIcon sx={{ fontSize: 34, color: "secondary.light" }} />
            <Typography variant="body2">Article preview</Typography>
          </Box>
        )}

        <CardContent
          sx={{
            flexGrow: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            px: 3,
            pt: 2.5,
            pb: 2,
          }}
        >
          {safeTags.length > 0 && (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1.5 }}>
              {safeTags.map((label, idx) => (
                <Chip
                  key={`${label}-${idx}`}
                  label={label}
                  size="small"
                  sx={{
                    bgcolor: "primary.dark",
                    color: "text.primary",
                    fontWeight: 500,
                  }}
                />
              ))}
            </Box>
          )}

          <Typography component="h2" variant="h5" sx={{ fontWeight: 700, lineHeight: 1.4, mb: 0.5 }}>
            {safeTitle}
          </Typography>

          {safeDescription && (
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", lineHeight: 1.6, mt: 0.75, mb: 1.5 }}
            >
              {safeDescription}
            </Typography>
          )}

          <Box
            sx={{
              mt: "auto",
              pt: 1.5,
              borderTop: "1px solid",
              borderColor: "secondary.dark",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <CalendarMonthIcon sx={{ fontSize: 15, flexShrink: 0, opacity: 0.6 }} />
              <Typography variant="caption" sx={{ lineHeight: 1 }}>
                {formattedDate}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <AccessTimeIcon sx={{ fontSize: 15, flexShrink: 0, opacity: 0.6 }} />
              <Typography variant="caption" sx={{ lineHeight: 1 }}>
                {displayReadTime}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Paper>
  );
}

function BlogCardSkeleton() {
  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "secondary.dark",
        borderRadius: `${brandTokens.radius.xl}px`,
      }}
    >
      <Skeleton variant="rectangular" width="100%" height={220} sx={{ flexShrink: 0 }} />
      <Box sx={{ px: 3, pt: 2.5, pb: 2, flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Skeleton variant="rounded" width={64} height={22} sx={{ mb: 1.5 }} />
        <Skeleton variant="text" sx={{ fontSize: "1.25rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1.25rem", width: "72%" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem", mt: 0.75 }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "55%" }} />
        <Box
          sx={{
            mt: "auto",
            pt: 1.5,
            borderTop: "1px solid",
            borderColor: "secondary.dark",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Skeleton variant="text" width={80} />
          <Skeleton variant="text" width={80} />
        </Box>
      </Box>
    </Paper>
  );
}
