import { Check } from "lucide-react";
import type { Area } from "@/content/areas";
import { Container } from "@/components/layout/Container";

export function AreaContent({ area }: { area: Area }) {
  return (
    <section className="py-section">
      <Container narrow>
        <h2 className="text-h2">{area.comoAtuamosTitle}</h2>
        <p className="mt-6 text-foreground">{area.comoAtuamos}</p>

        <h2 className="mt-16 text-h2">Situações em que podemos ajudar</h2>
        <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {area.situacoes.map((situacao) => (
            <li key={situacao} className="flex items-start gap-3">
              <Check
                aria-hidden
                strokeWidth={1.5}
                className="mt-1 size-5 shrink-0 text-accent"
              />
              <span className="text-foreground">{situacao}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 text-h2">Como funciona</h2>
        <p className="mt-6 text-foreground">{area.comoFunciona}</p>
      </Container>
    </section>
  );
}
