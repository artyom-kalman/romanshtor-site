import type { Metadata } from "next";
import { business, fullAddress } from "@/lib/business";

export const metadata: Metadata = {
  title: "Контакты — Салон Римские Шторы, Хабаровск",
  description:
    "Контакты салона «Римские шторы» в Хабаровске: адрес ул. Гамарника, 43А, телефон, e-mail, часы работы, реквизиты и схема проезда на карте.",
  alternates: {
    canonical: "/contacts",
  },
};

// Existing Yandex Конструктор карт widget already configured for the salon.
const YANDEX_MAP_SRC =
  "https://yandex.com/map-widget/v1/?um=constructor%3Aa4a27257b0b4971a32170042c0f44e7106dcbc05b134bdca4a1de3ea0952276c&source=constructor";

export default function ContactsPage() {
  const hours = business.openingHours;

  return (
    <main className="min-h-screen">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-widest text-muted mb-4">
              Контакты
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Как с нами связаться
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left — details */}
            <div className="space-y-6">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h2 className="text-xl font-bold mb-2">Адрес</h2>
                <address className="not-italic text-muted">
                  {fullAddress()}
                </address>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg">
                <h2 className="text-xl font-bold mb-2">Часы работы</h2>
                <ul className="text-muted space-y-1">
                  {hours.map((h) => (
                    <li key={h.label}>
                      {h.label}: {h.opens}–{h.closes}
                    </li>
                  ))}
                  {business.closedDays.map((d) => (
                    <li key={d.label}>
                      {d.label}: {d.note}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg">
                <h2 className="text-xl font-bold mb-2">Телефоны</h2>
                <div className="space-y-2 text-muted">
                  <p>
                    <a
                      href={`tel:${business.phone.tel}`}
                      className="hover:text-accent transition-colors"
                    >
                      {business.phone.display}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`tel:${business.mobile.tel}`}
                      className="hover:text-accent transition-colors"
                    >
                      {business.mobile.display}
                    </a>
                  </p>
                </div>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg">
                <h2 className="text-xl font-bold mb-2">Мессенджеры</h2>
                <div className="space-y-2 text-muted">
                  <p>
                    WhatsApp:{" "}
                    <a
                      href={business.mobile.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      {business.mobile.display}
                    </a>
                  </p>
                  <p>
                    Telegram:{" "}
                    <a
                      href={business.mobile.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      {business.mobile.display}
                    </a>
                  </p>
                  <p>
                    MAX:{" "}
                    <a
                      href={business.mobile.max}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      {business.mobile.display}
                    </a>
                  </p>
                </div>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg">
                <h2 className="text-xl font-bold mb-2">E-mail</h2>
                <p className="text-muted">
                  <a
                    href={`mailto:${business.email}`}
                    className="hover:text-accent transition-colors"
                  >
                    {business.email}
                  </a>
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg">
                <h2 className="text-xl font-bold mb-2">Реквизиты</h2>
                <div className="space-y-1 text-muted">
                  <p>{business.legalName}</p>
                  <p>ИНН {business.inn}</p>
                  {business.ogrnip && <p>ОГРНИП {business.ogrnip}</p>}
                </div>
              </div>
            </div>

            {/* Right — map */}
            <div className="md:sticky md:top-24">
              <div className="w-full aspect-square md:aspect-auto md:h-[600px] rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src={YANDEX_MAP_SRC}
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  title="Салон Римские Шторы на карте — ул. Гамарника, 43А, Хабаровск"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
