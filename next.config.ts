import type { NextConfig } from "next";

/**
 * Static HTML export for Vercel.
 * Deploy as static files from /out — do not use Next.js server runtime settings.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
