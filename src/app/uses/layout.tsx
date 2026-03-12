import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "Daniel Ryan's setup — hardware, editor, terminal, and tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
