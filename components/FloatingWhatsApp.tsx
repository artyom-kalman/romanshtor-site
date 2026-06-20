import { business } from "@/lib/business";

export default function FloatingWhatsApp() {
  return (
    <a
      href={business.mobile.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/85 text-white px-5 py-3 rounded-full shadow-lg transition-colors text-sm font-medium"
      aria-label="Написать в WhatsApp"
    >
      Написать в WhatsApp
    </a>
  );
}
