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
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: `${post.title} | Daniel Ryan`,
    description: post.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-800">
      <HeaderBar color="blue" />
      <Header />
      <article className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">{post.title}</h1>
          <time className="text-sm text-gray-500 mt-2 block">
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
