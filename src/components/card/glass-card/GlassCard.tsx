"use client";

import type React from "react";
import { Paper, type PaperProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const GlassPane = styled(Paper)(({ theme }) => ({
  background: `rgba(${theme.palette.primary.main}, 0.05)`, // Uses theme colors
  backdropFilter: "blur(10px)",
  borderRadius: theme.shape.borderRadius,
  border: `1px solid rgba(${theme.palette.primary.dark}, 0.1)`, // Adjust border using theme
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  color: theme.palette.text.primary, // Ensures text color matches theme
}));

const GlassCard: React.FC<PaperProps> = (props) => {
  const theme = useTheme(); // Get theme colors dynamically

  return <GlassPane elevation={0} {...props} />;
};

export default GlassCard;
