/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: 'images-na.ssl-images-amazon.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.shopify.com' },
      { protocol: 'https', hostname: 'www.bee-link.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/review/anker-soundcore-q20i-vs-p20i',
        destination: '/review/anker-soundcore-q20i-review',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
