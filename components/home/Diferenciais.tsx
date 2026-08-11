import { Globe, HeartHandshake, MessagesSquare, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";

// Textos literais de docs/COPY.md — Home, "O que faz a diferença".
const itens = [
  {
    icon: HeartHandshake,
    title: "Proximidade real",
    text: "Tempo para ouvir a sua história por inteiro antes de definir qualquer caminho.",
  },
  {
    icon: MessagesSquare,
    title: "Comunicação clara",
    text: "Você entende o que está acontecendo, em que fase está o seu caso e quais são as alternativas, sem juridiquês.",
  },
  {
    icon: ShieldCheck,
    title: "Transparência e responsabilidade",
    text: "Informação honesta sobre os caminhos possíveis, sem promessas.",
  },
  {
    icon: Globe,
    title: "Atendimento nacional",
    text: "Presencial em Goiânia e online para todo o Brasil, com apoio da tecnologia.",
  },
] as const;

export function Diferenciais() {
  return (
    <section className="py-section">
      <Container>
        <h2 className="text-h2">O que faz a diferença no nosso atendimento</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {itens.map((item) => (
            <div key={item.title}>
              <item.icon
                aria-hidden
                strokeWidth={1.5}
                className="size-8 text-accent"
              />
              <h3 className="mt-4 text-h3">{item.title}</h3>
              <p className="mt-2 text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
