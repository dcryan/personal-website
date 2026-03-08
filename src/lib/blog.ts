import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { createHighlighter, type Highlighter } from "shiki";

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["one-dark-pro"],
      langs: [
        "javascript",
        "typescript",
        "bash",
        "json",
        "css",
        "html",
        "jsx",
        "tsx",
        "python",
        "swift",
        "sql",
        "text",
      ],
    });
  }
  return highlighterPromise;
}

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  path: string;
  content: string;
  htmlContent?: string;
}

function getMarkdownFiles(dir: string): string[] {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getMarkdownFiles(fullPath));
    } else if (entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

export function getAllPosts(): BlogPost[] {
  const files = getMarkdownFiles(BLOG_DIR);

  const posts = files.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: data.slug as string,
      title: data.title as string,
      date: data.date as string,
      description: data.description as string,
      path: data.path as string,
      content,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return undefined;
  }

  const processedContent = await remark().use(html).process(post.content);
  let htmlContent = processedContent.toString();

  const highlighter = await getHighlighter();

  // Replace code blocks with language class
  htmlContent = htmlContent.replace(
    /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g,
    (_, lang, code) => {
      const decoded = decodeHtmlEntities(code.trim());
      try {
        return highlighter.codeToHtml(decoded, {
          lang,
          theme: "one-dark-pro",
        });
      } catch {
        return highlighter.codeToHtml(decoded, {
          lang: "text",
          theme: "one-dark-pro",
        });
      }
    }
  );

  // Replace code blocks without language class
  htmlContent = htmlContent.replace(
    /<pre><code>([\s\S]*?)<\/code><\/pre>/g,
    (_, code) => {
      const decoded = decodeHtmlEntities(code.trim());
      return highlighter.codeToHtml(decoded, {
        lang: "text",
        theme: "one-dark-pro",
      });
    }
  );

  return {
    ...post,
    htmlContent,
  };
}
