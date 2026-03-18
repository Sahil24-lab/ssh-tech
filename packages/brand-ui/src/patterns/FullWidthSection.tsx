import { Box, type BoxProps } from "@mui/material";

export type FullWidthSectionProps = BoxProps;

export function FullWidthSection({
  component = "section",
  sx,
  children,
  ...props
}: FullWidthSectionProps) {
  return (
    <Box
      component={component}
      sx={[
        {
          width: "100%",
          display: "flex",
          justifyContent: "center",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {children}
    </Box>
  );
}
