import {
  Container as MuiContainer,
  type ContainerProps as MuiContainerProps,
} from "@mui/material";

export type ContainerProps = MuiContainerProps & {
  size?: "content" | "wide";
};

export function Container({
  size = "content",
  sx,
  children,
  ...props
}: ContainerProps) {
  return (
    <MuiContainer
      maxWidth={false}
      sx={[
        {
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 6 },
          pb: 2,
          mx: "auto",
          width: "100%",
          maxWidth: {
            xs: "95%",
            sm: "90%",
            md: "100%",
            lg: size === "wide" ? "1320px" : "1200px",
            xl: size === "wide" ? "1480px" : "1400px",
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {children}
    </MuiContainer>
  );
}
