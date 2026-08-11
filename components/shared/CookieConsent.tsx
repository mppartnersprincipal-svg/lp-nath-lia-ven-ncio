"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";

const STORAGE_KEY = "va-cookie-consent";
const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;

// A escolha vive no localStorage; useSyncExternalStore lê sem setState em
// effect e sem mismatch de hidratação (no servidor renderiza nada).
let listeners: (() => void)[] = [];
function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}
function getSnapshot() {
  return localStorage.getItem(STORAGE_KEY);
}
function getServerSnapshot() {
  return "server";
}
function persist(value: "accepted" | "rejected") {
  localStorage.setItem(STORAGE_KEY, value);
  listeners.forEach((l) => l());
}

// Estado do consentimento para outros componentes (ex.: WhatsAppFloat se
// esconde enquanto o banner está aberto, para não ficar coberto por ele).
export function useCookieConsent() {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return stored === "server"
    ? null
    : stored === "accepted" || stored === "rejected"
      ? stored
      : "pending";
}

// Banner de consentimento LGPD. O GA4 só é carregado após o aceite —
// nenhum cookie de estatística é criado antes disso.
export function CookieConsent() {
  const consent = useCookieConsent();

  // Evento whatsapp_click: listener global em links wa.me (só com GA ativo).
  useEffect(() => {
    if (consent !== "accepted" || !GA_ID) return;
    function onClick(event: MouseEvent) {
      const link = (event.target as HTMLElement).closest?.(
        'a[href*="wa.me"]',
      ) as HTMLAnchorElement | null;
      if (link) {
        window.gtag?.("event", "whatsapp_click", {
          link_url: link.href,
          page_path: window.location.pathname,
        });
      }
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [consent]);

  function choose(value: "accepted" | "rejected") {
    persist(value);
  }

  return (
    <>
      {consent === "accepted" && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });`}
          </Script>
        </>
      )}

      {consent === "pending" && (
        <div
          role="region"
          aria-label="Consentimento de cookies"
          className="sticky bottom-0 z-40 w-full border-t border-line-gold bg-dark"
        >
          <div className="mx-auto flex w-full max-w-site flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between md:px-6">
            <p className="text-small text-on-dark-muted">
              Usamos cookies apenas para medir o uso do site (Google
              Analytics), e somente com o seu consentimento. Saiba mais na{" "}
              <Link
                href="/politica-de-privacidade"
                className="text-gold-300 underline-offset-4 transition-colors duration-200 hover:text-creme-100 hover:underline"
              >
                Política de Privacidade
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => choose("rejected")}
                className="inline-flex min-h-11 items-center justify-center rounded-pill border border-line-gold px-6 text-eyebrow uppercase text-creme-100 transition-all duration-200 ease-in-out hover:border-gold-300 hover:bg-creme-300/10"
              >
                Recusar
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="inline-flex min-h-11 items-center justify-center rounded-pill bg-[image:var(--gold-gradient)] px-6 text-eyebrow uppercase text-verde-950 transition-all duration-200 ease-in-out hover:brightness-105 hover:shadow-lift"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
