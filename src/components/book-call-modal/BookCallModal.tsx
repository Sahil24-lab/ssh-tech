// components/BookCallModal.tsx

import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Modal,
  Typography,
  TextField,
  Stepper,
  Step,
  StepLabel,
  useTheme,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Removes basic dangerous characters
function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, "");
}

// Checks basic email format
function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

const steps = ["Project Info", "Next Steps"];

export default function BookCallModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const style = {
    position: "absolute" as const,
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: 840,
    maxHeight: isMobile ? "100vh" : "90vh",
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 5,
    overflowY: "auto",
    mt: isMobile ? 0 : 4,
    mb: isMobile ? 0 : 4,
  };

  const [step, setStep] = useState(0);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    timeline: "",
    projectType: "",
    customType: "",
    overview: "",
  });

  useEffect(() => {
    if (!open) {
      setStep(0);
      setErrorMessage("");
      setFormData({
        name: "",
        email: "",
        budget: "",
        timeline: "",
        projectType: "",
        customType: "",
        overview: "",
      });
    }
  }, [open]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: sanitizeInput(value) }));
  };

  const handleNext = async () => {
    if (isRateLimited) {
      return;
    }

    if (!isValidEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (
      !formData.name ||
      !formData.email ||
      !formData.budget ||
      !formData.timeline ||
      !formData.projectType
    ) {
      setErrorMessage("All required fields must be filled out.");
      return;
    }

    setIsRateLimited(true);
    setTimeout(() => {
      setIsRateLimited(false);
    }, 3000);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStep((prev) => prev + 1);
      setErrorMessage("");
    } catch {
      setErrorMessage("There was an error submitting your form.");
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const qualified =
    formData.budget !== "<$5K" && formData.timeline !== "2+ months";

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="book-call-modal">
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" fontWeight="700">
            Book a Call
          </Typography>
          <IconButton onClick={handleClose} color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>

        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                sx={{
                  "& .MuiStepIcon-root.Mui-completed": {
                    color: theme.palette.primary.main,
                  },
                  "& .MuiStepIcon-root.Mui-active": {
                    color: theme.palette.primary.main,
                  },
                  "& .MuiStepIcon-root": {
                    color: `${theme.palette.primary.main}55`,
                    "& text": {
                      fill: theme.palette.text.primary,
                    },
                  },
                  "& .MuiStepLabel-label": {
                    color: theme.palette.text.secondary,
                  },
                  "&.Mui-active .MuiStepLabel-label": {
                    color: theme.palette.background.paper,
                    fontWeight: 400,
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        {errorMessage && (
          <Typography color="error" mt={2}>
            {errorMessage}
          </Typography>
        )}

        {step === 0 && (
          <Box component="form" mt={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Name"
                  variant="outlined"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  fullWidth
                  sx={{
                    fieldset: { borderColor: theme.palette.primary.main },
                    height: 40,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Email"
                  variant="outlined"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  fullWidth
                  sx={{
                    fieldset: { borderColor: theme.palette.primary.main },
                    height: 40,
                  }}
                />
              </Grid>
              <Grid item xs={12} marginTop={2}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel
                    sx={{ color: theme.palette.text.primary, fontWeight: 600 }}
                  >
                    Budget:
                  </FormLabel>
                  <RadioGroup
                    value={formData.budget}
                    onChange={(e) => handleChange("budget", e.target.value)}
                    row
                  >
                    {["<$5K", "$5K–$10K", "$10K–$20K", "$20K+"].map(
                      (option) => (
                        <FormControlLabel
                          key={option}
                          value={option}
                          control={
                            <Radio
                              sx={{ color: `${theme.palette.primary.main}AA` }}
                            />
                          }
                          label={option}
                        />
                      )
                    )}
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel
                    sx={{ color: theme.palette.text.primary, fontWeight: 600 }}
                  >
                    Timeline:
                  </FormLabel>
                  <RadioGroup
                    value={formData.timeline}
                    onChange={(e) => handleChange("timeline", e.target.value)}
                    row
                  >
                    {["ASAP", "1–2 weeks", "1 month", "2+ months"].map(
                      (option) => (
                        <FormControlLabel
                          key={option}
                          value={option}
                          control={
                            <Radio
                              sx={{ color: `${theme.palette.primary.main}AA` }}
                            />
                          }
                          label={option}
                        />
                      )
                    )}
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel
                    sx={{ color: theme.palette.text.primary, fontWeight: 600 }}
                  >
                    Project Type:
                  </FormLabel>
                  <RadioGroup
                    value={formData.projectType}
                    onChange={(e) =>
                      handleChange("projectType", e.target.value)
                    }
                    row
                  >
                    {[
                      "DApp",
                      "GameFi",
                      "Community Tool",
                      "Risk Dashboard",
                      "Other",
                    ].map((option) => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        control={
                          <Radio
                            sx={{ color: `${theme.palette.primary.main}AA` }}
                          />
                        }
                        label={option}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
              {formData.projectType === "Other" && (
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="Custom Project Type"
                    value={formData.customType}
                    onChange={(e) => handleChange("customType", e.target.value)}
                    fullWidth
                    sx={{
                      fieldset: { borderColor: theme.palette.primary.main },
                      "& .MuiInputBase-root": {
                        color: theme.palette.text.primary,
                      },
                    }}
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <TextField
                  label="Overview or Link"
                  multiline
                  rows={3}
                  value={formData.overview}
                  onChange={(e) => handleChange("overview", e.target.value)}
                  fullWidth
                  sx={{
                    textarea: {
                      color: theme.palette.text.primary,
                      resize: "vertical",
                      minHeight: "40px",
                      "&::-webkit-resizer": {
                        borderWidth: "10px",
                        borderRight: `8px solid ${theme.palette.primary.main}`,
                        borderBottom: `8px solid ${theme.palette.primary.main}`,
                        background: "transparent",
                        clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
                      },
                    },
                    fieldset: { borderColor: theme.palette.primary.main },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  fullWidth
                  disabled={isRateLimited}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}

        {step === 1 && (
          <Box mt={3}>
            {qualified ? (
              <>
                <Typography variant="h6" gutterBottom>
                  Great fit! Let’s lock in your free Blueprint Call.
                </Typography>
                <Box mt={2}>
                  <iframe
                    src={`https://cal.com/your-link-here?name=${encodeURIComponent(
                      formData.name
                    )}&email=${encodeURIComponent(formData.email)}`}
                    width="100%"
                    height="600px"
                    style={{ border: "none" }}
                    title="Cal Booking"
                  />
                </Box>
              </>
            ) : (
              <>
                <Typography variant="h6" gutterBottom>
                  Thanks for your submission!
                </Typography>
                <Typography variant="body1" mt={1}>
                  Based on your input, here’s a free resource that might help
                  you prep for your project.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href="/your-pdf-guide.pdf"
                  sx={{ mt: 2 }}
                >
                  Download Guide
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  href="https://discord.gg/your-invite"
                  sx={{ mt: 2 }}
                >
                  Join Our Discord
                </Button>
              </>
            )}
            <Box mt={2}>
              <Button variant="outlined" color="secondary" onClick={handleBack}>
                Back
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Modal>
  );
}
