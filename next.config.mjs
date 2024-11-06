/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol : 'https' ,
                hostname : 'server.evocodes.com' ,
            } ,
            {
                hostname : 'localhost'
            }
        ]
    }
};

export default nextConfig;
