import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['https-proxy-agent'],
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
};

export default nextConfig;
