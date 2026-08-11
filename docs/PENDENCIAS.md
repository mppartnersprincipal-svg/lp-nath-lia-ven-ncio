# Pendências de assets — aguardando a cliente

Itens que bloqueiam a qualidade final mas **não** bloqueiam o desenvolvimento
(estamos seguindo com os arquivos existentes; ao chegarem os definitivos,
basta substituir os arquivos em `/public` mantendo os mesmos nomes).

## Logo

- [ ] **Logo em PNG com fundo transparente** — hoje só existe JPEG e PNG sobre
      fundo verde (`/public/logo/`). Em fundos claros não há versão utilizável.
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
