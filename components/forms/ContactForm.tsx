"use client";

import { useState } from "react";
import Link from "next/link";
import { waLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

// Labels, placeholders e mensagens literais de docs/COPY.md — Contato.
// O envio abre o WhatsApp do escritório com a mensagem montada a partir
// dos campos (sem backend de e-mail, por decisão do cliente).
const MSG = {
  obrigatorio: "Por favor, preencha este campo.",
  emailInvalido: "Digite um e-mail válido.",
  telefoneInvalido: "Digite um número de telefone/WhatsApp válido.",
  consentimento: "É preciso aceitar a Política de Privacidade para enviar.",
  sucesso:
    "Mensagem enviada! Em breve entraremos em contato. Se preferir, fale agora pelo WhatsApp.",
} as const;

const assuntos = [
  "Direito do Consumidor",
  "Direito Bancário",
  "Direito Cível",
  "Direito da Saúde",
  "Direito Contratual",
  "Direito Empresarial",
  "Outro assunto",
] as const;

type Status = "idle" | "sucesso";
type Errors = Partial<
  Record<"nome" | "telefone" | "email" | "assunto" | "mensagem" | "consentimento", string>
>;

const fieldClass =
  "w-full rounded-sm border border-line bg-card px-4 py-3 font-sans text-body text-heading transition-colors duration-200 focus:border-accent";
const labelClass = "mb-2 block text-eyebrow uppercase text-foreground";
const errorClass = "mt-2 block text-small font-medium text-heading";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(data: FormData): Errors {
    const found: Errors = {};
    const nome = String(data.get("nome") ?? "").trim();
    const telefone = String(data.get("telefone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const assunto = String(data.get("assunto") ?? "").trim();
    const mensagem = String(data.get("mensagem") ?? "").trim();

    if (!nome) found.nome = MSG.obrigatorio;
    if (!telefone) found.telefone = MSG.obrigatorio;
    else if (!/^\d{10,13}$/.test(telefone.replace(/\D/g, "")))
      found.telefone = MSG.telefoneInvalido;
    if (!email) found.email = MSG.obrigatorio;
    else if (!/^\S+@\S+\.\S+$/.test(email)) found.email = MSG.emailInvalido;
    if (!assunto) found.assunto = MSG.obrigatorio;
    if (!mensagem) found.mensagem = MSG.obrigatorio;
    if (!data.get("consentimento")) found.consentimento = MSG.consentimento;
    return found;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // Honeypot preenchido = bot: finge sucesso sem abrir nada.
    if (String(data.get("website") ?? "").trim() === "") {
      const texto = [
        "Olá! Vim pelo site da Venâncio Advocacia e preenchi o formulário de contato.",
        "",
        `Nome: ${data.get("nome")}`,
        `WhatsApp/Telefone: ${data.get("telefone")}`,
        `E-mail: ${data.get("email")}`,
        `Assunto: ${data.get("assunto")}`,
        "",
        `Mensagem: ${data.get("mensagem")}`,
      ].join("\n");
      window.open(waLink(texto), "_blank", "noopener,noreferrer");
      trackEvent("form_submit", { assunto: String(data.get("assunto")) });
    }

    setStatus("sucesso");
    form.reset();
  }

  const invalid = (campo: keyof Errors) =>
    errors[campo] ? { "aria-invalid": true, "aria-describedby": `erro-${campo}` } : {};

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="nome" className={labelClass}>
            Nome completo*
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            placeholder="Como podemos chamar você?"
            className={fieldClass}
            {...invalid("nome")}
          />
          {errors.nome && (
            <span id="erro-nome" className={errorClass}>
              {errors.nome}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="telefone" className={labelClass}>
            WhatsApp / Telefone*
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(62) 90000-0000"
            className={fieldClass}
            {...invalid("telefone")}
          />
          {errors.telefone && (
            <span id="erro-telefone" className={errorClass}>
              {errors.telefone}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="seuemail@exemplo.com"
            className={fieldClass}
            {...invalid("email")}
          />
          {errors.email && (
            <span id="erro-email" className={errorClass}>
              {errors.email}
            </span>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="assunto" className={labelClass}>
            Assunto*
          </label>
          <select
            id="assunto"
            name="assunto"
            required
            defaultValue=""
            className={fieldClass}
            {...invalid("assunto")}
          >
            <option value="" disabled>
              Selecione
            </option>
            {assuntos.map((assunto) => (
              <option key={assunto} value={assunto}>
                {assunto}
              </option>
            ))}
          </select>
          {errors.assunto && (
            <span id="erro-assunto" className={errorClass}>
              {errors.assunto}
            </span>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="mensagem" className={labelClass}>
            Sua mensagem*
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            required
            rows={5}
            placeholder="Conte, em poucas palavras, o que está acontecendo."
            className={fieldClass}
            {...invalid("mensagem")}
          />
          {errors.mensagem && (
            <span id="erro-mensagem" className={errorClass}>
              {errors.mensagem}
            </span>
          )}
        </div>

        {/* Honeypot anti-spam — invisível para pessoas, preenchido por bots */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Não preencha este campo</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="sm:col-span-2">
          <div className="flex items-start gap-3">
            <input
              id="consentimento"
              name="consentimento"
              type="checkbox"
              required
              className="mt-0.5 size-6 shrink-0 accent-(--color-accent-strong)"
              {...invalid("consentimento")}
            />
            <label htmlFor="consentimento" className="text-small text-foreground">
              Autorizo o contato e o tratamento dos meus dados para retorno
              sobre esta mensagem, conforme a{" "}
              <Link
                href="/politica-de-privacidade"
                className="font-medium text-heading underline underline-offset-4 transition-colors duration-200 hover:text-verde-700"
              >
                Política de Privacidade
              </Link>
              .
            </label>
          </div>
          {errors.consentimento && (
            <span id="erro-consentimento" className={errorClass}>
              {errors.consentimento}
            </span>
          )}
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-pill bg-dark px-7 text-eyebrow uppercase text-creme-100 transition-all duration-200 ease-in-out hover:bg-verde-800 hover:shadow-lift"
        >
          Enviar mensagem
        </button>
      </div>

      <div aria-live="polite" className="mt-4">
        {status === "sucesso" && (
          <p className="rounded-card border border-line-gold bg-card p-4 text-foreground">
            {MSG.sucesso}
          </p>
        )}
      </div>
    </form>
  );
}
