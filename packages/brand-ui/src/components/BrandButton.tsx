import type React from "react";
import { Button } from "@mui/material";
import Link from "next/link";

export type BrandButtonProps = {
  label: string;
  href: string;
  variant?: "contained" | "outlined" | "text";
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

export function BrandButton({
  label,
  href,
  variant = "contained",
  onClick,
}: BrandButtonProps) {
  const isContained = variant === "contained";

  return (
    <Button
      component={Link}
      href={href}
      variant={variant}
      sx={{
        borderWidth: variant === "outlined" ? 2 : undefined,
        borderColor: variant === "outlined" ? "primary.main" : undefined,
        color: isContained ? "primary.contrastText" : "primary.main",
        backgroundColor: isContained ? "primary.main" : "transparent",
        boxShadow: isContained ? "0 0 0 rgba(7, 223, 193, 0)" : "none",
        "&:hover": {
          backgroundColor: isContained ? "primary.dark" : "rgba(7, 223, 193, 0.12)",
          borderColor: "primary.light",
          boxShadow: isContained ? "0 0 24px rgba(7, 223, 193, 0.25)" : "none",
        },
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
