/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["wclcricket.com", "staging.wclcricket.com"],
    unoptimised: false
  },
  reactStrictMode: true,
};

export default nextConfig;
