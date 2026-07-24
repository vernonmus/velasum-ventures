import type { NextConfig } from "next";

/** Standard Next.js for Vercel (static pages, no OpenNext / no forced out/ export). */
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
