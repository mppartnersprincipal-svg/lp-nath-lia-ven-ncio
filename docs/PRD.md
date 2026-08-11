Cole este bloco inteiro no Claude Code (VSCode)
PRD — SITE INSTITUCIONAL "VENÂNCIO ADVOCACIA"
Stack obrigatória: Next.js (App Router) + TypeScript + Tailwind CSS
1. Visão geral do projeto

Construir o site institucional multi-página da Venâncio Advocacia (Goiânia/GO), escritório da advogada Nathália Venâncio de Abreu (OAB/GO 76.040). O site deve transmitir seriedade, modernidade, proximidade/humanização e sofisticação; ser 100% otimizado para SEO orgânico local (Goiânia/GO); e estar em total conformidade com o Provimento 205/2021 da OAB. A ação principal do visitante é chamar no WhatsApp (CTA primário); o formulário de contato é o CTA secundário.

Objetivos de negócio
Presença profissional e credibilidade online.
Gerar contatos qualificados (WhatsApp e formulário).
Rankear no Google para as áreas em buscas locais de Goiânia.
Publicar conteúdo educativo (blog/FAQ) que atraia tráfego orgânico e reforce autoridade.
KPIs
Cliques no WhatsApp (evento GA4 whatsapp_click) e envios de formulário (form_submit).
Impressões/cliques por página de área no Google Search Console.
Posição média para as keywords primárias em Goiânia.
Core Web Vitals: LCP < 2,5s, INP < 200ms, CLS < 0,1 (mobile).
Lighthouse ≥ 90 em Performance, SEO, Best Practices, Accessibility.
2. Persona e tom de voz

Persona: pessoa física ou empresa de Goiânia e região enfrentando um problema jurídico concreto (carro em busca e apreensão, cirurgia negada pelo plano, desconto de consignado que não reconhece, nome negativado, dano moral). Está ansiosa, com pouca familiaridade jurídica, e quer entender o que fazer e falar com alguém acessível.

Tom de voz: sóbrio e profissional (exigência da OAB) + próximo, humano e claro (diferencial declarado da advogada). Traduzir juridiquês para linguagem de leigo. Cada seção começa pela dor real do cliente, depois explica o direito, depois convida ao contato — sem promessa de resultado.

3. ⚠️ SEÇÃO CRÍTICA E OBRIGATÓRIA — ASSETS, DESIGN SYSTEM E FOTOS REAIS

Esta seção tem prioridade sobre qualquer decisão estética que o Claude Code venha a tomar. Leia e execute ANTES de escrever qualquer linha de código.

3.1 Estrutura de pastas de origem (no computador do usuário)

Pasta raiz: LP - Nathália Venâncio, com exatamente três subpastas:

Fotos Nathália → fotos profissionais reais da advogada.
Logo → logotipo do escritório.
Design System → identidade visual definida (cores, tipografia, componentes, espaçamentos, raios de borda).
3.2 Regras NUNCA / SEMPRE

🔴 NUNCA:

NUNCA invente cores, fontes, tamanhos, espaçamentos, raios de borda, sombras ou componentes fora do que está na pasta Design System. Se um valor não existir no design system, pare e pergunte — não improvise.
NUNCA use bancos de imagem, stock photos, ilustrações genéricas de "advogado", fotos de martelo/balança compradas, placeholders (placehold.co, unsplash, etc.) ou imagens de outros escritórios.
NUNCA use rostos ou avatares de IA no lugar da Nathália.
NUNCA use um logo diferente do que está na pasta Logo.
NUNCA aplique cores "parecidas" com as do design system — use os valores exatos (hex/HSL) definidos.

🟢 SEMPRE:

SEMPRE leia integralmente o conteúdo da pasta Design System primeiro e transcreva os tokens para tailwind.config.ts (cores, fontFamily, borderRadius, spacing, boxShadow) e para variáveis CSS em globals.css. Esse arquivo passa a ser a única fonte de verdade visual.
SEMPRE use as fotos reais da Nathália (pasta Fotos Nathália) nos pontos: Hero da Home, seção Sobre da Home, página Sobre (foto principal + secundárias), e seção de autoridade/apresentação das páginas de área.
SEMPRE use o logo da pasta Logo no Header, no Footer e como base do favicon (gerar icon.png/favicon.ico e apple-icon.png).
SEMPRE referencie imagens via next/image com alt otimizado para SEO (ver copy na Parte 2), priority no hero, sizes responsivo e formatos webp/avif.
SEMPRE confirme, antes de finalizar, que nenhuma imagem do site aponta para URL externa de stock ou placeholder.
3.3 Onde colocar os assets dentro do projeto Next.js

