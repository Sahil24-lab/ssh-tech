"use client";

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

const faqs = [
  {
    question: "Do you build custom AI models?",
    answer: `Typically no. We use the best available foundation models (GPT-4, Claude, open-source alternatives) and focus our engineering on integration, reliability, and monitoring. The hard part is rarely the model. It's connecting AI to your data, your systems, and your workflows in a way that runs reliably at scale. If custom training is genuinely the right approach, we'll tell you, but it's rarely where the ROI is highest.`,
  },
  {
    question: "How do you handle data security and compliance?",
    answer: `Your data stays within your infrastructure. We work inside your environment wherever possible and never use client data to train models. For regulated industries we can deploy fully private, self-hosted systems. Data flow architecture is documented and approved during the Discovery phase before any system touches production data.`,
  },
  {
    question: "What if the AI makes errors?",
    answer: `Every system includes accuracy tracking, quality monitoring, and configurable confidence thresholds. We build human review checkpoints into high-stakes decisions. Your team always knows when the system is confident and when it's uncertain, with full audit trails for compliance.`,
  },
  {
    question: "How do you manage ongoing AI costs?",
    answer: `AI operating costs can scale quickly without oversight. We build cost tracking into every system from day one with per-process visibility, usage analytics, and caching strategies that minimise redundant computation. We also right-size model selection so you're not running expensive models on tasks that don't require them.`,
  },
  {
    question: "We've already invested in AI that underperformed. Can you help?",
    answer: `This is one of our most common starting points. Organisations build or buy AI that works in a demo but underperforms in daily operations. We audit your existing systems, identify why they're failing, and either stabilise what you have or rebuild the components that need it. You don't start from scratch.`,
  },
  {
    question: "How does this compare to hiring an AI team internally?",
    answer: `An internal hire takes 3-6 months to recruit, onboard, and deliver their first system. We bring a full team with production experience across dozens of AI deployments. You get working systems in weeks, clear documentation for eventual handover, and the flexibility to scale the engagement up or down as needed.`,
  },
  {
    question: "What does ongoing support look like?",
    answer: `We offer a post-engagement support plan at $1.5K/month for continued monitoring, performance tuning, and minor updates. Your team retains access to a dedicated communication channel with our engineers. It's designed to keep your systems healthy without the overhead of a full engagement.`,
  },
  {
    question: "What payment methods do you accept?",
    answer: `We accept bank transfer (USD/AUD) and crypto. Payment terms are discussed during onboarding and tailored to your procurement process.`,
  },
];

const AIFAQ = () => {
  const theme = useTheme();
  const darkBg = "#0E1A24";

  return (
    <Box id="faq" sx={{ py: 8 }}>
      <Container maxWidth="lg">
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
          // faq
        </Typography>

        <Typography
          variant="h1"
          component="h2"
          align="center"
          sx={{
            mb: 2,
            fontWeight: "bold",
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
          }}
        >
          Common Questions
        </Typography>

        <Typography
          variant="h5"
          align="center"
          sx={{ mb: 4, color: "text.secondary" }}
        >
          What leadership teams typically ask before engaging.
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
                    <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />
                  }
                  aria-controls={`ai-panel${index + 1}-content`}
                  id={`ai-panel${index + 1}-header`}
                  sx={{
                    px: "3rem",
                    py: 2.5,
                    backgroundColor: darkBg,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#ffffff" }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    px: "3rem",
                    py: 4,
                    background: "rgba(255, 255, 255, 0.035)",
                    backdropFilter: "blur(2px)",
                    boxShadow: "inset 0px 2px 6px rgba(0, 0, 0, 0.25)",
                    transition: "background 0.3s ease, box-shadow 0.3s ease",
                    ...(isLast && {
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                    }),
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ color: "#DDE3E9", lineHeight: 1.7, whiteSpace: "pre-line" }}
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

export default AIFAQ;
