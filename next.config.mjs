/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol : 'https' ,
                hostname : 'evocodes-server-production.up.railway.app' ,
            } ,
            {
                hostname : 'localhost'
            }
        ]
    }
};

export default nextConfig;
