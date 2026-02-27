import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";
import AnalyticsScripts from "@/components/AnalyticsScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rimskiestory.ru"),
  title:
    "Римские шторы Хабаровск — купить шторы, пошив на заказ | Салон Римские Шторы",
  description:
    "Купить римские шторы в Хабаровске. Пошив штор и гардин на заказ, карнизы, тюль, солнцезащитные системы. Салон с 20-летним опытом — дизайн, пошив, навеска и монтаж.",
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
    description:
      "Купить римские шторы в Хабаровске. Пошив штор и гардин на заказ, карнизы, тюль, солнцезащитные системы. Салон с 20-летним опытом — дизайн, пошив, навеска и монтаж.",
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
    description:
      "Купить римские шторы в Хабаровске. Пошив штор и гардин на заказ, карнизы, тюль, солнцезащитные системы. Салон с 20-летним опытом — дизайн, пошив, навеска и монтаж.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <Header />
        {children}
        <FloatingWhatsApp />
        <AnalyticsScripts />
        <Analytics />
      </body>
    </html>
  );
}
