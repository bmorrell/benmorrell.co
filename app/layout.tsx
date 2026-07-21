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

// Site-wide default. Deliberately track-neutral: the root is a router, and each
// track page (commercial, building, mission) sets its own title and share card.
export const metadata: Metadata = {
  title: "Ben Morrell",
  description:
    "Technology and commercial leader. 18+ years across engineering, delivery and commercial leadership in 15+ countries, and I still build production software myself.",
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
    title: "Ben Morrell",
    description:
      "Technology and commercial leader. Engineer by training, and still building.",
    url: "https://benmorrell.co",
    siteName: "Ben Morrell",
    type: "website",
    images: ["/headshot.png"],
  },
  twitter: {
    card: "summary",
    title: "Ben Morrell",
    description:
      "Technology and commercial leader. Engineer by training, and still building.",
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
