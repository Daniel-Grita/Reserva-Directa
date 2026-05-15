import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://reservadireta.pt/sitemap.xml',
    host: 'https://reservadireta.pt',
  };
}
