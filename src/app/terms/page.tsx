import fs from "fs/promises";
import path from "path";
import { Box } from "@mui/material";

import Layout from "@/components/layout/Layout";
import ConstrainedContainer from "@/components/layout/container/constrained-container";

function formatInline(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function markdownToHtml(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: string[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      const content = formatInline(paragraph.join(" "));
      blocks.push(`<p>${content}</p>`);
      paragraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length) {
      blocks.push(
        `<ul>${listItems.map((li) => `<li>${li}</li>`).join("")}</ul>`,
      );
      listItems = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (!line.trim()) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      blocks.push(`<h1>${formatInline(line.slice(2).trim())}</h1>`);
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push(`<h2>${formatInline(line.slice(3).trim())}</h2>`);
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push(`<h3>${formatInline(line.slice(4).trim())}</h3>`);
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      listItems.push(formatInline(line.slice(2).trim()));
      continue;
    }

    paragraph.push(formatInline(line.trim()));
  }

  flushParagraph();
  flushList();

  return blocks.join("\n");
}

export default async function TermsPage() {
  const filePath = path.join(process.cwd(), "docs/legal/TermsOfService.md");
  const raw = await fs.readFile(filePath, "utf8");
  const html = markdownToHtml(raw);

  return (
    <Layout flushFooter>
      <Box
        sx={{
          width: { xs: "100%", md: "70%", lg: "55%" },
          backgroundColor: "rgba(9, 31, 44, 0.75)",
          py: { xs: 5, md: 8, lg: 10 },
          mx: "auto",
        }}
      >
        <ConstrainedContainer>
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", md: 900, lg: 980 },
              mx: "auto",
              px: { xs: 1, sm: 2, md: 3 },
              "& h1": {
                fontSize: { xs: "2rem", md: "2.75rem" },
                fontWeight: 700,
                lineHeight: 1.2,
                color: "primary.light",
                mb: 1,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              },
              "& h2": {
                fontSize: { xs: "1.4rem", md: "1.8rem" },
                fontWeight: 600,
                lineHeight: 1.35,
                color: "text.primary",
                mt: 4,
                mb: 1.5,
              },
              "& h3": {
                fontSize: { xs: "1.1rem", md: "1.35rem" },
                fontWeight: 600,
                color: "text.primary",
                mt: 3,
                mb: 1,
              },
              "& p, & li": {
                color: "text.primary",
                fontSize: { xs: "1rem", md: "1.05rem" },
                lineHeight: 1.8,
              },
              "& ul, & ol": {
                pl: { xs: 3, md: 4 },
                mt: 1,
                mb: 2,
              },
              "& a": {
                color: "primary.light",
                fontWeight: 500,
                textDecorationColor: "rgba(239, 254, 235, 0.45)",
              },
              "& a:hover": {
                color: "primary.light",
              },
              "& strong": {
                color: "text.primary",
              },
              "& em": {
                color: "text.primary",
              },
              "& hr": {
                borderColor: "rgba(7, 223, 193, 0.15)",
                my: 3,
              },
              "& table": {
                width: "100%",
                borderCollapse: "collapse",
                borderSpacing: 0,
                marginTop: 2,
                marginBottom: 3,
                fontSize: { xs: "0.95rem", md: "1rem" },
              },
              "& th, & td": {
                border: "1px solid rgba(239, 254, 235, 0.18)",
                padding: "12px 14px",
                verticalAlign: "top",
                textAlign: "left",
                color: "text.primary",
              },
              "& th": {
                backgroundColor: "rgba(7, 223, 193, 0.08)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                fontSize: { xs: "0.8rem", md: "0.85rem" },
              },
            }}
          >
            <Box dangerouslySetInnerHTML={{ __html: html }} />
          </Box>
        </ConstrainedContainer>
      </Box>
    </Layout>
  );
}
