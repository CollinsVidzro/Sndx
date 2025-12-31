import { withContentlayer } from "next-contentlayer2";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sendexa.co",
        pathname: "/**",
      },
    ],
  },

  turbopack: {
    // keep empty unless you need custom rules
  },
};

export default withContentlayer(nextConfig);
