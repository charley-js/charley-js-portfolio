import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    domains: ["media.istockphoto.com", "www.playfusion.org"],
  },
};

export default nextConfig;
