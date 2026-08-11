import Image from "next/image";
import Link from "next/link";
import type { Area } from "@/content/areas";
import { whatsappMessages } from "@/lib/whatsapp";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

export function AreaHero({ area }: { area: Area }) {
  return (
    <section className="bg-dark">
      <Container className="pt-2">
        <Breadcrumbs
          tone="dark"
          items={[
            { label: "Áreas de Atuação", href: "/areas-de-atuacao" },
            {
              label: area.title,
              href: `/areas-de-atuacao/${area.slug}`,
            },
          ]}
        />
      </Container>
      <Container className="grid items-center gap-12 pt-8 pb-section lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h1 className="text-h1 text-creme-100">{area.h1}</h1>
          <p className="mt-6 text-lead text-on-dark-muted">{area.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppButton
              variant="gold"
              message={whatsappMessages[area.whatsappKey]}
            />
            <Link
              href="/contato"
              className="inline-flex min-h-11 items-center justify-center rounded-pill border border-line-gold px-7 text-eyebrow uppercase text-creme-100 transition-all duration-200 ease-in-out hover:border-gold-300 hover:bg-creme-300/10"
            >
              Enviar mensagem
            </Link>
          </div>
        </div>
        <Image
          src={area.photo.src}
          alt={area.alt}
          width={area.photo.width}
          height={area.photo.height}
          priority
          sizes="(max-width: 1024px) 90vw, 420px"
          className="mx-auto aspect-3/4 w-full max-w-sm rounded-card border border-line-gold object-cover object-top shadow-lift"
        />
      </Container>
    </section>
  );
}
