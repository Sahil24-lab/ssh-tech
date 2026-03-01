"use client";

import { useState } from "react";
import { Typography, Grid, Box, Rating, Avatar, useTheme } from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";

interface Testimonial {
  preview: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  image?: string;
}

const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) return text;
  const truncated = text.substring(0, limit);
  return truncated.substring(0, truncated.lastIndexOf(" ")) + "... ";
};

// [REPLACE WITH REAL TESTIMONIALS]
const testimonials: Testimonial[] = [
  {
    preview: "The only team that started with our operations, not a pitch.",
    quote:
      "We evaluated three AI consultancies. SSH-Tech was the only one that started by understanding our operations instead of pitching a product. The system they built processes our daily intake automatically and hasn't needed intervention in months.",
    author: "Client Name", // [REPLACE WITH CLIENT]
    role: "Director of Operations, Company", // [REPLACE WITH CLIENT]
    rating: 5,
  },
  {
    preview: "Full visibility into accuracy, cost, and ROI from day one.",
    quote:
      "Full visibility into accuracy, cost per query, and failure rates. That level of transparency let us justify the investment to our board within the first month. Most AI vendors can't give you that.",
    author: "Client Name", // [REPLACE WITH CLIENT]
    role: "CTO, Company", // [REPLACE WITH CLIENT]
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  return (
    <GlassCard
      sx={{
        p: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        borderRadius: "12px",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
        width: "100%",
        flex: 1,
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: `0px 0px 18px 4px ${theme.palette.primary.main}30`,
        },
      }}
    >
      <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {testimonial.preview}
      </Typography>

      <Typography variant="body2" paragraph sx={{ lineHeight: 1.6, mb: 0.5 }}>
        {expanded ? testimonial.quote : truncateText(testimonial.quote, 140)}
      </Typography>

      <Typography
        onClick={() => setExpanded((prev) => !prev)}
        sx={{
          color: "primary.main",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "0.875rem",
          mb: 2,
        }}
      >
        {expanded ? "Show Less" : "Read More"}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", mt: "auto" }}>
        <Avatar
          src={testimonial.image}
          alt={testimonial.author}
          sx={{
            width: 48,
            height: 48,
            mr: 2,
            bgcolor: `${theme.palette.primary.main}20`,
            color: "primary.main",
            fontFamily: "monospace",
            fontWeight: 700,
          }}
        >
          {testimonial.author.charAt(0)}
        </Avatar>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, lineHeight: 1.4 }}>
            {testimonial.author}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 600, lineHeight: 1.4 }}>
            {testimonial.role}
          </Typography>
        </Box>
      </Box>
    </GlassCard>
  );
};

const AITestimonials = () => {
  return (
    <Box sx={{ py: 2 }}>
      <Typography
        variant="body2"
        align="center"
        sx={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.73rem",
          color: "primary.main",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          mb: 2,
        }}
      >
        // trusted by
      </Typography>

      <Typography
        variant="h1"
        component="h2"
        align="center"
        sx={{
          fontWeight: "bold",
          letterSpacing: "-0.02em",
          color: "#FFFFFF",
          mb: 2,
        }}
      >
        Organisations that needed systems, not experiments.
      </Typography>

      <Box sx={{ mb: 8 }} />

      <Grid container spacing={4} alignItems="stretch">
        {testimonials.map((testimonial, index) => (
          <Grid
            item
            key={index}
            xs={12}
            md={6}
            lg={6}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <TestimonialCard testimonial={testimonial} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AITestimonials;
