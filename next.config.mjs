/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Статический режим
  images: {
    unoptimized: true, // <--- ДОБАВЬТЕ ЭТО
  },
  experimental: {
    appDir: true
  }
};

export default nextConfig;
