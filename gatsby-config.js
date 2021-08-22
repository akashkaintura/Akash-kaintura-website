module.exports = {
  siteMetadata: {
    author: `Akash Kaintura`,
    description: `Blog Posts, Communities, and Projects`,
    keywords: `Akash, kaintura, React, Engineer, Resume, Laravel, Developer, PHP, Dehradun, JavaScript, JS`,
    title: `Akash Kaintura`,
    siteUrl: `https://akashkaintura.netlify.app`,
    social: {
      github: "https://github.com/akashkaintura",
      linkedin: "https://in.linkedin.com/in/akash-kaintura",
      instagram: "nerd_akki",
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
        short_name: `nerd_ninja`,
        start_url: `/`,
        background_color: `#355366`,
        theme_color: `#355366`,
        display: `standalone`,
        icon: `src/images/favicon-32x32.png`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://akashkaintura.netlify.app",
        sitemap: "https://akashkaintura.netlify.app/sitemap.xml",
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
