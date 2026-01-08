"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";

interface ProjectStory {
  id: string;
  title: string;
  location: string;
  description: string;
  mainImage: string;
  thumbnails: string[];
}

const stories: ProjectStory[] = [
  {
    id: "1",
    title: "Квартира в центре города",
    location: "Хабаровск, ул. Муравьёва-Амурского",
    description:
      "Комплексное оформление квартиры в современном стиле. Римские шторы из натурального льна дополнены легкими гардинами. Особое внимание уделено сочетанию текстиля с общей цветовой гаммой интерьера.",
    mainImage: "/images/gallery/1swHBSnnHVM.jpg",
    thumbnails: [
      "/images/gallery/28tJPsLv9vE.jpg",
      "/images/gallery/6tmOG69Pg-Q.jpg",
      "/images/gallery/AyEC5ehAJjw.jpg",
    ],
  },
  {
    id: "2",
    title: "Загородный дом",
    location: "Хабаровский край, пос. Берёзовка",
    description:
      "Оформление панорамных окон загородного дома. Использованы электроуправляемые карнизы для удобства эксплуатации. Плотные портьеры обеспечивают полное затемнение в спальных комнатах.",
    mainImage: "/images/gallery/AMbWfKnbqCE.jpg",
    thumbnails: [
      "/images/gallery/AXhDS6KCWUA.jpg",
      "/images/gallery/B-LIda8Fxoo.jpg",
      "/images/gallery/c384032mbj8.jpg",
    ],
  },
  {
    id: "3",
    title: "Офис компании",
    location: "Хабаровск, БЦ «Центральный»",
    description:
      "Рулонные шторы и жалюзи для офисного пространства. Функциональное решение, обеспечивающее комфортную работу при любом освещении. Все изделия выполнены в корпоративных цветах заказчика.",
    mainImage: "/images/gallery/cBa7BpiruJA.jpg",
    thumbnails: [
      "/images/gallery/cYgfsANgmy8.jpg",
      "/images/gallery/fu1pDOGnpxM.jpg",
      "/images/gallery/fvidZKuWsLw.jpg",
    ],
  },
];

