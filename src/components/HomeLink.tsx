import React from "react";
import Link from "next/link";

type HomeLinkProps = {
  href: string;
  children: React.ReactNode;
  color: "red" | "blue" | "yellow";
};

export default function HomeLink({ href, children, color }: HomeLinkProps) {
  return (
    <Link href={href}>
      <div
        className={[
          "my-4 mx-auto max-w-80 text-center text-lg font-bold border-2 rounded-md px-4 py-2",
          "hover:underline",
          color === "red" ? "border-rose-500 text-rose-500" : "",
          color === "blue" ? "border-teal-400 text-teal-400" : "",
          color === "yellow" ? "border-yellow-400 text-yellow-400" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </div>
    </Link>
  );
}
