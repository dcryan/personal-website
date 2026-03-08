import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header barColor="green" />

      <div className="mt-16 px-6 max-w-2xl mx-auto space-y-8">
        {/* whoami */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-onedark-green font-bold animate-fade-in" style={{ animationDelay: "0s" }}>$</span>
            <span className="typing-line" style={{ width: "6ch", animationDelay: "0s" }}>
              whoami
            </span>
          </div>
          <h1
            className="text-white text-lg mt-1 animate-fade-in font-normal"
            style={{ animationDelay: "0.8s" }}
          >
            Daniel Ryan
          </h1>
        </div>

        {/* location */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-onedark-green font-bold animate-fade-in" style={{ animationDelay: "1.0s" }}>$</span>
            <span className="typing-line" style={{ width: "16ch", animationDelay: "1.0s" }}>
              cat location.txt
            </span>
          </div>
          <p className="text-white mt-1 animate-fade-in" style={{ animationDelay: "1.8s" }}>
            Barcelona, Spain
          </p>
        </div>

        {/* role */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-onedark-green font-bold animate-fade-in" style={{ animationDelay: "2.0s" }}>$</span>
            <span className="typing-line" style={{ width: "12ch", animationDelay: "2.0s" }}>
              cat role.txt
            </span>
          </div>
          <p className="text-white mt-1 animate-fade-in" style={{ animationDelay: "2.8s" }}>
            Remote Software Engineer
          </p>
          <p className="text-onedark-fg animate-fade-in" style={{ animationDelay: "2.8s" }}>
            Building for companies around the world.
          </p>
        </div>

        {/* ls ~/ navigation */}
        <nav aria-label="Site sections">
          <div className="flex items-center gap-2">
            <span className="text-onedark-green font-bold animate-fade-in" style={{ animationDelay: "3.0s" }}>$</span>
            <span className="typing-line" style={{ width: "4ch", animationDelay: "3.0s" }}>
              ls ~/
            </span>
          </div>
          <div className="mt-2 space-y-1">
            <Link
              href="/experience"
              className="flex items-center gap-2 hover:bg-onedark-currentline rounded px-2 py-1 transition-colors animate-fade-in"
              style={{ animationDelay: "3.8s" }}
            >
              <span className="text-onedark-gutter">{">"}</span>
              <span className="text-onedark-yellow">experience/</span>
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-2 hover:bg-onedark-currentline rounded px-2 py-1 transition-colors animate-fade-in"
              style={{ animationDelay: "3.85s" }}
            >
              <span className="text-onedark-gutter">{">"}</span>
              <span className="text-onedark-blue">blog/</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 hover:bg-onedark-currentline rounded px-2 py-1 transition-colors animate-fade-in"
              style={{ animationDelay: "3.9s" }}
            >
              <span className="text-onedark-gutter">{">"}</span>
              <span className="text-onedark-red">contact/</span>
            </Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
