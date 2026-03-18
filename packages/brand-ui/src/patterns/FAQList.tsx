import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { FAQItem } from "../types/content";

export function FAQList({ items }: { items: FAQItem[] }) {
  return (
    <Box
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        backgroundColor: "#0E1A24",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.05)",
      }}
    >
      {items.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === items.length - 1;

        return (
          <Accordion
            key={item.question}
            disableGutters
            elevation={0}
            sx={{
              backgroundColor: "#0E1A24",
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
              expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
              sx={{ px: "2.5rem", py: 2.5 }}
            >
              <Typography variant="h6" sx={{ color: "text.primary", fontWeight: 700 }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                px: "2.5rem",
                py: 3.5,
                background: "rgba(255, 255, 255, 0.035)",
                backdropFilter: "blur(2px)",
                boxShadow: "inset 0px 2px 6px rgba(0, 0, 0, 0.25)",
                ...(isLast && {
                  borderBottomLeftRadius: 24,
                  borderBottomRightRadius: 24,
                }),
              }}
            >
              <Typography variant="body1" sx={{ color: "#DDE3E9", lineHeight: 1.7, whiteSpace: "pre-line" }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
