
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  article?: boolean;
  tags?: string[];
}

const SEO = ({ 
  title, 
  description, 
  image = '/og-default.jpg',
  url = window.location.href,
  article = false,
  tags = []
}: SEOProps) => {
  const siteUrl = window.location.origin;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {tags.length > 0 && <meta name="keywords" content={tags.join(', ')} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:site_name" content="ChatAI Blog" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lovable_dev" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* RSS Feed Link */}
      <link 
        rel="alternate" 
        type="application/rss+xml" 
        title="ChatAI Blog RSS Feed" 
        href={`${siteUrl}/rss.xml`} 
      />
    </Helmet>
  );
};

export default SEO;
