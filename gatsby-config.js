module.exports = {
  siteMetadata: {
    author: `Akash Kaintura`,
    description: `Blog Posts, Communities, and Projects`,
    keywords: `Akash, kaintura, React, Engineer, Resume, Laravel, JavaScript, JS`,
    title: `Akash Needs Coffee`,
    siteUrl: `https://akashneeds.coffee`,
    social: {
      github: "akashkaintura",
      linkedin: "akash-kaintura",
      instagram: "enfieldExplorer",
    },
  },
  pathPrefix: "__GATSBY_IPFS_PATH_PREFIX__",
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-ipfs`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 300,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-remark-copy-linked-files`,
    `gatsby-remark-smartypants`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Akash Kaintura - Software Engineer`,
        short_name: `AkashNeedsCoffee`,
        start_url: `/`,
        background_color: `#355366`,
        theme_color: `#355366`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://akashneeds.coffee",
        sitemap: "https://akashneeds.coffee/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-YGHX76B3FC",
        head: false,
        respectDNT: true,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-yaml`,
  ],
}
