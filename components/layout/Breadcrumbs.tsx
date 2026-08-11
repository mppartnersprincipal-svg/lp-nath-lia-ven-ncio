import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { label: string; href: string };

const tones = {
  light: {
    link: "text-foreground hover:text-heading",
    separator: "text-muted",
    current: "text-heading",
  },
  dark: {
    link: "text-on-dark-muted hover:text-gold-300",
    separator: "text-on-dark-muted",
    current: "text-on-dark",
  },
} as const;

// Breadcrumb com JSON-LD BreadcrumbList. "Início" é prefixado automaticamente.
export function Breadcrumbs({
  items,
  tone = "light",
}: {
  items: Crumb[];
  tone?: keyof typeof tones;
}) {
  const t = tones[tone];
  const all: Crumb[] = [{ label: "Início", href: "/" }, ...items];
  const last = all.length - 1;

  return (
    <nav aria-label="Trilha de navegação">
      <ol className="flex flex-wrap items-center gap-1 py-4 text-small">
        {all.map((crumb, i) => (
          <li key={crumb.href} className="flex items-center gap-1">
            {i < last ? (
              <>
                <Link
                  href={crumb.href}
                  className={`inline-flex min-h-11 items-center transition-colors duration-200 ${t.link}`}
                >
                  {crumb.label}
                </Link>
                <ChevronRight
                  aria-hidden
                  strokeWidth={1.5}
                  className={`size-3.5 ${t.separator}`}
                />
              </>
            ) : (
              <span
                aria-current="page"
                className={`inline-flex min-h-11 items-center ${t.current}`}
              >
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
      <JsonLd data={breadcrumbSchema(all)} />
    </nav>
  );
}
