/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://my-iig9rk7mu-bokuhakubos-projects.vercel.app/api/:path*', // 実際のAPIエンドポイントに置き換えてください
        },
      ];
    },
  };

export default nextConfig;
