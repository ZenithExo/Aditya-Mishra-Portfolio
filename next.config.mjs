process.env.BROWSERSLIST_IGNORE_OLD_DATA = 'true'
process.env.NEXT_TELEMETRY_DISABLED = '1'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
