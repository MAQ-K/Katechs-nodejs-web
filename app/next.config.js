/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  optimizeFonts: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // For Static Export
  // output: 'export',
  images: {
    unoptimized: true,
  },
  // The digital marketing page moved off the misspelled legacy URL
  // (/services/degital-market/). Permanent redirect so the old address keeps
  // working for any existing inbound links or search indexing.
  async redirects() {
    return [
      {
        source: '/services/degital-market',
        destination: '/services/digital-marketing',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig