import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://offshoreconnections.co.uk'; // Replace with actual domain

  // Define your site routes here
  const routes = [
    '',
    '/about',
    '/pricing',
    '/how-it-works',
    '/contact',
    '/resources',
    '/talent'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}