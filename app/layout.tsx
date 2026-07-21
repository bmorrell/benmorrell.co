import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ben Morrell · Strategic partnerships leader who builds",
  description:
    "Strategic partnerships leader and AI-native builder. 18+ years scaling B2B SaaS and infrastructure across EMEA and APAC: partnerships, GTM, and the systems that power them.",
  metadataBase: new URL("https://benmorrell.co"),
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-snippet": -1,
      "max-image-preview": "none",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Ben Morrell · Strategic partnerships leader who builds",
    description:
      "Strategic partnerships leader and AI-native builder. Partnerships, GTM, and the AI systems that power them.",
    url: "https://benmorrell.co",
    siteName: "Ben Morrell",
    type: "website",
    images: ["/headshot.png"],
  },
  twitter: {
    card: "summary",
    title: "Ben Morrell · Strategic partnerships leader who builds",
    description:
      "Strategic partnerships leader and AI-native builder. Partnerships, GTM, and the AI systems that power them.",
    images: ["/headshot.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
