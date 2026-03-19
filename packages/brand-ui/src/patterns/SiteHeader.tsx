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

export type HeaderNavItem = {
  label: string;
  href?: string;
  sectionId?: string;
};

export type SiteHeaderProps = {
  brandLabel: string;
  brandHref?: string;
  navItems: HeaderNavItem[];
  currentPath?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  onSectionNavigate?: (sectionId: string) => void;
  linkComponent?: React.ElementType;
};

export function SiteHeader({
  brandLabel,
  brandHref = "/",
  navItems,
  currentPath = "/",
  ctaLabel = "Book a Call",
  onCtaClick,
  onSectionNavigate,
  linkComponent,
}: SiteHeaderProps) {
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
            primary={item.label}
            primaryTypographyProps={mobileTypographySx}
          />
        </ListItemButton>
      ) : (
        <Button
          key={item.label}
          component={LinkComponent}
          href={item.href}
          variant="text"
        >
          {item.label}
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
          primary={item.label}
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
      >
        {item.label}
      </Button>
    );
  };

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
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography
            variant="h6"
            component={LinkComponent}
            href={brandHref}
            sx={{
              fontWeight: 700,
              color: "text.primary",
              textDecoration: "none",
              "&:hover": {
                color: "text.secondary",
              },
            }}
          >
            {brandLabel}
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => renderNavItem(item))}
          </Box>
        </Box>

        <Button
          variant="contained"
          color="primary"
          sx={{ fontWeight: 700, display: { xs: "none", md: "block" } }}
          onClick={onCtaClick}
        >
          {ctaLabel}
        </Button>

        <IconButton
          edge="end"
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
            px: 3,
            py: 4,
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
                borderRadius: "8px",
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

const mobileItemSx = {
  px: 2,
  borderRadius: 2,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  "&:active": {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
};

const mobileTypographySx = {
  fontSize: "1.25rem",
  fontWeight: 400,
};
