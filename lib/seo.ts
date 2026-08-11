import type { Metadata } from "next";
import type { Area } from "@/content/areas";

// Metadata de página de área — valores literais de docs/COPY.md.
export function areaMetadata(area: Area): Metadata {
  const path = `/areas-de-atuacao/${area.slug}`;
  return {
    title: { absolute: area.seo.title },
    description: area.seo.description,
    alternates: { canonical: path },
    openGraph: {
      title: area.seo.ogTitle,
      description: area.seo.ogDescription,
      type: "website",
      url: path,
      images: [
        {
          url: area.photo.src,
          width: area.photo.width,
          height: area.photo.height,
          alt: area.alt,
        },
      ],
    },
    twitter: { card: "summary_large_image" },
  };
}
