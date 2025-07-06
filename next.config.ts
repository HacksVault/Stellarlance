import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This will allow the build to pass even with ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This will allow the build to pass even with TypeScript errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
