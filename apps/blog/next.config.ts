
const nextConfig = {
  transpilePackages: ["@sndx/ui"],
  // cacheComponents: true,
  // experimental: {
  //   turbopackFileSystemCacheForDev: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sendexa.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "user-images.trustpilot.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
  // allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
};

export default nextConfig;
