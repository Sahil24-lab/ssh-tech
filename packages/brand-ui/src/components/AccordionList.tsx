import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  type SxProps,
  type Theme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type React from "react";

export type AccordionListItem = {
  id?: string;
  title: React.ReactNode;
  content: React.ReactNode;
  defaultExpanded?: boolean;
  disabled?: boolean;
};

export type AccordionListProps = {
  items: AccordionListItem[];
  outerRadius?: number;
  sx?: SxProps<Theme>;
};

export function AccordionList({
  items,
  outerRadius = 12,
  sx,
}: AccordionListProps) {
  return (
    <Box
      sx={[
        {
          borderRadius: outerRadius,
          overflow: "hidden",
          backgroundColor: "surface.elevated",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.05)",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {items.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === items.length - 1;

        return (
          <Accordion
            key={item.id ?? `${index}`}
            disableGutters
            elevation={0}
            defaultExpanded={item.defaultExpanded}
            disabled={item.disabled}
            sx={{
              backgroundColor: "surface.elevated",
              "&:before": { display: "none" },
              ...(isFirst && {
                borderTopLeftRadius: outerRadius,
                borderTopRightRadius: outerRadius,
              }),
              ...(isLast && {
                borderBottomLeftRadius: outerRadius,
                borderBottomRightRadius: outerRadius,
              }),
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
              sx={{ px: "2.5rem", py: 2.5 }}
            >
              {item.title}
            </AccordionSummary>
            <AccordionDetails
              sx={{
                px: "2.5rem",
                py: 3.5,
                background: "rgba(255, 255, 255, 0.035)",
                backdropFilter: "blur(2px)",
                boxShadow: "inset 0px 2px 6px rgba(0, 0, 0, 0.25)",
                ...(isLast && {
                  borderBottomLeftRadius: outerRadius,
                  borderBottomRightRadius: outerRadius,
                }),
              }}
            >
              {item.content}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
