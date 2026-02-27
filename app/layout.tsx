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
  title: "Салон Римские Шторы - Хабаровск",
  description:
    "Текстильное оформление интерьеров в Хабаровске. Римские шторы, портьеры, солнцезащитные системы на заказ. Более 20 лет опыта. Дизайн, пошив и установка.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Салон Римские Шторы - Хабаровск",
    description:
      "Текстильное оформление интерьеров в Хабаровске. Римские шторы, портьеры, солнцезащитные системы на заказ. Более 20 лет опыта.",
    url: "https://rimskiestory.ru",
    siteName: "Салон Римские Шторы",
    images: [
      {
        url: "/images/hero/3_pL8NMeWWk_2.jpg",
        width: 1200,
        height: 630,
        alt: "Салон Римские Шторы - текстильное оформление интерьеров",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Салон Римские Шторы - Хабаровск",
    description:
      "Текстильное оформление интерьеров в Хабаровске. Римские шторы, портьеры, солнцезащитные системы на заказ.",
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
