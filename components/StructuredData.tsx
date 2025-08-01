export interface OrganizationData {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  description: string;
  url: string;
  logo: string;
  foundingDate: string;
  founders: Array<{
    "@type": "Person";
    name: string;
  }>;
  address: {
    "@type": "PostalAddress";
    addressCountry: string;
    addressRegion: string;
    addressLocality: string;
  };
  sameAs: string[];
}

export interface SoftwareApplicationData {
  "@context": "https://schema.org";
  "@type": "SoftwareApplication";
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  offers: {
    "@type": "Offer";
    category: string;
  };
  creator: {
    "@type": "Organization";
    name: string;
  };
}

export interface ArticleData {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description: string;
  author: {
    "@type": "Person" | "Organization";
    name: string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
    logo: {
      "@type": "ImageObject";
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
  image: string;
  url: string;
}

export const getOrganizationStructuredData = (): OrganizationData => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PhnyX Lab",
  description: "AI technology company transforming pharmaceutical and biotechnology workflows through advanced artificial intelligence solutions.",
  url: "https://phnyx.ai",
  logo: "https://phnyx.ai/logo.png",
  foundingDate: "2024-09-01",
  founders: [
    {
      "@type": "Person",
      name: "Minseok Bae"
    }
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressRegion: "CA",
    addressLocality: "Palo Alto"
  },
  sameAs: [
    "https://linkedin.com/company/phnyx-lab",
    "https://twitter.com/phnyxlab"
  ]
});

export const getCheironStructuredData = (): SoftwareApplicationData => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Cheiron",
  description: "AI-powered platform for pharmaceutical research, document automation, and regulatory writing. Reduces research time by up to 80%.",
  applicationCategory: "Business Software",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    category: "Enterprise Software"
  },
  creator: {
    "@type": "Organization",
    name: "PhnyX Lab"
  }
});

export const getArticleStructuredData = (
  headline: string,
  description: string,
  author: string,
  datePublished: string,
  dateModified: string,
  image: string,
  url: string
): ArticleData => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline,
  description,
  author: {
    "@type": "Organization",
    name: author
  },
  publisher: {
    "@type": "Organization",
    name: "PhnyX Lab",
    logo: {
      "@type": "ImageObject",
      url: "https://phnyx.ai/logo.png"
    }
  },
  datePublished,
  dateModified,
  image,
  url
});