/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {MAP_KEY: process.env.MAP_KEY}
}

module.exports = nextConfig
