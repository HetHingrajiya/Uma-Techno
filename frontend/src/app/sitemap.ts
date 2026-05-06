import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://umatechno.in';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/contact',
    '/web-development',
    '/seo-services',
    '/digital-marketing',
    '/privacy-policy',
    '/terms',
    '/blog',
    '/services/app-development',
    '/services/ui-ux',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
