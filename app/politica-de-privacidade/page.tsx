import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Venâncio Advocacia trata os dados pessoais informados neste site, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaDePrivacidade() {
  return (
    <section className="pb-section">
      <Container narrow>
        <Breadcrumbs
          items={[
            {
              label: "Política de Privacidade",
              href: "/politica-de-privacidade",
            },
          ]}
        />
        <h1 className="mt-4 text-h1">Política de Privacidade</h1>
        <p className="mt-4 text-small text-foreground">
          Última atualização: 11 de agosto de 2026
        </p>

        <p className="mt-8 text-foreground">
          Esta Política de Privacidade explica, de forma simples, como a{" "}
          <strong className="font-medium text-heading">{site.name}</strong>{" "}
          trata os dados pessoais de quem visita este site, em conformidade com
          a Lei nº 13.709/2018, a Lei Geral de Proteção de Dados (LGPD).
        </p>

        <h2 className="mt-12 text-h2">Quem é o controlador dos dados</h2>
        <p className="mt-4 text-foreground">
          {site.name}, de {site.lawyer}, {site.oab}. Endereço:{" "}
          {site.address.street}, {site.address.district}, {site.address.city}/
          {site.address.state}, CEP {site.address.zip}. Contato:{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-heading underline underline-offset-4 transition-colors duration-200 hover:text-verde-700"
          >
            {site.email}
          </a>{" "}
          · WhatsApp {site.phoneDisplay}.
        </p>

        <h2 className="mt-12 text-h2">Quais dados são tratados e para quê</h2>
        <h3 className="mt-8 text-h3">Formulário de contato</h3>
        <p className="mt-4 text-foreground">
          O formulário da página de Contato pede nome, telefone/WhatsApp,
          e-mail, assunto e a sua mensagem. Esses dados são usados
          exclusivamente para responder ao seu contato e prestar a orientação
          solicitada (base legal: execução de procedimentos preliminares a
          pedido do titular e consentimento, art. 7º, incisos I e V, da LGPD).
        </p>
        <p className="mt-4 text-foreground">
          Importante: este site não armazena os dados do formulário em banco de
          dados próprio. Ao enviar, o conteúdo preenchido é encaminhado
          diretamente para a conversa de WhatsApp do escritório, aberta no seu
          próprio aplicativo. A mensagem só é efetivamente transmitida quando
          você confirma o envio no WhatsApp. A partir daí, a comunicação passa
          a ser regida também pela política de privacidade do WhatsApp (Meta).
        </p>
        <h3 className="mt-8 text-h3">Cookies e estatísticas de uso</h3>
        <p className="mt-4 text-foreground">
          Utilizamos o Google Analytics 4 apenas para entender, de forma
          agregada, como o site é usado (páginas visitadas, cliques nos botões
          de contato). Esses cookies{" "}
          <strong className="font-medium text-heading">
            só são ativados após o seu consentimento
          </strong>{" "}
          no banner exibido na primeira visita (base legal: consentimento, art.
          7º, inciso I, da LGPD). Se você recusar, nenhum cookie de estatística
          é criado e o site funciona normalmente.
        </p>

        <h2 className="mt-12 text-h2">Compartilhamento de dados</h2>
        <p className="mt-4 text-foreground">
          Não vendemos nem compartilhamos seus dados pessoais com terceiros
          para fins comerciais. O tratamento envolve apenas os operadores
          estritamente necessários ao funcionamento do site e dos canais de
          contato: WhatsApp/Meta (mensagens que você decide enviar), Google
          (estatísticas, mediante consentimento) e o provedor de hospedagem do
          site.
        </p>

        <h2 className="mt-12 text-h2">Por quanto tempo os dados são mantidos</h2>
        <p className="mt-4 text-foreground">
          As conversas iniciadas pelo WhatsApp ou e-mail são mantidas pelo
          tempo necessário ao atendimento e ao cumprimento de obrigações
          legais e regulamentares da advocacia. Dados estatísticos do Google
          Analytics são retidos pelo prazo padrão configurado na ferramenta.
        </p>

        <h2 className="mt-12 text-h2">Seus direitos como titular</h2>
        <p className="mt-4 text-foreground">
          Nos termos do art. 18 da LGPD, você pode solicitar a qualquer
          momento: confirmação da existência de tratamento; acesso aos dados;
          correção de dados incompletos ou desatualizados; anonimização,
          bloqueio ou eliminação de dados desnecessários; portabilidade;
          informação sobre compartilhamentos; e revogação do consentimento.
          Para exercer esses direitos, escreva para{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-heading underline underline-offset-4 transition-colors duration-200 hover:text-verde-700"
          >
            {site.email}
          </a>
          .
        </p>

        <h2 className="mt-12 text-h2">Como revogar o consentimento de cookies</h2>
        <p className="mt-4 text-foreground">
          A sua escolha fica registrada apenas no seu navegador. Para revê-la,
          limpe os dados de navegação deste site (cookies e armazenamento
          local). O banner de consentimento será exibido novamente na próxima
          visita.
        </p>

        <h2 className="mt-12 text-h2">Alterações desta política</h2>
        <p className="mt-4 text-foreground">
          Esta política pode ser atualizada para refletir mudanças no site ou
          na legislação. A data da última atualização aparece no topo da
          página. Em caso de dúvidas,{" "}
          <Link
            href="/contato"
            className="font-medium text-heading underline underline-offset-4 transition-colors duration-200 hover:text-verde-700"
          >
            fale conosco
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
