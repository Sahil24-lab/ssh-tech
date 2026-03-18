import { Box, Container, type BoxProps, type ContainerProps } from "@mui/material";

export type SectionShellProps = {
  children: React.ReactNode;
  containerProps?: ContainerProps;
  sectionProps?: BoxProps;
  surface?: "transparent" | "paper";
};

export function SectionShell({
  children,
  containerProps,
  sectionProps,
  surface = "transparent",
}: SectionShellProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: surface === "paper" ? "background.paper" : "transparent",
      }}
      {...sectionProps}
    >
      <Container {...containerProps}>{children}</Container>
    </Box>
  );
}
