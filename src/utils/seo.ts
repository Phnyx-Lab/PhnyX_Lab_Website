// Sitemap generation utility
export const generateSitemap = () => {
  const baseUrl = 'https://phnyx.ai';
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'monthly' },
    { url: '/products', priority: 0.9, changefreq: 'weekly' },
    { url: '/company', priority: 0.8, changefreq: 'monthly' },
    { url: '/newsroom', priority: 0.8, changefreq: 'weekly' },
    { url: '/careers', priority: 0.7, changefreq: 'weekly' },
    { url: '/contact', priority: 0.6, changefreq: 'monthly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Robots.txt generation
export const generateRobotsTxt = () => {
  const baseUrl = 'https://phnyx.ai';
  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Block access to admin/internal pages
Disallow: /admin/
Disallow: /internal/
Disallow: /*.json$

# Allow all other content
Allow: /`;
};

// Image optimization utilities
export const getOptimizedImageUrl = (
  src: string, 
  width: number, 
  height?: number, 
  format: 'webp' | 'jpg' | 'png' = 'webp'
) => {
  // In a real implementation, this would integrate with a service like Cloudinary or Vercel Image Optimization
  // For now, return the original URL with parameters for manual optimization
  const params = new URLSearchParams();
  params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('fit', 'crop');
  params.set('fm', format);
  
  return `${src}?${params.toString()}`;
};

// Core Web Vitals tracking
export const trackCoreWebVitals = () => {
  if (typeof window !== 'undefined' && 'web-vital' in window) {
    // This would integrate with web-vitals library in a real implementation
    return {
      lcp: 0, // Largest Contentful Paint
      fid: 0, // First Input Delay
      cls: 0, // Cumulative Layout Shift
      fcp: 0, // First Contentful Paint
      ttfb: 0 // Time to First Byte
    };
  }
  return null;
};

// Schema.org markup validation
export const validateStructuredData = (data: object): boolean => {
  try {
    // Basic validation - in a real implementation, this would use a proper Schema.org validator
    const stringified = JSON.stringify(data);
    const parsed = JSON.parse(stringified);
    return parsed['@context'] === 'https://schema.org' && parsed['@type'];
  } catch {
    return false;
  }
};