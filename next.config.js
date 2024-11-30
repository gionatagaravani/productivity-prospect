const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  // Add this to ensure proper static HTML generation
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/404': { page: '/404' },
      // Add other static routes here if needed
    }
  }
}

module.exports = withContentlayer(nextConfig)
