import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { whatsappMessages } from "@/lib/whatsapp";
import { personSchema } from "@/lib/schema";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { JsonLd } from "@/components/shared/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Sobre a Advogada Nathália Venâncio | Venâncio Advocacia" },
  description:
    "Conheça Nathália Venâncio de Abreu (OAB/GO 76.040) e a proposta da Venâncio Advocacia: atendimento próximo, claro e responsável em Goiânia.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre a Venâncio Advocacia",
    description:
      "Advocacia próxima, clara e responsável, fundada por Nathália Venâncio de Abreu.",
    type: "website",
    url: "/sobre",
    images: [
      {
        url: "/images/nathalia/nathalia-retrato.webp",
        width: 900,
        height: 1600,
        alt: "Nathália Venâncio de Abreu, advogada fundadora da Venâncio Advocacia, OAB/GO 76.040",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function Sobre() {
  return (
    <>
      {/* Hero com foto principal */}
      <section className="bg-dark">
        <Container className="pt-2">
          <Breadcrumbs tone="dark" items={[{ label: "Sobre", href: "/sobre" }]} />
        </Container>
        <Container className="grid items-center gap-12 pt-8 pb-section lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-h1 text-creme-100">Sobre a Venâncio Advocacia</h1>
            <p className="mt-6 text-lead text-on-dark-muted">
              {`Advocacia com atendimento próximo, em Goiânia e em todo o Brasil.`}
            </p>
            <p className="mt-3 text-on-dark-muted">
              Nathália Venâncio de Abreu, OAB/GO nº 76.040
            </p>
          </div>
          <Image
            src="/images/nathalia/nathalia-retrato.webp"
            alt="Nathália Venâncio de Abreu, advogada fundadora da Venâncio Advocacia, OAB/GO 76.040"
            width={900}
            height={1600}
            priority
            sizes="(max-width: 1024px) 90vw, 420px"
            className="mx-auto aspect-3/4 w-full max-w-sm rounded-card border border-line-gold object-cover object-top shadow-lift"
          />
        </Container>
      </section>

      {/* Trajetória */}
      <section className="py-section">
        <Container narrow>
          <h2 className="text-h2">A trajetória que deu origem ao escritório</h2>
          <p className="mt-6 text-foreground">
            A Venâncio Advocacia é um escritório atual, criado a partir da
            experiência da sua fundadora, Nathália Venâncio de Abreu. Ao longo
            da atuação profissional em outros escritórios, Nathália teve contato
            direto com diferentes demandas e perfis de clientes. Foi ali que
            amadureceu uma convicção: a advocacia pode (e deve) ser mais próxima
            das pessoas.
          </p>
          <p className="mt-4 text-foreground">
            Em 2026, essa convicção virou decisão. Nasceu a Venâncio Advocacia,
            com uma proposta de atendimento mais próximo, personalizado e
            acessível, unindo conhecimento jurídico, atendimento humanizado e
            comunicação clara. A tecnologia entrou como aliada para atender
            clientes em todo o Brasil.
          </p>

          <h2 className="mt-16 text-h2">Missão e valores</h2>
          <p className="mt-6 text-foreground">
            Nossa missão é oferecer uma advocacia próxima, responsável e
            personalizada, buscando compreender a realidade e as necessidades de
            cada cliente para encontrar a estratégia jurídica mais adequada.
          </p>
          <p className="mt-4 text-foreground">
            Nosso principal valor é a comunicação. Acreditamos que o cliente
            deve compreender o que está acontecendo em seu processo, saber em
            que fase está a sua demanda e receber informações de forma clara e
            acessível. Tudo isso é conduzido com transparência, disponibilidade,
            responsabilidade, ética, comprometimento e proximidade.
          </p>
        </Container>
      </section>

      {/* Como atendemos + foto secundária */}
      <section className="bg-band">
        <Container className="grid items-center gap-12 py-section lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-h2">Como atendemos</h2>
            <p className="mt-6 text-foreground">
              Antes de qualquer estratégia, a gente escuta. Reservamos tempo
              para entender o seu problema em detalhe, esclarecer dúvidas e
              analisar as alternativas possíveis, para só então definir, junto
              com você, o melhor caminho. Nossa preocupação constante é manter
              você informado, para que nunca se sinta distante ou sem notícias
              sobre a própria demanda.
            </p>
            <p className="mt-4 text-foreground">
              O escritório atende pessoas físicas e empresas, de forma
              presencial em Goiânia e online para todo o Brasil.
            </p>
          </div>
          <Image
            src="/images/nathalia/nathalia-escritorio.webp"
            alt="Nathália Venâncio, advogada, no escritório da Venâncio Advocacia em Goiânia"
            width={900}
            height={1600}
            sizes="(max-width: 1024px) 90vw, 420px"
            className="mx-auto aspect-3/4 w-full max-w-sm rounded-card object-cover shadow-card"
          />
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-dark">
        <Container narrow className="py-section text-center">
          <h2 className="text-h2 text-creme-100">
            Quer conversar sobre o seu caso?
          </h2>
          <p className="mt-4 text-lead text-on-dark-muted">
            Será um prazer ouvir você.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              variant="gold"
              message={whatsappMessages.sobreContato}
            />
            <Link
              href="/contato"
              className="inline-flex min-h-11 items-center justify-center rounded-pill border border-line-gold px-7 text-eyebrow uppercase text-creme-100 transition-all duration-200 ease-in-out hover:border-gold-300 hover:bg-creme-300/10"
            >
              Enviar mensagem
            </Link>
          </div>
        </Container>
      </section>

      <JsonLd data={personSchema()} />
    </>
  );
}
