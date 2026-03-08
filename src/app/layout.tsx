import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#282C34",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://danielryan.xyz"),
  title: {
    default: "Daniel Ryan",
    template: "%s | Daniel Ryan",
  },
  description:
    "Daniel Ryan — Remote Software Engineer based in Barcelona. Building full-stack solutions for companies worldwide.",
  openGraph: {
    type: "website",
    siteName: "Daniel Ryan",
    title: "Daniel Ryan",
    description:
      "Remote Software Engineer based in Barcelona. Building full-stack solutions for companies worldwide.",
    url: "https://danielryan.xyz",
  },
  twitter: {
    card: "summary",
    title: "Daniel Ryan",
    description:
      "Remote Software Engineer based in Barcelona. Building full-stack solutions for companies worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-QMT4TLZLJ1" />
      <body className={`${ibmPlexMono.className} bg-onedark-bg text-onedark-fg`}>
        {children}
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "1ebae342835246b3a859d411d47a868e"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
