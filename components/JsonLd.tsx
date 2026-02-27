export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Салон Римские Шторы",
    description:
      "Текстильное оформление интерьеров в Хабаровске. Римские шторы, портьеры, солнцезащитные системы, дизайн и пошив текстиля на заказ. Более 20 лет опыта.",
    url: "https://rimskiestory.ru",
    telephone: ["+7 (4212) 20-65-53", "+7 (924) 205-47-44"],
    email: "info@rimskiestory.ru",
    image: "https://rimskiestory.ru/images/hero/3_pL8NMeWWk_2.jpg",
    founder: [
      {
        "@type": "Person",
        name: "Павел Калашников",
      },
      {
        "@type": "Person",
        name: "Лидия Калашникова",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Гамарника, д. 43а",
      addressLocality: "Хабаровск",
      addressRegion: "Хабаровский край",
      postalCode: "680000",
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.4827,
      longitude: 135.0684,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "15:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Услуги",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Римские шторы",
            description: "Дизайн и пошив римских штор на заказ",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Портьеры и гардины",
            description: "Пошив портьер, гардин и ламбрекенов",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Солнцезащитные системы",
            description:
              "Установка рулонных штор, жалюзи и солнцезащитных систем",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Текстильное оформление интерьеров",
            description:
              "Комплексное текстильное оформление квартир, домов и офисов",
          },
        },
      ],
    },
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Хабаровск",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
