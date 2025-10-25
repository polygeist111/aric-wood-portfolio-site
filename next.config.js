/** @type {import('next').NextConfig} */
// removed portion given by vibecode, replaced with section from github pages tutorial
//const nextConfig = {
//  experimental: { serverActions: { bodySizeLimit: '2mb' } },
//};
const nextConfig = {
  basePath: "/aric-wood-portfolio-site", // these two lines likely not necessary once on custom domain
  assetPrefix: "/aric-wood-portfolio-site/",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
