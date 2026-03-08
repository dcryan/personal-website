import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniel | Message Sent",
  description: "Your message has been sent successfully",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
