import type { Meta, StoryObj } from "@storybook/react";
import {
  Box,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { withLegacyTheme } from "@/components/storybook/withLegacyTheme";

const queue = [
  {
    component: "TableOfContents",
    path: "src/components/table-of-contents/TableOfContents.tsx",
    status: "extract",
    target: "Patterns/TableOfContents",
    note: "Strong interaction model. Needs a generic heading-data API and a separate Contentful parser helper.",
  },
  {
    component: "StickyWrapper",
    path: "src/components/table-of-contents/StickyWrapper.tsx",
    status: "extract",
    target: "Patterns/StickySidebar",
    note: "Useful primitive, but should expose width and top offset props instead of hard-coded layout values.",
  },
  {
    component: "SSHEchoBlueprint",
    path: "src/components/products/ssh-echo/SSHEchoBlueprint.tsx",
    status: "keep legacy",
    target: "Extract blueprint card primitives first",
    note: "Visually strong, but still product-specific. Promote its internal card grammar before promoting the whole blueprint.",
  },
  {
    component: "FeatureImage",
    path: "src/components/feature-image/FeatureImage.tsx",
    status: "keep legacy",
    target: "Revisit after media API stabilises",
    note: "Still ambiguous as a shared media primitive versus page-specific framing.",
  },
  {
    component: "BookCallModal",
    path: "src/components/book-call-modal/BookCallModal.tsx",
    status: "keep app-specific",
    target: "None",
    note: "Tied to Cal embed and app-specific lead-flow behaviour. Do not move it into the shared package.",
  },
  {
    component: "AI/Web3 story trees",
    path: "src/components/landing/*/*.stories.tsx",
    status: "delete",
    target: "Use shared Patterns stories instead",
    note: "Already replaced by package-safe section patterns. Do not reintroduce product trees into Storybook navigation.",
  },
];

const meta: Meta = {
  title: "Legacy/MigrationQueue",
  decorators: [withLegacyTheme],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Strict migration queue for legacy components. Labels are authoritative: `extract`, `keep legacy`, `keep app-specific`, or `delete`.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

function StatusChip({ status }: { status: string }) {
  const color =
    status === "extract"
      ? "primary"
      : status === "delete"
        ? "error"
        : status === "keep app-specific"
          ? "warning"
          : "default";

  return <Chip size="small" color={color} label={status} />;
}

export const Default: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 1200 }}>
      <Box>
        <Typography variant="h3" sx={{ mb: 1 }}>
          Legacy Migration Queue
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 900 }}>
          This queue controls what gets promoted into the shared package next. If a component is not package-safe or is still product-specific, it stays here.
        </Typography>
      </Box>

      <Table
        sx={{
          backgroundColor: "rgba(255,255,255,0.04)",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Component</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Target</TableCell>
            <TableCell>Reason</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {queue.map((item) => (
            <TableRow key={item.component}>
              <TableCell>
                <Stack spacing={0.5}>
                  <Typography variant="subtitle2">{item.component}</Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    {item.path}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <StatusChip status={item.status} />
              </TableCell>
              <TableCell>{item.target}</TableCell>
              <TableCell sx={{ color: "text.secondary" }}>{item.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  ),
};
