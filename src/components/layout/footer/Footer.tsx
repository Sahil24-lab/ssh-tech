import { Box, Typography, IconButton, Link } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import ArticleIcon from "@mui/icons-material/Article"; // Medium Alternative
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme(); // Access theme colors

  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 2,
        px: 2,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Column on mobile, row on desktop
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      {/* Left: Copyright Text */}
      <Typography variant="body2" sx={{ mb: { xs: 2, sm: 0 } }}>
        © {new Date().getFullYear()} Sahil Harriram. All rights reserved.
      </Typography>

      {/* Center: Social Icons */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: { xs: 0, sm: 0 },
          justifyContent: "center", // Centering on mobile
        }}
      >
        <IconButton
          component="a"
          href="https://x.com/sahil_harriram"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: theme.palette.primary.light,
            fontSize: { xs: "24px", md: "32px" }, // Bigger on desktop
          }}
        >
          <Twitter fontSize="inherit" />
        </IconButton>

        <IconButton
          component="a"
          href="https://medium.com/@sahilharriram"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: theme.palette.primary.light,
            fontSize: { xs: "24px", md: "32px" },
          }}
        >
          <ArticleIcon fontSize="inherit" />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/sahil-harriram/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: theme.palette.primary.light,
            fontSize: { xs: "24px", md: "32px" },
          }}
        >
          <LinkedIn fontSize="inherit" />
        </IconButton>

        <IconButton
          component="a"
          href="https://github.com/Sahil24-lab"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: theme.palette.primary.light,
            fontSize: { xs: "24px", md: "32px" },
          }}
        >
          <GitHub fontSize="inherit" />
        </IconButton>
      </Box>

      {/* Right: Privacy Policy with New Link Style */}
      <Box sx={{ mt: { xs: 2, sm: 0 } }}>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </Box>
    </Box>
  );
}
