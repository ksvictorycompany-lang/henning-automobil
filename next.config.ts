import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image-am.pixel-base.de",
      },
      {
        protocol: "https",
        hostname: "www.henning-automobil.de",
      },
    ],
  },
};

export default nextConfig;
