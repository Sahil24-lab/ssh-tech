import { Typography, Grid, Box, Rating, Avatar } from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";

const testimonials = [
  {
    quote:
      "Working with Sahil at Playlobby was a game-changer. As a Technical Project Manager, he was instrumental in bridging the gap between product vision and technical execution. His ability to translate complex requirements into actionable development plans ensured smooth execution and timely delivery. \n\nHe played a critical role in designing and executing complex blockchain integrations, ensuring a smooth and scalable architecture for our gaming ecosystem. He thrives in high-pressure environments, tackling challenges head-on with a problem-solving approach that drives real results.",
    author: "Ben Howen",
    role: "Head of Product at Playlobby",
    rating: 5,
    image: "/testimonials/Ben.jpeg",
  },
  {
    quote:
      "I've been fortunate to know Sahil for quite some time and I'm always eager to team up with him on fresh projects. Sahil's energy for crafting innovative solutions is contagious. He strikes the perfect balance between focusing on customer needs and tackling the technical intricacies that come with early-stage product development. \n\nSahil thrives on challenges and is always ready to dive headfirst into complex issues, determined to emerge with practical solutions. His steadfast work ethic, coupled with his engaging personality, makes working together a seamless and enjoyable experience.",
    author: "Mack Saraswat",
    role: "Serial Entrepreneur",
    rating: 5,
    image: "/testimonials/Mack.jpeg",
  },
  {
    quote:
      "Sahil excels in propelling early-stage product development with combining his strong business acumen with his deep technical expertise. His quick decision-making and technical ability help lead Elite Robotics, a deep tech startup, to meet pivotal milestones. Sahil's business insight helps him swiftly address challenges and forge robust relationships with stakeholders. \n\nHis commitment to team collaboration and deep understanding of early-stage startups has led to successful team expansion, fundraising, and product development.",
    author: "James Whyman",
    role: "Associate Director at KPMG",
    rating: 5,
    image: "/testimonials/James.jpeg",
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        align="center"
        py={4}
      >
        Our Results
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
            <GlassCard sx={{ p: 4, height: "100%" }}>
              <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
              <Typography variant="body1" paragraph>
                "{testimonial.quote}"
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.author}
                  sx={{ width: 56, height: 56, mr: 2 }}
                />
                <Box>
                  <Typography variant="subtitle2">
                    {testimonial.author}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {testimonial.role}
                  </Typography>
                </Box>
              </Box>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
