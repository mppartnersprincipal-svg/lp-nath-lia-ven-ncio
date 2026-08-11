import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

export function Hero() {
  return (
    <section className="bg-dark">
      <Container className="grid items-center gap-12 py-section lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="text-hero text-creme-100">
            Antes de falar de processo, a gente escuta a sua história
          </h1>
          <p className="mt-6 text-lead text-on-dark-muted">
            Enfrentar um problema jurídico já é difícil. Entender o que está
            acontecendo não deveria ser. Na Venâncio Advocacia, você é ouvido
            com atenção, entende cada etapa do seu caso em linguagem simples e
            sabe sempre em que pé está a sua demanda.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppButton variant="gold" />
            <Link
              href="/areas-de-atuacao"
              className="inline-flex min-h-11 items-center justify-center rounded-pill border border-line-gold px-7 text-eyebrow uppercase text-creme-100 transition-all duration-200 ease-in-out hover:border-gold-300 hover:bg-creme-300/10"
            >
              Conhecer as áreas de atuação
            </Link>
          </div>
        </div>
        <Image
          src="/images/nathalia/nathalia-hero.webp"
          alt="Nathália Venâncio de Abreu, advogada (OAB/GO 76.040), responsável pela Venâncio Advocacia em Goiânia"
          width={900}
          height={1600}
          priority
          sizes="(max-width: 1024px) 90vw, 480px"
          className="mx-auto aspect-3/4 w-full max-w-md rounded-card border border-line-gold object-cover object-top shadow-lift"
        />
      </Container>
    </section>
  );
}
