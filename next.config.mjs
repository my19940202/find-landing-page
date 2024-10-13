/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.ifinder.one',
            },
        ],
    },
};

export default nextConfig;
