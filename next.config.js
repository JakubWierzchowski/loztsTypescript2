/**
 * @type {import('next').NextConfig}
 *
 *
 */

const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: false,
    },
  },

  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};

module.exports = nextConfig;
