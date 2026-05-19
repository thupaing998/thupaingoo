/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  // Use Babel instead of SWC on platforms without native SWC support
  experimental: {
    forceSwcTransforms: false,
  },
}

module.exports = nextConfig
