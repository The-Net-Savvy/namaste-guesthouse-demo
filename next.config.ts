import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Demo imagery is hotlinked from Unsplash; skip the optimizer proxy
    // rather than depending on the deploy environment's outbound fetch.
    unoptimized: true,
  },
};

export default nextConfig;
