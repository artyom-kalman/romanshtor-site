import { business } from "@/lib/business";

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
              <p className="text-muted">
                г. {business.address.locality}, {business.address.street}
              </p>
            </div>

            {/* Messengers Card */}
            <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
              <h3 className="text-xl font-bold mb-2">Мессенджеры</h3>
              <div className="space-y-2">
                <p className="text-muted">
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
                <p className="text-muted">
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
                <p className="text-muted">
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
            {/* Phones Card */}
            <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
              <h3 className="text-xl font-bold mb-2">Телефоны</h3>
              <div className="space-y-2">
                <p className="text-muted">
                  <a
                    href={`tel:${business.phone.tel}`}
                    className="hover:text-accent transition-colors"
                  >
                    {business.phone.display}
                  </a>
                </p>
                <p className="text-muted">
                  <a
                    href={`tel:${business.mobile.tel}`}
                    className="hover:text-accent transition-colors"
                  >
                    {business.mobile.display}
                  </a>
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-muted">
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {business.email}
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
