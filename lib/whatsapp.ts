import { site } from "./site";

// Mensagens pré-preenchidas por página (docs/COPY.md — elementos globais)
export const whatsappMessages = {
  home: "Olá! Vim pelo site da Venâncio Advocacia e gostaria de tirar uma dúvida.",
  consumidor:
    "Olá! Vim pelo site e gostaria de falar sobre um problema de Direito do Consumidor.",
  civel:
    "Olá! Vim pelo site e gostaria de falar sobre uma questão de Direito Civil.",
  bancario:
    "Olá! Vim pelo site e gostaria de falar sobre uma questão bancária (financiamento, consignado ou busca e apreensão).",
  saude:
    "Olá! Vim pelo site e gostaria de falar sobre um problema com meu plano de saúde.",
  contratual:
    "Olá! Vim pelo site e gostaria de falar sobre um contrato (elaboração, revisão ou descumprimento).",
  empresarial:
    "Olá! Vim pelo site e gostaria de falar sobre uma questão jurídica da minha empresa.",
  sobreContato:
    "Olá, Dra. Nathália! Vim pelo site e gostaria de conversar sobre o meu caso.",
} as const;

export function waLink(message: string = whatsappMessages.home) {
  return `${site.whatsappLink}?text=${encodeURIComponent(message)}`;
}
