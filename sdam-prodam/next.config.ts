import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/proxy/:path*',
        destination: process.env.NEXT_PUBLIC_API_PATH + '/:path*',
      },
    ];
  },
  images: {
    domains: ['storage.yandexcloud.net'],
  },
};

export default nextConfig;
