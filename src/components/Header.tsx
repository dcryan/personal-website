import Link from "next/link";

import {
  IoDocumentTextOutline,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

export default function Header() {
  return (
    <header>
      <div className="mb-1 py-2 px-4">
        <Link href="/" className="text-onedark-green text-2xl">
          {"<danielryan.xyz />"}
        </Link>
      </div>
      <div className="px-4 py-1 text-sm">
        <span className="text-onedark-green">daniel</span>
        <span className="text-onedark-fg">@</span>
        <span className="text-onedark-blue">barcelona</span>
        <span className="text-onedark-fg">:~$ </span>
        <span className="terminal-cursor">_</span>
      </div>
      <nav aria-label="Main navigation" className="flex justify-between items-center flex-wrap gap-4 py-2 px-4">
        <div className="flex items-center gap-2">
          <Link
            href="/experience"
            className="text-onedark-yellow hover:bg-onedark-currentline px-2 py-1 rounded transition-colors"
          >
            experience
          </Link>
          <Link
            href="/blog"
            className="text-onedark-blue hover:bg-onedark-currentline px-2 py-1 rounded transition-colors"
          >
            blog
          </Link>
          <Link
            href="/contact"
            className="text-onedark-red hover:bg-onedark-currentline px-2 py-1 rounded transition-colors"
          >
            contact
          </Link>
        </div>
        <div className="flex flex-1 justify-end text-2xl text-onedark-gutter mt-1 gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/dcryan"
            aria-label="LinkedIn profile (opens in new tab)"
            className="hover:text-white inline-flex items-center gap-0.5"
          >
            <IoLogoLinkedin />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/dcryan22/"
            aria-label="Instagram profile (opens in new tab)"
            className="hover:text-white inline-flex items-center gap-0.5"
          >
            <IoLogoInstagram />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/dcryan"
            aria-label="GitHub profile (opens in new tab)"
            className="hover:text-white inline-flex items-center gap-0.5"
          >
            <IoLogoGithub />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1fvPQO4fVGjo1OBmwrrR7e7kwJpeliLkxMNuVwpDHzpc/edit?usp=sharing"
            aria-label="Resume (opens in new tab)"
            className="hover:text-white inline-flex items-center gap-0.5"
          >
            <IoDocumentTextOutline />
          </a>
        </div>
      </nav>
      <div className="w-full h-px my-1 bg-onedark-selection"></div>
    </header>
  );
}
