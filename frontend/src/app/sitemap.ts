import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://umatechno.in';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/contact',
    '/services/web-development',
    '/services/ecommerce',
    '/services/app-development',
    '/services/custom-software',
    '/services/ui-ux',
    '/services/seo',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
