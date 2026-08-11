import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

export default function NotFound() {
  return (
    <section className="py-section">
      <Container narrow className="text-center">
        <p className="text-eyebrow uppercase text-verde-700">Erro 404</p>
        <h1 className="mt-4 text-h1">Página não encontrada</h1>
        <p className="mt-4 text-lead text-muted">
          O endereço que você acessou não existe ou foi movido. Sem problema:
          os caminhos abaixo levam você de volta.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-pill bg-dark px-7 text-eyebrow uppercase text-creme-100 transition-all duration-200 ease-in-out hover:bg-verde-800 hover:shadow-lift"
          >
            Voltar ao início
          </Link>
          <Link
            href="/areas-de-atuacao"
            className="inline-flex min-h-11 items-center justify-center rounded-pill border border-line-gold px-7 text-eyebrow uppercase text-heading transition-all duration-200 ease-in-out hover:border-gold-300 hover:bg-band"
          >
            Áreas de atuação
          </Link>
          <WhatsAppButton variant="gold" />
        </div>
      </Container>
    </section>
  );
}
