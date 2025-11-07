/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/((?!coming-soon).*)",
        destination: "/coming-soon",
        permanent: false,
      },
    ];
  },
};

export default nextConfig; 