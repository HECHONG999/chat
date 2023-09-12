/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '',
      },
    ],
    domains: ['avatars.githubusercontent.com','lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
