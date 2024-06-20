/** @type {import('next').NextConfig} */
const nextConfig = {
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