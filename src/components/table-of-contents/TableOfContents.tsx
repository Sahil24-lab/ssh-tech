import { Typography, Stack, Link as MuiLink } from "@mui/material";
import { Document, BLOCKS } from "@contentful/rich-text-types";

interface TableOfContentsProps {
  content?: Document;
  includeSubheadings?: boolean;
  activeId?: string | null;
}

export default function TableOfContents({
  content,
  includeSubheadings = false,
  activeId,
}: TableOfContentsProps) {
  if (!content) return null;

  const extractText = (node: any): string =>
    node?.content
      ?.map((c: any) => c.value)
      .filter(Boolean)
      .join(" ") || "";

  const items = content.content
    .filter((node) =>
      includeSubheadings
        ? [BLOCKS.HEADING_2, BLOCKS.HEADING_3].includes(node.nodeType)
        : node.nodeType === BLOCKS.HEADING_2
    )
    .map((node) => {
      const text = extractText(node);
      const isSubheading = node.nodeType === BLOCKS.HEADING_3;
      const anchorPrefix = isSubheading ? "subsection-" : "section-";
      const anchor = `${anchorPrefix}${text
        .toLowerCase()
        .replace(/\s+/g, "-")}`;
      return { text, anchor, isSubheading };
    });

  return (
    <Stack spacing={1} component="nav">
      <Typography variant="subtitle2" gutterBottom>
        Table of Contents
      </Typography>
      {items.map(({ text, anchor, isSubheading }) => (
        <MuiLink
          key={anchor}
          href={`#${anchor}`}
          sx={{
            pl: isSubheading ? 2 : 0,
            fontSize: isSubheading ? "0.875rem" : "1rem",
            fontWeight: activeId === anchor ? "bold" : "normal",
            color: activeId === anchor ? "text.primary" : "text.secondary",
            display: "block",
            scrollBehavior: "smooth",
          }}
        >
          {text}
        </MuiLink>
      ))}
    </Stack>
  );
}
