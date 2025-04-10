"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { styled, alpha } from "@mui/material/styles";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

const BackButtonWrapper = styled("div")(({ theme }) => ({
  position: "fixed",
  top: `calc(65px + ${theme.spacing(3)})`,
  zIndex: 1000,
  pointerEvents: "none",
  display: "flex",
  justifyContent: "flex-end",
  right: "calc((100vw - 1600px) / 2)",

  [theme.breakpoints.up("sm")]: {
    right: "calc((100vw - 1400px) / 2)",
  },
  [theme.breakpoints.up("md")]: {
    right: "calc((100vw - 1000px) / 2)",
  },
  [theme.breakpoints.up("lg")]: {
    right: "calc((100vw - 1340px) / 2)",
  },
  [theme.breakpoints.up("xl")]: {
    right: "calc((100vw - 1640px) / 2)",
  },
  [theme.breakpoints.up("xxl")]: {
    right: "calc((100vw - 1800px) / 2)",
  },
}));

const BackButtonStyled = styled(Button)(({ theme }) => ({
  pointerEvents: "auto",
  background: "none",
  border: "none",
  boxShadow: "none",
  textDecoration: "none",
  width: "auto",
  minWidth: "150px",
  height: "48px",
  transformOrigin: "left center",
  transition: theme.transitions.create([
    "background-color",
    "box-shadow",
    "border-radius",
    "width",
    "min-width",
    "padding",
    "transform",
    "margin",
  ]),

  "&, &:hover, &:focus, &:active, &:focus-visible, &::-moz-focus-inner": {
    outline: "none !important",
    border: "none !important",
    boxShadow: "none !important",
    textDecoration: "none !important",
  },

  "&::before, &::after": {
    content: '""" !important"',
    display: "none !important",
    border: "none !important",
    textDecoration: "none !important",
  },

  "& .MuiTouchRipple-root": {
    display: "none !important",
  },

  "&:hover": {
    backgroundColor: "transparent",
  },

  "& span": {
    textDecoration: "none !important",
  },

  "&.scrolled": {
    backgroundColor: alpha("#121212", 0.8),
    backdropFilter: "blur(8px)",
    borderRadius: 24,
    boxShadow: theme.shadows[4],
    width: 52,
    minWidth: 54,
    padding: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none !important",
    alignSelf: "flex-end",
    marginLeft: "auto",

    "& span": {
      display: "none",
    },
  },

  "&.scrolled:hover": {
    backgroundColor: alpha("#121212", 1),
  },
}));

export default function CenteredBackButton() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BackButtonWrapper>
      <Link href="/proof-of-work" passHref legacyBehavior>
        <a className="no-underline border-none hover:border-none">
          <BackButtonStyled className={scrolled ? "scrolled" : ""}>
            <ArrowBack fontSize="small" />
            {!scrolled && (
              <span style={{ marginLeft: 8, textDecoration: "none" }}>
                Back to Projects
              </span>
            )}
          </BackButtonStyled>
        </a>
      </Link>
    </BackButtonWrapper>
  );
}
