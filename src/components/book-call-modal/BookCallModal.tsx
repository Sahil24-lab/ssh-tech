// BookCallModal.tsx
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
import { getCalApi } from "@calcom/embed-react";
import CalEmbed from "./CalEmbed";

function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, "");
}

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
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: isMobile ? 360 : 920,
    maxHeight: isMobile ? "100vh" : "95vh",
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
  };

  // Preload the Cal.com widget when the modal mounts
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min-call" });
      cal("preload", { calLink: "ssh-tech/30min-call" });
    })();
  }, []);

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

  const isOver15K = ["$20K-$50K", "$50K-$100K", "+$100K"].includes(
    formData.budget
  );

  // Reset form when modal closes
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

  const handleNext = () => {
    if (isRateLimited) return;

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

    // Proceed to the next step without sending data to /api/leads.
    setStep((prev) => prev + 1);
    setErrorMessage("");
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" fontWeight="700">
            Book a Call
          </Typography>
          <IconButton onClick={handleClose} color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>

        <Stepper activeStep={step} alternativeLabel sx={{ mt: 3, mb: 3 }}>
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
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        {step === 0 && (
          <Box mt={4} component="form">
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
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.paper} inset`,
                      WebkitTextFillColor: theme.palette.text.primary,
                    },
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
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.paper} inset`,
                      WebkitTextFillColor: theme.palette.text.primary,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
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
                    {[
                      "$0–$10K",
                      "$10K–$20K",
                      "$20K-$50K",
                      "$50K-$100K",
                      "+$100K",
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
                    {[
                      "ASAP",
                      "1–2 weeks",
                      "1 month",
                      "1-3 months",
                      "3-6 months",
                      "6-12 months",
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
                      "DeFi",
                      "Stablecoin",
                      "Exchange",
                      "Community Tool",
                      "Analytics",
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Custom Project Type"
                    value={formData.customType}
                    onChange={(e) => handleChange("customType", e.target.value)}
                    fullWidth
                    sx={{
                      fieldset: { borderColor: theme.palette.primary.main },
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
                    fieldset: { borderColor: theme.palette.primary.main },
                  }}
                />
              </Grid>

              {errorMessage && (
                <Typography color="error" mt={2}>
                  {errorMessage}
                </Typography>
              )}

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
            {isOver15K ? (
              <>
                <Typography textAlign="center" variant="h6" gutterBottom>
                  Perfect, lets lock in your Free Blueprint Call Below
                </Typography>
                <Box
                  mt={2}
                  sx={{ width: "100%", height: isMobile ? "600px" : "700px" }}
                >
                  <CalEmbed
                    formName={formData.name}
                    formEmail={formData.email}
                    formBudget={formData.budget}
                    formTimeline={formData.timeline}
                    formProjectType={formData.projectType}
                    formProjectOverview={formData.overview}
                  />
                </Box>
              </>
            ) : (
              <>
                <Typography variant="h6" gutterBottom>
                  Thanks for your submission!
                </Typography>
                <Typography variant="body1" mt={1}>
                  Based on your input, here’s a resource that might help.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href="/your-pdf-guide.pdf"
                  sx={{ mt: 2, mr: 1 }}
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

            {/* Responsive Back Button Container */}
            <Box
              mt={2}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
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
