import { Ear, Eye, Route } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

// Passos literais de docs/COPY.md — Home, "Como funciona o atendimento"
// (título e descrição separados no travessão do texto original).
const passos = [
  {
    icon: WhatsAppIcon,
    title: "Você entra em contato",
    text: "pelo WhatsApp ou pelo formulário, e conta o que está acontecendo.",
  },
  {
    icon: Ear,
    title: "A gente escuta e analisa",
    text: "entendemos o problema em detalhe e esclarecemos suas dúvidas.",
  },
  {
    icon: Route,
    title: "Definimos a estratégia",
    text: "apresentamos os caminhos possíveis em linguagem clara, para você decidir com segurança.",
  },
  {
    icon: Eye,
    title: "Acompanhamento próximo",
    text: "você é mantido informado sobre cada fase da sua demanda.",
  },
] as const;

export function ProcessoAtendimento() {
  return (
    <section className="pb-section">
      <Container>
        <h2 className="text-h2">Como funciona o atendimento</h2>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {passos.map((passo, i) => (
            <li
              key={passo.title}
              className="rounded-card border border-line bg-card p-8 shadow-card"
            >
              <div className="flex items-center justify-between">
                <span
                  aria-hidden
                  className="font-display text-h2 text-accent-strong"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <passo.icon
                  aria-hidden
                  strokeWidth={1.5}
                  className="size-6 text-accent"
                />
              </div>
              <h3 className="mt-4 text-h3">{passo.title}</h3>
              <p className="mt-2 text-foreground">{passo.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
