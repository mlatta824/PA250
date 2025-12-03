
const isProd = process.env.NODE_ENV === 'production';

const repoName = 'PA250';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  basePath: isProd ? `/${repoName}` : undefined,
  assetPrefix: isProd ? `/${repoName}/` : undefined,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;