import Image from "next/image";
import Link from "next/link";
import { AtSign, Clock, Globe, Mail, MapPin, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";
import { areas } from "@/content/areas";
import { Container } from "@/components/layout/Container";
import { OabNotice } from "@/components/shared/OabNotice";

const footerLink =
  "block py-2 text-on-dark-muted transition-colors duration-200 hover:text-gold-300";

const columnTitle = "text-eyebrow uppercase text-gold-300";

export function Footer() {
  return (
    <footer className="bg-dark text-on-dark">
      {/* Filete dourado — motivo central da marca */}
      <div aria-hidden className="h-px" style={{ background: "var(--gold-gradient)" }} />

      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" aria-label="Venâncio Advocacia — página inicial">
            <Image
              src="/logo/logo-header.png"
              alt="Venâncio Advocacia — logotipo do escritório da advogada Nathália Venâncio, em Goiânia"
              width={655}
              height={515}
              className="h-20 w-auto"
            />
          </Link>
          <p className="mt-6 text-on-dark-muted">
            Advocacia com atendimento próximo, em Goiânia e em todo o Brasil.
          </p>
          <p className="mt-3">
            {site.lawyer} — {site.oab}
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <p className={columnTitle}>Navegação</p>
          <ul className="mt-4">
            <li><Link href="/" className={footerLink}>Início</Link></li>
            <li><Link href="/areas-de-atuacao" className={footerLink}>Áreas de Atuação</Link></li>
            <li><Link href="/sobre" className={footerLink}>Sobre</Link></li>
            <li><Link href="/blog" className={footerLink}>Blog</Link></li>
            <li><Link href="/contato" className={footerLink}>Contato</Link></li>
          </ul>
        </nav>

        <nav aria-label="Áreas de atuação">
          <p className={columnTitle}>Áreas de Atuação</p>
          <ul className="mt-4">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link href={`/areas-de-atuacao/${area.slug}`} className={footerLink}>
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={columnTitle}>Contato</p>
          <ul className="mt-4">
            <li className="flex items-start gap-3 py-2 text-on-dark-muted">
              <MapPin aria-hidden strokeWidth={1.5} className="mt-1 size-4 shrink-0 text-gold-300" />
              <span>
                {site.address.street} — {site.address.district},{" "}
                {site.address.city}/{site.address.state} — CEP {site.address.zip}
              </span>
            </li>
            <li>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`${footerLink} flex items-center gap-3`}
              >
                <MessageCircle aria-hidden strokeWidth={1.5} className="size-4 shrink-0 text-gold-300" />
                WhatsApp: {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={`${footerLink} flex items-center gap-3`}>
                <Mail aria-hidden strokeWidth={1.5} className="size-4 shrink-0 text-gold-300" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3 py-2 text-on-dark-muted">
              <Clock aria-hidden strokeWidth={1.5} className="mt-1 size-4 shrink-0 text-gold-300" />
              <span>{site.hours}</span>
            </li>
            <li className="flex items-start gap-3 py-2 text-on-dark-muted">
              <Globe aria-hidden strokeWidth={1.5} className="mt-1 size-4 shrink-0 text-gold-300" />
              <span>Atendimento nacional (presencial e online)</span>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${footerLink} flex items-center gap-3`}
              >
                <AtSign aria-hidden strokeWidth={1.5} className="size-4 shrink-0 text-gold-300" />
                @venancioadvocacia_
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line-gold">
        <Container className="flex flex-col gap-4 py-8">
          <OabNotice />
          <div className="flex flex-col gap-2 text-small text-on-dark-muted md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}. Todos os direitos
              reservados.
            </p>
            <Link
              href="/politica-de-privacidade"
              className="text-on-dark-muted transition-colors duration-200 hover:text-gold-300"
            >
              Política de Privacidade
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
