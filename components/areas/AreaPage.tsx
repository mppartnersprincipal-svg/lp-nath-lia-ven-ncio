import type { Area } from "@/content/areas";
import { serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { AreaHero } from "./AreaHero";
import { AreaContent } from "./AreaContent";
import { AreaFaq } from "./AreaFaq";
import { AreaCta } from "./AreaCta";

// Template completo de página de área:
// Breadcrumb (dentro do hero) · AreaHero · AreaContent · AreaFaq · AreaCta,
// com JSON-LD Service (FAQPage e BreadcrumbList são injetados pelos filhos).
export function AreaPage({ area }: { area: Area }) {
  return (
    <>
      <AreaHero area={area} />
      <AreaContent area={area} />
      <AreaFaq area={area} />
      <AreaCta area={area} />
      <JsonLd
        data={serviceSchema({
          title: area.title,
          slug: area.slug,
          description: area.seo.description,
        })}
      />
    </>
  );
}
