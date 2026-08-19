import { Box, Typography, IconButton, Link } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import ArticleIcon from "@mui/icons-material/Article";
import { useTheme } from "@mui/material/styles";

type FooterProps = {
  mt?: number;
};

export default function Footer({ mt = 4 }: FooterProps) {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt,
        py: 2,
        px: 4,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        textAlign: "center",
      }}
    >
      {/* Left */}
      <Box sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Sahil Harriram | SSH Tech. All rights
          reserved.
        </Typography>
      </Box>

      {/* Center */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <IconButton
          aria-label="SSH Tech on X"
          component="a"
          href="https://x.com/sahil_harriram"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.primary.light, minWidth: 44, minHeight: 44 }}
        >
          <Twitter />
        </IconButton>

        <IconButton
          aria-label="Sahil Harriram on Medium"
          component="a"
          href="https://medium.com/@sahilharriram"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.primary.light, minWidth: 44, minHeight: 44 }}
        >
          <ArticleIcon />
        </IconButton>

        <IconButton
          aria-label="Sahil Harriram on LinkedIn"
          component="a"
          href="https://www.linkedin.com/in/sahil-harriram/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.primary.light, minWidth: 44, minHeight: 44 }}
        >
          <LinkedIn />
        </IconButton>

        <IconButton
          aria-label="Sahil Harriram on GitHub"
          component="a"
          href="https://github.com/Sahil24-lab"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.primary.light, minWidth: 44, minHeight: 44 }}
        >
          <GitHub />
        </IconButton>
      </Box>

      {/* Right */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "right" },
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap",
          gap: { xs: 0.5, sm: 2 },
        }}
      >
        <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
          <Link href="/privacy-policy" underline="hover">
            Privacy Policy
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
          <Link href="/cookies" underline="hover">
            Cookies
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
          <Link href="/terms" underline="hover">
            Terms of Service
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
