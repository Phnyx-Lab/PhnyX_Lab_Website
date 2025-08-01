import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export function SEOHead({
  title = "PhnyX Lab - AI Toolkit for Modern Biopharma",
  description = "Transform your pharmaceutical workflows with AI-powered document automation, literature review, and regulatory writing tools. Reduce research time by 80% with Cheiron.",
  keywords = "AI, pharmaceutical, biopharma, drug discovery, medical writing, regulatory documents, literature review, IND, CSR, clinical research",
  ogImage = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=630&fit=crop",
  ogType = "website",
  canonicalUrl = "https://phnyx.ai",
  structuredData
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };
    
    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'PhnyX Lab');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1');
    
    // Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:site_name', 'PhnyX Lab', true);
    
    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    
    // Canonical URL
    updateLinkTag('canonical', canonicalUrl);
    
    // Add structured data if provided
    if (structuredData) {
      let structuredScript = document.querySelector('script[type="application/ld+json"]');
      if (!structuredScript) {
        structuredScript = document.createElement('script');
        (structuredScript as HTMLScriptElement).type = 'application/ld+json';
        document.head.appendChild(structuredScript);
      }
      structuredScript.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, structuredData]);
  
  return null;
}