import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

export function CtaSection() {
  return (
    <section className="bg-dark">
      <Container narrow className="py-section text-center">
        <h2 className="text-h2 text-creme-100">
          Tem uma dúvida ou um problema jurídico?
        </h2>
        <p className="mt-4 text-lead text-on-dark-muted">
          Conte o que está acontecendo: o primeiro passo é uma conversa.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <WhatsAppButton variant="gold" />
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
