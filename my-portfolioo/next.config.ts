import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: true, // ✅ utile pour forcer les modules ES modernes
  },
};

export default nextConfig;
