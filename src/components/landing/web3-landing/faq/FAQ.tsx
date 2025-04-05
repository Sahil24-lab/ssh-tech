import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GlassCardDark from "@/components/card/glass-card-dark/GlassCardDark";

const faqs = [
  {
    question: "What sets you apart from hiring an in-house developer?",
    answer: `Hiring can be expensive and time-consuming, especially in the crypto space.
We offer immediate availability, expert-level skills, and the flexibility to pause or cancel anytime.
You skip the overhead of recruiting and training, while still getting top-tier development.`,
  },
  {
    question: "How does the 1–2 week POC refund clause work?",
    answer: `We give you a short Proof of Concept phase. If you’re not satisfied, you can cancel after that phase and only pay for the hours used.
This de-risks the engagement and shows our confidence in delivering real value early on.`,
  },
  {
    question: "What are my payment options?",
    answer: `We accept both crypto and USD payments. We'll discuss whichever method is most convenient for you during onboarding.`,
  },
  {
    question: "Do you offer ongoing support after the main development?",
    answer: `Yes. We have a 3-month plan at $1.5K/month for additional handover, feedback, and minor updates. This ensures continued stability and guidance without the full cost of a higher-tier plan.`,
  },
  {
    question: "How do you handle security and product quality?",
    answer: `We integrate security checks, QA testing, and analytics at every stage.
We also conduct automated scans for vulnerabilities and stress test smart contracts before deployment.
We treat every product with the same rigor, whether it's a new build or a feature expansion.`,
  },
  {
    question:
      "Is your process different for teams who already have a deployed product?",
    answer: `Our core steps remain the same, but we focus more on enhancements, integrations, and upgrades.
We review your existing codebase, identify gaps, and plan out new features without disrupting what's already live.`,
  },
];

const FAQ = () => {
  const theme = useTheme();
  const darkBg = "#0E1A24";
  const expandedBg = "rgba(14, 26, 36, 0.5)";

  return (
    <Box id="faq" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            mb: 4,
            fontWeight: "bold",
            letterSpacing: "0.5px",
            color: "#FFFFFF",
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Box
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            backgroundColor: darkBg,
            boxShadow: "0 0 0 1px rgba(255,255,255,0.05)",
          }}
        >
          {faqs.map((faq, index) => {
            const isFirst = index === 0;
            const isLast = index === faqs.length - 1;

            return (
              <Accordion
                key={index}
                disableGutters
                elevation={0}
                sx={{
                  backgroundColor: darkBg,
                  "&:before": { display: "none" },
                  ...(isFirst && {
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                  }),
                  ...(isLast && {
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                  }),
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{ color: theme.palette.primary.main }}
                    />
                  }
                  aria-controls={`panel${index + 1}-content`}
                  id={`panel${index + 1}-header`}
                  sx={{
                    backgroundColor: darkBg,
                    px: 3,
                    py: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: "#ffffff",
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    px: 3,
                    py: 2,
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.07), rgba(14,26,36,0.1))",
                    backdropFilter: "blur(2px)",
                    boxShadow: "inset 0px 6px 12px rgba(0, 0, 0, 0.3)",
                    transition: "background 0.3s ease, box-shadow 0.3s ease",
                    ...(isLast && {
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                    }),
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#ffffff",
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
