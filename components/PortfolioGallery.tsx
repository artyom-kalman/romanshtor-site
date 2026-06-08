"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import GalleryLightbox from "./GalleryLightbox";

const portfolioImages = [
  {
    filename: "qM5juQKKnIc.jpg",
    alt: "Римские шторы на заказ в гостиную — работа салона Римские Шторы, Хабаровск",
  },
  {
    filename: "1swHBSnnHVM.jpg",
    alt: "Пошив штор и портьер в спальню — салон Римские Шторы, Хабаровск",
  },
  {
    filename: "28tJPsLv9vE.jpg",
    alt: "Текстильное оформление окна с тюлем и гардинами, Хабаровск",
  },
  {
    filename: "6tmOG69Pg-Q.jpg",
    alt: "Римские шторы для кухни на заказ — салон Римские Шторы, Хабаровск",
  },
  {
    filename: "6U6emU6_yC4.jpg",
    alt: "Портьеры и ламбрекены в интерьере гостиной, Хабаровск",
  },
  {
    filename: "AMbWfKnbqCE.jpg",
    alt: "Декор окон римскими шторами в квартире, Хабаровск",
  },
  {
    filename: "AXhDS6KCWUA.jpg",
    alt: "Шторы на заказ для частного дома — салон Римские Шторы, Хабаровск",
  },
  {
    filename: "AyEC5ehAJjw.jpg",
    alt: "Дизайнерское оформление окна шторами и тюлем, Хабаровск",
  },
  {
    filename: "B-LIda8Fxoo.jpg",
    alt: "Римские шторы в детскую комнату на заказ, Хабаровск",
  },
  {
    filename: "cYgfsANgmy8.jpg",
    alt: "Пошив гардин и портьер в гостиную — салон Римские Шторы, Хабаровск",
  },
  {
    filename: "c384032mbj8.jpg",
    alt: "Текстильное оформление интерьера шторами на заказ, Хабаровск",
  },
  {
    filename: "cBa7BpiruJA.jpg",
    alt: "Римские шторы для большого окна — салон Римские Шторы, Хабаровск",
  },
  {
    filename: "fvidZKuWsLw.jpg",
    alt: "Шторы и солнцезащитные системы в интерьере, Хабаровск",
  },
  {
    filename: "fu1pDOGnpxM.jpg",
    alt: "Портьеры на заказ для спальни — салон Римские Шторы, Хабаровск",
  },
  {
    filename: "NK6FMFGdIUg.jpg",
    alt: "Оформление окон римскими шторами в офисе, Хабаровск",
  },
  {
    filename: "r-NW2XJkuVw2.jpg",
    alt: "Дизайн штор для гостиной на заказ — салон Римские Шторы, Хабаровск",
  },
  {
    filename: "wCWLZlNZkmY.jpg",
    alt: "Тюль и гардины в интерьере квартиры, Хабаровск",
  },
  {
    filename: "TwSX5-muCvk_1.jpg",
    alt: "Римские шторы на заказ в современном интерьере — Хабаровск",
  },
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
