/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => [
        { source: '/validate', destination: '/api/validate' },
    ]
};

export default nextConfig;
