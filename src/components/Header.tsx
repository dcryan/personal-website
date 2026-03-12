import Link from "next/link";

import {
  IoDocumentTextOutline,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

type HeaderProps = {
  barColor?: "green" | "yellow" | "blue" | "red" | "purple";
};

const barColorClasses = {
  green: "bg-onedark-green shadow-onedark-green",
  yellow: "bg-onedark-yellow shadow-onedark-yellow",
  blue: "bg-onedark-blue shadow-onedark-blue",
  red: "bg-onedark-red shadow-onedark-red",
  purple: "bg-onedark-purple shadow-onedark-purple",
};

export default function Header({ barColor }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-onedark-bg">
      {barColor && (
        <div className={`w-full h-1 shadow-md ${barColorClasses[barColor]}`} />
      )}
      <nav aria-label="Main navigation" className="py-2 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm hover:opacity-80 transition-opacity shrink-0">
              <span className="text-onedark-green">daniel</span>
              <span className="text-onedark-fg">@</span>
              <span className="text-onedark-blue">barcelona</span>
              <span className="text-onedark-fg">:~$</span>
              <span className="terminal-cursor ml-0.5">_</span>
            </Link>
            <div className="hidden md:flex items-center gap-2">
              <Link href="/experience" className="group text-sm transition-colors px-1 py-1">
                <span className={`transition-colors ${barColor === "yellow" ? "text-onedark-yellow" : "text-onedark-gutter group-hover:text-onedark-yellow"}`}>[</span>
                <span className="text-onedark-yellow"> experience </span>
                <span className={`transition-colors ${barColor === "yellow" ? "text-onedark-yellow" : "text-onedark-gutter group-hover:text-onedark-yellow"}`}>]</span>
              </Link>
              <Link href="/blog" className="group text-sm transition-colors px-1 py-1">
                <span className={`transition-colors ${barColor === "blue" ? "text-onedark-blue" : "text-onedark-gutter group-hover:text-onedark-blue"}`}>[</span>
                <span className="text-onedark-blue"> blog </span>
                <span className={`transition-colors ${barColor === "blue" ? "text-onedark-blue" : "text-onedark-gutter group-hover:text-onedark-blue"}`}>]</span>
              </Link>
              <Link href="/uses" className="group text-sm transition-colors px-1 py-1">
                <span className={`transition-colors ${barColor === "purple" ? "text-onedark-purple" : "text-onedark-gutter group-hover:text-onedark-purple"}`}>[</span>
                <span className="text-onedark-purple"> uses </span>
                <span className={`transition-colors ${barColor === "purple" ? "text-onedark-purple" : "text-onedark-gutter group-hover:text-onedark-purple"}`}>]</span>
              </Link>
              <Link href="/contact" className="group text-sm transition-colors px-1 py-1">
                <span className={`transition-colors ${barColor === "red" ? "text-onedark-red" : "text-onedark-gutter group-hover:text-onedark-red"}`}>[</span>
                <span className="text-onedark-red"> contact </span>
                <span className={`transition-colors ${barColor === "red" ? "text-onedark-red" : "text-onedark-gutter group-hover:text-onedark-red"}`}>]</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center text-xl text-onedark-gutter gap-3 [&>a]:transition-colors">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/dcryan"
              aria-label="LinkedIn profile (opens in new tab)"
              className="hover:text-white inline-flex items-center"
            >
              <IoLogoLinkedin />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/dcryan22/"
              aria-label="Instagram profile (opens in new tab)"
              className="hover:text-white inline-flex items-center"
            >
              <IoLogoInstagram />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/dcryan"
              aria-label="GitHub profile (opens in new tab)"
              className="hover:text-white inline-flex items-center"
            >
              <IoLogoGithub />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/document/d/1fvPQO4fVGjo1OBmwrrR7e7kwJpeliLkxMNuVwpDHzpc/edit?usp=sharing"
              aria-label="Resume (opens in new tab)"
              className="hover:text-white inline-flex items-center"
            >
              <IoDocumentTextOutline />
            </a>
          </div>
        </div>
        <div className="flex md:hidden items-center gap-2 mt-1">
          <Link href="/experience" className="group text-sm transition-colors px-1 py-1">
            <span className={`transition-colors ${barColor === "yellow" ? "text-onedark-yellow" : "text-onedark-gutter group-hover:text-onedark-yellow"}`}>[</span>
            <span className="text-onedark-yellow"> experience </span>
            <span className={`transition-colors ${barColor === "yellow" ? "text-onedark-yellow" : "text-onedark-gutter group-hover:text-onedark-yellow"}`}>]</span>
          </Link>
          <Link href="/blog" className="group text-sm transition-colors px-1 py-1">
            <span className={`transition-colors ${barColor === "blue" ? "text-onedark-blue" : "text-onedark-gutter group-hover:text-onedark-blue"}`}>[</span>
            <span className="text-onedark-blue"> blog </span>
            <span className={`transition-colors ${barColor === "blue" ? "text-onedark-blue" : "text-onedark-gutter group-hover:text-onedark-blue"}`}>]</span>
          </Link>
          <Link href="/uses" className="group text-sm transition-colors px-1 py-1">
            <span className={`transition-colors ${barColor === "purple" ? "text-onedark-purple" : "text-onedark-gutter group-hover:text-onedark-purple"}`}>[</span>
            <span className="text-onedark-purple"> uses </span>
            <span className={`transition-colors ${barColor === "purple" ? "text-onedark-purple" : "text-onedark-gutter group-hover:text-onedark-purple"}`}>]</span>
          </Link>
          <Link href="/contact" className="group text-sm transition-colors px-1 py-1">
            <span className={`transition-colors ${barColor === "red" ? "text-onedark-red" : "text-onedark-gutter group-hover:text-onedark-red"}`}>[</span>
            <span className="text-onedark-red"> contact </span>
            <span className={`transition-colors ${barColor === "red" ? "text-onedark-red" : "text-onedark-gutter group-hover:text-onedark-red"}`}>]</span>
          </Link>
        </div>
      </nav>
      <div className="w-full h-px my-1 bg-onedark-selection"></div>
    </header>
  );
}
