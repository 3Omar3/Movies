/** @type {import('next').NextConfig} */

const nextConfig = {
    publicRuntimeConfig: {
        favicon: '/public/favicon.ico',
    },
    
    async rewrites() {
        return [
            {
                source: '/movie/:slug',
                destination: '/movie/[slug]',
            },
        ];
    },
}

module.exports = nextConfig
