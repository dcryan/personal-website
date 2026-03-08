import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience, side projects, volunteer work, and education of Daniel Ryan — Remote Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
