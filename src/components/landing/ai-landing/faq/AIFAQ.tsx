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
import { faqs } from "./faqs";

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
          FAQ
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
