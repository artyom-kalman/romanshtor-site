import { business, sameAsUrls } from "@/lib/business";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    name: business.displayName,
    alternateName: business.brandName,
    legalName: business.legalName,
    description:
      "Купить римские шторы в Хабаровске. Пошив штор и гардин на заказ, карнизы, тюль, солнцезащитные системы. Салон с 20-летним опытом — дизайн, пошив, навеска и монтаж.",
    url: business.url,
    image: business.logoUrl,
    logo: business.logoUrl,
    telephone: business.phone.display,
    email: business.email,
    // taxID = ИНН (Yandex commercial-factor signal: verified legal entity).
    taxID: business.inn,
    ...(business.ogrnip ? { vatID: business.ogrnip } : {}),
    founder: [
      { "@type": "Person", name: "Павел Калашников" },
      { "@type": "Person", name: "Лидия Калашникова" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    openingHoursSpecification: business.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: sameAsUrls(),
    ...(business.sameAs.yandexBusiness
      ? { hasMap: business.sameAs.yandexBusiness }
      : {}),
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
