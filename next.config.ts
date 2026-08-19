/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "(?:www\\.)?ssh-tech\\.xyz",
          },
        ],
        destination: "https://ai.ssh-tech.xyz/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
  webpack: (config: any) => {
    config.resolve.fallback = { fs: false }; // Prevents server-side fs issues
    return config;
  },
};

export default nextConfig;
