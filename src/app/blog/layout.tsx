import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tech blog by Daniel Ryan — thoughts on software engineering, web development, and building products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
