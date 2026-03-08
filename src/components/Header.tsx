import Link from "next/link";

import {
  IoDocumentTextOutline,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

type HeaderProps = {
  barColor?: "green" | "yellow" | "blue" | "red";
};

const barColorClasses = {
  green: "bg-onedark-green shadow-onedark-green",
  yellow: "bg-onedark-yellow shadow-onedark-yellow",
  blue: "bg-onedark-blue shadow-onedark-blue",
  red: "bg-onedark-red shadow-onedark-red",
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
              <Link
                href="/experience"
                className={`text-onedark-yellow hover:bg-onedark-currentline px-2 py-1 rounded transition-colors text-sm ${barColor === "yellow" ? "underline" : ""}`}
              >
                experience/
              </Link>
              <Link
                href="/blog"
                className={`text-onedark-blue hover:bg-onedark-currentline px-2 py-1 rounded transition-colors text-sm ${barColor === "blue" ? "underline" : ""}`}
              >
                blog/
              </Link>
              <Link
                href="/contact"
                className={`text-onedark-red hover:bg-onedark-currentline px-2 py-1 rounded transition-colors text-sm ${barColor === "red" ? "underline" : ""}`}
              >
                contact/
              </Link>
            </div>
          </div>
          <div className="flex items-center text-xl text-onedark-gutter gap-3">
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
        <div className="flex md:hidden items-center gap-3 mt-1">
          <Link
            href="/experience"
            className={`text-onedark-yellow hover:bg-onedark-currentline px-2 py-1 rounded transition-colors text-sm ${barColor === "yellow" ? "underline" : ""}`}
          >
            experience/
          </Link>
          <Link
            href="/blog"
            className={`text-onedark-blue hover:bg-onedark-currentline px-2 py-1 rounded transition-colors text-sm ${barColor === "blue" ? "underline" : ""}`}
          >
            blog/
          </Link>
          <Link
            href="/contact"
            className={`text-onedark-red hover:bg-onedark-currentline px-2 py-1 rounded transition-colors text-sm ${barColor === "red" ? "underline" : ""}`}
          >
            contact/
          </Link>
        </div>
      </nav>
      <div className="w-full h-px my-1 bg-onedark-selection"></div>
    </header>
  );
}
