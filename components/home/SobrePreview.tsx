import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function SobrePreview() {
  return (
    <section className="bg-band">
      <Container className="grid items-center gap-12 py-section lg:grid-cols-[0.9fr_1.1fr]">
        <Image
          src="/images/nathalia/nathalia-sobre.webp"
          alt="Nathália Venâncio de Abreu no escritório da Venâncio Advocacia, em Goiânia"
          width={900}
          height={1600}
          sizes="(max-width: 1024px) 90vw, 440px"
          className="mx-auto aspect-3/4 w-full max-w-md rounded-card object-cover shadow-card"
        />
        <div>
          <h2 className="text-h2">Quem é a Nathália Venâncio</h2>
          <p className="mt-6 text-foreground">
            A Venâncio Advocacia nasceu em 2026 do desejo de fazer uma advocacia
            diferente: mais próxima, mais humana e mais clara. Depois de anos de
            experiência prática em outros escritórios e do contato direto com as
            mais diversas demandas, Nathália Venâncio de Abreu decidiu construir
            um escritório próprio, com atendimento personalizado e comunicação
            transparente do início ao fim.
          </p>
          <Link
            href="/sobre"
            className="mt-8 inline-flex min-h-11 items-center gap-2 text-eyebrow uppercase text-verde-700 transition-colors duration-200 hover:text-heading"
          >
            Conhecer a trajetória
            <ArrowRight aria-hidden strokeWidth={1.5} className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
