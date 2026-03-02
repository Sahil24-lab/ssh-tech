import fs from "fs/promises";
import path from "path";
import { Box } from "@mui/material";

import Layout from "@/components/layout/Layout";
import ConstrainedContainer from "@/components/layout/container/constrained-container";

function mergeAdjacentTables(html: string) {
  const tableRegex = /<table[^>]*>[\s\S]*?<\/table>/gi;
  const matches = [...html.matchAll(tableRegex)];
  if (matches.length < 2) return html;

  let output = "";
  let lastIndex = 0;
  let i = 0;

  while (i < matches.length) {
    const current = matches[i];
    const currentIndex = current.index ?? 0;
    output += html.slice(lastIndex, currentIndex);

    let mergedTable = current[0];
    const hasThead = /<thead[\s>]/i.test(mergedTable);
    if (hasThead) {
      let j = i + 1;
      let tbodyRows = "";
      const firstTbody = mergedTable.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/i);
      if (firstTbody) {
        tbodyRows += firstTbody[1];
      }

      while (j < matches.length) {
        const between = html.slice(
          (matches[j - 1].index ?? 0) + matches[j - 1][0].length,
          matches[j].index ?? 0
        );
        const ignorable = /^[\s\u00a0]*(<div[^>]*>\s*(<br\s*\/?>)?\s*<\/div>\s*)*$/i.test(
          between
        );
        if (!ignorable) break;

        const nextTable = matches[j][0];
        const nextHasThead = /<thead[\s>]/i.test(nextTable);
        if (nextHasThead) break;

        const nextTbody = nextTable.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/i);
        if (nextTbody) {
          tbodyRows += nextTbody[1];
          j += 1;
          continue;
        }
        break;
      }

      if (tbodyRows) {
        mergedTable = mergedTable.replace(
          /<tbody[^>]*>[\s\S]*?<\/tbody>/i,
          `<tbody>${tbodyRows}</tbody>`
        );
        i = j;
      } else {
        i += 1;
      }
    } else {
      i += 1;
    }

    output += mergedTable;
    lastIndex =
      (matches[i - 1]?.index ?? currentIndex) +
      (matches[i - 1]?.[0]?.length ?? mergedTable.length);
  }

  output += html.slice(lastIndex);
  return output;
}

function cleanLegalHtml(raw: string) {
  const cleaned = raw
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/\sstyle="[^"]*"/gi, "")
    .replace(/\sdata-custom-class="[^"]*"/gi, "")
    .replace(/<bdt[^>]*>/gi, "")
    .replace(/<\/bdt>/gi, "")
    .replace(/<span[^>]*>/gi, "")
    .replace(/<\/span>/gi, "")
    .replace(/<div[^>]*>\s*<a class="privacy123"[\s\S]*?<\/div>/gi, "")
    .trim();

  return fixInvalidHeadingNesting(mergeAdjacentTables(cleaned)).trim();
}

function fixInvalidHeadingNesting(html: string) {
  return html
    .replace(
      /<strong>\s*(<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>)\s*<\/strong>/gi,
      "$1"
    )
    .replace(
      /<em>\s*(<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>)\s*<\/em>/gi,
      "$1"
    )
    .replace(
      /<p>\s*(<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>)\s*<\/p>/gi,
      "$1"
    )
    .replace(
      /<strong>\s*(<(?:div|p|h[1-6]|ul|ol|table|thead|tbody|tr|td|th)[^>]*>[\s\S]*?<\/(?:div|p|h[1-6]|ul|ol|table|thead|tbody|tr|td|th)>)\s*<\/strong>/gi,
      "$1"
    )
    .replace(
      /<em>\s*(<(?:div|p|h[1-6]|ul|ol|table|thead|tbody|tr|td|th)[^>]*>[\s\S]*?<\/(?:div|p|h[1-6]|ul|ol|table|thead|tbody|tr|td|th)>)\s*<\/em>/gi,
      "$1"
    )
    .replace(/<p>\s*(<(?:div|ul|ol|table)[^>]*>[\s\S]*?<\/(?:div|ul|ol|table)>)\s*<\/p>/gi, "$1");
}

export default async function CookiesPage() {
  const filePath = path.join(process.cwd(), "docs/legal/cookies.html");
  const rawHtml = await fs.readFile(filePath, "utf8");
  const cleanedHtml = cleanLegalHtml(rawHtml);

  return (
    <Layout flushFooter>
      <ConstrainedContainer>
        <Box
          sx={{
            width: "100%",
            mt: { xs: 3, md: 6 },
            mb: { xs: 10, md: 12 },
            borderRadius: 3,
            border: "1px solid rgba(7, 223, 193, 0.2)",
            backgroundColor: "rgba(9, 31, 44, 0.75)",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.25)",
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 6 },
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
          <Box dangerouslySetInnerHTML={{ __html: cleanedHtml }} />
        </Box>
      </ConstrainedContainer>
    </Layout>
  );
}
