import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./ProjectCarousel.css";

function ProjectCarousel({
  media = [],
  alt = "Project image",
  thumbsSide = "right"
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const thumbRefs = useRef([]);
  const thumbsContainerRef = useRef(null);

  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      jump: true,
      playOnInit: true,
      stopOnInteraction: false,
    })
  );

  const [mainEmblaRef, mainEmblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
    },
    [autoplay.current]
  );

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
    const thumbsContainer = thumbsContainerRef.current;

    if (selectedThumb && thumbsContainer) {
      thumbsContainer.scrollTo({
        top:
          selectedThumb.offsetTop -
          thumbsContainer.clientHeight / 2 +
          selectedThumb.offsetHeight / 2,
        behavior: "smooth",
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

  useEffect(() => {
    if (!mainEmblaApi) return;

    const autoplay = mainEmblaApi.plugins().autoplay;
    if (!autoplay) return;

    if (isFullscreen) {
      autoplay.stop();
    }
  }, [isFullscreen, mainEmblaApi]);

  if (!media.length) return null;

  

  return (
    <>
      <div className={`project-carousel project-carousel--thumbs-${thumbsSide}`}>
        <div className="project-carousel__main" ref={mainEmblaRef}>
          <div className="project-carousel__main-container">
            {/* {images.map((image, index) => (
              <div className="project-carousel__main-slide" key={index}>
                <img
                  src={image}
                  alt={`${alt} ${index + 1}`}
                  className="project-carousel__main-image"
                  onClick={() => setIsFullscreen(true)}
                />
              </div>
            ))} */}
            {media.map((item, index) => (
              <div className="project-carousel__main-slide" key={index}>
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt || `${alt} ${index + 1}`}
                    className="project-carousel__main-image"
                    onClick={() => setIsFullscreen(true)}
                  />
                ) : (
                  <video
                    src={item.src}
                    className="project-carousel__main-video"
                    controls
                    onClick={() => setIsFullscreen(true)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="project-carousel__thumbs" ref={thumbsContainerRef}>
          <div className="project-carousel__thumbs-container">
            {media.map((item, index) => (
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
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`${alt} thumbnail ${index + 1}`}
                    className="project-carousel__thumb-image"
                  />
                ) : (
                  <div className="project-carousel__video-thumb">
                    <video
                      src={item.src}
                      className="project-carousel__thumb-video"
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <span className="project-carousel__video-play-icon">▶</span>
                  </div>
                )}
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
        {media[selectedIndex]?.type === "image" ? (
          <img
            src={media[selectedIndex].src}
            alt="Fullscreen"
            className="carousel-fullscreen__image"
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <video
            src={media[selectedIndex]?.src}
            className="carousel-fullscreen__image"
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
          />
        )}

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