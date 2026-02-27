export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Салон Римские Шторы",
    alternateName: "Центр декора окон",
    description:
      "Купить римские шторы в Хабаровске. Пошив штор и гардин на заказ, карнизы, тюль, солнцезащитные системы. Салон с 20-летним опытом — дизайн, пошив, навеска и монтаж.",
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
      streetAddress: "ул. Гамарника, д. 43а (рядом с ул. Ленина)",
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
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Карнизы",
            description:
              "Профильные и электроуправляемые карнизы — купить в Хабаровске",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Тюль",
            description: "Тюль и гардины — большой выбор тканей в Хабаровске",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Пошив штор на заказ",
            description:
              "Пошив римских штор, портьер и гардин на заказ в Хабаровске",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Навеска и монтаж штор",
            description:
              "Профессиональная навеска гардин и монтаж карнизных систем",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Декор окон",
            description:
              "Комплексный декор окон — дизайн, подбор тканей, пошив и установка",
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
