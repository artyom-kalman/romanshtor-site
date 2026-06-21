"use client";

import Image from "next/image";
import { useEffect, useCallback, useRef } from "react";

interface GalleryLightboxProps {
  images: { filename: string; alt: string }[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const delta = e.changedTouches[0].clientX - touchStartX.current;
      const SWIPE_THRESHOLD = 50;
      if (delta > SWIPE_THRESHOLD) onPrev();
      else if (delta < -SWIPE_THRESHOLD) onNext();
      touchStartX.current = null;
    },
    [onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const image = images[activeIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
        {activeIndex + 1} / {images.length}
      </div>

      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
        aria-label="Закрыть"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="w-8 h-8"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-4"
        aria-label="Предыдущее фото"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="w-10 h-10"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Image — tap closes (bubbles to backdrop); swipe still navigates via touch handlers */}
      <div className="relative w-full max-w-5xl mx-16 aspect-[4/3]">
        <Image
          src={`/images/gallery/${image.filename}`}
          alt={image.alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-4"
        aria-label="Следующее фото"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="w-10 h-10"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
