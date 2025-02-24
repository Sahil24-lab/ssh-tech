/** @type {import('next').NextConfig} */
const nextConfig = {
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
