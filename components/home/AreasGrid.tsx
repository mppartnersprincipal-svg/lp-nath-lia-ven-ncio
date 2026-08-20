import { areas } from "@/content/areas";
import { Container } from "@/components/layout/Container";
import { AreaCard } from "@/components/shared/AreaCard";
import { areaIcons } from "@/components/shared/area-icons";
import { ParceirosBlock } from "@/components/areas/ParceirosBlock";

export function AreasGrid() {
  return (
    <section className="py-section">
      <Container>
        <h2 className="text-h2">Como podemos ajudar você</h2>
        <p className="mt-4 max-w-narrow text-lead text-muted">
          Cada problema tem uma história e uma pessoa por trás. Antes de
          qualquer estratégia, a gente escuta. Conheça as áreas em que o
          escritório atua:
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <AreaCard
              key={area.slug}
              title={area.title}
              excerpt={area.cardExcerpt}
              href={`/areas-de-atuacao/${area.slug}`}
              icon={areaIcons[area.slug]}
            />
          ))}
        </div>
        <div className="mt-8">
          <ParceirosBlock />
        </div>
      </Container>
    </section>
  );
}
