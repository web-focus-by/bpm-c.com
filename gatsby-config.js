const siteUrl = process.env.URL || `https://bpm-c.com/`

module.exports = {
  siteMetadata: {
    title: `BPM Cloud`,
    description: `Full cycle digital agency offers development, design, maintenance and promotion of websites 🏆 We will raise the site to the TOP of search results`,
    author: `@bpm-cloud.by`,
    siteUrl: siteUrl,
    image: './src/images/logo.jpg',
    alt: 'BPM Cloud logo'
  },
  pathPrefix: "/",
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.WPGRAPHQL_URL || `https://wp.bpm-c.com/graphql`,
      },
      schema: {
        requestConcurrency: 15, // currently set to 15
        previewRequestConcurrency: 5, // currently set to 5
      },
      /*resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: "https://wp.bpm-c.com/graphql",
      },*/
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logoBpm.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-W22MQCV",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://bpm-c.com`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: "/",
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
