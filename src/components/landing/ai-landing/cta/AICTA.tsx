"use client";

import { Typography, Button, Box, useTheme } from "@mui/material";
import { useState } from "react";
import BookCallModal from "@/components/book-call-modal/BookCallModal";

const AICTA = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "background.paper",
        borderTop: `1px solid ${theme.palette.secondary.dark}`,
        borderBottom: `1px solid ${theme.palette.secondary.dark}`,
        py: { xs: 12, md: 18 },
        px: { xs: 4, md: 8 },
        textAlign: "center",
      }}
    >
      {/* Glow orb */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: 400, md: 700 },
          height: { xs: 400, md: 700 },
          borderRadius: "50%",
          background: `radial-gradient(ellipse at center, ${theme.palette.primary.main}12 0%, transparent 65%)`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.78rem",
            letterSpacing: "0.1em",
            color: theme.palette.primary.main,
            textTransform: "uppercase",
            mb: 3,
          }}
        >
          // let&apos;s talk
        </Typography>

        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 700,
            color: "#FFFFFF",
            mb: 3,
            maxWidth: 680,
            mx: "auto",
          }}
        >
          Ready to integrate AI into your operations?
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "text.secondary",
            mb: 6,
            maxWidth: 520,
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Book a Discovery Call. We&apos;ll assess where AI will deliver the
          highest ROI for your organisation.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row" },
            maxWidth: { xs: 320, sm: "none" },
            mx: "auto",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setOpen(true)}
            sx={{
              fontWeight: 700,
              px: 5,
              boxShadow: `0 0 30px ${theme.palette.primary.main}30`,
              "&:hover": {
                boxShadow: `0 0 40px ${theme.palette.primary.main}50`,
              },
            }}
          >
            Book a Discovery Call
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ fontWeight: 700, px: 5 }}
            onClick={() => setOpen(true)}
          >
            Book a Discovery Call
          </Button>
        </Box>
      </Box>

      <BookCallModal open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
};

export default AICTA;
