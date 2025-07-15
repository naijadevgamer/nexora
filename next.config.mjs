/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.sanity.io",
      "images.unsplash.com",
      "assets.mixkit.co",
      "upload.wikimedia.org",
      "theoceancleanup.com",
      "media.istockphoto.com",
      "www.1t.org",
      "carbon180.org",
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: '**.mixkit.co',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      // Add other domains as needed
    ],
  },
};

export default nextConfig;
