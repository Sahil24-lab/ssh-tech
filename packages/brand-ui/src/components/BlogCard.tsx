import { CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { CardSurface } from "./CardSurface";
import { LabelTag } from "./LabelTag";

export type BlogCardProps = {
  title: string;
  description: string;
  href: string;
  tag?: string;
  imageSrc?: string;
};

export function BlogCard({ title, description, href, tag, imageSrc }: BlogCardProps) {
  return (
    <CardSurface surface="panel" glow sx={{ overflow: "hidden", height: "100%" }}>
      <CardActionArea component={Link} href={href}>
        {imageSrc ? (
          <CardMedia
            component="img"
            image={imageSrc}
            alt={title}
            sx={{ height: 220, objectFit: "cover" }}
          />
        ) : null}
        <CardContent sx={{ p: 3 }}>
          <Stack spacing={1.75}>
            {tag ? <LabelTag>{tag}</LabelTag> : null}
            <Typography variant="h5" sx={{ lineHeight: 1.3 }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.65 }}>
              {description}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </CardSurface>
  );
}
