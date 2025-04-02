/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placehold.co"], // ✅ Add the hostname here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        hostname: "lh3.googleusercontent.com",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
