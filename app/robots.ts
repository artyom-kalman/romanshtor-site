import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://rimskiestory.ru/sitemap.xml',
    host: 'https://rimskiestory.ru',
  }
}
