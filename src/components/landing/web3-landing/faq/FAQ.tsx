import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GlassCard from "@/components/card/glass-card/GlassCard";

const faqs = [
  {
    question: "What sets you apart from hiring an in-house developer?",
    answer: `
Hiring can be expensive and time-consuming, especially in the crypto space.
We offer immediate availability, expert-level skills, and the flexibility to pause or cancel anytime.
You skip the overhead of recruiting and training, while still getting top-tier development.
`,
  },
  {
    question: "How does the 1–2 week POC refund clause work?",
    answer: `
We give you a short Proof of Concept phase. If you’re not satisfied, you can cancel after that phase and only pay for the hours used.
This de-risks the engagement and shows our confidence in delivering real value early on.
`,
  },
  {
    question: "What are my payment options?",
    answer: `
We accept both crypto and USD payments. We'll discuss whichever method is most convenient for you during onboarding.
`,
  },
  {
    question: "Do you offer ongoing support after the main development?",
    answer: `
Yes. We have a 3-month plan at $1.5K/month for additional handover, feedback, and minor updates. This ensures continued stability and guidance without the full cost of a higher-tier plan.
`,
  },
  {
    question: "How do you handle security and product quality?",
    answer: `
We integrate security checks, QA testing, and analytics at every stage.
We also conduct automated scans for vulnerabilities and stress test smart contracts before deployment.
We treat every product with the same rigor, whether it's a new build or a feature expansion.
`,
  },
  {
    question:
      "Is your process different for teams who already have a deployed product?",
    answer: `
Our core steps remain the same, but we focus more on enhancements, integrations, and upgrades.
We review your existing codebase, identify gaps, and plan out new features without disrupting what's already live.
`,
  },
];

const FAQ = () => {
  return (
    <Box id="faq" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          align="center"
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            letterSpacing: "0.5px",
            color: "#FFFFFF",
            mb: 4,
          }}
        >
          Frequently Asked Questions
        </Typography>
        <GlassCard>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              elevation={0}
              sx={{
                background: "transparent",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </GlassCard>
      </Container>
    </Box>
  );
};

export default FAQ;
