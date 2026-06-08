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
      closes: "15:00",
    },
  ],

  url: SITE_URL,
  logoUrl: `${SITE_URL}/images/hero/3_pL8NMeWWk_2.jpg`,

  /** External profiles for schema `sameAs`. Empty entries are filtered out. */
  sameAs: {
    yandexBusiness: "https://yandex.ru/profile/1079072514?lang=ru&utm_source=copy_link&utm_medium=social&utm_campaign=share",
    dvhab: "https://www.dvhab.ru/rimskie-shtory/gamarnika-43a-branch-271928",
  },
} as const;

/** Full single-line postal address (with index when known). */
export function fullAddress(): string {
  const { postalCode, street, locality, region } = business.address;
  return `${postalCode}, ${region}, ${locality}, ${street}`;
}

/** Non-empty `sameAs` URLs, ready to drop into JSON-LD. */
export function sameAsUrls(): string[] {
  return Object.values(business.sameAs).filter(Boolean);
}
