import { useEffect } from "react";

interface SEOMetaProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  orgSchema?: Record<string, any>;
  serviceSchema?: Record<string, any>;
  faqSchema?: Record<string, any>;
}

export const SEOMeta = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType,
  articlePublishedTime,
  articleModifiedTime,
  orgSchema,
  serviceSchema,
  faqSchema
}: SEOMetaProps) => {
  useEffect(() => {
    // Update basic meta tags
    document.title = title;

    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', description);

    if (keywords) {
      let keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', keywords);
    }

    // Canonical tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    } else if (canonicalLink) {
      canonicalLink.remove();
    }

    // Update OG tags
    let ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (!ogTypeMeta) {
      ogTypeMeta = document.createElement('meta');
      ogTypeMeta.setAttribute('property', 'og:type');
      document.head.appendChild(ogTypeMeta);
    }
    ogTypeMeta.setAttribute('content', ogType || 'website');

    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', ogTitle || title);

    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', ogDescription || description);

    // og:url — use canonical if provided
    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (canonical) {
      if (!ogUrlMeta) {
        ogUrlMeta = document.createElement('meta');
        ogUrlMeta.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrlMeta);
      }
      ogUrlMeta.setAttribute('content', canonical);
    } else if (ogUrlMeta) {
      ogUrlMeta.remove();
    }

    if (ogImage) {
      let ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (!ogImageMeta) {
        ogImageMeta = document.createElement('meta');
        ogImageMeta.setAttribute('property', 'og:image');
        document.head.appendChild(ogImageMeta);
      }
      ogImageMeta.setAttribute('content', ogImage);
    }

    // Article meta tags
    let articlePublishedMeta = document.querySelector('meta[property="article:published_time"]');
    if (articlePublishedTime) {
      if (!articlePublishedMeta) {
        articlePublishedMeta = document.createElement('meta');
        articlePublishedMeta.setAttribute('property', 'article:published_time');
        document.head.appendChild(articlePublishedMeta);
      }
      articlePublishedMeta.setAttribute('content', articlePublishedTime);
    } else if (articlePublishedMeta) {
      articlePublishedMeta.remove();
    }

    let articleModifiedMeta = document.querySelector('meta[property="article:modified_time"]');
    if (articleModifiedTime) {
      if (!articleModifiedMeta) {
        articleModifiedMeta = document.createElement('meta');
        articleModifiedMeta.setAttribute('property', 'article:modified_time');
        document.head.appendChild(articleModifiedMeta);
      }
      articleModifiedMeta.setAttribute('content', articleModifiedTime);
    } else if (articleModifiedMeta) {
      articleModifiedMeta.remove();
    }

    // Add schema markup scripts
    const removeSchemaScripts = () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"][data-seo-schema="true"]');
      scripts.forEach(script => script.remove());
    };

    removeSchemaScripts();

    if (orgSchema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-schema', 'true');
      script.innerHTML = JSON.stringify(orgSchema);
      document.head.appendChild(script);
    }

    if (serviceSchema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-schema', 'true');
      script.innerHTML = JSON.stringify(serviceSchema);
      document.head.appendChild(script);
    }

    if (faqSchema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-schema', 'true');
      script.innerHTML = JSON.stringify(faqSchema);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType, articlePublishedTime, articleModifiedTime, orgSchema, serviceSchema, faqSchema]);

  return null;
};
