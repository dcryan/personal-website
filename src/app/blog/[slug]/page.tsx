import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import HeaderBar from "@/components/HeaderBar";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <HeaderBar color="blue" />
      <Header />
      <article className="max-w-3xl mx-auto px-6 pb-16">
        <div className="mt-12 mb-6">
          <span className="text-onedark-gutter">daniel@barcelona:~$</span>{" "}
          <span className="text-onedark-fg">cat blog/{slug}.md</span>
        </div>
        <Link
          href="/blog"
          className="text-onedark-blue hover:text-white transition-colors text-sm mb-6 inline-block"
        >
          &larr; back to blog
        </Link>
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">{post.title}</h1>
          <time className="text-sm text-onedark-gutter mt-2 block">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.htmlContent || "" }}
        />
      </article>
    </main>
  );
}
