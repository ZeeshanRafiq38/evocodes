/** @type {import('next').NextConfig} */
const nextConfig = (phase) => ({
    distDir: phase === 'phase-development-server' ? '.next-dev' : '.next',
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
