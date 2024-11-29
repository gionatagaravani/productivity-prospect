const { withContentlayer } = require('next-contentlayer')
const path = require('path')
const fs = require('fs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: [],
    unoptimized: true,
  },
  // Copy .htaccess to output directory during build
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.afterEmit.tap('CopyHtaccess', () => {
            const publicHtaccess = path.join(__dirname, 'public', '.htaccess')
            const outputHtaccess = path.join(__dirname, 'out', '.htaccess')
            if (fs.existsSync(publicHtaccess)) {
              fs.copyFileSync(publicHtaccess, outputHtaccess)
            }
          })
        }
      })
    }
    return config
  }
}

module.exports = withContentlayer(nextConfig)
