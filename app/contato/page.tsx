import type { Metadata } from "next";
import { AtSign, Clock, Globe, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { site } from "@/lib/site";
import { waLink, whatsappMessages } from "@/lib/whatsapp";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { MapEmbed } from "@/components/shared/MapEmbed";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: { absolute: "Contato | Advogada em Goiânia | Venâncio Advocacia" },
  description:
    "Fale com a Venâncio Advocacia em Goiânia: WhatsApp (62) 99309-1434, e-mail e formulário. Atendimento de segunda a sexta, 8h às 18h.",
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Contato | Advogada em Goiânia | Venâncio Advocacia",
    description:
      "Fale com a Venâncio Advocacia em Goiânia: WhatsApp (62) 99309-1434, e-mail e formulário. Atendimento de segunda a sexta, 8h às 18h.",
    type: "website",
    url: "/contato",
    images: [{ url: "/og/og-contato.png", width: 1200, height: 630 }],
  },
};

const napItem = "flex items-start gap-3 py-2 text-foreground";
const napIcon = "mt-1 size-4 shrink-0 text-accent";
const napLink =
  "font-medium text-heading underline underline-offset-4 transition-colors duration-200 hover:text-verde-700";

export default function Contato() {
  return (
    <>
      <section>
        <Container>
          <Breadcrumbs items={[{ label: "Contato", href: "/contato" }]} />
          <h1 className="mt-4 text-h1">Fale com a Venâncio Advocacia</h1>
          <p className="mt-4 max-w-narrow text-lead text-muted">
            Conte o que está acontecendo: o primeiro passo é uma conversa.
            Você pode falar direto no WhatsApp, enviar uma mensagem pelo
            formulário ou nos escrever por e-mail. O atendimento é próximo do
            início ao fim.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Bloco NAP — dados de lib/site.ts */}
          <div className="h-fit rounded-card border border-line bg-card p-8 shadow-card">
            <ul>
              <li className={napItem}>
                <WhatsAppIcon aria-hidden className={napIcon} />
                <span>
                  <strong className="font-medium text-heading">
                    WhatsApp / Telefone:
                  </strong>{" "}
                  <a
                    href={waLink(whatsappMessages.sobreContato)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={napLink}
                  >
                    {site.phoneDisplay}
                  </a>
                </span>
              </li>
              <li className={napItem}>
                <Mail aria-hidden strokeWidth={1.5} className={napIcon} />
                <span className="min-w-0 wrap-anywhere">
                  <strong className="font-medium text-heading">E-mail:</strong>{" "}
                  <a href={`mailto:${site.email}`} className={napLink}>
                    {site.email}
                  </a>
                </span>
              </li>
              <li className={napItem}>
                <MapPin aria-hidden strokeWidth={1.5} className={napIcon} />
                <span>
                  <strong className="font-medium text-heading">Endereço:</strong>{" "}
                  {site.address.street}, {site.address.district},{" "}
                  {site.address.city}/{site.address.state}, CEP{" "}
                  {site.address.zip}
                </span>
              </li>
              <li className={napItem}>
                <Clock aria-hidden strokeWidth={1.5} className={napIcon} />
                <span>
                  <strong className="font-medium text-heading">Horário:</strong>{" "}
                  {site.hours}
                </span>
              </li>
              <li className={napItem}>
                <Globe aria-hidden strokeWidth={1.5} className={napIcon} />
                <span>
                  <strong className="font-medium text-heading">
                    Atendimento:
                  </strong>{" "}
                  presencial em Goiânia e online para todo o Brasil
                </span>
              </li>
              <li className={napItem}>
                <AtSign aria-hidden strokeWidth={1.5} className={napIcon} />
                <span>
                  <strong className="font-medium text-heading">
                    Instagram:
                  </strong>{" "}
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={napLink}
                  >
                    @venancioadvocacia_
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Formulário */}
          <div>
            <h2 className="text-h2">Envie uma mensagem</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Localização */}
      <section className="pb-section">
        <Container>
          <h2 className="text-h2">Nossa localização</h2>
          <p className="mt-4 text-foreground">
            Atendemos presencialmente no Setor Urias Magalhães, em Goiânia.
          </p>
          <div className="mt-8">
            <MapEmbed />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-dark">
        <Container narrow className="py-section text-center">
          <h2 className="text-h2 text-creme-100">Prefere conversa direta?</h2>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              variant="gold"
              message={whatsappMessages.sobreContato}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
