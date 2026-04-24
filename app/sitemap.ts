import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mynet.id.vn',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    // Bạn có thể thêm các đường dẫn /projects, /blog vào đây trong tương lai
  ];
}
