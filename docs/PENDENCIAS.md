# Pendências de assets — aguardando a cliente

## Copy

- [ ] **Revisão da copy de Direito Contratual e Direito Empresarial** — as
      duas áreas novas (`content/areas.ts`) foram redigidas internamente
      seguindo o tom das demais, mas não constam em `docs/COPY.md` e ainda
      não passaram pela revisão da advogada responsável (Provimento 205/2021).

Itens que bloqueiam a qualidade final mas **não** bloqueiam o desenvolvimento
(estamos seguindo com os arquivos existentes; ao chegarem os definitivos,
basta substituir os arquivos em `/public` mantendo os mesmos nomes).

## Logo

- [x] **Logo em PNG com fundo transparente** — gerado por
      `scripts/make-logo-transparent.mjs` a partir de `logo-fundo-verde.png`
      (`logo-header.png` completo + `logo-v.png` só com o monograma).
- [ ] **Versão horizontal do logotipo** — para header compacto e footer.
- [ ] (Ideal) **Arquivo vetorial (SVG/AI/PDF)** — favicon e impressões em
      qualquer escala sem perda.

## Fotos

- [ ] **Fotos originais em alta resolução** — as 7 fotos atuais vieram
      compactadas pelo WhatsApp (~95–235 KB, com artefatos de compressão).
      Pedir os arquivos originais da sessão fotográfica (JPEG/HEIC direto da
      câmera ou export do fotógrafo).

## Fontes (registrado no readme do Design System)

- [ ] **Branch** e **Century Gothic** não são fontes livres. Em uso as
      substitutas do próprio DS: Cormorant Garamond e Jost (Google Fonts).
      Se a cliente tiver os arquivos licenciados (.otf/.woff2), trocar por
      `@font-face` locais em `app/layout.tsx`.
