const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
}

module.exports = withContentlayer(nextConfig)
