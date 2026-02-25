"use client";

import { track } from "@vercel/analytics";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/79141903086"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        track("whatsapp_floating_clicked");
      }}
      className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/85 text-white px-5 py-3 rounded-full shadow-lg transition-colors text-sm font-medium"
      aria-label="Написать в WhatsApp"
    >
      Написать в WhatsApp
    </a>
  );
}
