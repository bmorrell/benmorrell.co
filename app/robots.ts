import type { MetadataRoute } from "next";

// Site-wide: keep benmorrell.co out of search indexes and crawlers.
// Paired with a site-wide `noindex, nofollow` robots meta tag in app/layout.tsx.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
  };
}
