import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['avatars.mds.yandex.net', 'optim.tildacdn.com', 'static.tildacdn.com'], // Add the hostname here
  },
};

export default nextConfig;
