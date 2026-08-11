import { site } from "./site";

const orgId = `${site.baseUrl}/#organization`;
const logoUrl = `${site.baseUrl}/logo/logo-fundo-verde.png`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: site.name,
        url: site.baseUrl,
        logo: logoUrl,
        email: site.email,
        telephone: site.phoneE164,
        sameAs: [site.instagram],
      },
      {
        "@type": "LegalService",
        "@id": `${site.baseUrl}/#legalservice`,
        name: site.name,
        url: site.baseUrl,
        image: logoUrl,
        telephone: site.phoneE164,
        email: site.email,
        parentOrganization: { "@id": orgId },
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.address.street}, ${site.address.district}`,
          addressLocality: site.address.city,
          addressRegion: site.address.state,
          postalCode: site.address.zip,
          addressCountry: site.address.country,
        },
        areaServed: [
          { "@type": "City", name: "Goiânia" },
          { "@type": "Country", name: "Brasil" },
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        founder: {
          "@type": "Person",
          name: site.lawyer,
          jobTitle: "Advogada",
          description: site.oab,
        },
      },
    ],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.lawyer,
    jobTitle: "Advogada",
    identifier: site.oab,
    description: `${site.lawyer}, ${site.oab}, fundadora da ${site.name}.`,
    worksFor: { "@id": `${site.baseUrl}/#legalservice` },
    url: `${site.baseUrl}/sobre`,
    image: `${site.baseUrl}/images/nathalia/nathalia-retrato.webp`,
    sameAs: [site.instagram],
  };
}

export function serviceSchema(area: {
  title: string;
  slug: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: area.title,
    serviceType: area.title,
    description: area.description,
    url: `${site.baseUrl}/areas-de-atuacao/${area.slug}`,
    provider: { "@id": `${site.baseUrl}/#legalservice` },
    areaServed: [
      { "@type": "City", name: "Goiânia" },
      { "@type": "Country", name: "Brasil" },
    ],
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  areaTitle: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    inLanguage: "pt-BR",
    articleSection: post.areaTitle,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: `${site.baseUrl}/blog/${post.slug}`,
    url: `${site.baseUrl}/blog/${post.slug}`,
    image: logoUrl,
    author: {
      "@type": "Person",
      name: site.lawyer,
      jobTitle: "Advogada",
      identifier: site.oab,
      url: `${site.baseUrl}/sobre`,
    },
    publisher: { "@id": orgId },
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${site.baseUrl}${item.href}`,
    })),
  };
}
