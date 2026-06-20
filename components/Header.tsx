"use client";

import Link from "next/link";
import { useState } from "react";
import { business } from "@/lib/business";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "О нас", href: "/#about" },
    { name: "Услуги", href: "/#services" },
    { name: "Процесс", href: "/#process" },
    { name: "Портфолио", href: "/#portfolio" },
    { name: "Контакты", href: "/#contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const phoneShort = business.phone.display.replace("+7 (4212) ", "");

  return (
    <header className="hdr">
      <div className="hdr-inner">
        <Link href="/#hero" className="brand" onClick={handleNavClick}>
          <span className="brand-mark">Р</span>
          <span>{business.brandName}</span>
        </Link>

        <nav className="nav">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hdr-right">
          <a href={`tel:${business.phone.tel}`} className="hdr-phone">
            {phoneShort}
          </a>
          <a
            href={business.mobile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--sm"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="hdr-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={mobileMenuOpen}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div className={`hdr-mobile${mobileMenuOpen ? " is-open" : ""}`}>
        <nav className="hdr-mobile-nav">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} onClick={handleNavClick}>
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hdr-mobile-actions">
          <a href={`tel:${business.phone.tel}`} className="hdr-phone">
            {business.phone.display}
          </a>
          <a
            href={business.mobile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--sm"
            onClick={handleNavClick}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
