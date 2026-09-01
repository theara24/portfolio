import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://theara-portfolio.vercel.app/sitemap.xml',
    host: 'https://theara-portfolio.vercel.app',
  };
}
