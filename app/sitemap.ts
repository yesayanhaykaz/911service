import { MetadataRoute } from 'next';

const BASE = 'https://911service.am';

const serviceSlugs = [
  'coffee-machine',
  'robot-vacuum',
  'vacuum',
  'microwave',
  'hair-dryer',
  'iron',
  'iron-air',
  'car-charger',
  'home-electrical',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...serviceSlugs.map((slug) => ({
      url: `${BASE}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: slug === 'coffee-machine' ? 0.9 : 0.8,
    })),
    {
      url: `${BASE}/pricing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
