/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "example.com",
    //     port: "",
    //     pathname: "/account123/**",
    //   },
    // ],
  },
};

module.exports = nextConfig;
