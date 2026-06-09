"use client";

import Link from "next/link";
import { useState } from "react";

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <Link
            href="/#hero"
            className="text-xl lg:text-2xl font-bold tracking-tight hover:text-accent transition-colors"
            onClick={handleNavClick}
          >
            РИМСКИЕ ШТОРЫ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Contact Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+74212454154"
              className="text-sm font-medium text-gray-700 hover:text-accent transition-colors"
            >
              45-41-54
            </a>
            <a
              href="https://wa.me/79141903086"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent/90 rounded-lg transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-accent transition-colors"
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
                <a
                  href="tel:+74212454154"
                  className="text-base font-medium text-gray-700 hover:text-accent transition-colors"
                >
                  45-41-54
                </a>
                <a
                  href="https://wa.me/79141903086"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent/90 rounded-lg transition-colors text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
