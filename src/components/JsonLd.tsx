export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vyarah",
    url: "https://vyarah.in",
    logo: "https://vyarah.in/icon.svg",
    description:
      "Vyarah builds custom websites, mobile apps, and AI tools for startups and businesses. Based in Gujarat, serving clients globally.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@vyarah.in",
      contactType: "sales",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    sameAs: [
      "https://linkedin.com/company/vyarah",
      "https://github.com/vyarah",
      "https://instagram.com/vyarah",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vyarah",
    url: "https://vyarah.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://vyarah.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Vyarah",
    url: "https://vyarah.in",
    telephone: "+918160208841",
    email: "contact@vyarah.in",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    priceRange: "₹₹",
    openingHours: "Mo-Sa 09:00-18:00",
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom websites, e-commerce, SaaS dashboards",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "Cross-platform iOS and Android applications",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI/ML Solutions",
            description: "Chatbots, NLP tools, recommendation engines",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automation & Workflows",
            description: "Business process automation with n8n, Python, APIs",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
