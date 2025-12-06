/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    // trailingSlash: true,
    // images: {
    //     unoptimized: true,
    //     domains: ['tx-hospital-blog-images.s3.ap-south-2.amazonaws.com', 'img.youtube.com', 'flagcdn.com'],
    // },
  
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
