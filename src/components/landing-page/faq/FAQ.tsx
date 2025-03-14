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
    question: "What is the logo design process?",
    answer:
      "Our logo design process involves understanding your brand, researching your industry, sketching concepts, refining designs, and delivering the final product in various formats.",
  },
  {
    question: "How much does a logo design cost?",
    answer:
      "Our pricing varies depending on the package you choose. We offer fixed-cost plans to avoid negotiations and provide transparency. Please refer to our pricing section for more details.",
  },
  {
    question: "How long does it take to design a logo?",
    answer:
      "The timeline depends on the package you select. Our Lite package offers delivery within 72 hours, while our Standard package takes about 2 weeks. For ongoing design work, we offer a Monthly plan with regular updates.",
  },
  {
    question: "Do you offer custom logo designs or use templates?",
    answer:
      "We create custom logo designs tailored to your brand. We don't use pre-made templates, ensuring that your logo is unique and represents your brand identity.",
  },
  {
    question: "Can you redesign my existing logo?",
    answer:
      "Yes, we can redesign your existing logo. We'll work with you to understand what aspects you want to keep or change, and create a refreshed design that aligns with your current brand vision.",
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
