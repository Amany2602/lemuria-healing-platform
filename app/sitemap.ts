import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lemuriahealing.com.au';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/sound-healing',
    '/coaching',
    '/workshops',
    '/testimonials',
    '/contact',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...staticRoutes];
}
