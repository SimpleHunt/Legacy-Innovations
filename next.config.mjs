/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: "images.pexels.com"}]
    },
    experimental: {
    turbo: false,  // ⛔ Disable Turbopack completely
    serverSourceMaps: false,
  },
};

export default nextConfig;
