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
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="mt-12 mb-6">
          <span className="text-onedark-gutter">daniel@barcelona:~$</span>{" "}
          <span className="text-onedark-fg">ls blog/</span>
        </div>
        <div>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border-b border-onedark-selection px-3 py-5 hover:bg-onedark-currentline rounded-lg transition-colors group"
            >
              <h2 className="text-lg font-bold text-onedark-blue group-hover:underline transition-colors">
                {post.title}
              </h2>
              <time className="text-xs text-onedark-gutter mt-1 block">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <p className="text-onedark-fg text-sm mt-2">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
