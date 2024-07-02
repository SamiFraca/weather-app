/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["openweathermap.org"],
  },
  async rewrites() {
    return [
      {
        source: "/api/getCityHandler",
        destination: "/api/proxy",
      },
    ];
  },
};

export default nextConfig;
