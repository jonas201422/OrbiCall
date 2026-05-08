import type { FAQItem } from "./content";
import { site } from "./site";

type BreadcrumbItem = {
  name: string;
  path: string;
};

const absoluteUrl = (path: string) => `${site.baseUrl}${path === "/" ? "" : path}`;
const logoUrl = `${site.baseUrl}/favicon-192.png`;
const previewImageUrl = `${site.baseUrl}/og-orbicall.png`;

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${site.baseUrl}/#organization`,
  name: site.brand,
  url: site.baseUrl,
  logo: logoUrl,
  image: previewImageUrl,
  description: site.description,
  founder: site.founders.map((name) => ({
    "@type": "Person",
    name,
  })),
  contactPoint: site.contactPeople.map((person) => ({
    "@type": "ContactPoint",
    contactType: "sales",
    name: person.name,
    email: person.email,
    telephone: person.phone,
    areaServed: "AT",
    availableLanguage: ["de"],
  })),
};

export const localBusinessSchema = {
  "@type": "LocalBusiness",
  "@id": `${site.baseUrl}/#localbusiness`,
  name: site.brand,
  url: site.baseUrl,
  logo: logoUrl,
  image: previewImageUrl,
  description: site.description,
  email: site.contactEmail,
  telephone: site.contactPeople[0]?.phone,
  priceRange: "Individuelles Angebot",
  founder: site.founders.map((name) => ({
    "@type": "Person",
    name,
  })),
  areaServed: [
    { "@type": "Country", name: "Österreich" },
    { "@type": "City", name: "Linz" },
    { "@type": "AdministrativeArea", name: "Oberösterreich" },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "AT",
    addressRegion: "Oberösterreich",
    addressLocality: "Linz",
  },
};

export const serviceSchema = (name = "KI Telefonassistent für Unternehmen in Österreich", path = "/") => ({
  "@type": "Service",
  "@id": `${absoluteUrl(path)}#service`,
  name,
  serviceType: "KI Telefonassistent / AI Call Agent",
  provider: {
    "@id": `${site.baseUrl}/#organization`,
  },
  areaServed: [
    { "@type": "Country", name: "Österreich" },
    { "@type": "City", name: "Linz" },
    { "@type": "AdministrativeArea", name: "Oberösterreich" },
  ],
  description:
    "OrbiCall automatisiert Telefonannahme, Terminbuchung, Kundenanfragen, Weiterleitungen und Gesprächszusammenfassungen für österreichische Unternehmen.",
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Österreichische KMU, Praxen, Salons, Immobilienmakler, Werkstätten und Restaurants",
  },
  url: absoluteUrl(path),
});

export const faqSchema = (items: FAQItem[], path: string) => ({
  "@type": "FAQPage",
  "@id": `${absoluteUrl(path)}#faq`,
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});
