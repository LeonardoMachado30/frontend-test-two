/** @type {import('next').NextConfig} */
/** @type {import('dotenv').config()} */

const isProd =
  process.env.NODE_ENV === "production"
    ? process.env.STATIC_ASSETS_URL
    : process.env.STATIC_ASSETS_URL;

console.log(process.env.STATIC_ASSETS_URL);
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
};

module.exports = nextConfig;
