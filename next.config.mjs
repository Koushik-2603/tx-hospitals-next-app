/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        domains: ['tx-hospital-blog-images.s3.ap-south-2.amazonaws.com', 'img.youtube.com', 'flagcdn.com'],
    },
};

export default nextConfig;
