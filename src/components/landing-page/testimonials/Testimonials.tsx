"use client";

import { useState } from "react";
import { Typography, Grid, Box, Rating, Avatar } from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";

// Define the Testimonial interface.
interface Testimonial {
  preview: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

// Function to truncate text at the nearest full word using regex
const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) return text;

  const truncated = text.substring(0, limit);
  return truncated.substring(0, truncated.lastIndexOf(" ")) + "... ";
};

const testimonials: Testimonial[] = [
  {
    preview: "Bridging the gap between vision & execution.",
    quote:
      "Working with Sahil at Playlobby was a game-changer. As a Technical Project Manager, he was instrumental in bridging the gap between product vision and technical execution. His ability to translate complex requirements into actionable development plans ensured smooth execution and timely delivery. He played a critical role in designing and executing complex blockchain integrations, ensuring a smooth and scalable architecture for our gaming ecosystem. He thrives in high-pressure environments, tackling challenges head-on with a problem-solving approach that drives real results.",
    author: "Ben Howen",
    role: "Head of Product at Playlobby",
    rating: 5,
    image: "/testimonials/Ben.jpeg",
  },
  {
    preview: "d maximising customer value.",
    quote:
      "I've been fortunate to know Sahil for quite some time and I'm always eager to team up with him on fresh projects. Sahil's energy for crafting innovative solutions is contagious. He strikes the perfect balance between focusing on customer needs and tackling the technical intricacies that come with early-stage product development. Sahil thrives on challenges and is always ready to dive headfirst into complex issues, determined to emerge with practical solutions. His steadfast work ethic, coupled with his engaging personality, makes working together a seamless and enjoyable experience.",
    author: "Mack Saraswat",
    role: "Serial Entrepreneur",
    rating: 5,
    image: "/testimonials/Mack.jpeg",
  },
  {
    preview: "Helping startups scale with deep technical expertise.",
    quote:
      "Sahil excels in propelling early-stage product development by combining his strong business acumen with his deep technical expertise. His quick decision-making and technical ability help lead Elite Robotics, a deep tech startup, to meet pivotal milestones. Sahil's business insight helps him swiftly address challenges and forge robust relationships with stakeholders. His commitment to team collaboration and deep understanding of early-stage startups has led to successful team expansion, fundraising, and product development.",
    author: "James Whyman",
    role: "Associate Director at KPMG",
    rating: 5,
    image: "/testimonials/James.jpeg",
  },
];

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <GlassCard
      sx={{
        p: 5,
        height: "100%",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "12px",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />

      {/* Headline */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {testimonial.preview}
      </Typography>

      {/* Quote with Nearest Full Word Truncation using Regex */}
      <Typography variant="body2" paragraph sx={{ lineHeight: 1.6 }}>
        {expanded ? testimonial.quote : truncateText(testimonial.quote, 140)}
      </Typography>

      {!expanded && (
        <Typography
          component="span"
          onClick={() => setExpanded(true)}
          sx={{
            color: "primary.main",
            cursor: "pointer",
            fontWeight: "bold",
            display: "block", // Forces Read More to always be on a new line
            mt: 1,
          }}
        >
          Read More
        </Typography>
      )}

      {/* Read Less (Appears below when expanded) */}
      {expanded && (
        <Typography
          component="span"
          onClick={() => setExpanded(false)}
          sx={{
            color: "primary.main",
            cursor: "pointer",
            fontWeight: "bold",
            mt: 1,
          }}
        >
          Show Less
        </Typography>
      )}

      {/* Author Information */}
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <Avatar
          src={testimonial.image}
          alt={testimonial.author}
          sx={{ width: 48, height: 48, mr: 2 }}
        />
        <Box>
          <Typography variant="subtitle2">{testimonial.author}</Typography>
          <Typography variant="caption" color="text.secondary">
            {testimonial.role}
          </Typography>
        </Box>
      </Box>
    </GlassCard>
  );
};

const Testimonials = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        align="center"
        sx={{
          fontSize: "2.5rem", // Bigger and bolder for impact
          fontWeight: "bold",
          letterSpacing: "0.5px",
          color: "#FFFFFF", // Ensuring it stands out
          mb: 4,
        }}
      >
        Trusted by Experts
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
            <TestimonialCard testimonial={testimonial} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
