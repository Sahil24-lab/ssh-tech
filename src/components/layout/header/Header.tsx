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
import Link from "next/link";
import { useTheme } from "@mui/material/styles";

export default function Header() {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: "blur(10px)", // Glass effect
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent header
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
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
          padding: "0 16px",
        }}
      >
        {/* Left: Logo with Link to Homepage */}
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

          {/* Navigation Links (Visible on Tablet & Desktop) */}
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

        {/* Right: "Book a Call" CTA (Visible on Tablet & Desktop) */}
        <Button
          variant="contained"
          color="primary"
          sx={{ display: { xs: "none", md: "block" } }}
          component={Link}
          href="/book-a-call"
        >
          Book a Call
        </Button>

        {/* Mobile Menu Button */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
          },
        }}
      >
        <List>
          <ListItem component={Link} href="/blogs" onClick={handleDrawerToggle}>
            <ListItemText primary="Blogs" />
          </ListItem>
          <ListItem
            component={Link}
            href="/proof-of-work"
            onClick={handleDrawerToggle}
          >
            <ListItemText primary="Proof Of Work" />
          </ListItem>
          <ListItem
            component={Link}
            href="/tools-resources"
            onClick={handleDrawerToggle}
          >
            <ListItemText primary="Tools & Resources" />
          </ListItem>
          {/* Mobile "Book a Call" CTA */}
          <ListItem
            component={Link}
            href="/book-a-call"
            onClick={handleDrawerToggle}
          >
            <ListItemText primary="Book a Call" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
