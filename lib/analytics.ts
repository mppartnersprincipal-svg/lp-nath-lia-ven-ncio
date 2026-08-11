// Helper de eventos GA4 — só dispara se o gtag foi carregado
// (ou seja, após o consentimento de cookies).
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    window.gtag?.("event", name, params);
  }
}
