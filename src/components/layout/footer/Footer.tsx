import { Box, Typography, IconButton, Link } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import ArticleIcon from "@mui/icons-material/Article";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
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
          component="a"
          href="https://x.com/sahil_harriram"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.primary.light }}
        >
          <Twitter />
        </IconButton>

        <IconButton
          component="a"
          href="https://medium.com/@sahilharriram"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.primary.light }}
        >
          <ArticleIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/sahil-harriram/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.primary.light }}
        >
          <LinkedIn />
        </IconButton>

        <IconButton
          component="a"
          href="https://github.com/Sahil24-lab"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.primary.light }}
        >
          <GitHub />
        </IconButton>
      </Box>

      {/* Right */}
      <Box sx={{ flex: 1, textAlign: { xs: "center", sm: "right" } }}>
        <Typography> Privacy Policy</Typography>
        {/* <Link href="/privacy-policy" underline="hover">
          Privacy Policy
        </Link> */}
      </Box>
    </Box>
  );
}
