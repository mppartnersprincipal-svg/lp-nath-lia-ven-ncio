import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  title: string;
  seoTitle: string;
  slug: string;
  description: string;
  area: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  keywords: string[];
};

export type Post = { meta: PostMeta; content: string };

function parseFile(filename: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  return { meta: data as PostMeta, content };
}

export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => parseFile(f).meta)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPost(slug: string): Post {
  const found = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(parseFile)
    .find((p) => p.meta.slug === slug);
  if (!found) throw new Error(`Post não encontrado: ${slug}`);
  return found;
}

// Sumário: extrai os H2 do MDX com os mesmos ids que o rehype-slug gera.
export function extractH2s(content: string): { id: string; text: string }[] {
  const slugger = new GithubSlugger();
  return Array.from(content.matchAll(/^##\s+(.+)$/gm)).map((m) => {
    const text = m[1].trim();
    return { id: slugger.slug(text), text };
  });
}

// Relacionados: mesma área primeiro, completa com os mais recentes (máx. 3).
export function getRelatedPosts(slug: string, area: string): PostMeta[] {
  const others = getAllPosts().filter((p) => p.slug !== slug);
  const sameArea = others.filter((p) => p.area === area);
  const rest = others.filter((p) => p.area !== area);
  return [...sameArea, ...rest].slice(0, 3);
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(iso));
}
