import type { SxProps, Theme } from "@mui/material/styles";
import {
  containers,
  contentSpacing,
  sectionSpacing,
  contentMaxWidth,
  type ContainerVariant,
  type ContentSpacingVariant,
  type SectionSpacingVariant,
} from "./layout";

/**
 * Returns an sx-compatible object for a named container variant.
 *
 * Applies responsive horizontal padding and a max-width cap (centered via
 * margin: 0 auto) so content never stretches uncomfortably on xxl displays.
 *
 * Usage:
 * ```tsx
 * <Box sx={containerSx('content')}>…</Box>
 * ```
 */
export function containerSx(variant: ContainerVariant = "content"): SxProps<Theme> {
  return {
    width: "100%",
    maxWidth: contentMaxWidth[variant],
    mx: "auto",
    px: containers[variant],
  };
}

/**
 * Returns an sx-compatible object for responsive vertical section spacing (py).
 *
 * Usage:
 * ```tsx
 * <Box component="section" sx={sectionSx('default')}>…</Box>
 * ```
 */
export function sectionSx(variant: SectionSpacingVariant = "default"): SxProps<Theme> {
  return {
    py: sectionSpacing[variant],
  };
}

/**
 * Returns an sx-compatible object for responsive internal content padding.
 *
 * Usage:
 * ```tsx
 * <Box sx={contentPaddingSx('relaxed')}>…</Box>
 * ```
 */
export function contentPaddingSx(variant: ContentSpacingVariant = "default"): SxProps<Theme> {
  return {
    p: contentSpacing[variant],
  };
}

/**
 * Combines containerSx and sectionSx into a single sx object.
 * Convenience helper for the common pattern of a full-width section
 * with a constrained inner container.
 *
 * Usage:
 * ```tsx
 * <Box component="section" sx={pageSectionSx('content', 'default')}>…</Box>
 * ```
 */
export function pageSectionSx(
  containerVariant: ContainerVariant = "content",
  sectionVariant: SectionSpacingVariant = "default",
): SxProps<Theme> {
  return {
    width: "100%",
    maxWidth: contentMaxWidth[containerVariant],
    mx: "auto",
    px: containers[containerVariant],
    py: sectionSpacing[sectionVariant],
  };
}
