import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./ProjectCarousel.css";

function ProjectCarousel({
  images = [],
  alt = "Project image",
  thumbsSide = "right"
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const thumbRefs = useRef([]);

  const [mainEmblaRef, mainEmblaApi] = useEmblaCarousel({
    loop: false,
    align: "start"
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!mainEmblaApi) return;
      mainEmblaApi.scrollTo(index);
    },
    [mainEmblaApi]
  );

  const onSelect = useCallback(() => {
    if (!mainEmblaApi) return;

    const index = mainEmblaApi.selectedScrollSnap();
    setSelectedIndex(index);

    const selectedThumb = thumbRefs.current[index];
    if (selectedThumb) {
      selectedThumb.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  }, [mainEmblaApi]);

  useEffect(() => {
    if (!mainEmblaApi) return;

    onSelect();
    mainEmblaApi.on("select", onSelect);
    mainEmblaApi.on("reInit", onSelect);

    return () => {
      mainEmblaApi.off("select", onSelect);
      mainEmblaApi.off("reInit", onSelect);
    };
  }, [mainEmblaApi, onSelect]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  if (!images.length) return null;

  return (
    <>
      <div className={`project-carousel project-carousel--thumbs-${thumbsSide}`}>
        <div className="project-carousel__main" ref={mainEmblaRef}>
          <div className="project-carousel__main-container">
            {images.map((image, index) => (
              <div className="project-carousel__main-slide" key={index}>
                <img
                  src={image}
                  alt={`${alt} ${index + 1}`}
                  className="project-carousel__main-image"
                  onClick={() => setIsFullscreen(true)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="project-carousel__thumbs">
          <div className="project-carousel__thumbs-container">
            {images.map((image, index) => (
              <button
                key={index}
                ref={(el) => {
                  thumbRefs.current[index] = el;
                }}
                type="button"
                onClick={() => onThumbClick(index)}
                className={`project-carousel__thumb ${
                  index === selectedIndex
                    ? "project-carousel__thumb--selected"
                    : ""
                }`}
                aria-label={`Show image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${alt} thumbnail ${index + 1}`}
                  className="project-carousel__thumb-image"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`carousel-fullscreen ${
          isFullscreen ? "carousel-fullscreen--open" : ""
        }`}
        onClick={() => setIsFullscreen(false)}
        aria-hidden={!isFullscreen}
      >
        <img
          src={images[selectedIndex]}
          alt="Fullscreen"
          className="carousel-fullscreen__image"
          onClick={(e) => e.stopPropagation()}
        />

        <button
          className="carousel-fullscreen__close"
          onClick={() => setIsFullscreen(false)}
          aria-label="Close fullscreen image"
        >
          ✕
        </button>
      </div>
    </>
  );
}

export default ProjectCarousel;