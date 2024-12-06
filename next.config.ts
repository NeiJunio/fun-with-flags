import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "via.placeholder.com",
          },{
            protocol: "https",
            hostname: "placehold.co", // Primeiro domínio
          },
        ],
      },
};

export default nextConfig;
