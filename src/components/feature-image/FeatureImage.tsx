"use client";

import * as React from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Skeleton,
  Modal,
  IconButton,
  useMediaQuery,
  Fade,
  useTheme,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Close,
  InfoOutlined,
} from "@mui/icons-material";

interface FeatureImageProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  images?: string[];
  priority?: boolean;
}

export default function FeatureImage({
  src,
  alt,
  title,
  description,
  images = [],
  priority = false,
}: FeatureImageProps) {
  const theme = useTheme();

  const [isLoading, setIsLoading] = React.useState(true);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [swipeDirection, setSwipeDirection] = React.useState<
    "left" | "right" | null
  >(null);
  const [showInfo, setShowInfo] = React.useState(false);

  const touchStartX = React.useRef<number | null>(null);
  const isMobile = useMediaQuery("(max-width:768px)");
  const isPortrait =
    typeof window !== "undefined"
      ? window.innerHeight > window.innerWidth
      : true;

  const currentSrc = images[currentImageIndex] || src;

  const handleOpenModal = () => {
    const index = images.findIndex((url) => url === src);
    setCurrentImageIndex(index !== -1 ? index : 0);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowInfo(false);
  };

  const handleNext = () =>
    setCurrentImageIndex((prev) => (prev + 1) % images.length);

  const handlePrev = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) {
      setSwipeDirection("right");
      handlePrev();
    }
    if (deltaX < -50) {
      setSwipeDirection("left");
      handleNext();
    }
    touchStartX.current = null;
  };

  React.useEffect(() => {
    if (!swipeDirection) return;
    const timeout = setTimeout(() => setSwipeDirection(null), 150);
    return () => clearTimeout(timeout);
  }, [swipeDirection]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          borderRadius: "16px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
          transition: "box-shadow 0.3s ease-in-out",
          cursor: "pointer",
          "&:hover": {
            boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.3)",
          },
        }}
        onClick={handleOpenModal}
      >
        {isLoading && (
          <Skeleton
            variant="rectangular"
            width="100%"
            height={800}
            sx={{ borderRadius: "16px" }}
          />
        )}
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={800}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "16px",
          }}
          onLoad={() => setIsLoading(false)}
        />
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            background: "rgba(9,31,44,0.9)",
            color: theme.palette.text.primary,
            padding: "1.5rem",
            opacity: 0,
            transform: "translateY(100%)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
            "&:hover": {
              opacity: 1,
              transform: "translateY(0)",
            },
          }}
        >
          <Typography variant="h5" fontWeight={700} sx={{ mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </Box>
      </Box>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
            backgroundColor: theme.palette.background.paper,
            position: "relative",
            overflow: "hidden",
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {images.length > 1 && (
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "fixed",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                color: theme.palette.secondary.light,
              }}
            >
              <ArrowBackIos sx={{ fontSize: 32 }} />
            </IconButton>
          )}

          {images.length > 1 && (
            <IconButton
              onClick={handleNext}
              sx={{
                position: "fixed",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                color: theme.palette.secondary.light,
              }}
            >
              <ArrowForwardIos sx={{ fontSize: 32 }} />
            </IconButton>
          )}

          <Box
            key={currentImageIndex}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `
                ${isMobile && isPortrait ? "rotate(90deg)" : ""}
                ${swipeDirection === "left" ? " translateX(-10px)" : ""}
                ${swipeDirection === "right" ? " translateX(10px)" : ""}
              `,
              transition: "transform 0.3s ease-in-out",
              transformOrigin: "center",
              maxHeight: isMobile ? "100vh" : "90vh",
              maxWidth: isMobile ? "100vw" : "90vw",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src={currentSrc}
              alt={alt}
              width={1920}
              priority={priority}
              height={1080}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "16px",
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />

            <IconButton
              onClick={() => setShowInfo((prev) => !prev)}
              sx={{
                position: "absolute",
                top: 16,
                left: 16,
                zIndex: 20,
                width: 36,
                height: 36,
                color: theme.palette.secondary.light,
                backgroundColor: showInfo
                  ? theme.palette.secondary.main
                  : "transparent",
                "&:hover": {
                  backgroundColor: showInfo
                    ? theme.palette.secondary.dark
                    : "rgba(7,223,193,0.1)",
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              <InfoOutlined sx={{ fontSize: 20 }} />
            </IconButton>

            <Fade in={showInfo}>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  backgroundColor: "rgba(9,31,44,0.6)",
                  color: theme.palette.text.primary,
                  p: 3,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" fontWeight={600}>
                  {title}
                </Typography>
                <Typography variant="body1">{description}</Typography>
              </Box>
            </Fade>
          </Box>

          {images.length > 1 && (
            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "8px",
              }}
            >
              {images.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  sx={{
                    width: i === currentImageIndex ? 12 : 8,
                    height: i === currentImageIndex ? 12 : 8,
                    borderRadius: "50%",
                    backgroundColor:
                      i === currentImageIndex
                        ? theme.palette.primary.main
                        : "rgba(7,223,193,0.3)",
                    transition: "all 0.3s",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Box>
          )}

          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "fixed",
              top: 16,
              right: 16,
              color: "#fff",
              backgroundColor: "rgba(242,95,92,0.4)",
              zIndex: 11,
              "&:hover": {
                backgroundColor: "rgba(242,95,92,0.7)",
              },
            }}
          >
            <Close />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
}
