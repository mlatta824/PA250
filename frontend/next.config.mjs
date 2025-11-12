

const isBuild = process.env.NODE_ENV === 'prudction';




const nextConfig = {
    output: 'export',

    basePath: isBuild ?  '/PA250' : undefined,
    assetPrefix: isBuild ? '/PA250/' : undefined,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;