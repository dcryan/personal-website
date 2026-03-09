import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogEntries = posts.map((post) => ({
    url: `https://danielryan.xyz/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    { url: "https://danielryan.xyz", lastModified: new Date() },
    { url: "https://danielryan.xyz/experience", lastModified: new Date() },
    { url: "https://danielryan.xyz/blog", lastModified: new Date() },
    { url: "https://danielryan.xyz/contact", lastModified: new Date() },
    ...blogEntries,
  ];
}
