/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // Set this to true to avoid ESLint warnings during build
    }
};

module.exports = nextConfig;
