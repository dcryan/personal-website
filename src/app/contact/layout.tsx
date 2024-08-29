import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniel | Contact Page",
  description: "Come say hello :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
