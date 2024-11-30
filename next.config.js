const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: [],
    unoptimized: true,
  }
}

module.exports = withContentlayer(nextConfig)
