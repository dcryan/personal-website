import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects I've worked on",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
