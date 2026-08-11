"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionItem = { question: string; answer: string };

// Accordion acessível: button com aria-expanded/aria-controls + região
// role="region". Um item aberto por vez; funciona por teclado nativamente.
export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="divide-y divide-line rounded-card border border-line bg-card shadow-card">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-botao-${i}`;
        const panelId = `${baseId}-painel-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-11 w-full items-center justify-between gap-4 px-6 py-4 text-left font-sans text-body font-medium text-heading transition-colors duration-200 hover:text-verde-700"
              >
                {item.question}
                <ChevronDown
                  aria-hidden
                  strokeWidth={1.5}
                  className={`size-5 shrink-0 text-accent transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-6 pb-5"
            >
              <p className="text-foreground">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
