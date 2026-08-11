import Link from "next/link";
import type { Area } from "@/content/areas";
import { whatsappMessages } from "@/lib/whatsapp";
import { Container } from "@/components/layout/Container";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

export function AreaCta({ area }: { area: Area }) {
  return (
    <section className="bg-dark">
      <Container narrow className="py-section text-center">
        <h2 className="text-h2 text-creme-100">{area.ctaTitle}</h2>
        <p className="mt-4 text-lead text-on-dark-muted">{area.ctaText}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
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
      </Container>
    </section>
  );
}
