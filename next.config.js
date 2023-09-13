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
    unoptimized: true,
  },
};

module.exports = nextConfig;

// trailingSlash: true,
