"use client";

import Link from "next/link";
import { BlogPostEntry } from "@/app/types/contentful";
import {
  Box,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";
import GlassCardDark from "@/components/card/glass-card-dark/GlassCardDark";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function BlogCard({ post }: { post: BlogPostEntry }) {
  const { title, slug, shortDescription, featuredImage, publishedDate, tags } =
    post.fields;

  let imageUrl = "/placeholder.jpg";
  let imageAlt = "Blog image";

  if (
    featuredImage &&
    typeof featuredImage === "object" &&
    featuredImage["fields"]
  ) {
    if (
      featuredImage["fields"]["file"] &&
      typeof featuredImage["fields"]["file"]["url"] === "string"
    ) {
      imageUrl = `https:${featuredImage["fields"]["file"]["url"]}`;
    }

    if (typeof featuredImage["fields"]["title"] === "string") {
      imageAlt = featuredImage["fields"]["title"];
    }
  }

  const formattedDate =
    typeof publishedDate === "string"
      ? new Date(publishedDate).toLocaleDateString("en-GB", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })
      : "Unknown date";

  const safeTags = Array.isArray(tags)
    ? tags.filter((tag): tag is string => typeof tag === "string")
    : [];

  const subtitleField = shortDescription as string | undefined;

  const safeSubtitle =
    typeof subtitleField === "string" && subtitleField.trim()
      ? subtitleField.length > 150
        ? subtitleField.slice(0, 147) + "..."
        : subtitleField
      : "";

  return (
    <GlassCardDark
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "none", // override the translucent background
        backgroundColor: "#091F2C", // your darker paper color
        transition:
          "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "rgb(9, 31, 44)", // darker shade
          transform: "translateY(-2px)",
          boxShadow: "0 6px 16px rgba(7, 223, 193, 0.25)",
        },
      }}
    >
      <Link href={`/blog/${slug}`} passHref legacyBehavior>
        <CardActionArea
          sx={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <CardMedia
            component="img"
            image={imageUrl}
            alt={imageAlt}
            sx={{
              width: "100%",
              height: 260,
              objectFit: "cover",
              transition: "transform 0.7s ease",
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
          />

          <CardContent
            sx={{
              flexGrow: 1,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              px: 3,
              pt: 2.5,
              pb: 2,
            }}
          >
            {safeTags.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  mb: 1.5,
                }}
              >
                {safeTags.map((tag, idx) => (
                  <Chip
                    key={idx}
                    label={tag}
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

            <Typography
              variant="h5"
              sx={{ fontWeight: 700, lineHeight: 1.4, mb: 0.5 }}
            >
              {typeof title === "string" ? title : "Untitled Post"}
            </Typography>

            {safeSubtitle && (
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  lineHeight: 1.6,
                  mt: 0.75,
                  mb: 1.5,
                }}
              >
                {safeSubtitle}
              </Typography>
            )}

            <Box
              sx={{
                margin: "1rem 0 0.6rem 0",
                width: "100%",
                height: "2px",
                background: (theme) =>
                  `linear-gradient(to right, transparent 1%, ${theme.palette.secondary.dark} 20%, ${theme.palette.secondary.dark} 80%, transparent 98%)`,
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <CalendarMonthIcon fontSize="small" />
                <Typography variant="caption">{formattedDate}</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <AccessTimeIcon fontSize="small" />
                <Typography variant="caption">12 min read</Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
    </GlassCardDark>
  );
}
