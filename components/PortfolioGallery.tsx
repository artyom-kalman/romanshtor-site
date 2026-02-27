"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import GalleryLightbox from "./GalleryLightbox";
import AnimatedSection from "./AnimatedSection";

const portfolioImages = [
  { filename: "qM5juQKKnIc.jpg", alt: "Проект 1" },
  { filename: "1swHBSnnHVM.jpg", alt: "Проект 2" },
  { filename: "28tJPsLv9vE.jpg", alt: "Проект 3" },
  { filename: "6tmOG69Pg-Q.jpg", alt: "Проект 4" },
  { filename: "6U6emU6_yC4.jpg", alt: "Проект 5" },
  { filename: "AMbWfKnbqCE.jpg", alt: "Проект 6" },
  { filename: "AXhDS6KCWUA.jpg", alt: "Проект 7" },
  { filename: "AyEC5ehAJjw.jpg", alt: "Проект 8" },
  { filename: "B-LIda8Fxoo.jpg", alt: "Проект 9" },
  { filename: "cYgfsANgmy8.jpg", alt: "Проект 10" },
  { filename: "c384032mbj8.jpg", alt: "Проект 11" },
  { filename: "cBa7BpiruJA.jpg", alt: "Проект 12" },
  { filename: "fvidZKuWsLw.jpg", alt: "Проект 13" },
  { filename: "fu1pDOGnpxM.jpg", alt: "Проект 14" },
  { filename: "NK6FMFGdIUg.jpg", alt: "Проект 15" },
  { filename: "r-NW2XJkuVw2.jpg", alt: "Проект 16" },
  { filename: "wCWLZlNZkmY.jpg", alt: "Проект 17" },
  { filename: "TwSX5-muCvk_1.jpg", alt: "Проект 18" },
];

const INITIAL_COUNT = 8;

export default function PortfolioGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll
    ? portfolioImages
    : portfolioImages.slice(0, INITIAL_COUNT);

  const handlePrev = useCallback(() => {
    setActiveIndex((i) =>
      i !== null ? (i - 1 + portfolioImages.length) % portfolioImages.length : null
    );
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((i) =>
      i !== null ? (i + 1) % portfolioImages.length : null
    );
  }, []);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-muted mb-4">
              Галерея
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Наши работы
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleImages.map((image, index) => (
            <button
              key={image.filename}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="relative aspect-square overflow-hidden rounded-lg bg-gray-200 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <Image
                src={`/images/gallery/${image.filename}`}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </button>
          ))}
        </div>

        {!showAll && portfolioImages.length > INITIAL_COUNT && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-8 py-4 text-lg font-medium border-2 border-gray-300 text-foreground rounded-lg hover:border-accent hover:text-accent transition-colors cursor-pointer"
            >
              Показать все ({portfolioImages.length})
            </button>
          </div>
        )}
      </div>

      {activeIndex !== null && (
        <GalleryLightbox
          images={portfolioImages}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
