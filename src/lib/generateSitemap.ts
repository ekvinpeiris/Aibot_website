
import fs from 'fs';
import blogPosts from './blogData';

export function generateSitemap() {
  // Create sitemap header
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/blog</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`;
  
  // Add URLs for each blog post
  blogPosts.forEach(post => {
    sitemap += `
  <url>
    <loc>https://yourdomain.com/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });
  
  // Add URLs for other pages
  const otherPages = [
    { url: '/pricing', priority: '0.7' },
    { url: '/about', priority: '0.6' },
    { url: '/contact', priority: '0.6' },
    { url: '/solutions/ecommerce', priority: '0.7' },
    { url: '/solutions/healthcare', priority: '0.7' },
    { url: '/solutions/travel', priority: '0.7' },
    { url: '/solutions/education', priority: '0.7' },
    { url: '/solutions/service', priority: '0.7' },
    { url: '/privacy', priority: '0.4' },
  ];
  
  otherPages.forEach(page => {
    sitemap += `
  <url>
    <loc>https://yourdomain.com${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });
  
  // Close sitemap
  sitemap += `
</urlset>`;
  
  // Write sitemap to file
  fs.writeFileSync('./public/sitemap.xml', sitemap);
  
  console.log('Sitemap generated successfully!');
}
