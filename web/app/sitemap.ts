import type { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';
import { POSTS_QUERY, PostSummary } from '@/sanity/lib/queries';

export const dynamic = 'force-static';

const BASE = 'https://reservadireta.pt';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const posts: PostSummary[] = await client.fetch(POSTS_QUERY).catch((err) => {
    console.error('Sitemap: failed to fetch posts from Sanity', err);
    return [];
  });

  const postEntries: MetadataRoute.Sitemap = posts.map(({ slug, publishedAt }) => ({
    url: `${BASE}/blog/${slug.current}`,
    lastModified: publishedAt ? new Date(publishedAt) : now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/quem-somos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/a-nossa-solucao`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/servicos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/casos-de-uso`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...postEntries,
  ];
}
