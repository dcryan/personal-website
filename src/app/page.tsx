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
              className="group inline-block px-2 py-1 text-sm transition-colors animate-fade-in"
              style={{ animationDelay: "3.8s" }}
            >
              <span className="text-onedark-gutter group-hover:text-onedark-yellow transition-colors">[</span>
              <span className="text-onedark-yellow"> experience </span>
              <span className="text-onedark-gutter group-hover:text-onedark-yellow transition-colors">]</span>
            </Link>
            <Link
              href="/blog"
              className="group inline-block px-2 py-1 text-sm transition-colors animate-fade-in"
              style={{ animationDelay: "3.85s" }}
            >
              <span className="text-onedark-gutter group-hover:text-onedark-blue transition-colors">[</span>
              <span className="text-onedark-blue"> blog </span>
              <span className="text-onedark-gutter group-hover:text-onedark-blue transition-colors">]</span>
            </Link>
            <Link
              href="/uses"
              className="group inline-block px-2 py-1 text-sm transition-colors animate-fade-in"
              style={{ animationDelay: "3.875s" }}
            >
              <span className="text-onedark-gutter group-hover:text-onedark-purple transition-colors">[</span>
              <span className="text-onedark-purple"> uses </span>
              <span className="text-onedark-gutter group-hover:text-onedark-purple transition-colors">]</span>
            </Link>
            <Link
              href="/contact"
              className="group inline-block px-2 py-1 text-sm transition-colors animate-fade-in"
              style={{ animationDelay: "3.9s" }}
            >
              <span className="text-onedark-gutter group-hover:text-onedark-red transition-colors">[</span>
              <span className="text-onedark-red"> contact </span>
              <span className="text-onedark-gutter group-hover:text-onedark-red transition-colors">]</span>
            </Link>
          </div>
        </nav>

        {/* availability */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-onedark-green font-bold animate-fade-in" style={{ animationDelay: "4.2s" }}>$</span>
            <span className="typing-line" style={{ width: "18ch", animationDelay: "4.2s" }}>
              cat availability.txt
            </span>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "5.0s" }}>
            <p className="text-onedark-fg mt-1">Open to remote contract &amp; consulting work.</p>
            <Link
              href="/contact"
              className="group inline-block px-2 py-1 text-sm transition-colors mt-1"
            >
              <span className="text-onedark-gutter group-hover:text-onedark-red transition-colors">[</span>
              <span className="text-onedark-red"> contact </span>
              <span className="text-onedark-gutter group-hover:text-onedark-red transition-colors">]</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
