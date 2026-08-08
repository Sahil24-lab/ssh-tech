import type { Meta, StoryObj } from "@storybook/react";
import { Box, Chip, Stack, Typography } from "@mui/material";
import {
  componentRegistry,
  type ComponentCatalogEntry,
  type ComponentKind,
} from "../catalog/component-registry";
import { Container } from "../primitives/Container";

const kindOrder: readonly ComponentKind[] = [
  "template",
  "pattern",
  "component",
  "motion",
  "primitive",
];

const meta: Meta = {
  title: "System/Agent Component Catalog",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "This view is rendered from the same typed registry that generates the machine-readable catalogue used by frontend agents.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

function CatalogRow({ entry }: { entry: ComponentCatalogEntry }) {
  return (
    <Box
      component="article"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "minmax(12rem, 0.8fr) minmax(0, 2fr)" },
        gap: { xs: 1.5, md: 3 },
        py: 2.5,
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Box sx={{ minWidth: 0 }}>
        <Typography component="h3" variant="h6">
          {entry.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.muted", overflowWrap: "anywhere" }}>
          {entry.id}
        </Typography>
      </Box>

      <Stack spacing={1.5} sx={{ minWidth: 0 }}>
        <Typography variant="body2">{entry.summary}</Typography>
        <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1}>
          <Chip size="small" label={entry.agent.selection} color="primary" variant="outlined" />
          <Chip size="small" label={entry.maturity} variant="outlined" />
          {entry.capabilities.map((capability) => (
            <Chip key={capability} size="small" label={capability} />
          ))}
        </Stack>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {entry.agent.instruction}
        </Typography>
        <Typography variant="caption" sx={{ color: "text.muted", overflowWrap: "anywhere" }}>
          Import {entry.source.exportName} from {entry.source.package}
          {entry.storyIds.length > 0 ? ` · Stories: ${entry.storyIds.join(", ")}` : " · Story pending"}
        </Typography>
      </Stack>
    </Box>
  );
}

function ComponentCatalog() {
  return (
    <Container size="wide" component="main" sx={{ py: { xs: 5, md: 8 } }}>
      <Stack spacing={{ xs: 5, md: 7 }}>
        <Stack spacing={1.5} sx={{ maxWidth: "70ch" }}>
          <Typography component="h1" variant="h2">
            Agent component catalogue
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Templates and patterns come first. Components handle established behaviours, while primitives remain the final layout layer rather than the starting point for every page.
          </Typography>
        </Stack>

        {kindOrder.map((kind) => {
          const entries = componentRegistry.filter((entry) => entry.kind === kind);

          return (
            <Box component="section" key={kind} aria-labelledby={`catalog-${kind}`}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "baseline" }}
                spacing={1}
                sx={{ pb: 1.5, borderBottom: 1, borderColor: "primary.main" }}
              >
                <Typography id={`catalog-${kind}`} component="h2" variant="h4">
                  {kind[0].toUpperCase() + kind.slice(1)}s
                </Typography>
                <Typography variant="body2" sx={{ color: "text.muted" }}>
                  {entries.length} registered
                </Typography>
              </Stack>
              {entries.map((entry) => (
                <CatalogRow key={entry.id} entry={entry} />
              ))}
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
}

export const Overview: Story = {
  render: () => <ComponentCatalog />,
};
