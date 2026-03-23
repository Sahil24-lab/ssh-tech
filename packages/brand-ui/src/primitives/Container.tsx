import {
  Container as MuiContainer,
  type ContainerProps as MuiContainerProps,
} from "@mui/material";
import { containerSx } from "../theme/tokens/layoutHelpers";
import type { ContainerVariant } from "../theme/tokens/layout";

export type ContainerProps = Omit<MuiContainerProps, "maxWidth"> & {
  /** Layout variant — controls max-width cap and horizontal padding. */
  size?: ContainerVariant;
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
      sx={[containerSx(size), ...(Array.isArray(sx) ? sx : [sx])]}
      {...props}
    >
      {children}
    </MuiContainer>
  );
}
