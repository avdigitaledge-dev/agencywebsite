export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://digitaledgestudio.com/#business",
    "name": "Digital Edge Studio",
    "description": "Professional web design, SEO, and digital marketing agency serving Wollongong, the Illawarra region, and greater Sydney.",
    "url": "https://digitaledgestudio.com",
    "telephone": "+61419807321",
    "email": "enquiries@digitaledgestudio.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wollongong",
      "addressRegion": "NSW",
      "postalCode": "2500",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -34.4278,
      "longitude": 150.8931
    },
    "areaServed": [
      { "@type": "City", "name": "Wollongong" },
      { "@type": "City", "name": "Shellharbour" },
      { "@type": "City", "name": "Nowra" },
      { "@type": "City", "name": "Kiama" },
      { "@type": "City", "name": "Thirroul" },
      { "@type": "City", "name": "Cronulla" },
      { "@type": "City", "name": "Sydney" },
      { "@type": "AdministrativeArea", "name": "Illawarra" },
      { "@type": "AdministrativeArea", "name": "Sutherland Shire" },
      { "@type": "AdministrativeArea", "name": "South Coast NSW" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$",
    "image": "https://digitaledgestudio.com/images/digital-edge-studio-og.jpg",
    "logo": "https://digitaledgestudio.com/images/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/digitaledgestudio-agency"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "16",
      "bestRating": "5"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Design & Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design",
            "url": "https://digitaledgestudio.com/services/web-design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Services",
            "url": "https://digitaledgestudio.com/services/seo"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "url": "https://digitaledgestudio.com/services/digital-marketing"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
