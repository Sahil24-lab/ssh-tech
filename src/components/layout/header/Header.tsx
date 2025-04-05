"use client";

import { useState } from "react";
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

export default function Header() {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
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
            <Button component={Link} href="/blogs" variant="text">
              Blogs
            </Button>
            <Button component={Link} href="/proof-of-work" variant="text">
              Proof Of Work
            </Button>
            <Button component={Link} href="/tools-resources" variant="text">
              Tools & Resources
            </Button>
          </Box>
        </Box>

        {/* Desktop CTA */}
        <Button
          variant="contained"
          color="primary"
          sx={{ display: { xs: "none", md: "block" } }}
          component={Link}
          href="/book-a-call"
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

      {/* Mobile Fullscreen Drawer */}
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
        {/* Close Icon */}
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

        {/* Navigation Items */}
        <List sx={{ mt: 8, display: "flex", flexDirection: "column", gap: 2 }}>
          {[
            { label: "Blogs", href: "/blogs" },
            { label: "Proof Of Work", href: "/proof-of-work" },
            { label: "Tools & Resources", href: "/tools-resources" },
          ].map(({ label, href }) => (
            <ListItem
              key={label}
              component={Link}
              href={href}
              onClick={handleDrawerToggle}
              sx={{
                px: 2,
                borderRadius: 2,
                transition: "background-color 0.2s",
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
          ))}

          {/* CTA */}
          <Box mt={4} px={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              component={Link}
              href="/book-a-call"
              onClick={handleDrawerToggle}
              sx={{
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "1rem",
                borderRadius: "8px",
              }}
            >
              Book a Call
            </Button>
          </Box>
        </List>
      </Drawer>
    </AppBar>
  );
}
