/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiURL: 'https://localhost:5001/weather',
  },
}

module.exports = nextConfig