Copiar/mover os arquivos assim:

/public/logo/                → logotipo (SVG preferencial + PNG). Ex.: logo.svg, logo-branco.svg, logo-mark.svg
/public/images/nathalia/     → todas as fotos da Nathália. Ex.: nathalia-hero.webp, nathalia-sobre.webp, nathalia-retrato.webp
/public/images/escritorio/   → fotos do espaço (se houver)
/app/icon.png                → favicon derivado do logo (Next gera <link> automaticamente)
/app/apple-icon.png          → ícone Apple
Converter as fotos para .webp (e servir .avif quando possível). Manter proporção; comprimir sem perder qualidade perceptível.
Ler as dimensões reais de cada foto e passar width/height corretos ao next/image para evitar CLS.
Exemplo de referência obrigatória:
tsx
import Image from "next/image";
<Image
  src="/images/nathalia/nathalia-hero.webp"
  alt="Nathália Venâncio de Abreu, advogada (OAB/GO 76.040) do escritório Venâncio Advocacia em Goiânia"
  width={720} height={900}
  priority
  sizes="(max-width: 768px) 90vw, 480px"
  className="rounded-[var(--radius-card)] object-cover"
/>
4. Estrutura de arquivos e pastas (Next.js App Router)
venancio-advocacia/
├─ app/
│  ├─ layout.tsx                # <html lang="pt-BR">, next/font, Header, Footer, WhatsAppFloat, JSON-LD Organization+LegalService, GA4
│  ├─ page.tsx                  # HOME
│  ├─ globals.css               # tokens do Design System (CSS vars) + base Tailwind
│  ├─ icon.png / apple-icon.png # favicon do logo
│  ├─ sitemap.ts                # sitemap dinâmico
│  ├─ robots.ts                 # robots
│  ├─ not-found.tsx             # 404 amigável
│  ├─ sobre/page.tsx
│  ├─ contato/page.tsx
│  ├─ areas-de-atuacao/
│  │  ├─ page.tsx               # índice das áreas (opcional, recomendado)
│  │  ├─ direito-do-consumidor/page.tsx
│  │  ├─ direito-civel/page.tsx
│  │  ├─ direito-bancario/page.tsx
│  │  └─ direito-da-saude/page.tsx
│  ├─ blog/
│  │  ├─ page.tsx               # listagem
│  │  └─ [slug]/page.tsx        # post individual (lê MDX de /content)
│  ├─ politica-de-privacidade/page.tsx
│  └─ api/
│     └─ contato/route.ts       # handler do formulário (server action ou route handler)
├─ components/
│  ├─ layout/ (Header.tsx, Footer.tsx, Container.tsx, Breadcrumbs.tsx)
│  ├─ home/ (Hero.tsx, AreasGrid.tsx, SobrePreview.tsx, Diferenciais.tsx, ProcessoAtendimento.tsx, FaqHome.tsx, CtaSection.tsx)
│  ├─ areas/ (AreaHero.tsx, AreaContent.tsx, AreaFaq.tsx, ParceirosBlock.tsx)
│  ├─ shared/ (AreaCard.tsx, WhatsAppFloat.tsx, WhatsAppButton.tsx, SectionTitle.tsx, Accordion.tsx, MapEmbed.tsx, SocialLinks.tsx, JsonLd.tsx, OabNotice.tsx, CookieConsent.tsx)
│  └─ forms/ (ContactForm.tsx, FormField.tsx)
├─ content/
│  ├─ blog/ (*.mdx)             # posts
│  └─ areas.ts                  # dados estruturados das áreas (título, slug, bullets, FAQ)
├─ lib/
│  ├─ site.ts                   # NAP, WhatsApp, redes, horário (fonte única de verdade)
│  ├─ seo.ts                    # helpers de metadata
│  ├─ schema.ts                 # geradores de JSON-LD
│  └─ mdx.ts                    # loader de MDX
├─ public/
│  ├─ logo/  images/nathalia/  images/escritorio/
├─ tailwind.config.ts           # tokens do Design System
├─ next.config.mjs              # images formats webp/avif
├─ tsconfig.json
└─ package.json
lib/site.ts (fonte única do NAP — usar em todo lugar, garante consistência)
ts
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
    city: "Goiânia", state: "GO", zip: "74565-650", country: "BR",
  },
  hours: "Segunda a sexta, das 08:00 às 18:00",
  whatsappLink: "https://wa.me/5562993091434",
  whatsappMsgLink: "https://wa.me/message/5SOYSCDWWZHXI1",
  instagram: "https://www.instagram.com/venancioadvocacia_",
  baseUrl: "https://nathaliavenancioadv.com", // ajustar ao domínio final
};
5. Mapa do site (rotas e arquitetura de informação)
Página	Slug/URL	Seções (na ordem)
Home	/	Header · Hero · Faixa de credibilidade (áreas em destaque) · Sobre (preview + foto) · Áreas de atuação (4 cards + bloco parceiros) · Diferenciais · Processo de atendimento (4 passos) · FAQ geral · CTA final · Footer
Áreas (índice)	/areas-de-atuacao	Intro + 4 cards + parceiros
Consumidor	/areas-de-atuacao/direito-do-consumidor	Breadcrumb · AreaHero · O que é/como ajudamos · Situações atendidas (bullets) · Como funciona · FAQ (6-8) · CTA
Cível	/areas-de-atuacao/direito-civel	idem
Bancário	/areas-de-atuacao/direito-bancario	idem
Saúde	/areas-de-atuacao/direito-da-saude	idem
Sobre	/sobre	Breadcrumb · Hero com foto · Trajetória · Missão e valores · Como atendemos · CTA
Contato	/contato	Breadcrumb · Dados (NAP) · Formulário · WhatsApp · Mapa · Horário/redes
Blog (lista)	/blog	Grid de posts + filtro por área
Post	/blog/[slug]	Breadcrumb · H1 · autoria (Nathália + OAB) · conteúdo · CTA · relacionados
Privacidade	/politica-de-privacidade	LGPD

