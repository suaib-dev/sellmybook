/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: "/sellmybook",  // Replace with your GitHub repo name
  assetPrefix: "/sellmybook",
};

module.exports = nextConfig;
