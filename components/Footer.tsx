import Link from "next/link";
import { business, fullAddress } from "@/lib/business";

export default function Footer() {
  const hoursText = business.openingHours
    .map((h) => `${h.label}: ${h.opens}–${h.closes}`)
    .join(", ");

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">РИМСКИЕ ШТОРЫ</h3>
            <p className="text-white/70 text-sm">
              Салон текстильного дизайна в Хабаровске
            </p>
            <address className="not-italic text-white/70 text-sm mt-4 space-y-1">
              <p>{fullAddress()}</p>
              <p>Часы работы: {hoursText}</p>
            </address>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>
                <a
                  href={`tel:${business.phone.tel}`}
                  className="hover:text-white transition-colors"
                >
                  {business.phone.display}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${business.mobile.tel}`}
                  className="hover:text-white transition-colors"
                >
                  {business.mobile.display}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-white transition-colors"
                >
                  {business.email}
                </a>
              </p>
              <p className="pt-2">
                <Link
                  href="/contacts"
                  className="hover:text-white transition-colors underline underline-offset-2"
                >
                  Контакты и схема проезда
                </Link>
              </p>
            </div>
          </div>

          {/* Legal реквизиты */}
          <div>
            <h4 className="font-bold mb-4">Реквизиты</h4>
            <div className="space-y-1 text-sm text-white/70">
              <p>{business.legalName}</p>
              <p>ИНН {business.inn}</p>
              {business.ogrnip && <p>ОГРНИП {business.ogrnip}</p>}
              <p className="pt-3">
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors underline underline-offset-2"
                >
                  Политика конфиденциальности
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