Regra de slug: sempre em português, minúsculo, hífen, sem acento nos slugs (/areas-de-atuacao/direito-civel).

6. Especificação de componentes

(mobile-first; WCAG 2.1 AA; contraste mínimo 4.5:1 em texto; foco visível; navegação por teclado; aria-label em todos os ícones/links não textuais)

Header
Logo (link para /), navegação: Início, Áreas de Atuação (dropdown com as 4), Sobre, Blog, Contato + botão WhatsApp destacado.
Sticky no scroll; mobile = menu hambúrguer (<button aria-expanded aria-controls>), drawer com foco preso (focus trap) e fecha com Esc.
Contraste do texto sobre o fundo definido no Design System.
Hero (Home)
H1 + subtítulo + 2 CTAs (WhatsApp primário, "Áreas de atuação" secundário) + foto real da Nathália com priority.
Sem promessa de resultado. alt otimizado.
AreaCard / AreasGrid
4 cards (uma por área): ícone (do Design System), título, 1 frase, "Saiba mais". Grid responsivo (1 col mobile → 2 → 4). Card inteiro clicável com <Link>; estado hover/focus visível.
Abaixo, bloco menor "Áreas atendidas por parceiros" (Previdenciário, Criminal, Tributário) — menor destaque, sem card grande.
SobrePreview / Diferenciais / ProcessoAtendimento
Sobre: foto + texto curto + link para /sobre.
Diferenciais: 4 itens (proximidade, comunicação clara, transparência, atendimento nacional online).
Processo: 4 passos (Contato → Escuta e análise → Estratégia → Acompanhamento), com numeração e ícones do Design System.
FAQ (Accordion)
Accordion acessível: cada item é <button aria-expanded aria-controls> + região role="region"; abre/fecha por teclado; um aberto por vez ou múltiplos (definir). Injetar FAQPage JSON-LD correspondente.
ContactForm
Campos: Nome*, Telefone/WhatsApp*, E-mail*, Assunto (select com as 4 áreas + "Outro"), Mensagem*, checkbox de consentimento LGPD*.
Validação client + server; mensagens de erro/sucesso (ver copy). label associado a cada input; aria-invalid, aria-describedby para erros; autocomplete correto.
Estados: idle, enviando (botão disabled + spinner com aria-live), sucesso, erro.
Anti-spam: honeypot + (opcional) rate limit.
MapEmbed
<iframe> do Google Maps com title descritivo e loading="lazy"; endereço do escritório.
WhatsAppFloat / WhatsAppButton
Botão flutuante fixo (canto inferior direito), aria-label="Falar no WhatsApp", some/reaparece sem prejudicar leitura; alvo de toque ≥ 44px.
Mensagem pré-preenchida por página (ver seção 7).
Breadcrumbs
Em todas as páginas internas; injeta BreadcrumbList JSON-LD.
CtaSection / OabNotice / Footer
CTA: título + botão WhatsApp + link formulário.
OabNotice: faixa fixa no footer com o aviso da OAB (ver copy).
Footer: logo, NAP completo, links de navegação, redes, horário, aviso OAB, link privacidade, © ano.
7. Requisitos técnicos
Next.js App Router + TypeScript. Componentes server por padrão; "use client" só onde há interação (Header mobile, Accordion, Form, WhatsAppFloat, CookieConsent).
Tailwind: tokens 100% do Design System em tailwind.config.ts. Zero valores mágicos.
next/image: todas as imagens; formatos ["image/avif","image/webp"] no next.config.
next/font: carregar a(s) fonte(s) definida(s) no Design System (display: "swap").
Metadata API: metadataBase, template de title "%s | Venâncio Advocacia", alternates.canonical por página, OpenGraph e Twitter. generateMetadata nas rotas dinâmicas (blog); metadata estático nas fixas.
JSON-LD por página (componente <JsonLd> server, com escape de <): Organization + LegalService no layout/home; Person (Nathália) no Sobre/layout; Service por área; FAQPage onde há FAQ; BreadcrumbList nas internas; BlogPosting/Article nos posts.
sitemap.ts e robots.ts na raiz de app/; sitemap com lastModified; robots liberando tudo público e apontando o sitemap; noindex em páginas utilitárias.
Formulário sem backend pesado: opções, em ordem de simplicidade — (a) Route Handler app/api/contato/route.ts + serviço de e-mail (Resend/Nodemailer via SMTP); (b) form provider (Formspree/Web3Forms); (c) apenas WhatsApp como fallback. Nunca expor secrets no client; usar variáveis de ambiente.
WhatsApp com mensagem por página: montar link https://wa.me/5562993091434?text=<msg-url-encoded>. Mensagens sugeridas por página na Parte 2 (microcopy).
GA4 + Search Console: GA4 via next/script (strategy="afterInteractive"), eventos whatsapp_click e form_submit; só disparar após consentimento de cookies. Verificar propriedade no Search Console e submeter sitemap.
LGPD: banner de consentimento de cookies (bloqueia GA4 até aceite), página de Política de Privacidade, checkbox de consentimento no formulário, base legal e finalidade do tratamento.
Performance/CWV: hero priority; lazy no restante; dynamic import de MapEmbed e componentes pesados; evitar layout shift (dimensões fixas); font-display: swap.
8. Blog — estrutura e plano editorial
Formato: MDX em /content/blog/*.mdx com frontmatter: title, slug, description, area, publishedAt, updatedAt, author ("Nathália Venâncio de Abreu — OAB/GO 76.040"), keywords, cover.
Template de post: Breadcrumb → H1 → bloco de autoria (nome + OAB + data) → sumário → conteúdo (H2/H3) → aviso "conteúdo informativo, não substitui consulta" → CTA WhatsApp → posts relacionados. BlogPosting JSON-LD com author Person.
Regras OAB no blog: informativo, sem resultado, sem valores, sem caso concreto identificável.

Plano editorial inicial (títulos já otimizados por keyword, em conformidade OAB):

Nome negativado indevidamente: o que fazer e quais são os seus direitos
Cobrança indevida: como identificar e como agir
Busca e apreensão de veículo em Goiânia: entenda como funciona o processo
Empréstimo consignado que você não reconhece: passo a passo para contestar
Revisional de financiamento de veículo: o que é e quando é possível
Plano de saúde negou a cirurgia: entenda seus direitos e o que é uma liminar
Plano de saúde negou medicamento ou tratamento: o que diz a lei
Negativa de home care pelo plano de saúde: quando o atendimento é devido
Danos morais: quando um problema deixa de ser "aborrecimento" e vira direito
Descumprimento de contrato: quais caminhos o consumidor tem
Descontos indevidos no benefício do INSS: como se proteger e contestar
Juros abusivos em contrato bancário: como identificar
Direitos do consumidor: o guia básico para quem comprou e teve problema
O que levar na primeira conversa com um advogado (checklist de documentos)
Liminar (tutela de urgência): o que é e quando pode ser pedida
9. Compliance OAB — checklist de aprovação antes do publish

Toda página/post deve passar por este checklist e por revisão e aprovação da advogada responsável antes de publicar (observação crítica da cliente).

 Sem promessa/garantia de resultado ("ganhe", "recupere", "garantido").
 Sem menção a honorários, valores, "grátis", desconto, "só paga se ganhar".
 Sem superlativo/comparação ("melhor", "nº 1", "mais experiente").
 Sem caso concreto, número de vitórias ou "taxa de sucesso".
 Sem depoimento de cliente com resultado.
 Usa "atuação em" (não "especialista em", salvo título registrado).
 Nome + OAB/GO 76.040 presentes onde exigido.
 Aviso OAB no rodapé de todas as páginas.
 Tom sóbrio e informativo; CTA convida a "falar/entender", não a "contratar já".
 Conteúdo do blog marcado como informativo (não substitui consulta).
 Aprovado pela advogada responsável ✔
10. Critérios de aceitação e QA final

SEO: cada página com title único (≤~60c) + meta (≤~155c) + canonical + OG; H1 único por página; hierarquia H2/H3 correta; JSON-LD válido (Rich Results Test); sitemap e robots acessíveis; alt em 100% das imagens; slugs corretos; interlinking presente. Performance/CWV: Lighthouse mobile ≥ 90 (Perf/SEO/BP/A11y); LCP < 2,5s; INP < 200ms; CLS < 0,1; imagens webp/avif; sem imagem de stock/placeholder. Acessibilidade (WCAG AA): contraste ok; foco visível; navegação por teclado completa; aria-* em accordion, menu, form, botões de ícone; lang="pt-BR"; labels em todos os campos. Responsividade: testado em 360px, 768px, 1024px, 1440px; menu mobile funcional; alvos de toque ≥ 44px. Compliance: checklist da seção 9 aprovado em todas as páginas. Assets: logo real no header/footer/favicon; fotos reais da Nathália nos pontos definidos; zero stock/placeholder (verificação final obrigatória). Funcional: WhatsApp flutuante e por-CTA com mensagem pré-preenchida por página; formulário com validação/estados; mapa; consentimento de cookies bloqueando GA4 até aceite; 404 amigável.

11. Roadmap de implementação (ordem para o Claude Code)

Sprint 0 — Fundação e Design System (bloqueante): ler Design System, Fotos Nathália, Logo; transcrever tokens para tailwind.config.ts e globals.css; copiar assets para /public; converter fotos para webp; configurar next.config, next/font, lib/site.ts. Não avançar sem isto. Sprint 1 — Layout base: layout.tsx (Header, Footer, WhatsAppFloat, OabNotice), Container, Breadcrumbs, JSON-LD Organization/LegalService, GA4 + consentimento. Sprint 2 — Home: Hero (foto real), AreasGrid + parceiros, SobrePreview, Diferenciais, ProcessoAtendimento, FaqHome, CtaSection + copy da Parte 2 + metadata + FAQPage schema. Sprint 3 — Páginas de área (x4): template + content/areas.ts + copy + Service/FAQ/Breadcrumb schema + metadata. Sprint 4 — Sobre e Contato: Sobre (fotos reais + Person schema); Contato (form + API + mapa + NAP). Sprint 5 — Blog: listagem + [slug] MDX + BlogPosting schema + 2-3 posts iniciais do plano editorial. Sprint 6 — SEO técnico e legal: sitemap.ts, robots.ts, política de privacidade, cookie consent, 404, OG images. Sprint 7 — QA: rodar checklist da seção 10; Lighthouse; Rich Results; revisão de compliance; entrega para aprovação da advogada.