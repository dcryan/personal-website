import Link from "next/link";
import HeaderBar from "@/components/HeaderBar";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeaderBar color="green" />
      <Header />

      <div className="mt-16 px-6 max-w-2xl mx-auto space-y-8">
        {/* whoami */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-onedark-green font-bold">$</span>
            <span className="typing-line" style={{ width: "6ch" }}>
              whoami
            </span>
          </div>
          <p
            className="text-white text-lg mt-1 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Daniel Ryan
          </p>
        </div>

        {/* location */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-onedark-green font-bold">$</span>
            <span className="text-onedark-fg">cat location.txt</span>
          </div>
          <p className="text-white mt-1">Barcelona, Spain</p>
        </div>

        {/* role */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-onedark-green font-bold">$</span>
            <span className="text-onedark-fg">cat role.txt</span>
          </div>
          <p className="text-white mt-1">Remote Software Engineer</p>
          <p className="text-onedark-fg">
            Building for companies around the world.
          </p>
        </div>

        {/* ls ~/ navigation */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-onedark-green font-bold">$</span>
            <span className="text-onedark-fg">ls ~/</span>
          </div>
          <div className="mt-2 space-y-1">
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
          </div>
        </div>
      </div>
    </main>
  );
}
