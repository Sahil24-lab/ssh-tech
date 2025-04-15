"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import { usePathname } from "next/navigation";
import BookCallModal from "@/components/book-call-modal/BookCallModal";
import { trackEvent } from "@/app/lib/umamiTrackEvent";

export default function Header() {
  const theme = useTheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const getSubdomain = () => {
    if (typeof window === "undefined") return null;
    const host = window.location.hostname;
    if (host.endsWith(".localhost")) return host.split(".")[0];
    const parts = host.split(".");
    return parts.length >= 3 ? parts[0] : null;
  };

  const handleCTAClick = () => {
    trackEvent("header_cta_click");
    const subdomain = getSubdomain();
    if (subdomain === "sahil") {
      window.open("https://cal.com/ssh-tech/30min-call", "_blank");
    } else {
      setOpen(true);
    }
  };

  const scrollToSection = (id: string) => {
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const navItems = [
    { label: "Services", sectionId: "services" },
    { label: "Process", sectionId: "process" },
    { label: "Proof Of Work", href: "/proof-of-work" },
    { label: "Pricing", sectionId: "pricing" },
    { label: "FAQ", sectionId: "faq" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 16px",
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              fontWeight: "bold",
              color: theme.palette.text.primary,
              textDecoration: "none",
              "&:hover": {
                color: theme.palette.text.secondary,
              },
            }}
          >
            SSH Tech
          </Typography>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map(({ label, sectionId, href }) =>
              href ? (
                <Button key={label} component={Link} href={href} variant="text">
                  {label}
                </Button>
              ) : (
                <Button
                  key={label}
                  variant="text"
                  onClick={() => scrollToSection(sectionId!)}
                >
                  {label}
                </Button>
              )
            )}
          </Box>
        </Box>

        {/* Desktop CTA */}
        <Button
          variant="contained"
          color="primary"
          sx={{ fontWeight: "700", display: { xs: "none", md: "block" } }}
          onClick={handleCTAClick}
        >
          Book a Call
        </Button>

        {/* Mobile Hamburger/X */}
        <IconButton
          edge="end"
          onClick={handleDrawerToggle}
          sx={{
            display: { md: "none" },
            color: theme.palette.primary.main,
            transition: "transform 0.3s ease",
          }}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        transitionDuration={300}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(9, 31, 44, 0.85)",
            backdropFilter: "blur(14px)",
            color: "#ffffff",
            paddingX: 3,
            paddingY: 4,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "#ffffff",
          }}
        >
          <CloseIcon />
        </IconButton>

        <List sx={{ mt: 8, display: "flex", flexDirection: "column", gap: 2 }}>
          {navItems.map(({ label, sectionId, href }) =>
            href ? (
              <ListItem
                key={label}
                component={Link}
                href={href}
                onClick={handleDrawerToggle}
                sx={{
                  px: 2,
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  },
                  "&:active": {
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                  },
                }}
              >
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{
                    fontSize: "1.25rem",
                    fontWeight: 400,
                  }}
                />
              </ListItem>
            ) : (
              <ListItem
                key={label}
                button
                onClick={() => {
                  scrollToSection(sectionId!);
                  handleDrawerToggle();
                }}
                sx={{
                  px: 2,
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  },
                  "&:active": {
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                  },
                }}
              >
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{
                    fontSize: "1.25rem",
                    fontWeight: 400,
                  }}
                />
              </ListItem>
            )
          )}

          {/* CTA */}
          <Box mt={4} px={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                handleCTAClick();
                handleDrawerToggle();
              }}
              sx={{
                fontWeight: "700",
                textTransform: "none",
                borderRadius: "8px",
              }}
            >
              Book a Call
            </Button>
          </Box>
        </List>
      </Drawer>

      <BookCallModal open={open} handleClose={() => setOpen(false)} />
    </AppBar>
  );
}
