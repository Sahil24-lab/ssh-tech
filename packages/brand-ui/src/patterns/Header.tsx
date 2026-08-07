"use client";

import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { alpha, type Theme } from "@mui/material/styles";
import { DecodeText } from "../motion/DecodeText";

export type HeaderNavItem = {
  label: string;
  href?: string;
  sectionId?: string;
};

export type HeaderProps = {
  brandLabel: string;
  brandHref?: string;
  navItems: HeaderNavItem[];
  currentPath?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  onSectionNavigate?: (sectionId: string) => void;
  linkComponent?: React.ElementType;
};

export function Header({
  brandLabel,
  brandHref = "/",
  navItems,
  currentPath = "/",
  ctaLabel = "Book a Call",
  onCtaClick,
  onSectionNavigate,
  linkComponent,
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const LinkComponent = linkComponent ?? "a";

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleSectionClick = (sectionId?: string) => {
    if (!sectionId) return;
    onSectionNavigate?.(sectionId);
    setMobileOpen(false);
  };

  const getSectionHref = (sectionId: string) =>
    currentPath === "/" ? `#${sectionId}` : `/#${sectionId}`;

  const renderNavItem = (item: HeaderNavItem, mobile = false) => {
    if (item.href) {
      return mobile ? (
        <ListItemButton
          key={item.label}
          component={LinkComponent}
          href={item.href}
          onClick={handleDrawerToggle}
          sx={mobileItemSx}
        >
          <ListItemText
            primary={
              <DecodeText
                text={item.label}
                autoStart={false}
                size="sm"
                clipOverflow
                measure="text"
              />
            }
            primaryTypographyProps={mobileTypographySx}
          />
        </ListItemButton>
      ) : (
        <Button
          key={item.label}
          component={LinkComponent}
          href={item.href}
          variant="text"
          sx={(theme) => desktopNavSx(theme)}
        >
          <DecodeText
            text={item.label}
            autoStart={false}
            size="sm"
            clipOverflow
            measure="text"
          />
        </Button>
      );
    }

    if (!item.sectionId) return null;

    return mobile ? (
      <ListItemButton
        key={item.label}
        component="a"
        href={getSectionHref(item.sectionId)}
        onClick={() => handleSectionClick(item.sectionId)}
        sx={mobileItemSx}
      >
        <ListItemText
          primary={
            <DecodeText
              text={item.label}
              autoStart={false}
              size="sm"
              clipOverflow
              measure="text"
            />
          }
          primaryTypographyProps={mobileTypographySx}
        />
      </ListItemButton>
    ) : (
      <Button
        key={item.label}
        component="a"
        href={getSectionHref(item.sectionId)}
        variant="text"
        onClick={() => onSectionNavigate?.(item.sectionId!)}
        sx={(theme) => desktopNavSx(theme)}
      >
        <DecodeText
          text={item.label}
          autoStart={false}
          size="sm"
          clipOverflow
          measure="text"
        />
      </Button>
    );
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={(theme) => ({
        backdropFilter: "blur(14px)",
        backgroundColor: alpha(theme.palette.background.paper, 0.85),
        borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
        boxShadow: `0px 4px 18px ${theme.palette.overlay.black["25"]}`,
      })}
    >
      <Toolbar
        sx={{
          maxWidth: "1360px",
          width: "100%",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 3, sm: 5, md: 8 },
          py: 2.6,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography
            variant="h6"
            component={LinkComponent}
            href={brandHref}
            sx={{
              fontWeight: 800,
              fontSize: "1.15rem",
              letterSpacing: "0.02em",
              color: "text.primary",
              textDecoration: "none",
              "&:hover": {
                color: "text.secondary",
              },
            }}
          >
            {brandLabel}
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1.5 }}>
            {navItems.map((item) => renderNavItem(item))}
          </Box>
        </Box>

        <Button
          variant="contained"
          color="primary"
          size="medium"
          sx={{
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            fontSize: "0.8rem",
            px: 3.5,
            py: 1.2,
            display: { xs: "none", md: "block" },
          }}
          onClick={onCtaClick}
        >
          {ctaLabel}
        </Button>

        <IconButton
          edge="end"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={handleDrawerToggle}
          sx={{
            display: { md: "none" },
            color: "primary.main",
            transition: "transform 0.3s ease",
          }}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      <Drawer
        id="mobile-navigation"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        transitionDuration={300}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100vh",
            backgroundColor: (theme) =>
              alpha(theme.palette.background.paper, 0.85),
            backdropFilter: "blur(14px)",
            color: "text.primary",
            px: 3,
            py: 4,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <IconButton
          aria-label="Close navigation menu"
          onClick={handleDrawerToggle}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "text.primary",
          }}
        >
          <CloseIcon />
        </IconButton>

        <List sx={{ mt: 8, display: "flex", flexDirection: "column", gap: 2 }}>
          {navItems.map((item) => renderNavItem(item, true))}

          <Box mt={4} px={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                onCtaClick?.();
                handleDrawerToggle();
              }}
              sx={{
                fontWeight: 700,
                textTransform: "none",
              }}
            >
              {ctaLabel}
            </Button>
          </Box>
        </List>
      </Drawer>
    </AppBar>
  );
}

const mobileItemSx = (theme: Theme) => ({
  px: 2,
  borderRadius: 2,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  "&:hover": {
    backgroundColor: theme.palette.overlay.white["5"],
  },
  "&:active": {
    backgroundColor: theme.palette.overlay.white["8"],
  },
});

const mobileTypographySx = {
  fontSize: "0.95rem",
  fontWeight: 700,
};

const desktopNavSx = (theme: {
  palette: {
    primary: { main: string };
    text: { primary: string; secondary: string };
  };
}) => ({
  position: "relative",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  fontWeight: 600,
  fontSize: "0.95rem",
  color: theme.palette.text.secondary,
  "&:hover": {
    color: theme.palette.text.primary,
    backgroundColor: "transparent",
    transform: "none",
  },
  "&:after": {
    content: '""',
    display: "block",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "1px",
    backgroundColor: alpha(theme.palette.primary.main, 0.35),
    transform: "scaleX(0)",
    transition: "transform 0.2s ease",
  },
  "&:hover:after": {
    transform: "scaleX(1)",
  },
});
