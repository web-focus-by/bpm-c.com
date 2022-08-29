module.exports = {
  siteMetadata: {
    title: `Digital agency "BPM-Cloud": website development and promotion`,
    description: `Full cycle digital agency offers development, design, maintenance and promotion of websites 🏆 We will raise the site to the TOP of search results`,
    author: `@bpm-cloud.by`,
    siteUrl: `https://bpm-c.com/`,
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-plugin-breadcrumb`,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.WPGRAPHQL_URL || `https://wp.bpm-c.com/graphql`, //  https://um2020.by/graphql https://wp-server-bpm-cloud.webfocus.by/graphql
      },
      schema: {
        requestConcurrency: 5, // currently set to 15
        previewRequestConcurrency: 2, // currently set to 5
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
        icon: `src/images/gatsby.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
