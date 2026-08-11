"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { areas } from "@/content/areas";
import { Container } from "@/components/layout/Container";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

const pageLinks = [
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
] as const;

const desktopLink =
  "inline-flex min-h-11 items-center text-eyebrow uppercase text-on-dark transition-colors duration-200 hover:text-gold-300";

const mobileLink =
  "flex min-h-12 items-center text-lead text-on-dark transition-colors duration-200 hover:text-gold-300";

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Fechamento ao navegar é feito no onClick de cada link (os menus são
  // controlados; setState em effect de pathname viola react-hooks).
  const closeDropdown = () => setDropdownOpen(false);
  const closeMenu = () => setMenuOpen(false);

  // Dropdown desktop: fecha com Esc e clique fora.
  useEffect(() => {
    if (!dropdownOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setDropdownOpen(false);
    }
    function onPointer(e: PointerEvent) {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [dropdownOpen]);

  // Drawer mobile: trava o scroll, prende o foco (hambúrguer + drawer),
  // fecha com Esc devolvendo o foco ao botão.
  useEffect(() => {
    if (!menuOpen) return;
    const drawer = drawerRef.current;
    const inDrawer = drawer
      ? Array.from(
          drawer.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
        )
      : [];
    const focusables = hamburgerRef.current
      ? [hamburgerRef.current, ...inDrawer]
      : inDrawer;
    inDrawer[0]?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40">
      {/* Fundo/blur na barra interna: backdrop-filter no <header> criaria um
          containing block que quebraria o position:fixed do drawer. */}
      <div className="bg-dark/95 backdrop-blur-sm">
      <Container className="flex h-18 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Venâncio Advocacia, página inicial"
        >
          <Image
            src="/logo/logo-v.png"
            alt="Logotipo da Venâncio Advocacia, escritório da advogada Nathália Venâncio, em Goiânia"
            width={212}
            height={252}
            priority
            className="h-11 w-auto"
          />
          <span aria-hidden className="flex flex-col">
            <span className="font-display text-[1.375rem] leading-none tracking-[0.14em] text-creme-100">
              VENÂNCIO
            </span>
            <span className="mt-1.5 text-[0.5625rem] leading-none tracking-[0.5em] uppercase text-gold-300">
              Advocacia
            </span>
          </span>
        </Link>

        {/* Navegação desktop */}
        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            <li>
              <Link href="/" className={desktopLink}>
                Início
              </Link>
            </li>
            <li ref={dropdownRef} className="relative">
              <button
                type="button"
                className={`${desktopLink} gap-1`}
                aria-expanded={dropdownOpen}
                aria-controls="dropdown-areas"
                onClick={() => setDropdownOpen((v) => !v)}
              >
                Áreas de Atuação
                <ChevronDown
                  aria-hidden
                  strokeWidth={1.5}
                  className={`size-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                id="dropdown-areas"
                hidden={!dropdownOpen}
                className="absolute top-full left-1/2 w-64 -translate-x-1/2 pt-2"
              >
                <ul className="rounded-card border border-line bg-card p-2 shadow-lift">
                  {areas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/areas-de-atuacao/${area.slug}`}
                        onClick={closeDropdown}
                        className="block rounded-md px-4 py-3 text-foreground transition-colors duration-200 hover:bg-band hover:text-heading"
                      >
                        {area.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/areas-de-atuacao"
                      onClick={closeDropdown}
                      className="block rounded-md px-4 py-3 text-small text-accent-strong transition-colors duration-200 hover:bg-band"
                    >
                      Ver todas as áreas
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            {pageLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={desktopLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton variant="gold" />
        </div>

        {/* Hambúrguer (mobile) — alvo 44px */}
        <button
          ref={hamburgerRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-on-dark transition-colors duration-200 hover:text-gold-300 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <X aria-hidden strokeWidth={1.5} className="size-6" />
          ) : (
            <Menu aria-hidden strokeWidth={1.5} className="size-6" />
          )}
        </button>
      </Container>
      </div>

      {/* Drawer mobile */}
      <div
        id="menu-mobile"
        ref={drawerRef}
        hidden={!menuOpen}
        className="fixed inset-x-0 top-18 bottom-0 z-50 overflow-y-auto bg-dark lg:hidden"
      >
        <nav aria-label="Menu">
          <Container className="flex flex-col py-8">
            <ul className="flex flex-col">
              <li>
                <Link href="/" onClick={closeMenu} className={mobileLink}>
                  Início
                </Link>
              </li>
              <li>
                <p className="pt-6 pb-2 text-eyebrow uppercase text-gold-300">
                  Áreas de Atuação
                </p>
                <ul className="flex flex-col border-l border-line-gold pl-4">
                  {areas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/areas-de-atuacao/${area.slug}`}
                        onClick={closeMenu}
                        className={mobileLink}
                      >
                        {area.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/areas-de-atuacao"
                      onClick={closeMenu}
                      className={mobileLink}
                    >
                      Ver todas as áreas
                    </Link>
                  </li>
                </ul>
              </li>
              {pageLinks.map((link) => (
                <li key={link.href} className="mt-2">
                  <Link href={link.href} onClick={closeMenu} className={mobileLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <WhatsAppButton variant="gold" className="mt-8" />
          </Container>
        </nav>
      </div>
    </header>
  );
}
