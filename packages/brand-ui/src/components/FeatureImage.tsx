"use client";

import * as React from "react";
import Image from "next/image";
import {
  Box,
  ButtonBase,
  Fade,
  IconButton,
  Modal,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  Close,
  InfoOutlined,
} from "@mui/icons-material";
import { brandTokens } from "../theme/tokens";

export type FeatureImageProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  /** Additional images to enable a carousel lightbox. Defaults to `[]`. */
  images?: string[];
  priority?: boolean;
};

export function FeatureImage({
  src,
  alt,
  title,
  description,
  images = [],
  priority = false,
}: FeatureImageProps) {
  const theme = useTheme();
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)", { noSsr: true });
  const titleId = React.useId();
  const descriptionId = React.useId();
  const infoId = React.useId();
  const imageSet = React.useMemo(
    () => Array.from(new Set([src, ...images])),
    [images, src],
  );

  const [isLoading, setIsLoading] = React.useState(true);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [showInfo, setShowInfo] = React.useState(false);
  const touchStartX = React.useRef<number | null>(null);

  const currentSrc = imageSet[currentImageIndex] ?? src;

  const handleOpenModal = () => {
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowInfo(false);
  };

  const handleNext = React.useCallback(() => {
    setCurrentImageIndex((previous) => (previous + 1) % imageSet.length);
  }, [imageSet.length]);

  const handlePrev = React.useCallback(() => {
    setCurrentImageIndex((previous) => (previous - 1 + imageSet.length) % imageSet.length);
  }, [imageSet.length]);

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = endX - touchStartX.current;
    if (deltaX > 50) handlePrev();
    if (deltaX < -50) handleNext();
    touchStartX.current = null;
  };

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen || imageSet.length < 2) return;
      if (event.key === "ArrowLeft") handlePrev();
      if (event.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, imageSet.length, isModalOpen]);

  return (
    <>
      <ButtonBase
        type="button"
        aria-label={`Open ${title} image viewer`}
        aria-haspopup="dialog"
        onClick={handleOpenModal}
        sx={{
          position: "relative",
          display: "block",
          width: "100%",
          overflow: "hidden",
          borderRadius: `${brandTokens.radius.lg}px`,
          border: `1px solid ${theme.palette.surface.border.medium}`,
          textAlign: "left",
          "&:focus-visible": {
            outline: `2px solid ${theme.palette.primary.main}`,
            outlineOffset: 4,
          },
          "&:hover .feature-image-overlay, &:focus-visible .feature-image-overlay": {
            opacity: 1,
            transform: "translateY(0)",
          },
        }}
      >
        {isLoading ? (
          <Skeleton
            variant="rectangular"
            width="100%"
            height={420}
            sx={{ position: "absolute", inset: 0 }}
          />
        ) : null}
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={800}
          priority={priority}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 92vw, 1120px"
          style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
          onLoad={() => setIsLoading(false)}
        />
        <Box
          className="feature-image-overlay"
          sx={{
            position: "absolute",
            inset: "auto 0 0",
            p: { xs: 2, md: 3 },
            color: "text.primary",
            background: `linear-gradient(transparent, ${theme.palette.surface.glass.darkDeep})`,
            opacity: { xs: 1, md: 0 },
            transform: { xs: "none", md: "translateY(12px)" },
            transition: reduceMotion ? "none" : "opacity 180ms ease, transform 180ms ease",
            pointerEvents: "none",
          }}
        >
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2" sx={{ mt: 0.5, color: "text.primary" }}>
            {description}
          </Typography>
        </Box>
      </ButtonBase>

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        <Box
          role="dialog"
          aria-modal="true"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100dvh",
            width: "100vw",
            p: { xs: 2, md: 6 },
            backgroundColor: alpha(theme.palette.background.paper, 0.98),
            position: "relative",
            overflow: "hidden",
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {imageSet.length > 1 ? (
            <>
              <IconButton
                aria-label="Previous image"
                onClick={handlePrev}
                sx={{ position: "fixed", left: 12, top: "50%", zIndex: 10, minWidth: 44, minHeight: 44, color: "secondary.light" }}
              >
                <ArrowBackIosNew />
              </IconButton>
              <IconButton
                aria-label="Next image"
                onClick={handleNext}
                sx={{ position: "fixed", right: 12, top: "50%", zIndex: 10, minWidth: 44, minHeight: 44, color: "secondary.light" }}
              >
                <ArrowForwardIos />
              </IconButton>
            </>
          ) : null}

          <Box sx={{ width: "min(90vw, 1440px)", height: "min(82dvh, 900px)", position: "relative" }}>
            <Image
              src={currentSrc}
              alt={`${alt}${imageSet.length > 1 ? `, image ${currentImageIndex + 1} of ${imageSet.length}` : ""}`}
              fill
              priority={priority}
              sizes="90vw"
              style={{ objectFit: "contain" }}
            />

            <IconButton
              aria-label={showInfo ? "Hide image information" : "Show image information"}
              aria-expanded={showInfo}
              aria-controls={infoId}
              onClick={() => setShowInfo((previous) => !previous)}
              sx={{
                position: "absolute",
                top: 8,
                left: 8,
                zIndex: 20,
                minWidth: 44,
                minHeight: 44,
                color: "secondary.light",
                backgroundColor: showInfo ? "secondary.main" : alpha(theme.palette.background.paper, 0.72),
              }}
            >
              <InfoOutlined />
            </IconButton>

            <Fade in={showInfo} timeout={reduceMotion ? 0 : 180}>
              <Box
                id={infoId}
                sx={{
                  position: "absolute",
                  inset: "auto 0 0",
                  backgroundColor: alpha(theme.palette.background.paper, 0.92),
                  color: "text.primary",
                  p: { xs: 2, md: 3 },
                  textAlign: "center",
                }}
              >
                <Typography id={titleId} variant="h5">{title}</Typography>
                <Typography id={descriptionId} variant="body1">{description}</Typography>
              </Box>
            </Fade>
          </Box>

          {imageSet.length > 1 ? (
            <Box sx={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", display: "flex" }}>
              {imageSet.map((image, index) => (
                <IconButton
                  key={image}
                  aria-label={`Show image ${index + 1} of ${imageSet.length}`}
                  aria-current={index === currentImageIndex ? "true" : undefined}
                  onClick={() => setCurrentImageIndex(index)}
                  sx={{ minWidth: 44, minHeight: 44 }}
                >
                  <Box
                    sx={{
                      width: index === currentImageIndex ? 12 : 8,
                      height: index === currentImageIndex ? 12 : 8,
                      borderRadius: "50%",
                      backgroundColor: index === currentImageIndex ? "primary.main" : alpha(theme.palette.primary.main, 0.35),
                    }}
                  />
                </IconButton>
              ))}
            </Box>
          ) : null}

          <IconButton
            aria-label="Close image viewer"
            onClick={handleCloseModal}
            sx={{
              position: "fixed",
              top: 12,
              right: 12,
              minWidth: 44,
              minHeight: 44,
              color: "text.primary",
              backgroundColor: alpha(theme.palette.error.main, 0.45),
              zIndex: 11,
            }}
          >
            <Close />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
}
