import React from "react";
import {
  Box,
  Typography,
  Stack,
  Divider,
  Chip,
} from "@mui/material";
import Image from "next/image";

interface PostHeaderProps {
  title: string;
  subtitle?: string;
  featuredImage?: string;
  publishedDate: string;
  tags: string[];
}

export default function PostHeader({
  title,
  subtitle,
  featuredImage,
  publishedDate,
  tags,
}: PostHeaderProps) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        padding: { xs: "1rem", md: "1rem 4rem" },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {featuredImage && (
        <Box
          sx={{
            flex: "0 0 280px",
            borderRadius: 2,
            overflow: "hidden",
            maxWidth: { xs: "100%", md: 280 },
            mb: { xs: 3, md: 0 },
          }}
        >
          <Image
            src={`https:${featuredImage}`}
            alt={title ?? "Featured Image"}
            width={400}
            height={400}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      )}

      <Box sx={{ flex: 1 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {subtitle}
          </Typography>
        )}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          mt={1}
          mb={2}
        >
          <Typography variant="body2" color="text.secondary">
            {new Date(publishedDate).toLocaleDateString()}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body2" color="text.secondary">
            15 min read
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          {tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
