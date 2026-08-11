import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { areas } from "@/content/areas";
import { getAllPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  const fixas: MetadataRoute.Sitemap = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/areas-de-atuacao", priority: 0.9, changeFrequency: "monthly" as const },
    ...areas.map((area) => ({
      path: `/areas-de-atuacao/${area.slug}`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    })),
    { path: "/sobre", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contato", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/politica-de-privacidade", priority: 0.3, changeFrequency: "yearly" as const },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${site.baseUrl}${path}`,
    lastModified: buildDate,
    changeFrequency,
    priority,
  }));

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${site.baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...fixas, ...posts];
}
