import type { Area } from "@/content/areas";
import { Container } from "@/components/layout/Container";
import { Accordion } from "@/components/shared/Accordion";
import { JsonLd } from "@/components/shared/JsonLd";
import { faqSchema } from "@/lib/schema";

export function AreaFaq({ area }: { area: Area }) {
  return (
    <section className="pb-section">
      <Container narrow>
        <h2 className="text-h2">Perguntas frequentes</h2>
        <div className="mt-12">
          <Accordion items={area.faq} />
        </div>
      </Container>
      <JsonLd data={faqSchema(area.faq)} />
    </section>
  );
}
