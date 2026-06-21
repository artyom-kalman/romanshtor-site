import type { Metadata } from "next";
import { Tenor_Sans, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./design.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";
import AnalyticsScripts from "@/components/AnalyticsScripts";
import { salonExperienceDescription } from "@/lib/business";

const tenorSans = Tenor_Sans({
  variable: "--font-display-next",
  subsets: ["cyrillic", "latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-body-next",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-next",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500"],
});

const siteDescription = salonExperienceDescription();

export const metadata: Metadata = {
  metadataBase: new URL("https://rimskiestory.ru"),
  title:
    "Римские шторы Хабаровск — купить шторы, пошив на заказ | Салон Римские Шторы",
  description: siteDescription,
  keywords: [
    "римские шторы",
    "римские шторы хабаровск",
    "купить шторы в хабаровске",
    "пошив римских штор на заказ",
    "карнизы купить в хабаровске",
    "шторы хабаровск",
    "тюль хабаровск",
    "пошив штор и навеска гардин хабаровск",
    "салон римские шторы",
    "декор окон",
    "пошить на заказ римскую штору",
    "где купить шторы и тюль в хабаровске",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Римские шторы Хабаровск — купить шторы, пошив на заказ | Салон Римские Шторы",
    description: siteDescription,
    url: "https://rimskiestory.ru",
    siteName: "Салон Римские Шторы",
    images: [
      {
        url: "/images/hero/3_pL8NMeWWk_2.jpg",
        width: 1200,
        height: 630,
        alt: "Купить римские шторы в Хабаровске — салон Римские Шторы",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Римские шторы Хабаровск — купить шторы, пошив на заказ | Салон Римские Шторы",
    description: siteDescription,
    images: ["/images/hero/3_pL8NMeWWk_2.jpg"],
  },
  other: {
    "yandex-verification": "5a518f6c7902e9c1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${tenorSans.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <JsonLd />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
