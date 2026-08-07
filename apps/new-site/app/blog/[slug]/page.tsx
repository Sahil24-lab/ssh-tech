import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Box, Stack, Typography } from "@mui/material";
import { BrandButton, SectionHeader, SectionShell } from "@ssh/brand-ui";

const articles = {
  "design-tokens": {
    title: "Design tokens that survive scale",
    description: "A practical contract for keeping product decisions consistent without making every interface identical.",
    sections: [
      ["Name decisions, not values", "A useful token describes intent—surface, emphasis, danger, focus—so its value can evolve without rewriting every consumer."],
      ["Expose one public contract", "Theme augmentation and runtime values need to cross the same package boundary. If consumers can render a token but cannot type it, the contract is incomplete."],
      ["Verify from the consumer", "Package-local checks are necessary, but the consuming app is where missing declarations, mismatched fonts, and unsupported breakpoints become visible."],
    ],
  },
  "template-first": {
    title: "Template-first website delivery",
    description: "How shared structure speeds up delivery while leaving room for product-specific hierarchy and voice.",
    sections: [
      ["Start with hierarchy", "Templates should encode semantic landmarks, heading order, responsive constraints, and dependable states before they encode decoration."],
      ["Keep content authoritative", "A template should support the message instead of forcing every page into the same grid of interchangeable cards."],
      ["Earn every abstraction", "Promote a pattern only after it repeats with the same purpose. Shared code is valuable when it reduces ambiguity, not merely file count."],
    ],
  },
} as const;

type ArticleSlug = keyof typeof articles;

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug as ArticleSlug];
  if (!article) return {};
  return { title: `${article.title} | SSH Tech`, description: article.description };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug as ArticleSlug];
  if (!article) notFound();

  return (
    <Box component="main">
      <SectionShell containerProps={{ maxWidth: "md" }}>
        <SectionHeader headingLevel="h1" label="Field note" title={article.title} description={article.description} />
        <Stack spacing={4}>
          {article.sections.map(([heading, body]) => (
            <Box component="section" key={heading} sx={{ borderTop: "1px solid", borderColor: "divider", pt: 3 }}>
              <Typography component="h2" variant="h4">{heading}</Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mt: 1.5 }}>{body}</Typography>
            </Box>
          ))}
          <Box><BrandButton label="Back to the blog" href="/blog" variant="outlined" /></Box>
        </Stack>
      </SectionShell>
    </Box>
  );
}
