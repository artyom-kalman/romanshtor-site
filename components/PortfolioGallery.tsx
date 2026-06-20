"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import GalleryLightbox from "./GalleryLightbox";
import AnimatedSection from "./AnimatedSection";

const portfolioImages = [
  {
    filename: "qM5juQKKnIc.jpg",
    alt: "Римские шторы на заказ в гостиную — работа салона Римские Шторы, Хабаровск",
    label: "Гостиная",
  },
  {
    filename: "1swHBSnnHVM.jpg",
    alt: "Пошив штор и портьер в спальню — салон Римские Шторы, Хабаровск",
    label: "Спальня",
  },
  {
    filename: "28tJPsLv9vE.jpg",
    alt: "Текстильное оформление окна с тюлем и гардинами, Хабаровск",
    label: "Тюль и гардины",
  },
  {
    filename: "6tmOG69Pg-Q.jpg",
    alt: "Римские шторы для кухни на заказ — салон Римские Шторы, Хабаровск",
    label: "Кухня",
  },
  {
    filename: "6U6emU6_yC4.jpg",
    alt: "Портьеры и ламбрекены в интерьере гостиной, Хабаровск",
    label: "Портьеры",
  },
  {
    filename: "AMbWfKnbqCE.jpg",
    alt: "Декор окон римскими шторами в квартире, Хабаровск",
    label: "Квартира",
  },
  {
    filename: "AXhDS6KCWUA.jpg",
    alt: "Шторы на заказ для частного дома — салон Римские Шторы, Хабаровск",
    label: "Частный дом",
  },
  {
    filename: "AyEC5ehAJjw.jpg",
    alt: "Дизайнерское оформление окна шторами и тюлем, Хабаровск",
    label: "Дизайн окна",
  },
  {
    filename: "B-LIda8Fxoo.jpg",
    alt: "Римские шторы в детскую комнату на заказ, Хабаровск",
    label: "Детская",
  },
  {
    filename: "cYgfsANgmy8.jpg",
    alt: "Пошив гардин и портьер в гостиную — салон Римские Шторы, Хабаровск",
    label: "Гостиная",
  },
  {
    filename: "c384032mbj8.jpg",
    alt: "Текстильное оформление интерьера шторами на заказ, Хабаровск",
    label: "Интерьер",
  },
  {
    filename: "cBa7BpiruJA.jpg",
    alt: "Римские шторы для большого окна — салон Римские Шторы, Хабаровск",
    label: "Большое окно",
  },
  {
    filename: "fvidZKuWsLw.jpg",
    alt: "Шторы и солнцезащитные системы в интерьере, Хабаровск",
    label: "Солнцезащита",
  },
  {
    filename: "fu1pDOGnpxM.jpg",
    alt: "Портьеры на заказ для спальни — салон Римские Шторы, Хабаровск",
    label: "Спальня",
  },
  {
    filename: "NK6FMFGdIUg.jpg",
    alt: "Оформление окон римскими шторами в офисе, Хабаровск",
    label: "Офис",
  },
  {
    filename: "r-NW2XJkuVw2.jpg",
    alt: "Дизайн штор для гостиной на заказ — салон Римские Шторы, Хабаровск",
    label: "Гостиная",
  },
  {
    filename: "wCWLZlNZkmY.jpg",
    alt: "Тюль и гардины в интерьере квартиры, Хабаровск",
    label: "Тюль",
  },
  {
    filename: "TwSX5-muCvk_1.jpg",
    alt: "Римские шторы на заказ в современном интерьере — Хабаровск",
    label: "Современный интерьер",
  },
];

const TILE_SIZES = [
  "t-lg",
  "t-md",
  "t-sm",
  "t-sm",
  "t-md",
  "t-tall",
  "t-sm",
  "t-sm",
  "t-lg",
  "t-md",
  "t-sm",
  "t-sm",
  "t-md",
  "t-tall",
  "t-sm",
  "t-sm",
  "t-md",
  "t-sm",
] as const;

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
    <section className="section section-alt" id="portfolio">
      <div className="wrap">
        <AnimatedSection>
          <div className="section-head">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow">Портфолио</span>
              </div>
              <h2 className="display-h2">
                Наши <em>работы</em>
              </h2>
            </div>
            <p className="muted" style={{ maxWidth: "32ch", textAlign: "right" }}>
              Гостиные, спальни, кухни, кабинеты и коммерческие пространства.
            </p>
          </div>

          <div className="portfolio-grid">
            {portfolioImages.map((image, index) => (
              <button
                key={image.filename}
                type="button"
                className={`tile ${TILE_SIZES[index]}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Открыть фото: ${image.label}`}
              >
                <Image
                  src={`/images/gallery/${image.filename}`}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw"
                />
                <div className="tile-meta">
                  <span>{image.label}</span>
                </div>
              </button>
            ))}
          </div>
        </AnimatedSection>
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
