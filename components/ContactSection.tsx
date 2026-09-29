import { business } from "@/lib/business";
import AnimatedSection from "./AnimatedSection";

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
                <span className="contact-card-lbl">Часы работы</span>
                <span className="contact-hours">
                  {business.openingHours.map((h) => (
                    <span key={h.label} className="contact-hours-row">
                      <span>{h.label}</span>
                      <span>
                        {h.opens}–{h.closes}
                      </span>
                    </span>
                  ))}
                  {business.closedDays.map((d) => (
                    <span key={d.label} className="contact-hours-row">
                      <span>{d.label}</span>
                      <span>{d.note}</span>
                    </span>
                  ))}
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
                src={business.mapEmbedUrl}
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
