import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { ArrowRight } from "lucide-react";
import {
  extractH2s,
  formatDate,
  getAllPosts,
  getPost,
  getRelatedPosts,
  type Post,
} from "@/lib/mdx";
import { getArea } from "@/content/areas";
import { site } from "@/lib/site";
import { whatsappMessages } from "@/lib/whatsapp";
import { blogPostingSchema } from "@/lib/schema";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { JsonLd } from "@/components/shared/JsonLd";
import { PostCard } from "@/components/blog/PostCard";
import { mdxComponents } from "@/components/blog/mdx-components";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

function loadPost(slug: string): Post {
  try {
    return getPost(slug);
  } catch {
    notFound();
  }
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = loadPost(slug);
  const path = `/blog/${meta.slug}`;
  return {
    title: { absolute: meta.seoTitle },
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      url: path,
      publishedTime: meta.publishedAt,
      modifiedTime: meta.updatedAt,
      authors: [site.lawyer],
      images: [{ url: "/og/og-blog.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const { meta, content } = loadPost(slug);
  const area = getArea(meta.area);
  const sumario = extractH2s(content);
  const relacionados = getRelatedPosts(meta.slug, meta.area);

  return (
    <>
      <article>
        <Container narrow>
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: meta.title, href: `/blog/${meta.slug}` },
            ]}
          />
          <h1 className="mt-4 text-h1">{meta.title}</h1>

          {/* Bloco de autoria — texto do template em docs/COPY.md */}
          <p className="mt-6 border-b border-line pb-6 text-small text-foreground">
            Por {site.lawyer}, OAB/GO nº 76.040 · Publicado em{" "}
            <time dateTime={meta.publishedAt}>
              {formatDate(meta.publishedAt)}
            </time>{" "}
            · Atualizado em{" "}
            <time dateTime={meta.updatedAt}>{formatDate(meta.updatedAt)}</time>
          </p>

          {/* Sumário */}
          <nav
            aria-label="Sumário"
            className="mt-8 rounded-card border border-line bg-card p-6 shadow-card"
          >
            <p className="text-eyebrow uppercase text-verde-700">Sumário</p>
            <ol className="mt-4 space-y-2">
              {sumario.map((h2) => (
                <li key={h2.id}>
                  <a
                    href={`#${h2.id}`}
                    className="text-foreground transition-colors duration-200 hover:text-verde-700"
                  >
                    {h2.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
          />

          {/* Aviso informativo obrigatório (OAB) — texto literal do COPY.md */}
          <p className="mt-12 rounded-card border border-line-gold bg-card p-6 text-small text-muted">
            Este conteúdo tem caráter meramente informativo e não substitui a
            análise individualizada do seu caso. Para orientação sobre a sua
            situação específica, fale com um advogado.
          </p>
        </Container>

        {/* CTA final — texto literal do COPY.md */}
        <Container narrow className="mt-12">
          <div className="rounded-card bg-dark p-10 text-center">
            <h2 className="text-h3 text-creme-100">
              Ficou com dúvida sobre o seu caso?
            </h2>
            <p className="mt-2 text-on-dark-muted">
              Fale com a Venâncio Advocacia e entenda seus direitos.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppButton
                variant="gold"
                message={whatsappMessages[area.whatsappKey]}
              />
            </div>
          </div>
        </Container>
      </article>

      {/* Leia também */}
      <section className="py-section">
        <Container>
          <h2 className="text-h2">Leia também</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relacionados.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <Link
            href={`/areas-de-atuacao/${area.slug}`}
            className="mt-10 inline-flex min-h-11 items-center gap-2 text-eyebrow uppercase text-verde-700 transition-colors duration-200 hover:text-heading"
          >
            Conheça a atuação em {area.title}
            <ArrowRight aria-hidden strokeWidth={1.5} className="size-4" />
          </Link>
        </Container>
      </section>

      <JsonLd
        data={blogPostingSchema({
          title: meta.title,
          description: meta.description,
          slug: meta.slug,
          publishedAt: meta.publishedAt,
          updatedAt: meta.updatedAt,
          areaTitle: area.title,
        })}
      />
    </>
  );
}
