import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-pill px-7 text-eyebrow uppercase transition-all duration-200 ease-in-out";

const variants = {
  primary: "bg-dark text-creme-100 hover:bg-verde-800 hover:shadow-lift",
  gold: "bg-[image:var(--gold-gradient)] text-verde-950 hover:brightness-105 hover:shadow-lift",
  "outline-light":
    "border border-line-gold text-creme-100 hover:border-gold-300 hover:bg-creme-300/10",
} as const;

type Props = {
  variant?: keyof typeof variants;
  message?: string;
  label?: string;
  className?: string;
};

export function WhatsAppButton({
  variant = "primary",
  message,
  label = "Falar no WhatsApp",
  className = "",
}: Props) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      <WhatsAppIcon aria-hidden className="size-4" />
      {label}
    </a>
  );
}
