
import fs from 'fs';
import blogPosts from './blogData';

export function generateRssFeed() {
  // Create RSS feed header
  let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ChatAI Blog</title>
    <description>Expert insights, guides, and trends about AI chatbots and conversational AI technology</description>
    <link>https://yourdomain.com/blog</link>
    <atom:link href="https://yourdomain.com/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <category>AI Chatbots</category>
    <category>Conversational AI</category>
    <category>Customer Service</category>
    `;
  
  // Add RSS items for each blog post
  blogPosts.forEach(post => {
    rss += `
    <item>
      <title>${post.title}</title>
      <description>${post.excerpt}</description>
      <link>https://yourdomain.com/blog/${post.slug}</link>
      <guid isPermaLink="true">https://yourdomain.com/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${post.category}</category>
      ${post.tags.map(tag => `<category>${tag}</category>`).join('\n      ')}
    </item>
    `;
  });
  
  // Close RSS feed
  rss += `
  </channel>
</rss>`;
  
  // Write RSS feed to file
  fs.writeFileSync('./public/rss.xml', rss);
  
  console.log('RSS feed generated successfully!');
}
