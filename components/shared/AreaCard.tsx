import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

type Props = {
  title: string;
  excerpt: string;
  href: string;
  icon: LucideIcon;
};

// Card inteiro clicável, com estado hover/focus visível.
export function AreaCard({ title, excerpt, href, icon: Icon }: Props) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-4 rounded-card border border-line bg-card p-8 shadow-card transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lift"
    >
      <Icon aria-hidden strokeWidth={1.5} className="size-8 text-accent" />
      <h3 className="text-h3">{title}</h3>
      <p className="text-foreground">{excerpt}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-2 text-eyebrow uppercase text-verde-700 transition-colors duration-200 group-hover:text-heading">
        Saiba mais
        <ArrowRight
          aria-hidden
          strokeWidth={1.5}
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
