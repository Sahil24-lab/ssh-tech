"use client";

import type React from "react";
import { Paper, type PaperProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const GlassPane = styled(Paper)(({ theme }) => ({
  background: `rgba(255, 255, 255, 0.08)`,
  backdropFilter: "blur(15px)",
  borderRadius: "16px",
  border: `1px solid rgba(255, 255, 255, 0.15)`,
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  color: theme.palette.text.primary,
}));

const GlassCard: React.FC<PaperProps> = (props) => {
  return <GlassPane elevation={0} {...props} />;
};

export default GlassCard;
