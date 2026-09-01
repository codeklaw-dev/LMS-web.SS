/** @type {import('next').NextConfig} */
// Local-dev stand-in only. The shipped bundle is app/landing-page/**,
// components/landing/** and locales/landing.*.json — the platform repo has its
// own next.config.js, so nothing here is copied across.
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/', destination: '/landing-page', permanent: false },
      { source: '/landing-page/book-a-demo', destination: '/landing-page/demo', permanent: true },
      { source: '/landing-page/platform/ai', destination: '/landing-page/platform/ai-copilot', permanent: true },
      { source: '/landing-page/bn/book-a-demo', destination: '/landing-page/bn/demo', permanent: true },
      { source: '/landing-page/bn/platform/ai', destination: '/landing-page/bn/platform/ai-copilot', permanent: true },
    ]
  },
}

module.exports = nextConfig
