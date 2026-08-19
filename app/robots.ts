import type { MetadataRoute } from "next";

// Site-wide: keep benmorrell.co out of search indexes and crawlers.
// Paired with a site-wide `noindex, nofollow` robots meta tag in app/layout.tsx.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Social link unfurlers are allowed so a shared or Featured link renders its
      // card. These are not search indexes: nothing here reaches Google, and the
      // site-wide `noindex, nofollow` meta tag still applies to every route.
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
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
  };
}
