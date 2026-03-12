import Link from "next/link";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404: Not Found",
  description: "The page you were looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Header barColor="red" />

      <div className="mt-16 px-6 max-w-2xl mx-auto space-y-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-onedark-green font-bold">$</span>
            <span className="text-onedark-fg">cd {"{requested path}"}</span>
          </div>
          <p className="text-onedark-red mt-1">
            bash: cd: {"{requested path}"}: No such file or directory
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <span className="text-onedark-green font-bold">$</span>
            <span className="text-onedark-fg">ls ~/</span>
          </div>
          <nav className="mt-2 space-y-1" aria-label="Available pages">
            <Link
              href="/"
              className="flex items-center gap-2 hover:bg-onedark-currentline rounded px-2 py-1 transition-colors"
            >
              <span className="text-onedark-gutter">{">"}</span>
              <span className="text-onedark-green">~/</span>
            </Link>
            <Link
              href="/experience"
              className="flex items-center gap-2 hover:bg-onedark-currentline rounded px-2 py-1 transition-colors"
            >
              <span className="text-onedark-gutter">{">"}</span>
              <span className="text-onedark-yellow">experience/</span>
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-2 hover:bg-onedark-currentline rounded px-2 py-1 transition-colors"
            >
              <span className="text-onedark-gutter">{">"}</span>
              <span className="text-onedark-blue">blog/</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 hover:bg-onedark-currentline rounded px-2 py-1 transition-colors"
            >
              <span className="text-onedark-gutter">{">"}</span>
              <span className="text-onedark-red">contact/</span>
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
