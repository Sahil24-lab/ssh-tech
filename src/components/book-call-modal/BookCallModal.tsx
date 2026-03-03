// BookCallModal.tsx
import React, { useState, useEffect, useMemo } from "react";
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

// ── Dynamic project types per subdomain/site ──
const projectTypesBySite: Record<string, string[]> = {
  web3: [
    "DeFi",
    "Stablecoin",
    "Exchange",
    "Community Tool",
    "Analytics",
    "Other",
  ],
  ai: [
    "Chatbot",
    "RAG Pipeline",
    "AI Agent",
    "Fine-Tuning",
    "Data Pipeline",
    "Other",
  ],
  embedded: [
    "IoT Device",
    "Firmware",
    "RTOS",
    "PCB Design",
    "Sensor Integration",
    "Other",
  ],
  sahil: [
    "Consulting",
    "Technical Leadership",
    "Architecture Review",
    "Full-Stack Build",
    "Other",
  ],
  profile: [
    "Consulting",
    "Technical Leadership",
    "Architecture Review",
    "Full-Stack Build",
    "Other",
  ],
};

function getCurrentSite(): string {
  if (typeof window !== "undefined") {
    const host = window.location.hostname;
    const sub = host.split(".")[0];
    if (sub in projectTypesBySite) return sub;
  }
  return process.env.NEXT_PUBLIC_SITE ?? "web3";
}

