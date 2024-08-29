import React from "react";

import Link from "next/link";

import {
  IoDocumentTextOutline,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoStackoverflow,
  IoLogoTwitter,
} from "react-icons/io5";

export default function Header() {
  return (
    <div>
      <div className="mb-4 py-2 px-4">
        <Link href="" className="text-green-400 text-2xl">
          {"<danielryan.xyz />"}
        </Link>
      </div>
      <div className="flex justify-between items-center py-2 px-4 text-xl">
        <div>
          <Link href="projects" className="text-yellow-400 hover:underline">
            projects
          </Link>

          <span className="mx-2 text-sm text-white opacity-50">|</span>

          <Link href="blog" className="text-teal-400 hover:underline">
            blog
          </Link>

          <span className="mx-2 text-sm text-white opacity-50">|</span>

          <Link href="contact" className="text-rose-400 hover:underline">
            contact
          </Link>
        </div>
        <div className="flex justify-between text-gray-500 mt-1 gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/dcryan"
            className="hover:text-white"
          >
            <IoLogoLinkedin />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/dcryan22"
            className="hover:text-white"
          >
            <IoLogoTwitter />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/dcryan22"
            className="hover:text-white"
          >
            <IoLogoFacebook />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/dcryan22/"
            className="hover:text-white"
          >
            <IoLogoInstagram />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/dcryan"
            className="hover:text-white"
          >
            <IoLogoGithub />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackoverflow.com/users/2997363/dcryan22"
            className="hover:text-white"
          >
            <IoLogoStackoverflow />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1fvPQO4fVGjo1OBmwrrR7e7kwJpeliLkxMNuVwpDHzpc/edit?usp=sharing"
            className="hover:text-white"
          >
            <IoDocumentTextOutline />
          </a>
        </div>
      </div>
      <div className="w-full h-px my-1 bg-gray-700"></div>
    </div>
  );
}
