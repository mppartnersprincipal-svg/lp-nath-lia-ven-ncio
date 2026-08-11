import { site } from "@/lib/site";

// Mapa do Google via iframe — lazy e com title descritivo (docs/COPY.md).
export function MapEmbed() {
  const query = encodeURIComponent(
    `${site.address.street}, ${site.address.district}, ${site.address.city} - ${site.address.state}, ${site.address.zip}`,
  );
  return (
    <iframe
      src={`https://www.google.com/maps?q=${query}&output=embed`}
      title="Mapa da localização da Venâncio Advocacia em Goiânia"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className="h-96 w-full rounded-card border border-line bg-band"
    />
  );
}
