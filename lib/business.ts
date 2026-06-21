/**
 * Single source of truth for all business / NAP (Name-Address-Phone) data.
 *
 * Every component that renders contact info, legal реквизиты, or JSON-LD
 * structured data MUST import from here — никаких хардкодов NAP в других файлах.
 *
 * NAP values below match the Yandex Business card exactly. Do not change them
 * without updating the Yandex card too — consistency across the web is itself
 * a Yandex "коммерческий фактор" ranking signal.
 *
 * Fields marked `// TODO` are placeholders to be filled in by the owner.
 */

const SITE_URL = "https://rimskiestory.ru";

export const business = {
  /** Public brand name — matches the Yandex Business card exactly. */
  brandName: "Римские шторы",
  /** Longer marketing name used in some schema fields. */
  displayName: "Салон Римские Шторы",

  /** Legal entity (ИП). Already on file in the repo footer. */
  legalName: "ИП Калашников Павел Геннадьевич",

  /** Реквизиты. */
  inn: "272106412600",
  ogrnip: "304272411400025",

  address: {
    /** Street + building, matches Yandex card. */
    street: "ул. Гамарника, 43А",
    locality: "Хабаровск",
    region: "Хабаровский край",
    country: "RU",
    postalCode: "680020",
  },

  /** Primary landline — matches Yandex card. */
  phone: {
    display: "+7 (4212) 45-41-54",
    tel: "+74212454154",
  },

  /** Secondary mobile / messenger number used across the site. */
  mobile: {
    display: "+7 914 190 3086",
    tel: "+79141903086",
    whatsapp: "https://wa.me/79141903086",
    telegram: "https://t.me/+79141903086",
    max: "https://max.ru/u/f9LHodD0cOLQ1pAUVmQAFcup2XbKsqPKXXrczEW86yHnZDRegSk6RJfzOFw",
  },

  email: "romanshtor@rambler.ru",

  /** Approximate coordinates of Гамарника, 43А. */
  geo: {
    lat: 48.4827,
    lng: 135.0684,
  },

  /**
   * Opening hours.
   * `days` uses schema.org English day names for JSON-LD.
   */
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      label: "Пн–Пт",
      opens: "10:00",
      closes: "19:00",
    },
    {
      days: ["Saturday"],
      label: "Сб",
      opens: "10:00",
      closes: "16:00",
    },
  ],

  /** Opening date — used for «N лет на рынке» across the site. */
  foundedDate: "2003-07-07",
  foundedYear: 2003,

  url: SITE_URL,
  logoUrl: `${SITE_URL}/images/hero/3_pL8NMeWWk_2.jpg`,

  /** External profiles for schema `sameAs`. Empty entries are filtered out. */
  sameAs: {
    yandexBusiness: "https://yandex.ru/profile/1079072514?lang=ru&utm_source=copy_link&utm_medium=social&utm_campaign=share",
    dvhab: "https://www.dvhab.ru/rimskie-shtory/gamarnika-43a-branch-271928",
  },
} as const;

/** Completed years since `foundedDate` (anniversary-aware). */
export function yearsInBusiness(asOf: Date = new Date()): number {
  const founded = new Date(business.foundedDate);
  let years = asOf.getFullYear() - founded.getFullYear();
  const anniversary = new Date(
    asOf.getFullYear(),
    founded.getMonth(),
    founded.getDate(),
  );
  if (asOf < anniversary) years--;
  return years;
}

/** Russian plural for «N год / года / лет». */
export function yearsWord(count: number): string {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return "год";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return "года";
  return "лет";
}

export function yearsCountLabel(asOf?: Date): string {
  const count = yearsInBusiness(asOf);
  return `${count} ${yearsWord(count)}`;
}

/** Shared SEO / JSON-LD blurb with current experience length. */
export function salonExperienceDescription(asOf?: Date): string {
  const years = yearsInBusiness(asOf);
  return `Купить римские шторы в Хабаровске. Пошив штор и гардин на заказ, карнизы, тюль, солнцезащитные системы. Салон с ${years}-летним опытом — дизайн, пошив, навеска и монтаж.`;
}

/** Full single-line postal address (with index when known). */
export function fullAddress(): string {
  const { postalCode, street, locality, region } = business.address;
  return `${postalCode}, ${region}, ${locality}, ${street}`;
}

/** Non-empty `sameAs` URLs, ready to drop into JSON-LD. */
export function sameAsUrls(): string[] {
  return Object.values(business.sameAs).filter(Boolean);
}
