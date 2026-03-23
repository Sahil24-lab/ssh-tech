import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography } from "@mui/material";
import {
  containers,
  sectionSpacing,
  contentSpacing,
  contentMaxWidth,
  grid,
  type ContainerVariant,
  type SectionSpacingVariant,
  type ContentSpacingVariant,
} from "../theme/tokens/layout";
import { containerSx, sectionSx, contentPaddingSx } from "../theme/tokens/layoutHelpers";

const meta: Meta = {
  title: "Foundations/Layout",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

// ─── Shared visual helpers ─────────────────────────────────────────────────

function TokenRow({ label, values }: { label: string; values: Record<string, number> }) {
  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "baseline", flexWrap: "wrap" }}>
      <Typography variant="caption" sx={{ minWidth: 120 }}>
        {label}
      </Typography>
      {Object.entries(values).map(([bp, val]) => (
        <Box
          key={bp}
          sx={{
            px: 1,
            py: 0.25,
            borderRadius: "4px",
            border: "1px solid",
            borderColor: "secondary.dark",
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {bp}:
          </Typography>{" "}
          <Typography variant="caption" sx={{ color: "primary.main", fontWeight: 600 }}>
            {val}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

function SectionDivider({ title }: { title: string }) {
  return (
    <Box sx={{ pt: 3, pb: 1, borderBottom: "1px solid", borderColor: "secondary.dark" }}>
      <Typography variant="h5" sx={{ color: "primary.light" }}>
        {title}
      </Typography>
    </Box>
  );
}

// ─── Stories ──────────────────────────────────────────────────────────────

export const ContainerVariants: Story = {
  name: "Container Variants",
  render: () => (
    <Stack spacing={2}>
      <SectionDivider title="Container max-width caps (px)" />
      <Stack spacing={1}>
        {(Object.entries(contentMaxWidth) as [ContainerVariant, number][]).map(([variant, px]) => (
          <Box key={variant} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="caption" sx={{ minWidth: 80 }}>
              {variant}
            </Typography>
            <Box
              sx={{
                height: 28,
                width: `${(px / 1800) * 100}%`,
                bgcolor: "primary.dark",
                border: "1px solid",
                borderColor: "primary.main",
                borderRadius: "3px",
                display: "flex",
                alignItems: "center",
                px: 1,
              }}
            >
              <Typography variant="caption" sx={{ color: "primary.main" }}>
                {px}px
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>

      <SectionDivider title="Container horizontal padding (MUI spacing units = ×8px)" />
      <Stack spacing={1.5}>
        {(Object.entries(containers) as [ContainerVariant, Record<string, number>][]).map(
          ([variant, scale]) => (
            <TokenRow key={variant} label={variant} values={scale} />
          ),
        )}
      </Stack>
    </Stack>
  ),
};

export const SectionSpacing: Story = {
  name: "Section Spacing",
  render: () => (
    <Stack spacing={2}>
      <SectionDivider title="Section vertical spacing — py (MUI spacing units = ×8px)" />
      <Stack spacing={1.5}>
        {(Object.entries(sectionSpacing) as [SectionSpacingVariant, Record<string, number>][]).map(
          ([variant, scale]) => (
            <TokenRow key={variant} label={variant} values={scale} />
          ),
        )}
      </Stack>

      <SectionDivider title="Visual preview" />
      {(["compact", "default", "hero"] as SectionSpacingVariant[]).map((variant) => (
        <Box
          key={variant}
          component="section"
          sx={{
            ...sectionSx(variant),
            px: 3,
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "secondary.dark",
            borderRadius: "6px",
          }}
        >
          <Typography variant="caption">sectionSx('{variant}')</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Vertical padding scales from {sectionSpacing[variant].xs}×8px (xs) to{" "}
            {sectionSpacing[variant].xxl}×8px (xxl)
          </Typography>
        </Box>
      ))}
    </Stack>
  ),
};

export const ContentSpacing: Story = {
  name: "Content Spacing",
  render: () => (
    <Stack spacing={2}>
      <SectionDivider title="Content internal padding — p (MUI spacing units = ×8px)" />
      <Stack spacing={1.5}>
        {(
          Object.entries(contentSpacing) as [ContentSpacingVariant, Record<string, number>][]
        ).map(([variant, scale]) => (
          <TokenRow key={variant} label={variant} values={scale} />
        ))}
      </Stack>

      <SectionDivider title="Visual preview" />
      {(["tight", "default", "relaxed"] as ContentSpacingVariant[]).map((variant) => (
        <Box
          key={variant}
          sx={{
            ...contentPaddingSx(variant),
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "secondary.dark",
            borderRadius: "6px",
            display: "inline-block",
            mr: 2,
            mb: 2,
          }}
        >
          <Typography variant="caption">contentPaddingSx('{variant}')</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            p: {contentSpacing[variant].xs}→{contentSpacing[variant].xxl} (xs→xxl)
          </Typography>
        </Box>
      ))}
    </Stack>
  ),
};

export const GridConfig: Story = {
  name: "Grid Config",
  render: () => (
    <Stack spacing={2}>
      <SectionDivider title="Grid — columns, gutter (px), margin (px)" />
      <TokenRow label="columns" values={grid.columns} />
      <TokenRow label="gutter (px)" values={grid.gutter} />
      <TokenRow label="margin (px)" values={grid.margin} />

      <SectionDivider title="Column grid preview (md: 12 cols)" />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: `${grid.gutter.md}px`,
          px: `${grid.margin.md}px`,
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <Box
            key={i}
            sx={{
              height: 40,
              bgcolor: i % 2 === 0 ? "primary.dark" : "secondary.dark",
              border: "1px solid",
              borderColor: "primary.main",
              borderRadius: "3px",
              opacity: 0.7,
            }}
          />
        ))}
      </Box>
    </Stack>
  ),
};

export const HelperFunctions: Story = {
  name: "Helper Functions",
  render: () => (
    <Stack spacing={2}>
      <SectionDivider title="containerSx() — full-width container with max-width cap" />
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Returns <code>{"{ width: '100%', maxWidth, mx: 'auto', px }"}</code> — use on any Box that
        should behave like a page-level container.
      </Typography>
      <Box
        sx={{ bgcolor: "background.paper", p: 2, borderRadius: "6px", fontFamily: "monospace" }}
      >
        {(["prose", "content", "wide", "full"] as ContainerVariant[]).map((v) => (
          <Typography key={v} variant="caption" display="block">
            containerSx('{v}') → maxWidth: {contentMaxWidth[v]}px, px:{" "}
            {containers[v].xs}→{containers[v].xxl}
          </Typography>
        ))}
      </Box>

      <SectionDivider title="sectionSx() — vertical section rhythm" />
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Returns <code>{"{ py }"}</code> — use on{" "}
        <code>{"<Box component='section'>"}</code> to get consistent vertical rhythm.
      </Typography>

      <SectionDivider title="contentPaddingSx() — internal content padding" />
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Returns <code>{"{ p }"}</code> — use inside cards, panels, or content areas.
      </Typography>

      <SectionDivider title="pageSectionSx() — combined container + section" />
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Combines <code>containerSx</code> and <code>sectionSx</code> into one object. Convenience
        for the common pattern of a constrained section with vertical rhythm.
      </Typography>
      <Box
        component="pre"
        sx={{
          bgcolor: "background.paper",
          p: 2,
          borderRadius: "6px",
          fontSize: "0.75rem",
          color: "primary.light",
          overflowX: "auto",
        }}
      >
        {`// Example usage
<Box component="section" sx={pageSectionSx('content', 'default')}>
  {/* max-width: 1080px, centered, responsive px + py */}
</Box>

<Box sx={containerSx('wide')}>
  {/* max-width: 1440px, responsive horizontal padding */}
</Box>

<Box component="section" sx={sectionSx('hero')}>
  {/* generous vertical padding for hero sections */}
</Box>

<Box sx={contentPaddingSx('relaxed')}>
  {/* spacious internal padding for feature showcases */}
</Box>`}
      </Box>
    </Stack>
  ),
};
