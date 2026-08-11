import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

// Botão flutuante fixo — alvo de toque 56px (≥ 44px).
export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-5 z-30 flex size-14 items-center justify-center rounded-pill border border-line-gold bg-dark text-gold-300 shadow-lift transition-all duration-200 ease-in-out hover:bg-verde-800"
    >
      <WhatsAppIcon aria-hidden className="size-6" />
    </a>
  );
}
