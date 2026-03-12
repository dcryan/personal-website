import Link from "next/link";
import Header from "@/components/Header";
import { getAllPosts } from "@/lib/blog";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen">
      <Header barColor="blue" />
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
              className="block border-b border-dashed border-onedark-selection px-3 py-5 transition-colors group"
            >
              <h2 className="text-lg font-bold">
                <span className="text-onedark-gutter group-hover:text-onedark-blue transition-colors">[</span>
                <span className="text-onedark-blue"> {post.title} </span>
                <span className="text-onedark-gutter group-hover:text-onedark-blue transition-colors">]</span>
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
