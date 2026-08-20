import type { whatsappMessages } from "@/lib/whatsapp";

// Dados estruturados das áreas de atuação.
// Toda a copy é transcrição literal de docs/COPY.md (páginas 2 a 5) —
// não editar sem revisão da advogada responsável.

export type Area = {
  title: string;
  slug: string;
  cardExcerpt: string;
  whatsappKey: keyof typeof whatsappMessages;
  photo: { src: string; width: number; height: number };
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  h1: string;
  intro: string;
  alt: string;
  comoAtuamosTitle: string;
  comoAtuamos: string;
  situacoes: string[];
  comoFunciona: string;
  faq: { question: string; answer: string }[];
  ctaTitle: string;
  ctaText: string;
};

export const areas: Area[] = [
  {
    title: "Direito do Consumidor",
    slug: "direito-do-consumidor",
    cardExcerpt:
      "Cobrança indevida, nome negativado, produto ou serviço com problema? Você tem direitos, e nós explicamos quais.",
    whatsappKey: "consumidor",
    photo: {
      src: "/images/nathalia/nathalia-retrato.webp",
      width: 900,
      height: 1600,
    },
    seo: {
      title: "Advogado do Consumidor em Goiânia | Venâncio Advocacia",
      description:
        "Cobrança indevida, nome negativado ou problema com produto/serviço? Entenda seus direitos com atendimento claro em Goiânia. Fale no WhatsApp.",
      ogTitle: "Direito do Consumidor em Goiânia | Venâncio Advocacia",
      ogDescription:
        "Seus direitos como consumidor, explicados de forma clara. Atuação em Goiânia e em todo o Brasil.",
    },
    h1: "Advogado do Consumidor: seus direitos, explicados de forma clara",
    intro:
      "Você pagou por um produto que não chegou, teve o nome negativado por uma dívida que não reconhece, ou viu uma cobrança que não deveria estar ali? Situações assim geram angústia. Na maioria das vezes, porém, existem direitos que protegem o consumidor. Aqui, você primeiro entende o que aconteceu e quais caminhos existem, para depois decidir com segurança.",
    alt: "Nathália Venâncio, advogada de Direito do Consumidor em Goiânia",
    comoAtuamosTitle: "Como a Venâncio Advocacia atua no Direito do Consumidor",
    comoAtuamos:
      "O Código de Defesa do Consumidor existe para equilibrar a relação entre você e as empresas. Nossa atuação é orientar, esclarecer e buscar a proteção dos seus direitos diante de irregularidades em produtos ou serviços, sempre explicando o passo a passo em linguagem que você entende.",
    situacoes: [
      "Vícios, defeitos e falhas no atendimento;",
      "Demora ou não recebimento de mercadorias;",
      "Conflitos em transações comerciais;",
      "Faturamentos e cobranças indevidas;",
      "Inserção injustificada em órgãos de proteção ao crédito (nome negativado);",
      "Divergências com prestadores de serviço e fornecedores;",
      "Quebra de acordos ou de propostas publicitárias;",
      "Ações de indenização por danos ao consumidor;",
      "Demais impasses do mercado de consumo.",
    ],
    comoFunciona:
      "Começamos ouvindo o seu caso e analisando os documentos (contratos, comprovantes, prints, protocolos). Em seguida, explicamos as alternativas, que vão da tentativa de solução direta com a empresa até a ação judicial, quando for o caminho adequado. Assim você decide o próximo passo com clareza.",
    faq: [
      {
        question:
          "Meu nome foi negativado por uma dívida que já paguei (ou que não é minha). O que fazer?",
        answer:
          "Reúna os comprovantes e o extrato da negativação (Serasa/SPC). É possível pedir a retirada do nome e, dependendo do caso, discutir indenização por danos morais. Cada situação é analisada individualmente.",
      },
      {
        question:
          "Cobraram um valor que eu não reconheço. Isso é cobrança indevida?",
        answer:
          "Pode ser. Guarde a fatura, o contrato e qualquer comunicação com a empresa. A partir da análise dos documentos, avaliamos se a cobrança é irregular e quais são os caminhos.",
      },
      {
        question:
          "Comprei um produto com defeito e não querem trocar. Tenho direito?",
        answer:
          "O Código de Defesa do Consumidor prevê prazos e regras para vícios de produtos e serviços. Vale reunir nota fiscal e registros do contato com a loja para avaliar o seu direito.",
      },
      {
        question: "A loja não entregou o produto que comprei. E agora?",
        answer:
          "Guarde o comprovante de compra e os prazos prometidos. Há caminhos para exigir a entrega, o cancelamento com devolução do valor ou reparação, conforme o caso.",
      },
      {
        question: "Tenho direito a indenização por danos morais?",
        answer:
          "Depende. Em algumas situações (como negativação indevida), a jurisprudência reconhece o dano de forma mais direta; em outras, é preciso demonstrar o prejuízo. A análise do caso concreto é essencial.",
      },
      {
        question:
          "Preciso tentar resolver com a empresa antes de procurar a Justiça?",
        answer:
          "Nem sempre, mas registrar a tentativa (protocolos, reclamação no consumidor.gov.br) costuma fortalecer o caso. Orientamos sobre a melhor ordem de passos.",
      },
      {
        question: "Vocês atendem consumidores fora de Goiânia?",
        answer:
          "Sim. O atendimento é presencial em Goiânia e online para todo o Brasil.",
      },
      {
        question: "Quais documentos devo separar para a primeira conversa?",
        answer:
          "Contratos, notas fiscais, faturas, extratos, prints de conversas, protocolos de atendimento e qualquer registro relacionado ao problema.",
      },
    ],
    ctaTitle: "Passou por alguma dessas situações?",
    ctaText: "Conte o que aconteceu e entenda seus direitos.",
  },
  {
    title: "Direito Bancário",
    slug: "direito-bancario",
    cardExcerpt:
      "Financiamento, empréstimo consignado que você não reconhece ou busca e apreensão do veículo. Entenda como se defender.",
    whatsappKey: "bancario",
    photo: {
      src: "/images/nathalia/nathalia-retrato-oculos.webp",
      width: 900,
      height: 1600,
    },
    seo: {
      title: "Advogado de Direito Bancário em Goiânia | Venâncio Advocacia",
      description:
        "Busca e apreensão, revisional de financiamento e consignado que você não reconhece? Entenda como se defender em Goiânia. Fale no WhatsApp.",
      ogTitle: "Direito Bancário em Goiânia | Venâncio Advocacia",
      ogDescription:
        "Defesa em busca e apreensão, revisional e consignado indevido, com linguagem clara.",
    },
    h1: "Advogado de Direito Bancário: financiamentos, consignado e busca e apreensão",
    intro:
      "Recebeu uma notificação de busca e apreensão do seu carro? Descobriu um desconto de empréstimo que você nunca contratou? Desconfia que está pagando juros altos demais no financiamento? Momentos assim assustam, mas existem direitos e caminhos. Aqui, você entende a sua situação com calma antes de decidir o que fazer.",
    alt: "Nathália Venâncio, advogada de Direito Bancário em Goiânia",
    comoAtuamosTitle: "Como a Venâncio Advocacia atua no Direito Bancário",
    comoAtuamos:
      "Atuamos na defesa de consumidores e clientes em conflitos com instituições financeiras. A ideia é simples: analisar o seu contrato, identificar o que pode estar irregular e explicar as alternativas, sempre com transparência e sem prometer resultado.",
    situacoes: [
      "Empréstimos consignados (inclusive descontos que você não reconhece);",
      "Empréstimos não consignados;",
      "Análise e revisão de contratos bancários;",
      "Financiamento de veículos e de imóveis;",
      "Defesa em ações de busca e apreensão de veículos;",
      "Cobranças e descontos bancários;",
      "Análise de juros e encargos contratuais;",
      "Demais conflitos de relações bancárias.",
    ],
    comoFunciona:
      "Começamos analisando o contrato e os documentos (extratos, notificações, comprovantes). Verificamos cláusulas, juros e encargos, e explicamos as opções: defesa em busca e apreensão, revisão de contrato ou contestação de consignado. Você entende cada passo antes de decidir.",
    faq: [
      {
        question:
          "Recebi uma notificação de busca e apreensão do meu carro. O que fazer primeiro?",
        answer:
          "Mantenha a calma, leia a notificação e reúna o contrato, os comprovantes de pagamento e a notificação recebida. Quanto antes o caso for analisado, mais alternativas de defesa costumam existir.",
      },
      {
        question:
          "O banco pode tomar meu veículo com quantas parcelas atrasadas?",
        answer:
          "A instituição pode iniciar a ação após a mora ficar caracterizada e o devedor ser notificado. Cada caso depende do contrato e da regularidade da notificação, por isso a análise é importante.",
      },
      {
        question: "O que é uma ação revisional de financiamento?",
        answer:
          "É a ação em que se pede ao Judiciário a revisão de cláusulas do contrato, como juros e encargos considerados abusivos. O objetivo é reequilibrar o contrato; o resultado depende da análise técnica de cada caso.",
      },
      {
        question:
          "Apareceu um empréstimo consignado que eu não contratei. O que fazer?",
        answer:
          "Consulte o extrato no Meu INSS ou no seu holerite, reúna os documentos e registre a contestação. É possível pedir o cancelamento, a devolução dos valores e, conforme o caso, indenização.",
      },
      {
        question: "Como sei se os juros do meu contrato são abusivos?",
        answer:
          "Não existe um teto único, mas juros muito acima da média de mercado para a mesma modalidade podem ser questionados. Isso exige análise do contrato e comparação técnica.",
      },
      {
        question:
          "Já estou com o nome negativado pelo banco. Ainda dá para fazer algo?",
        answer:
          "Sim, é possível avaliar tanto a regularidade da dívida quanto da negativação. Traga o contrato e o extrato da negativação para análise.",
      },
      {
        question: "Vocês atuam com financiamento de imóveis também?",
        answer:
          "Sim, atuamos em conflitos de financiamento de veículos e de imóveis, além de outros contratos bancários.",
      },
      {
        question: "Posso ser atendido de outra cidade?",
        answer:
          "Sim. O atendimento é presencial em Goiânia e online para todo o Brasil.",
      },
    ],
    ctaTitle:
      "Está com um problema bancário ou uma busca e apreensão em andamento?",
    ctaText: "Fale conosco e entenda suas opções de defesa.",
  },
  {
    title: "Direito Cível",
    slug: "direito-civel",
    cardExcerpt:
      "Indenização por danos morais e materiais, contratos e conflitos entre particulares.",
    whatsappKey: "civel",
    photo: {
      src: "/images/nathalia/nathalia-em-pe.webp",
      width: 900,
      height: 1600,
    },
    seo: {
      title: "Advogado de Direito Civil em Goiânia | Venâncio Advocacia",
      description:
        "Indenização por danos morais e materiais, contratos e conflitos entre particulares. Orientação jurídica clara em Goiânia. Fale no WhatsApp.",
      ogTitle: "Direito Civil em Goiânia | Venâncio Advocacia",
      ogDescription:
        "Indenizações, contratos e conflitos civis com atendimento próximo. Goiânia e todo o Brasil.",
    },
    h1: "Advogado de Direito Civil: indenizações, contratos e conflitos",
    intro:
      "Sofreu um prejuízo por culpa de outra pessoa ou empresa? Fechou um acordo que não foi cumprido? Nem todo problema vira processo, mas muita gente deixa passar situações que a Justiça reconhece como dano real. O primeiro passo é uma avaliação séria do que aconteceu, para você saber se há um direito a ser buscado.",
    alt: "Nathália Venâncio, advogada de Direito Civil em Goiânia",
    comoAtuamosTitle: "Como a Venâncio Advocacia atua no Direito Civil",
    comoAtuamos:
      "O Direito Civil rege boa parte das relações do dia a dia: contratos, obrigações, responsabilidade por danos e conflitos entre particulares. Nossa atuação é entender o seu caso, esclarecer se há reparação cabível e apresentar os caminhos, de forma clara e sem prometer resultados.",
    situacoes: [
      "Ações de indenização por danos morais;",
      "Ações de indenização por danos materiais;",
      "Responsabilidade civil;",
      "Conflitos contratuais;",
      "Cobrança e obrigações;",
      "Elaboração e análise de contratos;",
      "Conflitos entre particulares;",
      "Demais demandas de Direito Civil.",
    ],
    comoFunciona:
      "Analisamos os fatos, os documentos e o contexto, verificamos se há fundamento para reparação e explicamos as alternativas (acordo, ação judicial ou revisão de contrato) para que você tome a decisão com informação de qualidade.",
    faq: [
      {
        question: "Qual a diferença entre dano moral e dano material?",
        answer:
          "Dano material é o prejuízo financeiro concreto (o que você perdeu ou deixou de ganhar). Dano moral é o abalo à sua honra, imagem ou tranquilidade. Um mesmo caso pode envolver os dois.",
      },
      {
        question: "Todo aborrecimento dá direito a indenização?",
        answer:
          'Não. A Justiça distingue "mero dissabor" de dano indenizável. A fronteira está nos detalhes do caso, por isso a análise individual é importante.',
      },
      {
        question: "A outra parte não cumpriu o contrato. O que posso fazer?",
        answer:
          "É possível exigir o cumprimento, a rescisão com perdas e danos ou a devolução de valores, conforme o contrato e a situação. Reúna o contrato e as provas do descumprimento.",
      },
      {
        question: "Posso pedir revisão de um contrato que assinei?",
        answer:
          "Em alguns casos, sim, especialmente quando há cláusulas abusivas ou desequilíbrio. A análise do contrato indica se há fundamento.",
      },
      {
        question: "Preciso de contrato escrito para ter direito?",
        answer:
          "Nem sempre. Muitas relações se provam por outros meios (mensagens, comprovantes, testemunhas). Ainda assim, o documento facilita.",
      },
      {
        question: "Quanto tempo tenho para buscar meus direitos?",
        answer:
          "Existem prazos legais (prescrição) que variam conforme o tipo de demanda. Por isso, não convém deixar para depois: vale avaliar o caso o quanto antes.",
      },
      {
        question: "Vocês elaboram e revisam contratos?",
        answer:
          "Sim. Fazemos elaboração e análise de contratos civis, ajudando a prevenir conflitos futuros.",
      },
      {
        question: "Atendem empresas em questões cíveis?",
        answer: "Sim, o escritório atende pessoas físicas e empresas.",
      },
    ],
    ctaTitle: "Teve um prejuízo ou um contrato descumprido?",
    ctaText: "Vamos avaliar o seu caso juntos.",
  },
  {
    title: "Direito da Saúde",
    slug: "direito-da-saude",
    cardExcerpt:
      "Plano de saúde negou cirurgia, exame, medicamento ou tratamento? Saiba o que fazer.",
    whatsappKey: "saude",
    photo: {
      src: "/images/nathalia/nathalia-poltrona.webp",
      width: 900,
      height: 1600,
    },
    seo: {
      title: "Advogado de Plano de Saúde em Goiânia | Venâncio Advocacia",
      description:
        "Plano de saúde negou cirurgia, exame, medicamento ou tratamento? Entenda seus direitos de paciente em Goiânia. Fale no WhatsApp.",
      ogTitle: "Direito da Saúde em Goiânia | Venâncio Advocacia",
      ogDescription:
        "Negativa de cirurgia, exame ou tratamento pelo plano? Entenda seus direitos.",
    },
    h1: "Advogado de Plano de Saúde: quando a negativa pode ser abusiva",
    intro:
      'O médico indicou uma cirurgia, um exame ou um tratamento, e o plano de saúde disse "não". Nessas horas, a sensação é de impotência, ainda mais quando a saúde não pode esperar. A boa notícia é que uma negativa administrativa nem sempre é a palavra final: existem caminhos para proteger o direito do paciente. O primeiro passo é entender a sua situação com clareza.',
    alt: "Nathália Venâncio, advogada de Direito da Saúde em Goiânia",
    comoAtuamosTitle: "Como a Venâncio Advocacia atua no Direito da Saúde",
    comoAtuamos:
      "Atuamos na defesa dos direitos do paciente diante de operadoras de planos de saúde. Analisamos a negativa, o contrato e a indicação médica, e explicamos as alternativas, inclusive o pedido de liminar (tutela de urgência) quando o caso exige rapidez. Tudo com informação honesta e sem prometer resultado.",
    situacoes: [
      "Negativa de cobertura por planos de saúde;",
      "Negativa de procedimentos, exames, cirurgias ou tratamentos;",
      "Falhas na prestação de serviços de saúde;",
      "Conflitos com operadoras de planos de saúde;",
      "Pedidos relacionados à cobertura de tratamentos;",
      "Demais situações envolvendo direitos do paciente.",
    ],
    comoFunciona:
      "Reunimos a negativa (por escrito, quando possível), o relatório médico e o contrato do plano. A partir daí, avaliamos se a recusa pode ser abusiva e explicamos o caminho. Quando há urgência, isso inclui o pedido de decisão liminar para garantir o atendimento enquanto o processo tramita.",
    faq: [
      {
        question: "O plano negou minha cirurgia. Qual o primeiro passo?",
        answer:
          "Peça a negativa por escrito (e-mail, protocolo ou carta), guarde o relatório médico que indica o procedimento e reúna o contrato do plano. Esses documentos são a base para avaliar o caso.",
      },
      {
        question: "O que é uma liminar contra o plano de saúde?",
        answer:
          "É uma decisão provisória que o juiz pode conceder no início do processo para garantir o atendimento com urgência, enquanto a ação ainda tramita. É usada em casos em que a saúde não pode esperar.",
      },
      {
        question: "Em quanto tempo sai uma liminar?",
        answer:
          "Processos de saúde costumam ter prioridade e, dependendo da urgência e da documentação, a decisão pode sair em poucos dias. O prazo varia conforme o caso e o juízo.",
      },
      {
        question:
          "O plano disse que o tratamento não está no rol da ANS. Posso fazer algo?",
        answer:
          "Sim, vale avaliar. Os tribunais têm reconhecido, em muitos casos, que a negativa baseada apenas na ausência no rol pode ser abusiva quando há indicação médica. Cada caso é analisado individualmente.",
      },
      {
        question: "O plano negou um medicamento de alto custo. Isso é comum?",
        answer:
          "Sim, e há caminhos jurídicos para discutir a cobertura quando há prescrição médica. Guarde a prescrição, os laudos e a negativa.",
      },
      {
        question: "E se o plano negar home care (atendimento em casa)?",
        answer:
          "A internação domiciliar costuma gerar conflito, mas a jurisprudência reconhece, em muitos casos, o direito quando há indicação médica. Vale avaliar o seu caso com os documentos.",
      },
      {
        question: "Quais documentos separar antes de falar com a advogada?",
        answer:
          "Relatório/prescrição médica detalhada, a negativa do plano (por escrito, se possível), carteirinha, contrato do plano e comprovantes de pagamento das mensalidades.",
      },
      {
        question: "Vocês atendem pacientes fora de Goiânia?",
        answer:
          "Sim. O atendimento é presencial em Goiânia e online para todo o Brasil, o que ajuda em casos urgentes.",
      },
    ],
    ctaTitle: "Teve um procedimento negado pelo plano?",
    ctaText:
      'Não aceite o "não" como resposta final sem entender seus direitos.',
  },
  // Copy das áreas abaixo (Contratual e Empresarial) é rascunho interno —
  // pendente de revisão da advogada responsável (ver docs/PENDENCIAS.md).
  {
    title: "Direito Contratual",
    slug: "direito-contratual",
    cardExcerpt:
      "Vai assinar, precisa elaborar ou teve um contrato descumprido? Entenda o que está no papel antes de decidir.",
    whatsappKey: "contratual",
    photo: {
      src: "/images/nathalia/nathalia-sobre.webp",
      width: 900,
      height: 1600,
    },
    seo: {
      title: "Advogado de Contratos em Goiânia | Venâncio Advocacia",
      description:
        "Elaboração, análise e revisão de contratos, além de defesa em casos de descumprimento. Orientação clara em Goiânia. Fale no WhatsApp.",
      ogTitle: "Direito Contratual em Goiânia | Venâncio Advocacia",
      ogDescription:
        "Contratos elaborados, revisados e explicados em linguagem clara. Goiânia e todo o Brasil.",
    },
    h1: "Advogado de Contratos: entenda o que você assina e o que pode exigir",
    intro:
      "Vai fechar um negócio e recebeu um contrato cheio de cláusulas difíceis? Assinou um acordo que a outra parte não está cumprindo? O contrato é a segurança de qualquer relação, mas só protege quem entende o que está escrito. Aqui, você recebe orientação para elaborar, revisar ou discutir um contrato antes de tomar qualquer decisão.",
    alt: "Nathália Venâncio, advogada de Direito Contratual em Goiânia",
    comoAtuamosTitle: "Como a Venâncio Advocacia atua no Direito Contratual",
    comoAtuamos:
      "Atuamos tanto na prevenção quanto no conflito: elaboramos e revisamos contratos para evitar problemas futuros e defendemos seus interesses quando um contrato é descumprido ou contém cláusulas abusivas. Sempre explicando, em linguagem simples, o que cada cláusula significa para você.",
    situacoes: [
      "Elaboração de contratos (prestação de serviços, compra e venda, locação e outros);",
      "Análise e revisão de contratos antes da assinatura;",
      "Revisão de cláusulas abusivas ou desequilibradas;",
      "Descumprimento de contrato pela outra parte;",
      "Rescisão e distrato de contratos;",
      "Cobrança de valores previstos em contrato;",
      "Negociação e formalização de acordos;",
      "Demais conflitos de natureza contratual.",
    ],
    comoFunciona:
      "Se o objetivo é prevenir, analisamos a negociação e elaboramos (ou revisamos) o contrato com cláusulas claras e equilibradas. Se o conflito já existe, examinamos o contrato e as provas do descumprimento e explicamos as alternativas: negociação, notificação extrajudicial ou ação judicial. Você decide com clareza.",
    faq: [
      {
        question: "Vale a pena pagar um advogado para revisar um contrato?",
        answer:
          "A revisão antes da assinatura costuma custar muito menos do que um conflito depois. É nela que se identificam cláusulas de multa, garantias, prazos e condições que podem pesar contra você.",
      },
      {
        question: "Assinei um contrato ruim. Ainda posso fazer algo?",
        answer:
          "Em alguns casos, sim. Cláusulas abusivas ou situações de desequilíbrio podem ser revistas, e há hipóteses legais de rescisão. A análise do documento indica os caminhos possíveis.",
      },
      {
        question: "A outra parte não está cumprindo o contrato. O que fazer?",
        answer:
          "Reúna o contrato e as provas do descumprimento (mensagens, comprovantes, notificações). É possível exigir o cumprimento, a rescisão com perdas e danos ou a devolução de valores, conforme o caso.",
      },
      {
        question: "Contrato verbal tem validade?",
        answer:
          "Em regra, sim, mas provar o que foi combinado é mais difícil. Mensagens, áudios, comprovantes de pagamento e testemunhas ajudam. Sempre que possível, formalize por escrito.",
      },
      {
        question: "O que é uma notificação extrajudicial?",
        answer:
          "É uma comunicação formal enviada à outra parte antes de uma ação judicial, registrando o problema e dando oportunidade de solução. Em muitos casos, resolve o conflito sem processo.",
      },
      {
        question: "Posso desistir de um contrato que assinei?",
        answer:
          "Depende do tipo de contrato e do momento. Em compras fora do estabelecimento comercial, por exemplo, há direito de arrependimento em 7 dias. Em outros casos, é preciso analisar as cláusulas de rescisão.",
      },
      {
        question: "Vocês elaboram contratos para empresas também?",
        answer:
          "Sim. Atendemos pessoas físicas e empresas, tanto na elaboração quanto na revisão e nos conflitos contratuais.",
      },
      {
        question: "Posso ser atendido de outra cidade?",
        answer:
          "Sim. O atendimento é presencial em Goiânia e online para todo o Brasil.",
      },
    ],
    ctaTitle: "Vai assinar um contrato ou teve um acordo descumprido?",
    ctaText: "Entenda o que está no papel antes de dar o próximo passo.",
  },
  {
    title: "Direito Empresarial",
    slug: "direito-empresarial",
    cardExcerpt:
      "Assessoria jurídica para a sua empresa: contratos, cobranças, conflitos com fornecedores e prevenção de problemas.",
    whatsappKey: "empresarial",
    photo: {
      src: "/images/nathalia/nathalia-escritorio.webp",
      width: 900,
      height: 1600,
    },
    seo: {
      title: "Advogado Empresarial em Goiânia | Venâncio Advocacia",
      description:
        "Assessoria jurídica para empresas: contratos, cobranças e conflitos com fornecedores e clientes. Atendimento claro em Goiânia. Fale no WhatsApp.",
      ogTitle: "Direito Empresarial em Goiânia | Venâncio Advocacia",
      ogDescription:
        "Apoio jurídico para o dia a dia da sua empresa, com linguagem clara. Goiânia e todo o Brasil.",
    },
    h1: "Advogado Empresarial: apoio jurídico para o dia a dia da sua empresa",
    intro:
      "Quem empreende sabe: um contrato mal feito, um cliente que não paga ou um conflito com fornecedor pode comprometer meses de trabalho. Muitos desses problemas podem ser evitados (ou resolvidos) com orientação jurídica adequada. Aqui, sua empresa encontra apoio para prevenir conflitos e para agir quando eles já existem, sempre em linguagem que você entende.",
    alt: "Nathália Venâncio, advogada de Direito Empresarial em Goiânia",
    comoAtuamosTitle: "Como a Venâncio Advocacia atua no Direito Empresarial",
    comoAtuamos:
      "Atuamos ao lado de empresários e pequenas e médias empresas, tanto no consultivo (prevenção, contratos, orientação nas decisões do dia a dia) quanto no contencioso (defesa e cobrança em conflitos). O objetivo é dar segurança jurídica para que você foque no seu negócio.",
    situacoes: [
      "Elaboração e revisão de contratos empresariais;",
      "Contratos com fornecedores, clientes e prestadores de serviço;",
      "Cobrança e recuperação de créditos (clientes inadimplentes);",
      "Conflitos com fornecedores e parceiros comerciais;",
      "Defesa da empresa em ações cíveis e de consumo;",
      "Consultivo preventivo para o dia a dia do negócio;",
      "Elaboração e análise de acordos e distratos;",
      "Demais demandas empresariais.",
    ],
    comoFunciona:
      "Começamos entendendo o seu negócio e a situação concreta: um contrato a fechar, um cliente inadimplente, um conflito em andamento. A partir daí, explicamos os riscos e as alternativas, do acordo extrajudicial à ação judicial, para que a decisão seja sua e bem informada.",
    faq: [
      {
        question: "Minha empresa é pequena. Preciso mesmo de advogado?",
        answer:
          "Pequenas empresas costumam ser as mais afetadas por contratos mal feitos e inadimplência, justamente por terem menos margem para absorver prejuízos. A orientação preventiva evita boa parte desses problemas.",
      },
      {
        question: "Um cliente não pagou. Como funciona a cobrança?",
        answer:
          "Reunimos os documentos da dívida (contrato, notas, comprovantes) e avaliamos o caminho: cobrança amigável, notificação extrajudicial, protesto ou ação judicial. A ordem dos passos depende do caso.",
      },
      {
        question:
          "Posso usar um modelo de contrato pronto da internet na minha empresa?",
        answer:
          "É arriscado. Modelos genéricos não refletem a realidade do seu negócio e costumam deixar lacunas justamente nos pontos que geram conflito (multa, prazos, rescisão, garantias).",
      },
      {
        question: "O que é o consultivo preventivo?",
        answer:
          "É o acompanhamento jurídico do dia a dia da empresa: revisão de contratos antes da assinatura, orientação em negociações e adequação de práticas, para evitar que problemas virem processos.",
      },
      {
        question: "Minha empresa foi processada. Qual o primeiro passo?",
        answer:
          "Não deixe o prazo passar. Guarde a citação e os documentos relacionados ao caso e procure orientação o quanto antes: os prazos de defesa são curtos e correm rápido.",
      },
      {
        question: "Vocês atendem MEI e autônomos?",
        answer:
          "Sim. Atendemos desde o MEI e o profissional autônomo até pequenas e médias empresas, adaptando a orientação à realidade de cada negócio.",
      },
      {
        question: "Como funciona o atendimento para empresas de outras cidades?",
        answer:
          "O atendimento é presencial em Goiânia e online para todo o Brasil, o que permite acompanhar empresas de qualquer região.",
      },
      {
        question: "Quais documentos separar para a primeira conversa?",
        answer:
          "Contrato social ou CCMEI, os contratos relacionados ao problema, comprovantes, notas fiscais e registros de conversas com a outra parte.",
      },
    ],
    ctaTitle: "Sua empresa está com um problema jurídico ou quer prevenir?",
    ctaText: "Fale conosco e entenda as opções para o seu negócio.",
  },
];

export function getArea(slug: string): Area {
  const area = areas.find((a) => a.slug === slug);
  if (!area) throw new Error(`Área não encontrada: ${slug}`);
  return area;
}

// Áreas atendidas por parceiros — menor destaque, sem página própria.
export const partnerAreas = ["Previdenciário", "Criminal", "Tributário"] as const;
