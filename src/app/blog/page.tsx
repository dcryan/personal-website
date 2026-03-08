import Link from "next/link";
import Header from "@/components/Header";
import HeaderBar from "@/components/HeaderBar";
import { getAllPosts } from "@/lib/blog";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen">
      <HeaderBar color="blue" />
      <Header />
      <section className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-onedark-green mb-4 text-sm">
          <span className="text-onedark-green">daniel</span>
          <span className="text-onedark-fg">@</span>
          <span className="text-onedark-blue">barcelona</span>
          <span className="text-onedark-fg">:~$ </span>
          <span className="text-onedark-fg">ls blog/</span>
        </p>
        <h1 className="text-3xl font-bold text-white mb-8">Blog</h1>
        <div className="space-y-0">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border-b border-onedark-selection py-6 hover:bg-onedark-currentline transition-colors group"
            >
              <h2 className="text-xl font-bold text-white group-hover:text-onedark-blue transition-colors">
                {post.title}
              </h2>
              <time className="text-sm text-onedark-gutter mt-1 block">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <p className="text-onedark-fg mt-2">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
