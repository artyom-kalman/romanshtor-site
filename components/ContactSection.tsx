import { business } from "@/lib/business";
import AnimatedSection from "./AnimatedSection";

const YANDEX_MAP_SRC =
  "https://yandex.com/map-widget/v1/?um=constructor%3Aa4a27257b0b4971a32170042c0f44e7106dcbc05b134bdca4a1de3ea0952276c&source=constructor";

export default function ContactSection() {
  return (
    <section className="section section-alt" id="contact">
      <div className="wrap">
        <AnimatedSection>
          <div className="section-head">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow">Контакты</span>
              </div>
              <h2 className="display-h2">
                Свяжитесь <em>с нами</em>
              </h2>
            </div>
          </div>

          <div className="contact">
            <div className="contact-cards">
              <div className="contact-card">
                <span className="contact-card-lbl">Адрес</span>
                <span className="contact-card-val">
                  г. {business.address.locality}
                  <small>{business.address.street}</small>
                </span>
              </div>

              <div className="contact-card">
                <span className="contact-card-lbl">Телефоны</span>
                <span className="contact-card-val contact-card-links">
                  <a href={`tel:${business.phone.tel}`}>
                    {business.phone.display}
                  </a>
                  <a href={`tel:${business.mobile.tel}`}>
                    {business.mobile.display}
                  </a>
                </span>
              </div>

              <div className="contact-card">
                <span className="contact-card-lbl">Мессенджеры</span>
                <span className="contact-card-val contact-card-links">
                  <a
                    href={business.mobile.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={business.mobile.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </a>
                  <a
                    href={business.mobile.max}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MAX
                  </a>
                </span>
              </div>

              <div className="contact-card">
                <span className="contact-card-lbl">Email</span>
                <span className="contact-card-val">
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </span>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                src={YANDEX_MAP_SRC}
                title="Карта расположения салона Римские Шторы"
                loading="lazy"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
