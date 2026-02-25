"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import GalleryLightbox from "./GalleryLightbox";

const portfolioImages = [
  { filename: "qM5juQKKnIc.jpg", alt: "Римские шторы - проект 1" },
  { filename: "1swHBSnnHVM.jpg", alt: "Римские шторы - проект 2" },
  { filename: "28tJPsLv9vE.jpg", alt: "Римские шторы - проект 3" },
  { filename: "6tmOG69Pg-Q.jpg", alt: "Римские шторы - проект 4" },
  { filename: "6U6emU6_yC4.jpg", alt: "Римские шторы - проект 5" },
  { filename: "AMbWfKnbqCE.jpg", alt: "Римские шторы - проект 6" },
  { filename: "AXhDS6KCWUA.jpg", alt: "Римские шторы - проект 7" },
  { filename: "AyEC5ehAJjw.jpg", alt: "Римские шторы - проект 8" },
  { filename: "B-LIda8Fxoo.jpg", alt: "Римские шторы - проект 9" },
  { filename: "cYgfsANgmy8.jpg", alt: "Римские шторы - проект 10" },
  { filename: "c384032mbj8.jpg", alt: "Римские шторы - проект 11" },
  { filename: "cBa7BpiruJA.jpg", alt: "Римские шторы - проект 12" },
  { filename: "fvidZKuWsLw.jpg", alt: "Римские шторы - проект 13" },
  { filename: "fu1pDOGnpxM.jpg", alt: "Римские шторы - проект 14" },
  { filename: "NK6FMFGdIUg.jpg", alt: "Римские шторы - проект 15" },
  { filename: "r-NW2XJkuVw2.jpg", alt: "Римские шторы - проект 16" },
  { filename: "wCWLZlNZkmY.jpg", alt: "Римские шторы - проект 17" },
  { filename: "TwSX5-muCvk_1.jpg", alt: "Римские шторы - проект 18" },
];

export default function PortfolioGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
    <section id="portfolio" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">
            Портфолио
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Наши работы
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioImages.map((image, index) => (
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
