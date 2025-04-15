// TableOfContents.tsx
// ---------------------------------------------------
"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Document, BLOCKS } from "@contentful/rich-text-types";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface TOCHeading {
  id: string;
  text: string;
  isSubheading: boolean;
}

interface TableOfContentsProps {
  content?: Document;
  includeSubheadings?: boolean;
  headerOffset?: number; // how many pixels from top to account for a fixed header
}

export default function TableOfContents({
  content,
  includeSubheadings = true,
  headerOffset = 96, // e.g. 80px for header + 16px buffer
}: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCHeading[]>([]);
  const [activeId, setActiveId] = useState("");
  const [scrollPercent, setScrollPercent] = useState(0);

  // 1. Parse H2/H3 headings from the Rich Text document.
  useEffect(() => {
    if (!content) return;

    const extracted: TOCHeading[] = [];
    content.content.forEach((node) => {
      const isH2 = node.nodeType === BLOCKS.HEADING_2;
      const isH3 = node.nodeType === BLOCKS.HEADING_3;

      if (isH2 || (includeSubheadings && isH3)) {
        const text = node.content
          .map((c: any) => c.value || "")
          .join("")
          .trim();

        const prefix = isH3 ? "subsection-" : "section-";
        const id = prefix + text.toLowerCase().replace(/\s+/g, "-");
        extracted.push({ id, text, isSubheading: isH3 });
      }
    });

    setHeadings(extracted);
  }, [content, includeSubheadings]);

  // 2. Track overall scroll progress to fill the vertical bar.
  useEffect(() => {
    const handleScrollProgress = () => {
      const docHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const totalScrollable = docHeight - viewportHeight;
      const scrolled = window.scrollY;

      if (totalScrollable <= 0) {
        setScrollPercent(0);
        return;
      }

      const scrolledRatio = (scrolled / totalScrollable) * 100;
      setScrollPercent(scrolledRatio);
    };

    window.addEventListener("scroll", handleScrollProgress);
    handleScrollProgress(); // Set initial value on mount.

    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  // 3. On scroll, figure out which heading is active by comparing scroll position.
  useEffect(() => {
    if (!headings.length) return;

    const extraMargin = 40; // Adjust if you want the active highlight to shift sooner/later.
    const handleScroll = () => {
      const scrollPos = window.scrollY + headerOffset;
      let currentId = headings[0].id;

      for (const h of headings) {
        const el = document.getElementById(h.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const headingTop = rect.top + window.scrollY;

        if (scrollPos >= headingTop - extraMargin) {
          currentId = h.id;
        } else {
          break;
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial highlight on mount.

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings, headerOffset]);

  // 4. Smooth scroll to a heading when clicked.
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 5. Scroll to top button
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!headings.length) return null;

  return (
    <Box
      sx={{
        position: "relative",
        // Optional padding or margin can go here
        pt: 2,
        pb: 2,
      }}
    >
      {/* Vertical "track" line, plus a fill that represents scrollPercent */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "2px",
          backgroundColor: "rgba(255, 255, 255, 0.15)", // a faint line behind
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "2px",
            height: `${scrollPercent}%`, // fill depends on scroll
            backgroundColor: "brand.primary", // use your brand color
            transition: "height 0.1s linear",
          }}
        />
      </Box>

      {/* Up arrow in top-right corner */}
      <Box
        onClick={scrollToTop}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          p: 0.5,
          cursor: "pointer",
          color: "brand.primary",
          "&:hover": {
            opacity: 0.7,
          },
        }}
      >
        <KeyboardArrowUpIcon fontSize="small" />
      </Box>

      {/* TOC Title */}
      <Typography
        variant="h6"
        sx={{
          ml: 3, // add a small left margin so text doesn't clash with the vertical line
          mb: 2,
          fontWeight: 600,
          color: "brand.primary",
        }}
      >
        Table of Contents
      </Typography>

      {/* Actual list of headings */}
      <List disablePadding sx={{ ml: 3 }}>
        {headings.map((h) => {
          const isActive = h.id === activeId;
          return (
            <ListItemButton
              key={h.id}
              onClick={() => handleClick(h.id)}
              disableRipple
              disableTouchRipple
              sx={{
                py: 0.2, // tighter vertical spacing
                // Subheadings a bit indented
                pl: h.isSubheading ? 2 : 0,
                backgroundColor: "transparent",
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontSize: h.isSubheading ? "1rem" : "1.05rem",
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "brand.primary" : "text.secondary",
                  lineHeight: 1.4,
                }}
              >
                {h.text}
              </ListItemText>
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
}
