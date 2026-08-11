// Fonte única de verdade do NAP (Name, Address, Phone) e contatos.
// Usar em todo lugar — nunca digitar telefone/endereço direto em componente.
export const site = {
  name: "Venâncio Advocacia",
  lawyer: "Nathália Venâncio de Abreu",
  oab: "OAB/GO 76.040",
  phoneDisplay: "(62) 99309-1434",
  phoneE164: "+5562993091434",
  email: "contato@nathaliavenancioadv.com",
  address: {
    street: "Rua Tupis, Qd 30, Lt 18",
    district: "Setor Urias Magalhães",
    city: "Goiânia",
    state: "GO",
    zip: "74565-650",
    country: "BR",
  },
  hours: "Segunda a sexta, das 08:00 às 18:00",
  whatsappLink: "https://wa.me/5562993091434",
  whatsappMsgLink: "https://wa.me/message/5SOYSCDWWZHXI1",
  instagram: "https://www.instagram.com/venancioadvocacia_",
  baseUrl: "https://nathaliavenancioadv.com", // ajustar ao domínio final
} as const;
