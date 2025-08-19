import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    eslint: {
    // ✅ This disables ESLint during builds and dev
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ This disables TypeScript type checking during builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
