/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        protocol: 'http',
        pathname: '/uploads/**',
        port: '5000',
      },
    ],
  },
  logging: {
    fetches: { fullUrl: true },
  },
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;
