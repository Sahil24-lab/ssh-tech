"use client";

import * as React from "react";
import Image from "next/image";
import { Box, Typography, Skeleton, Modal, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArrowBackIos, ArrowForwardIos, Close } from "@mui/icons-material";

interface FeatureImageProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  images?: string[]; // Allow multiple images for cycling
}

const ImageContainer = styled(Box)({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  borderRadius: "16px",
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.3)",
  },
  "&:hover .overlay": {
    opacity: 1,
    transform: "translateY(0)",
  },
  cursor: "pointer", // Indicate clickability
});

const StyledImage = styled(Image)({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderRadius: "16px",
});

const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  background: "rgba(0, 0, 0, 0.7)",
  color: "#fff",
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
}));

const ModalContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  background: "rgba(0, 0, 0, 0.8)",
});

const ModalContent = styled(Box)({
  position: "relative",
  maxWidth: "90vw",
  maxHeight: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default function FeatureImage({
  src,
  alt,
  title,
  description,
  images = [],
}: FeatureImageProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setCurrentImageIndex(images.indexOf(src) !== -1 ? images.indexOf(src) : 0);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleNext = () =>
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      {/* Thumbnail Image with Clickable Modal */}
      <ImageContainer onClick={handleOpenModal}>
        {isLoading && (
          <Skeleton
            variant="rectangular"
            width="100%"
            height={800}
            sx={{ borderRadius: "16px", }}
          />
        )}
        <StyledImage
          src={src}
          alt={alt}
          width={1920}
          height={800}
          onLoad={() => setIsLoading(false)}
        />
        <Overlay className="overlay">
          <Typography variant="h5" fontWeight={700} sx={{ mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </Overlay>
      </ImageContainer>

      {/* Fullscreen Modal */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <ModalContainer>
          <ModalContent>
            {images.length > 1 && (
              <IconButton
                sx={{
                  position: "absolute",
                  left: 10,
                  color: "#fff",
                  background: "rgba(0,0,0,0.5)",
                  "&:hover": { background: "rgba(0,0,0,0.7)" },
                }}
                onClick={handlePrev}
              >
                <ArrowBackIos />
              </IconButton>
            )}
            <Image
              src={images[currentImageIndex] || src}
              alt={alt}
              width={1920}
              height={1080}
              style={{
                maxWidth: "80vw",
                maxHeight: "80vh",
                borderRadius: "16px",
                objectFit: "contain",
              }}
            />
            {images.length > 1 && (
              <IconButton
                sx={{
                  position: "absolute",
                  right: 10,
                  color: "#fff",
                  background: "rgba(0,0,0,0.5)",
                  "&:hover": { background: "rgba(0,0,0,0.7)" },
                }}
                onClick={handleNext}
              >
                <ArrowForwardIos />
              </IconButton>
            )}
            <IconButton
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "#fff",
                background: "rgba(0,0,0,0.5)",
                "&:hover": { background: "rgba(0,0,0,0.7)" },
              }}
              onClick={handleCloseModal}
            >
              <Close />
            </IconButton>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  );
}
