/** @type {import('next').NextConfig} */
const nextConfig = {
  // The three track pages were folded into the root. Old links still land.
  async redirects() {
    return ["/commercial", "/building", "/mission"].map((source) => ({
      source,
      destination: "/",
      permanent: false,
    }));
  },
};

export default nextConfig;
