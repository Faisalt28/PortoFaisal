"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect, useCallback } from "react";

export interface KeyInsightItem {
  title: string;
  description: string;
}

export interface ProjectDetail {
  subtitle?: string;
  overview?: string;
  role?: string;
  techStack?: string[];
  skills?: string[];
  features?: string[];
  keyInsights?: KeyInsightItem[];
  outcome?: string;
  liveUrl?: string;
  githubUrl?: string;
  videoDemoUrl?: string;
}

export interface SlideData {
  id?: string;
  title: string;
  button: string;
  src: string;
  category?: string;
  description?: string;
  tags?: string[];
  details?: ProjectDetail;
  collageImages?: string[];
}

interface SlideProps {
  slide: SlideData;
  index: number;
  isActive: boolean;
  onSelect: (index: number) => void;
  onDetailClick?: (slide: SlideData) => void;
}

const Slide = ({
  slide,
  index,
  isActive,
  onSelect,
  onDetailClick,
}: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const frameRef = useRef<number>(undefined);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      // Smooth lerp interpolation for silky motion and smooth return
      currentX.current += (targetX.current - currentX.current) * 0.1;
      currentY.current += (targetY.current - currentY.current) * 0.1;

      slideRef.current.style.setProperty("--x", `${currentX.current.toFixed(2)}px`);
      slideRef.current.style.setProperty("--y", `${currentY.current.toFixed(2)}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    targetX.current = event.clientX - (r.left + Math.floor(r.width / 2));
    targetY.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    targetX.current = 0;
    targetY.current = 0;
  };

  const { src, button, title, category } = slide;

  return (
    <li
      ref={slideRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        if (isActive) {
          onDetailClick?.(slide);
        } else {
          onSelect(index);
        }
      }}
      className={`group relative shrink-0 cursor-pointer select-none w-full md:w-[calc((100%-2*1.5rem)/3)] transition-all duration-300 ease-out [perspective:1000px] ${
        isActive
          ? "scale-100 md:scale-[1.02] hover:scale-[1.04] hover:-translate-y-2.5 z-20"
          : "scale-95 md:scale-[0.93] hover:scale-[0.98] hover:-translate-y-2 z-10"
      }`}
    >
      {/* 3D Moving Card Body */}
      <div
        className={`relative flex flex-col justify-between overflow-hidden rounded-xl border text-white transition-all duration-300 h-[225px] sm:h-[240px] md:h-[250px] p-4 sm:p-5 ${
          isActive
            ? "border-amber-400 shadow-2xl shadow-amber-500/25 ring-1 ring-amber-400/50 opacity-100 bg-[#1D1F2F] group-hover:border-amber-300 group-hover:shadow-amber-500/40"
            : "border-foreground/10 bg-[#171825] opacity-60 group-hover:opacity-95 group-hover:border-amber-400/40 group-hover:shadow-xl group-hover:shadow-black/60"
        }`}
        style={{
          transform:
            "rotateX(calc(var(--y) / -18 * 1deg)) rotateY(calc(var(--x) / 18 * 1deg)) translate3d(calc(var(--x) / 28), calc(var(--y) / 28), 0)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Background Image (Static, No Shake/Parallax) */}
        <div className="absolute inset-0 overflow-hidden">
          {category === 'Android' ? (
            /* Kolase 3 Gambar Sejajar Horizontal khusus Android */
            <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3 px-3 py-2 overflow-hidden bg-[#0D0F1A]">
              {([
                slide.collageImages?.[0] || src,
                slide.collageImages?.[1] || src,
                slide.collageImages?.[2] || src,
              ]).map((imgSrc, idx) => (
                <div
                  key={idx}
                  className={`relative h-[92%] aspect-[9/19] rounded-md overflow-hidden border border-white/15 shadow-xl shrink-0 transition-transform duration-500 ${
                    idx === 1
                      ? 'scale-105 z-10'
                      : 'scale-90 opacity-75'
                  }`}
                >
                  <img
                    src={imgSrc}
                    alt={`${title} mockup ${idx + 1}`}
                    className={`h-full w-full object-cover object-top transition-all duration-500 ${
                      isActive ? "brightness-100 contrast-100" : "brightness-50 contrast-90"
                    }`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ) : (
            <img
              src={src}
              alt={title}
              className={`h-full w-full object-cover object-center transition-all duration-500 ${
                isActive ? "brightness-100 contrast-100" : "brightness-50 contrast-90"
              }`}
              loading="lazy"
            />
          )}

          {/* Filter Gelap */}
          <div
            className={`absolute inset-0 transition-all duration-500 pointer-events-none ${
              isActive
                ? "bg-gradient-to-t from-black/90 via-black/35 via-35% to-transparent"
                : "bg-black/65 backdrop-blur-[0.5px]"
            }`}
          />
        </div>

        {/* Header: Label Kategori */}
        <div
          className="relative z-10 flex items-center justify-start"
          style={{ transform: "translateZ(20px)" }}
        >
          <span
            className={`rounded-md px-3 py-0.5 text-xs font-bold tracking-wider uppercase transition-colors duration-300 ${
              isActive
                ? "bg-amber-400 text-black shadow-md shadow-amber-400/30"
                : "bg-white/15 text-white/70 backdrop-blur-md"
            }`}
          >
            {category || "PROYEK"}
          </span>
        </div>

        {/* Bottom: Judul Proyek & Tombol Detail */}
        <div
          className="relative z-10 text-center flex flex-col items-center"
          style={{ transform: "translateZ(25px)" }}
        >
          <h3
            className={`font-bold tracking-tight text-white transition-all duration-300 ${
              isActive
                ? "text-base sm:text-lg md:text-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-white font-extrabold"
                : "text-sm sm:text-base md:text-lg text-white/70"
            }`}
          >
            {title}
          </h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDetailClick?.(slide);
            }}
            className={`mt-2.5 sm:mt-3 px-5 py-1.5 rounded-lg font-semibold text-xs sm:text-sm shadow-md transition-all duration-300 cursor-pointer ${
              isActive
                ? "bg-white text-black hover:bg-neutral-100 hover:shadow-xl active:scale-95"
                : "bg-white/20 text-white hover:bg-white hover:text-black backdrop-blur-sm"
            }`}
          >
            {button || "Detail"}
          </button>
        </div>
      </div>
    </li>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-11 h-11 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-2 border-transparent rounded-full focus:border-amber-400 focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 cursor-pointer shadow-md ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-700 dark:text-neutral-200 w-5 h-5" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
  onSelectProject?: (slide: SlideData) => void;
  autoPlayInterval?: number;
}

export function Carousel({
  slides,
  onSelectProject,
  autoPlayInterval = 5000,
}: CarouselProps) {
  const n = slides.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Measure container width accurately on mount & resize
  useEffect(() => {
    setHasMounted(true);
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const isDesktop = containerWidth >= 768;
  const maxIndex = Math.max(0, n - 1);

  // Calculate step distance per card
  const getStep = useCallback(() => {
    if (containerWidth === 0) return 0;
    // On desktop (md: >= 768px), exactly 3 cards fit with gap-6 (24px)
    if (containerWidth >= 768) {
      const gap = 24;
      const cardWidth = (containerWidth - 2 * gap) / 3;
      return cardWidth + gap;
    }
    // On mobile (< 768px), 1 card fits with gap-4 (16px)
    const gap = 16;
    return containerWidth + gap;
  }, [containerWidth]);

  // Click previous: if at 0, swipe back to maxIndex
  const handlePreviousClick = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Click next: if at maxIndex, swipe back fast to 0
  const handleNextClick = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Gentle auto-swipe
  useEffect(() => {
    if (isPaused || n <= 1) return;

    const timer = setInterval(() => {
      handleNextClick();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, n, autoPlayInterval, handleNextClick]);

  // Touch Swipe Handlers for mobile & touchscreen
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handlePreviousClick();
      } else {
        handleNextClick();
      }
    }
    touchStartX.current = null;
    setTimeout(() => setIsPaused(false), 2500);
  };

  const id = useId();
  const step = getStep();
  // On desktop: offset by +step so that index 0 starts in the center slot (left slot empty).
  // When swiped to index 1, offset is 0, showing left (index 0), center (index 1), right (index 2).
  const initialOffset = isDesktop ? step : 0;
  const translateOffset = initialOffset - currentIndex * step;

  // Faster swipe back when rewinding from last to 0
  const isRewinding = currentIndex === 0;

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none"
      aria-labelledby={`carousel-heading-${id}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3-Cards Track Container with headroom for scale & shadow */}
      <div className="w-full overflow-hidden py-4 md:py-6 -my-4 md:-my-6">
        <ul
          className="flex gap-4 md:gap-6 items-center"
          style={{
            transform: `translateX(${translateOffset}px)`,
            transition: !hasMounted
              ? "none"
              : isRewinding
              ? "transform 450ms cubic-bezier(0.2, 0.8, 0.25, 1)"
              : "transform 550ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {slides.map((slide, index) => (
            <Slide
              key={slide.id || index}
              slide={slide}
              index={index}
              isActive={index === currentIndex}
              onSelect={(idx) => setCurrentIndex(idx)}
              onDetailClick={onSelectProject}
            />
          ))}
        </ul>
      </div>

      {/* Control Navigation (Panah saja, tanpa loading bar) */}
      <div className="mt-6 flex items-center justify-center">
        <CarouselControl
          type="previous"
          title="Proyek sebelumnya"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Proyek berikutnya"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
