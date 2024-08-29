import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniel | Blog",
  description: "Thoughts and ideas of yours truly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
