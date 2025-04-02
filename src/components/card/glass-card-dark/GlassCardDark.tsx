"use client";

import type React from "react";
import { Paper, type PaperProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

// Add custom prop type
interface GlassCardProps extends PaperProps {
  opacity?: number; // optional, defaults below
}

// Forward `opacity` to style but not DOM
const GlassPane = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "opacity",
})<GlassCardProps>(
  ({ theme, opacity = 0.08 }: { theme: Theme; opacity?: number }) => ({
    background: `rgba(255, 255, 255, ${opacity})`,
    backdropFilter: "blur(15px)",
    borderRadius: "16px",
    border: `1px solid rgba(255, 255, 255, 0.15)`,
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    backgroundColor: theme.palette.background.paper,
  })
);

const GlassCardDark: React.FC<GlassCardProps> = (props) => {
  return <GlassPane elevation={0} {...props} />;
};

export default GlassCardDark;
