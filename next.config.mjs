/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["wclcricket.com", "staging.wclcricket.com"],
    unoptimized: false
  },
  reactStrictMode: true,
};

export default nextConfig;
