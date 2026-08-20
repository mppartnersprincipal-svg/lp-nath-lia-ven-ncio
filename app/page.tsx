import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AreasGrid } from "@/components/home/AreasGrid";
import { SobrePreview } from "@/components/home/SobrePreview";
import { Diferenciais } from "@/components/home/Diferenciais";
import { ProcessoAtendimento } from "@/components/home/ProcessoAtendimento";
import { FaqHome } from "@/components/home/FaqHome";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: { absolute: "Advogada em Goiânia | Venâncio Advocacia" },
  description:
    "Advocacia com atendimento próximo e linguagem clara em Goiânia. Atuação em Direito do Consumidor, Bancário, Cível, da Saúde, Contratual e Empresarial. Fale no WhatsApp.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Venâncio Advocacia | Advocacia próxima e clara em Goiânia",
    description:
      "Atuação em Direito do Consumidor, Bancário, Cível, da Saúde, Contratual e Empresarial. Atendimento em Goiânia e em todo o Brasil.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og/og-home.png",
        width: 1200,
        height: 630,
        alt: "Venâncio Advocacia, escritório com atendimento próximo, em Goiânia e em todo o Brasil",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AreasGrid />
      <SobrePreview />
      <Diferenciais />
      <ProcessoAtendimento />
      <FaqHome />
      <CtaSection />
    </>
  );
}
