import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { areas } from "@/content/areas";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PostCard } from "@/components/blog/PostCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conteúdo informativo sobre Direito do Consumidor, Bancário, Cível e da Saúde, em linguagem simples. Por Nathália Venâncio de Abreu, OAB/GO 76.040.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Venâncio Advocacia",
    description:
      "Conteúdo informativo sobre Direito do Consumidor, Bancário, Cível e da Saúde, em linguagem simples.",
    type: "website",
    url: "/blog",
    images: [{ url: "/og/og-blog.png", width: 1200, height: 630 }],
  },
};

const filtroBase =
  "inline-flex min-h-11 items-center rounded-pill border px-5 text-eyebrow uppercase transition-colors duration-200";
const filtroAtivo = "border-line-gold bg-dark text-creme-100";
const filtroInativo =
  "border-line text-foreground hover:border-line-gold hover:text-heading";

export default async function Blog({ searchParams }: PageProps<"/blog">) {
  const { area } = await searchParams;
  const areaAtiva = areas.find((a) => a.slug === area)?.slug;
  const posts = getAllPosts().filter(
    (p) => !areaAtiva || p.area === areaAtiva,
  );

  return (
    <section className="pb-section">
      <Container>
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
        <h1 className="mt-4 text-h1">Blog</h1>
        <p className="mt-4 max-w-narrow text-lead text-muted">
          Conteúdo informativo sobre Direito do Consumidor, Bancário, Cível e
          da Saúde, em linguagem simples.
        </p>

        {/* Filtro por área */}
        <nav aria-label="Filtrar por área" className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/blog"
            className={`${filtroBase} ${!areaAtiva ? filtroAtivo : filtroInativo}`}
            aria-current={!areaAtiva ? "page" : undefined}
          >
            Todos
          </Link>
          {areas.map((a) => (
            <Link
              key={a.slug}
              href={`/blog?area=${a.slug}`}
              className={`${filtroBase} ${areaAtiva === a.slug ? filtroAtivo : filtroInativo}`}
              aria-current={areaAtiva === a.slug ? "page" : undefined}
            >
              {a.title}
            </Link>
          ))}
        </nav>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        {posts.length === 0 && (
          <p className="mt-12 text-foreground">
            Ainda não há artigos publicados nesta área.
          </p>
        )}
      </Container>
    </section>
  );
}
