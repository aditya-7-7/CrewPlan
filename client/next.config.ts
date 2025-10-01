import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  eslint: {
    // ✅ Allow production builds to complete even with ESLint errors
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "crewplan-s3-images.s3.us-east-1.amazonaws.com", // <-- your bucket name + region
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
