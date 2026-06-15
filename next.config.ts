import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "image.mux.com" },
    ],
  },
  async redirects() {
    return [
      // Examples for Wix → new-site 301s. Replace with the real Wix URL map at cutover.
      // { source: "/old-category-url", destination: "/shop/mobility-aids", permanent: true },
    ];
  },
};

export default nextConfig;
