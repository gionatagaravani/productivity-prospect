const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: [],
    unoptimized: true,
  },
}

module.exports = withContentlayer(nextConfig)
