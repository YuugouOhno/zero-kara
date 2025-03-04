/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://zero-kara.com',
    generateRobotsTxt: true, // (optional)
    sitemapSize: 7000,
    outDir: './public',
}