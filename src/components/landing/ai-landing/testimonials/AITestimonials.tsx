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
    preview: "Bridging the gap between vision & execution",
    quote:
      "Working with Sahil was a game-changer. He was instrumental in bridging the gap between what we needed operationally and how to actually build it. His ability to translate complex requirements into production-ready systems ensured smooth execution and timely delivery. He played a critical role in designing and integrating multiple systems into a cohesive architecture that scaled with us. He thrives in high-pressure environments, tackling challenges head-on with a problem-solving approach that drives real results.",
    author: "Ben Howen",
    role: "Head of Product at Playlobby",
    rating: 5,
    image: "/testimonials/Ben.jpeg",
  },
  {
    preview: "Prioritizing What Matters Most",
    quote:
      "I've been fortunate to know Sahil for quite some time and I'm always eager to team up with him on new projects. Sahil's energy for crafting solutions is contagious. He strikes the perfect balance between focusing on business outcomes and tackling the technical complexity that comes with integrating AI into real operations. Sahil thrives on challenges and is always ready to dive into complex problems, determined to emerge with practical, production-ready solutions. His steadfast work ethic, coupled with his engaging personality, makes working together a smooth and enjoyable experience.",
    author: "Mack Saraswat",
    role: "Serial Entrepreneur",
    rating: 5,
    image: "/testimonials/Mack.jpeg",
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
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 500, lineHeight: 1.4 }}
          >
            {testimonial.author}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontWeight: 600, lineHeight: 1.4 }}
          >
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
        Trusted by
      </Typography>

      <Typography
        variant="h1"
        component="h2"
        align="center"
        sx={(theme) => ({
          fontWeight: "bold",
          letterSpacing: "-0.02em",
          color: theme.palette.text.primary,
          mb: 2,
        })}
      >
        Organisations that needed systems
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
