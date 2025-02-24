"use client";

import * as React from "react";
import { cn } from "@/app/lib/utils";
import { styled } from "@mui/material/styles";
import { Button, type ButtonProps as MuiButtonProps } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Link from "next/link";

export interface ButtonProps extends Omit<MuiButtonProps, "size" | "variant"> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const BackButtonBase = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <Button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variant === "default" &&
            "bg-primary text-primary-foreground hover:bg-primary/90",
          variant === "destructive" &&
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          variant === "outline" &&
            "bg-transparent border border-input hover:bg-accent hover:text-accent-foreground",
          variant === "secondary" &&
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);
BackButtonBase.displayName = "BackButtonBase";

const BackButtonWrapper = styled("div")(({ theme }) => ({
  position: "fixed",
  top: `calc(65px + ${theme.spacing(3)})`,
  right: "calc((100vw - 1600px) / 2)",
  zIndex: 1000,
  pointerEvents: "none",
  display: "flex",
  justifyContent: "flex-end",
}));

const BackButton = styled(BackButtonBase)(({ theme }) => ({
  pointerEvents: "auto",
  width: "auto",
  minWidth: "150px",
  height: "48px",
  textDecoration: "none", // REMOVE UNDERLINE
  color: "inherit", // Prevents unwanted color overrides
  variant: "plain",
  transition: theme.transitions.create([
    "background-color",
    "box-shadow",
    "border-radius",
    "width",
    "min-width",
    "padding",
    "transform",
  ]),
  transformOrigin: "left center",
  position: "fixed",

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Subtle color change
    transform: "translateY(-2px)", // Subtle movement upwards
    textDecoration: "none", // Remove underline on hover
  },

  "&:active": {
    transform: "translateY(1px) scale(0.98)", // Pressing effect
    boxShadow: theme.shadows[2], // Slightly reduced shadow when pressed
    textDecoration: "none", // Remove underline on active
  },

  "&:focus": {
    textDecoration: "none", // Remove underline on focus
  },

  "&.scrolled": {
    backgroundColor: "rgba(18, 18, 18, 0.8)",
    backdropFilter: "blur(8px)",
    borderRadius: "24px",
    boxShadow: theme.shadows[4],
    width: "52px",
    minWidth: "54px",
    padding: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
  },
}));

export function CenteredBackButton(props: ButtonProps) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BackButtonWrapper>
      <BackButton
        component={Link}
        href="/proof-of-work"
        startIcon={!scrolled && <ArrowBack />}
        className={scrolled ? "scrolled" : ""}
        color="primary"
      >
        {!scrolled ? "Back to Projects" : <ArrowBack fontSize="small" />}
      </BackButton>
    </BackButtonWrapper>
  );
}
