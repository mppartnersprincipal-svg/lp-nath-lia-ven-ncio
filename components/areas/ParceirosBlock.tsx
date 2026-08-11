import Link from "next/link";

// Bloco de parceiros — menor destaque. Texto literal de docs/COPY.md.
export function ParceirosBlock() {
  return (
    <div className="rounded-card border border-line-gold bg-card p-6">
      <p className="text-small text-foreground">
        <strong className="font-medium text-heading">
          Outras áreas, com profissionais parceiros:
        </strong>{" "}
        contamos com profissionais parceiros para atuação em Direito
        Previdenciário, Direito Criminal e Direito Tributário.{" "}
        <Link
          href="/contato"
          className="font-medium text-heading underline underline-offset-4 transition-colors duration-200 hover:text-verde-700"
        >
          Fale conosco
        </Link>{" "}
        para ser direcionado.
      </p>
    </div>
  );
}
