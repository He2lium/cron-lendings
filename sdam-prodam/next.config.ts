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
        destination: process.env.PROXY_API_PATH + '/:path*',
      },
      // {
      //   source: '/geocode-maps/:path*',
      //   destination:
      //     process.env.GEOCODE_API_PATH +
      //     '?:path*' +
      //     '&apikey=' +
      //     process.env.GEOCODE_API_KEY,
      // },
      // {
      //   source: '/suggest-maps/:path*',
      //   destination:
      //     process.env.SUGGEST_API_PATH +
      //     '?:path*' +
      //     '&apikey=' +
      //     process.env.SUGGEST_API_KEY,
      // },
    ];
  },
  images: {
    domains: ['storage.yandexcloud.net'],
  },
};

export default nextConfig;
