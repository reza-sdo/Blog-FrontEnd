/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        protocol: 'http',
        pathname: '/uploads/coverImage/**',
        port: '5000',
      },
    ],
  },
};

export default nextConfig;
