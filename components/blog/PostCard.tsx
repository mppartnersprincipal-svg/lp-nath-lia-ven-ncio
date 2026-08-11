import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PostMeta } from "@/lib/mdx";
import { formatDate } from "@/lib/mdx";
import { getArea } from "@/content/areas";

export function PostCard({ post }: { post: PostMeta }) {
  const area = getArea(post.area);
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-4 rounded-card border border-line bg-card p-8 shadow-card transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lift"
    >
      <p className="text-eyebrow uppercase text-verde-700">{area.title}</p>
      <h2 className="text-h3">{post.title}</h2>
      <p className="text-foreground">{post.description}</p>
      <div className="mt-auto flex items-center justify-between pt-2">
        <time dateTime={post.publishedAt} className="text-small text-foreground">
          {formatDate(post.publishedAt)}
        </time>
        <span className="inline-flex items-center gap-2 text-eyebrow uppercase text-verde-700 transition-colors duration-200 group-hover:text-heading">
          Ler artigo
          <ArrowRight
            aria-hidden
            strokeWidth={1.5}
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
