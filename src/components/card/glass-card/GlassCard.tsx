"use client";

import type React from "react";
import { Paper, type PaperProps } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const GlassPane = styled(Paper)(({ theme }) => ({
  background: `rgba(255, 255, 255, 0.08)`, // ✅ More transparent
  backdropFilter: "blur(15px)", // ✅ Increased blur effect
  borderRadius: "16px", // ✅ Increased roundness
  border: `1px solid rgba(255, 255, 255, 0.15)`, // ✅ Lighter border for a softer look
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)", // ✅ More depth
  color: theme.palette.text.primary, // Ensures text color matches theme
}));

const GlassCard: React.FC<PaperProps> = (props) => {
  return <GlassPane elevation={0} {...props} />;
};

export default GlassCard;
