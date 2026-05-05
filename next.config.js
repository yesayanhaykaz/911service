/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'i.pinimg.com'],
    formats: ['image/webp', 'image/avif'],
  },
};

module.exports = nextConfig;
