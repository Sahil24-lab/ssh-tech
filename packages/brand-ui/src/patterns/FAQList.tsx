import { Typography } from "@mui/material";
import { AccordionList } from "../components/AccordionList";
import type { FAQItem } from "../types/content";

export function FAQList({ items }: { items: FAQItem[] }) {
  return (
    <AccordionList
      outerRadius={12}
      items={items.map((item) => ({
        id: item.question,
        title: (
          <Typography
            variant="h6"
            sx={{ color: "text.primary", fontWeight: 700 }}
          >
            {item.question}
          </Typography>
        ),
        content: (
          <Typography
            variant="body1"
            sx={{
              color: "text.muted",
              lineHeight: 1.7,
              whiteSpace: "pre-line",
            }}
          >
            {item.answer}
          </Typography>
        ),
      }))}
    />
  );
}
