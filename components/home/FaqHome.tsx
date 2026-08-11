import { Container } from "@/components/layout/Container";
import { Accordion } from "@/components/shared/Accordion";
import { JsonLd } from "@/components/shared/JsonLd";
import { faqSchema } from "@/lib/schema";

// Perguntas e respostas literais de docs/COPY.md — FAQ geral da Home.
const faq = [
  {
    question: "A Venâncio Advocacia atende só em Goiânia?",
    answer:
      "Não. O atendimento presencial é em Goiânia/GO, e o escritório também atende clientes de todo o Brasil de forma online, com apoio da tecnologia.",
  },
  {
    question: "Em quais áreas o escritório atua?",
    answer:
      "Direito do Consumidor, Direito Bancário, Direito Cível e Direito da Saúde. Também há atuação, com profissionais parceiros, em Direito Previdenciário, Criminal e Tributário.",
  },
  {
    question: "Atende pessoa física e empresa?",
    answer: "Sim, o escritório atende tanto pessoas físicas quanto empresas.",
  },
  {
    question: "Como faço para falar com a advogada?",
    answer:
      "Pelo WhatsApp (62) 99309-1434, pelo formulário de contato do site ou pelo e-mail contato@nathaliavenancioadv.com.",
  },
  {
    question: "Preciso ir até o escritório?",
    answer:
      "Não necessariamente. Muitos atendimentos podem ser feitos online. Se preferir, o atendimento presencial acontece em Goiânia.",
  },
  {
    question: "Qual o horário de atendimento?",
    answer: "De segunda a sexta-feira, das 08:00 às 18:00.",
  },
  {
    question: "Vou entender o que está acontecendo no meu caso?",
    answer:
      "Sim — esse é justamente o diferencial do escritório: explicar tudo em linguagem simples e manter você informado em cada etapa.",
  },
];

export function FaqHome() {
  return (
    <section className="pb-section">
      <Container narrow>
        <h2 className="text-h2">Perguntas frequentes</h2>
        <div className="mt-12">
          <Accordion items={faq} />
        </div>
      </Container>
      <JsonLd data={faqSchema(faq)} />
    </section>
  );
}
