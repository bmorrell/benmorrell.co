import type { MetadataRoute } from "next";

// Only the root page is open to search engines (the shopfront, from 2026-11-17).
// Every other route stays out: every per-role page is
// disallowed here and carry `noindex, nofollow` from app/layout.tsx or their own
// metadata.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Social link unfurlers are allowed so a shared or Featured link renders its
      // card. These are not search indexes.
      {
        userAgent: [
          "LinkedInBot",
          "Twitterbot",
          "facebookexternalhit",
          "Slackbot-LinkExpanding",
          "WhatsApp",
        ],
        allow: "/",
      },
      // `/$` matches the root URL only. The longer rule wins over `disallow: /`.
      // `/_next/` and the share card are allowed so the root page can be rendered.
      {
        userAgent: "*",
        allow: ["/$", "/_next/", "/og-root.png", "/icon.svg"],
        disallow: "/",
      },
    ],
  };
}