export default function BookCallModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const currentSite = useMemo(() => getCurrentSite(), []);
  const projectTypes =
    projectTypesBySite[currentSite] ?? projectTypesBySite.web3;

  const style = {
    position: "absolute" as const,
    top: isMobile ? 0 : "50%",
    left: isMobile ? 0 : "50%",
    transform: isMobile ? "none" : "translate(-50%, -50%)",
    width: isMobile ? "100%" : "100%",
    maxWidth: isMobile ? "100%" : isTablet ? 640 : 920,
    height: isMobile ? "100%" : "auto",
    maxHeight: isMobile ? "100%" : "90vh",
    bgcolor: "background.paper",
    borderRadius: isMobile ? 0 : 4,
    border: `1px solid ${theme.palette.primary.main}30`,
    boxShadow: `0 0 40px ${theme.palette.primary.main}15, inset 0 1px 0 ${theme.palette.primary.main}20`,
    px: isMobile ? 3.5 : 7,
    py: isMobile ? 4.5 : 6,
    overflowY: "auto",
  };

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
    formData.budget,
  );

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

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, site: currentSite }),
      });
    } catch (error) {
      console.log("Failed to save data:", error);
    }

    setStep((prev) => prev + 1);
    setErrorMessage("");
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  // ── Shared styles ──

  const primaryMain = theme.palette.primary.main;

  const radioGroupSx = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    flexWrap: "wrap" as const,
    gap: isMobile ? 0.25 : 0.5,
    mt: 1,
  };

  const radioSx = {
    color: `${primaryMain}AA`,
    "&.Mui-checked": {
      color: primaryMain,
    },
  };

  const sectionLabelSx = {
    color: theme.palette.text.primary,
    fontWeight: 600,
    fontSize: isMobile ? "0.95rem" : "1rem",
    mb: 0.5,
  };

  const textFieldSx = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: `${primaryMain}40`,
        borderWidth: 1,
        borderRadius: 2,
      },
      "&:hover fieldset": {
        borderColor: `${primaryMain}80`,
      },
      "&.Mui-focused fieldset": {
        borderColor: primaryMain,
      },
    },
    "& input:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.paper} inset`,
      WebkitTextFillColor: theme.palette.text.primary,
    },
  };

  // Textarea-specific: allow vertical resize with themed grip
  const textareaSx = {
    ...textFieldSx,
    "& textarea": {
      resize: "vertical" as const,
      minHeight: isMobile ? "48px" : "72px",
    },
    "& textarea::-webkit-resizer": {
      borderWidth: "8px",
      borderStyle: "solid",
      borderColor: `transparent ${primaryMain}80 ${primaryMain}80 transparent`,
      borderRadius: "0 0 4px 0",
    },
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography variant={isMobile ? "h6" : "h5"} fontWeight="700">
            Book a Call
          </Typography>
          <IconButton
            onClick={handleClose}
            color="inherit"
            size={isMobile ? "medium" : "large"}
            sx={{ mr: -1 }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Stepper */}
        <Stepper
          activeStep={step}
          alternativeLabel
          sx={{ mb: isMobile ? 3 : 4 }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                sx={{
                  "& .MuiStepIcon-root.Mui-completed": {
                    color: primaryMain,
                  },
                  "& .MuiStepIcon-root.Mui-active": {
                    color: primaryMain,
                  },
                  "& .MuiStepIcon-root": {
                    color: `${primaryMain}55`,
                    "& text": { fill: theme.palette.text.primary },
                  },
                  "& .MuiStepLabel-label.Mui-active": {
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                  },
                  "& .MuiStepLabel-label.Mui-completed": {
                    color: theme.palette.text.primary,
                  },
                  "& .MuiStepLabel-label": {
                    color: theme.palette.text.secondary,
                    fontSize: isMobile ? "0.8rem" : "0.875rem",
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Step 1: Project Info */}
        {step === 0 && (
          <Box component="form">
            <Grid container spacing={isMobile ? 2.5 : 3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Name"
                  variant="outlined"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  fullWidth
                  size={isMobile ? "small" : "medium"}
                  sx={textFieldSx}
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
                  size={isMobile ? "small" : "medium"}
                  sx={textFieldSx}
                />
              </Grid>

              {/* Budget */}
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel sx={sectionLabelSx}>Budget</FormLabel>
                  <RadioGroup
                    value={formData.budget}
                    onChange={(e) => handleChange("budget", e.target.value)}
                    sx={radioGroupSx}
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
                            sx={radioSx}
                            size={isMobile ? "small" : "medium"}
                          />
                        }
                        label={
                          <Typography
                            variant="body2"
                            sx={{ fontSize: isMobile ? "0.85rem" : "0.9rem" }}
                          >
                            {option}
                          </Typography>
                        }
                        sx={{ mr: isMobile ? 0 : 2, ml: 0 }}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* Timeline */}
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel sx={sectionLabelSx}>Timeline</FormLabel>
                  <RadioGroup
                    value={formData.timeline}
                    onChange={(e) => handleChange("timeline", e.target.value)}
                    sx={radioGroupSx}
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
                            sx={radioSx}
                            size={isMobile ? "small" : "medium"}
                          />
                        }
                        label={
                          <Typography
                            variant="body2"
                            sx={{ fontSize: isMobile ? "0.85rem" : "0.9rem" }}
                          >
                            {option}
                          </Typography>
                        }
                        sx={{ mr: isMobile ? 0 : 2, ml: 0 }}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* Project Type — dynamic per subdomain */}
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel sx={sectionLabelSx}>Project Type</FormLabel>
                  <RadioGroup
                    value={formData.projectType}
                    onChange={(e) =>
                      handleChange("projectType", e.target.value)
                    }
                    sx={radioGroupSx}
                  >
                    {projectTypes.map((option) => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        control={
                          <Radio
                            sx={radioSx}
                            size={isMobile ? "small" : "medium"}
                          />
                        }
                        label={
                          <Typography
                            variant="body2"
                            sx={{ fontSize: isMobile ? "0.85rem" : "0.9rem" }}
                          >
                            {option}
                          </Typography>
                        }
                        sx={{ mr: isMobile ? 0 : 2, ml: 0 }}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* Custom Type (conditional) */}
              {formData.projectType === "Other" && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Custom Project Type"
                    value={formData.customType}
                    onChange={(e) => handleChange("customType", e.target.value)}
                    fullWidth
                    size={isMobile ? "small" : "medium"}
                    sx={textFieldSx}
                  />
                </Grid>
              )}

              {/* Overview — vertically resizable */}
              <Grid item xs={12}>
                <TextField
                  label="Overview or Link"
                  multiline
                  rows={isMobile ? 2 : 3}
                  value={formData.overview}
                  onChange={(e) => handleChange("overview", e.target.value)}
                  fullWidth
                  sx={textareaSx}
                />
              </Grid>

              {/* Error */}
              {errorMessage && (
                <Grid item xs={12}>
                  <Typography color="error" variant="body2">
                    {errorMessage}
                  </Typography>
                </Grid>
              )}

              {/* Submit */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  fullWidth
                  disabled={isRateLimited}
                  sx={{
                    py: isMobile ? 1.2 : 1.5,
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    mt: 1,
                  }}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}

        {/* Step 2: Next Steps */}
        {step === 1 && (
          <Box mt={2}>
            {isOver15K ? (
              <>
                <Typography
                  textAlign="center"
                  variant={isMobile ? "body1" : "h6"}
                  fontWeight={600}
                  gutterBottom
                >
                  Perfect, let&apos;s lock in your Free Blueprint Call below
                </Typography>
                <Box
                  mt={2}
                  sx={{
                    width: "100%",
                    height: isMobile ? "500px" : "700px",
                  }}
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
              <Box py={3}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Thanks for your submission!
                </Typography>
                <Typography variant="body1" color="text.secondary" mt={1}>
                  Our team will get back to you shortly.
                </Typography>
              </Box>
            )}

            <Box mt={2}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleBack}
                sx={{ textTransform: "none", px: 3 }}
              >
                Back
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Modal>
  );
}
