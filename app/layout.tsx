import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import CookieConsent from "./components/CookieConsent";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-hanken",
  display: "swap",
});

// Site-wide default. The root page (app/page.tsx) sets its own title, share card
// and `index: true`; every per-role page sets its own title and inherits the
// noindex below.
const LINE = "Technical and commercial, in one person, in your team.";
const SUB =
  "I get the work done that nobody else has the cycles for. Engineer at heart, commercial for 12+ years.";

export const metadata: Metadata = {
  title: "Ben Morrell",
  description: SUB,
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
    description: SUB,
    url: "https://benmorrell.co",
    siteName: "Ben Morrell",
    type: "website",
    images: [{ url: "/og-root.png", width: 1200, height: 630, alt: `Ben Morrell. ${LINE}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Morrell",
    description: SUB,
    images: ["/og-root.png"],
  },
};

// Microsoft Clarity, loaded only after cookie consent (CookieConsent). Lives in
// the root layout so it covers every route.
const CLARITY_PROJECT_ID = "xpwrgf749e";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={hanken.variable}>
      <body className="font-sans">
        {children}
        <CookieConsent clarityId={CLARITY_PROJECT_ID} />
      </body>
    </html>
  );
}
