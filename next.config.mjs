/** @type {import('next').NextConfig} */
const nextConfig = (phase) => ({
    distDir: phase === 'phase-development-server' ? '.next-dev' : '.next',
    // Permanent (301) redirects keep rankings and old links when a page moves.
    async redirects() {
        return [
            { source: '/services/seo-content', destination: '/services/seo-outsourcing', permanent: true },
            { source: '/services/seo-outsourcing-services', destination: '/services/seo-outsourcing', permanent: true },
            { source: '/services/web-development', destination: '/services/web-development-outsourcing', permanent: true },
        ]
    },
    images : {
        remotePatterns : [
            {
                protocol : 'https' ,
                hostname : 'evocodes-server-production.up.railway.app' ,
            } ,
            {
                protocol : 'https' ,
                hostname : 'res.cloudinary.com' ,
            } ,
            {
                hostname : 'localhost'
            }
        ]
    }
});

export default nextConfig;
