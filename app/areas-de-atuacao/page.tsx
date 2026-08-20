import type { Metadata } from "next";
import { areas } from "@/content/areas";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AreaCard } from "@/components/shared/AreaCard";
import { areaIcons } from "@/components/shared/area-icons";
import { ParceirosBlock } from "@/components/areas/ParceirosBlock";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Conheça as áreas de atuação da Venâncio Advocacia: Direito do Consumidor, Bancário, Cível, da Saúde, Contratual e Empresarial. Atendimento em Goiânia e em todo o Brasil.",
  alternates: { canonical: "/areas-de-atuacao" },
  openGraph: {
    title: "Áreas de Atuação | Venâncio Advocacia",
    description:
      "Atuação em Direito do Consumidor, Bancário, Cível, da Saúde, Contratual e Empresarial. Atendimento em Goiânia e em todo o Brasil.",
    type: "website",
    url: "/areas-de-atuacao",
    images: [{ url: "/og/og-areas.png", width: 1200, height: 630 }],
  },
};

export default function AreasDeAtuacao() {
  return (
    <section className="pb-section">
      <Container>
        <Breadcrumbs
          items={[{ label: "Áreas de Atuação", href: "/areas-de-atuacao" }]}
        />
        <h1 className="mt-4 text-h1">Áreas de Atuação</h1>
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
