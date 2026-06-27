/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tx-hospital-blog-images.s3.ap-south-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'tx-hospital-images.s3.ap-south-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'tx-hospital-healthpackages-images.s3.ap-south-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'tx-hospital-doctor-images.s3.ap-south-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'tx-hospital-secondopinion-images.s3.ap-south-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      }
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          }
        ],
      },
    ];
  },
};

// ERROR WAS HERE: change "module.exports = nextConfig" to:
export default nextConfig;