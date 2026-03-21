import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Link from "next/link";
import { CardSurface } from "./CardSurface";

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
};

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
}: BlogCardProps) {
  const safeTags =
    Array.isArray(tags) && tags.length > 0 ? tags : tag ? [tag] : [];
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

  return (
    <CardSurface
      surface="panel"
      glow
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "none",
        backgroundColor: "background.paper",
        transition:
          "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "rgb(9, 31, 44)",
          transform: "translateY(-2px)",
          boxShadow: "0 6px 16px rgba(7, 223, 193, 0.25)",
        },
      }}
    >
      <CardActionArea
        component={Link}
        href={href}
        sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        {imageSrc ? (
          <CardMedia
            component="img"
            image={imageSrc}
            alt={imageAlt ?? title}
            sx={{
              width: "100%",
              height: 260,
              objectFit: "cover",
              display: "block",
              transition: "transform 0.7s ease",
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
          />
        ) : (
          <Box
            role="img"
            aria-label={imageAlt ?? "Feature image"}
            sx={(theme) => ({
              width: "100%",
              height: 260,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              backgroundImage: "url(/Hero/hero-background.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "rgba(9, 31, 44, 0.75)",
              backgroundBlendMode: "overlay",
              borderBottom: `1px solid ${theme.palette.divider}`,
              color: theme.palette.text.secondary,
            })}
          >
            <InsertPhotoIcon sx={{ fontSize: 34, color: "secondary.light" }} />
            <Typography
              variant="caption"
              sx={{ letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              Feature image
            </Typography>
          </Box>
        )}

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
          {safeTags.length > 0 ? (
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: "8px", mb: 1.5 }}
            >
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
          ) : null}

          <Typography
            variant="h5"
            sx={{ fontWeight: 700, lineHeight: 1.4, mb: 0.5 }}
          >
            {title}
          </Typography>

          {description ? (
            <Typography
              variant="body2"
              sx={{ color: "text.primary", lineHeight: 1.6, mt: 0.75, mb: 1.5 }}
            >
              {description}
            </Typography>
          ) : null}

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
              gap: 1.5,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <CalendarMonthIcon sx={{ fontSize: 17, flexShrink: 0 }} />
              <Typography variant="caption" sx={{ lineHeight: 1, display: "block" }}>
                {formattedDate}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <AccessTimeIcon sx={{ fontSize: 17, flexShrink: 0 }} />
              <Typography variant="caption" sx={{ lineHeight: 1, display: "block" }}>
                {displayReadTime}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </CardSurface>
  );
}
