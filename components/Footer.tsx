import Link from "next/link";
import { business } from "@/lib/business";

export default function Footer() {
  const navigation = [
    { name: "О нас", href: "/#about" },
    { name: "Услуги", href: "/#services" },
    { name: "Процесс", href: "/#process" },
    { name: "Портфолио", href: "/#portfolio" },
    { name: "Контакты", href: "/#contact" },
  ];

  return (
    <footer className="ftr">
      <div className="wrap">
        <div>
          <div className="ftr-brand">
            Римские
            <br />
            шторы
          </div>
          <p className="ftr-tag">
            Текстильное оформление интерьеров с 2005 года.{" "}
            {business.address.locality}.
          </p>
        </div>

        <div className="ftr-col">
          <div className="ftr-col-title">Навигация</div>
          <ul>
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/contacts">Контакты и схема проезда</Link>
            </li>
          </ul>
        </div>

        <div className="ftr-col">
          <div className="ftr-col-title">Контакты</div>
          <ul>
            <li>
              <a href={`tel:${business.phone.tel}`}>{business.phone.display}</a>
            </li>
            <li>
              <a href={`tel:${business.mobile.tel}`}>
                {business.mobile.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
          </ul>
        </div>

        <div className="ftr-col">
          <div className="ftr-col-title">Юридическая информация</div>
          <ul>
            <li>{business.legalName}</li>
            <li>ИНН {business.inn}</li>
            {business.ogrnip && <li>ОГРНИП {business.ogrnip}</li>}
            <li>
              <Link href="/privacy">Политика конфиденциальности</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
