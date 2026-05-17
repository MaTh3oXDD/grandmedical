/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/grand-medical-clinic',
  assetPrefix: '/grand-medical-clinic',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;