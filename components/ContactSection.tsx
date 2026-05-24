"use client";

import { reachGoal } from "@/lib/yandexMetrica";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">
            Контакты
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Свяжитесь с нами
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Information Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
              <h3 className="text-xl font-bold mb-2">Адрес</h3>
              <p className="text-muted">г. Хабаровск, ул. Гамарника, д. 43а</p>
            </div>

            {/* Messengers Card */}
            <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
              <h3 className="text-xl font-bold mb-2">Мессенджеры</h3>
              <div className="space-y-2">
                <p className="text-muted">
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/79141903086"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      reachGoal("whatsapp_click", {
                        location: "contact_section",
                      })
                    }
                    className="hover:text-accent transition-colors"
                  >
                    +7 914 190 3086
                  </a>
                </p>
                <p className="text-muted">
                  Telegram:{" "}
                  <a
                    href="https://t.me/+79141903086"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      reachGoal("telegram_click", {
                        location: "contact_section",
                      })
                    }
                    className="hover:text-accent transition-colors"
                  >
                    +7 914 190 3086
                  </a>
                </p>
              </div>
            </div>
            {/* Phones Card */}
            <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
              <h3 className="text-xl font-bold mb-2">Телефоны</h3>
              <div className="space-y-2">
                <p className="text-muted">
                  <a
                    href="tel:+74212454154"
                    onClick={() =>
                      reachGoal("phone_click", {
                        phone: "+74212454154",
                        location: "contact_section",
                      })
                    }
                    className="hover:text-accent transition-colors"
                  >
                    (4212) 45-41-54
                  </a>
                </p>
                <p className="text-muted">
                  <a
                    href="tel:+79141903086"
                    onClick={() =>
                      reachGoal("phone_click", {
                        phone: "+79141903086",
                        location: "contact_section",
                      })
                    }
                    className="hover:text-accent transition-colors"
                  >
                    +7 914 190 3086
                  </a>
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-muted">
                <a
                  href="mailto:romanshtor@rambler.ru"
                  onClick={() => reachGoal("email_click")}
                  className="hover:text-accent transition-colors"
                >
                  romanshtor@rambler.ru
                </a>
              </p>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="h-full">
            <div className="w-full h-full rounded-lg overflow-hidden border border-gray-200">
              <iframe
                src="https://yandex.com/map-widget/v1/?um=constructor%3Aa4a27257b0b4971a32170042c0f44e7106dcbc05b134bdca4a1de3ea0952276c&amp;source=constructor"
                width="100%"
                height="100%"
                className="w-full h-full"
                title="Карта расположения салона Римские Шторы"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