const ArrowLeft = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ArrowRight = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function StoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImageIdx, setLightboxImageIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right",
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLightboxClosing, setIsLightboxClosing] = useState(false);

  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const closeLightboxTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentStory = stories[currentIndex];
  const allImages = useMemo(
    () => [currentStory.mainImage, ...currentStory.thumbnails],
    [currentStory.mainImage, currentStory.thumbnails],
  );

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
    setSlideDirection("right");
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % stories.length);
    animationTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 350);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
    setSlideDirection("left");
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
    animationTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 350);
  }, [isAnimating]);

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
    setSlideDirection(index > currentIndex ? "right" : "left");
    setIsAnimating(true);
    setCurrentIndex(index);
    animationTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 350);
  };

  const openLightbox = (imageIndex: number) => {
    setLightboxImageIdx(imageIndex);
    setLightboxOpen(true);
    setIsLightboxClosing(false);
    setIsPaused(true);
  };

  const closeLightbox = useCallback(() => {
    setIsLightboxClosing(true);
    if (closeLightboxTimeoutRef.current) clearTimeout(closeLightboxTimeoutRef.current);
    closeLightboxTimeoutRef.current = setTimeout(() => {
      setLightboxOpen(false);
      setIsLightboxClosing(false);
      setIsPaused(false);
    }, 300);
  }, []);

  const lightboxNext = useCallback(() => {
    setLightboxImageIdx((prev) => (prev + 1) % allImages.length);
  }, [allImages]);

  const lightboxPrev = useCallback(() => {
    setLightboxImageIdx(
      (prev) => (prev - 1 + allImages.length) % allImages.length,
    );
  }, [allImages]);

  // Auto-play
  useEffect(() => {
    if (isPaused || lightboxOpen || isAnimating) return;

    const timer = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, lightboxOpen, isAnimating, goToNext]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") lightboxNext();
      if (e.key === "ArrowLeft") lightboxPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeLightbox, lightboxNext, lightboxOpen, lightboxPrev]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
      if (closeLightboxTimeoutRef.current) clearTimeout(closeLightboxTimeoutRef.current);
    };
  }, []);

  const slideAnimationClass = isAnimating
    ? slideDirection === "right"
      ? "opacity-0 translate-x-8"
      : "opacity-0 -translate-x-8"
    : "opacity-100 translate-x-0";

  return (
    <section id="stories" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">
            Истории
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Наши проекты
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            disabled={isAnimating}
            className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 disabled:opacity-50"
            aria-label="Предыдущий проект"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={goToNext}
            disabled={isAnimating}
            className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 disabled:opacity-50"
            aria-label="Следующий проект"
          >
            <ArrowRight />
          </button>

          {/* Story Card with Animation */}
          <div className="overflow-hidden px-8 lg:px-16">
            <div
              className={`transform transition-all duration-300 ease-out ${slideAnimationClass}`}
            >
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Images Column */}
                <div>
                  {/* Main Image */}
                  <div
                    className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 cursor-pointer group"
                    onClick={() => openLightbox(0)}
                  >
                    <Image
                      src={currentStory.mainImage}
                      alt={currentStory.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  {/* Thumbnails */}
                  <div className="grid grid-cols-3 gap-2">
                    {currentStory.thumbnails.map((thumb, i) => (
                      <div
                        key={i}
                        className="relative aspect-square rounded overflow-hidden cursor-pointer group"
                        onClick={() => openLightbox(i + 1)}
                      >
                        <Image
                          src={thumb}
                          alt=""
                          fill
                          className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                          sizes="(max-width: 768px) 33vw, 16vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Text Column */}
                <div>
                  <span className="text-sm text-accent font-medium">
                    {currentStory.location}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold mt-2 mb-4">
                    {currentStory.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {currentStory.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                } disabled:cursor-not-allowed`}
                aria-label={`Перейти к проекту ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox with Animation */}
      {lightboxOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
            isLightboxClosing ? "bg-black/0" : "bg-black/90"
          } ${
            isLightboxClosing
              ? "animate-[lightbox-fade-out_300ms_ease-out_forwards]"
              : "animate-[lightbox-fade-in_300ms_ease-out_forwards]"
          }`}
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className={`absolute top-4 right-4 text-white/80 hover:text-white transition-all z-10 ${
              isLightboxClosing ? "opacity-0" : "opacity-100"
            }`}
            onClick={closeLightbox}
            aria-label="Закрыть"
          >
            <CloseIcon />
          </button>

          {/* Navigation Arrows */}
          <button
            className={`absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-all p-2 hover:scale-110 ${
              isLightboxClosing ? "opacity-0" : "opacity-100"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              lightboxPrev();
            }}
            aria-label="Предыдущее изображение"
          >
            <ArrowLeft />
          </button>
          <button
            className={`absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-all p-2 hover:scale-110 ${
              isLightboxClosing ? "opacity-0" : "opacity-100"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              lightboxNext();
            }}
            aria-label="Следующее изображение"
          >
            <ArrowRight />
          </button>

          {/* Image with Scale Animation */}
          <div
            className={`relative max-w-4xl max-h-[90vh] w-full h-full m-4 transition-all duration-300 ${
              isLightboxClosing
                ? "scale-95 opacity-0"
                : "scale-100 opacity-100 animate-[lightbox-scale-in_300ms_ease-out_forwards]"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allImages[lightboxImageIdx]}
              alt={currentStory.title}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Image Counter */}
          <div
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm transition-opacity duration-300 ${
              isLightboxClosing ? "opacity-0" : "opacity-100"
            }`}
          >
            {lightboxImageIdx + 1} / {allImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
