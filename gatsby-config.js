const siteUrl = process.env.URL || `https://bpm-c.com/`

module.exports = {
  siteMetadata: {
    title: `BPM Cloud`,
    description: `Full cycle digital agency offers development, design, maintenance and promotion of websites 🏆 We will raise the site to the TOP of search results`,
    author: `@bpm-cloud.by`,
    siteUrl: siteUrl,
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDIiIGhlaWdodD0iNDYiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNDIgNDYiPjxwYXRoIGZpbGw9IiMxQTFCMUYiIGQ9Ik0xMi43MzQgMzkuMDk3Yy0uMDcyIDAtLjE0NSAwLS4yMTgtLjAzNy0xLjgyLS43NDctMy41My0xLjcxOC01LjA1Ny0yLjk4Ny0xLjUyOC0xLjIzMy0yLjgzOC0yLjY5LTMuOTY2LTQuMzMyQzEuMiAyOC4zNDMgMCAyNC4zNDcgMCAyMC4yMDJjMC0yLjcyNi41MS01LjM3NyAxLjU2NS03Ljg4QTE5LjkzMiAxOS45MzIgMCAwIDEgNS43ODUgNS45YTE5LjMyNiAxOS4zMjYgMCAwIDEgNi4yOTQtNC4zMzJBMTkuMzYgMTkuMzYgMCAwIDEgMTkuNzU2IDBjMi42NTYgMCA1LjI0LjU2IDcuNzE0IDEuNjQzYTIwLjg4MSAyMC44ODEgMCAwIDEgNi4zNjcgNC40MDZjMS44NTUgMS45MDUgMy4zMSA0LjA3IDQuMzMgNi40OThhMjAuMzY2IDIwLjM2NiAwIDAgMSAxLjYgNy45MTZjMCAyLjYxNC0uNjE4IDUuMzc4LTEuNzQ2IDcuOTE3LS45ODIgMi4yNC0yLjM2NSA0LjIyLTMuODIgNS41NjQtLjA3My4wNzUtLjE4Mi4xNS0uMjU1LjIyNC0uODM3Ljc0Ny0xLjQxOSAxLjMwNy0yLjMyOCAxLjQ1Ni0uOTQ2LjE1LTIuMTEtLjE4Ni00LjA3NS0xLjA0NS0uMjE5LS4wNzUtNC43NjctMi41NzctNS4yNzYtMi44MzhsLjI1NS0uNDg2YzIgMS4wODMgNS4wNTcgMi43NjQgNS4yMzkgMi44MzggMy43MTEgMS42NDMgNC4yOTMgMS4xMiA1LjgyMS0uMjk4LjA3My0uMDc1LjE0Ni0uMTUuMjU1LS4yMjQgMi41ODMtMi4zOSA1LjM4NS03LjQ2OSA1LjM4NS0xMy4wNyAwLTEwLjc1NS04Ljg3OC0xOS45MDQtMTkuNDMtMTkuOTA0LTUuMTMgMC05Ljk2OCAyLjAxNy0xMy41NyA1Ljc1MS0zLjYzOSAzLjczNC01LjY0IDguNjY0LTUuNjQgMTMuOTI5IDAgOC4xNCA0Ljc2NiAxNS4zNDcgMTIuMTg5IDE4LjI5Ny4wMzYgMCAuMDcyIDAgLjA3Mi0uMDM3bDcuMDU5LTEwLjg2NiAxLjg5Mi42NzItLjE4Mi41MjItMS40OTItLjUyMi02Ljg3NiAxMC40OTNhLjYzMS42MzEgMCAwIDEtLjUxLjI2MVoiLz48cGF0aCBmaWxsPSIjMUExQjFGIiBkPSJNMTguOTk4IDI5LjUzOGMuMzI3LS41MjMgMS4wMTgtLjY3MiAxLjU2NC0uMzczaC4wMzdzNC4xMSAyLjI3NyA2LjExMiAzLjA5OWMuNTgyLjIyNCAxLjQ1NSAwIDEuODU2LS40NDggMi43MjgtMi44NzUgNC40MDItNy4wMiA0LjQwMi0xMS40MjcgMC05Ljk3LTkuMjc4LTE3LjctMTkuNDI5LTE0LjYtNC41NDggMS4zODEtOC4xNSA0Ljk2Ni05LjU2OSA5LjU5Ny0yLjkxIDkuMzcyIDIuNzI5IDE4LjExIDEwLjkxNSAxOS45NGEuMzQyLjM0MiAwIDAgMCAuMzY0LS4xNWwzLjc0OC01LjYzOFoiLz48cGF0aCBmaWxsPSIjMUExQjFGIiBkPSJtMTYuNTIgNDMuNDY2LTIuOTgzLS4yNjFjLS43MjgtLjAzOC0xLjEyOC0uODk2LS42OTItMS40OTRsNi42OTUtMTAuMTU3Yy4zMjctLjQ4NSAxLjE2NC0xLjA0NSAxLjcxLS44MjJsMy4yNzQgMS42MDYtNS45MyAxMC4wMDhjLS40MzcuNzQ3LTEuMjM3IDEuMTk1LTIuMDc0IDEuMTJaTTY4LjU3NiAxNy44NTdjMi42MDMtMS4zMzYgMy45NDUtMy41OSAzLjk0NS02LjMwMiAwLTQuNDI0LTMuNjYtNy42MzgtMTEuNTA4LTcuNjM4SDQ1LjgwNXYyOS4yMTVoMTYuMDIxYzcuODQ4IDAgMTIuMDM3LTIuOTY0IDEyLjAzNy04LjA1NSAwLTMuNDY0LTEuOTUyLTUuOTY4LTUuMjg3LTcuMjJabS04Ljg2NC03LjA1NGMyLjE1NSAwIDMuMTMuNzUyIDMuMTMgMi4xNyAwIDEuNDItLjk3NSAyLjE3LTMuMTMgMi4xN2gtNC40NzN2LTQuMzRoNC40NzNabTEuMzAxIDE1LjQ0Mkg1NS4yNHYtNC41OWg1Ljc3NGMyLjExNSAwIDMuMTcyLjc5MiAzLjE3MiAyLjI5NSAwIDEuNTAyLTEuMDU3IDIuMjk1LTMuMTcyIDIuMjk1Wk05MC45NiAzLjkxN0g3Ny4yNTZ2MjkuMjE1aDkuNTk3di03LjE3OWg0LjEwN2M3LjkzIDAgMTIuOTcyLTQuMjU3IDEyLjk3Mi0xMS4wMTggMC02Ljc2MS01LjA0My0xMS4wMTgtMTIuOTcyLTExLjAxOFptLS42MSAxNC40NGgtMy40OTd2LTYuODQ0aDMuNDk3YzIuNjQzIDAgMy45MDQgMS4yOTQgMy45MDQgMy40MjIgMCAyLjEyOS0xLjI2IDMuNDIyLTMuOTA0IDMuNDIyWm01MC44ODcgMTQuNzc1LS4wODItMjkuMjE1aC03Ljg4OWwtOS4wMjcgMTUuNTY3LTkuMjcxLTE1LjU2N2gtNy44ODl2MjkuMjE1aDguNzQyVjIwLjI3N2w2LjE4MSAxMC4yMjVoNC4yM2w2LjE4MS0xMC42ODQuMDgxIDEzLjMxNGg4Ljc0M1pNNDkuOTA0IDQ2Yy0uNzk4IDAtMS41Mi0uMTc4LTIuMTY4LS41MzRhNC4wMTUgNC4wMTUgMCAwIDEtMS41MTQtMS40OTVjLS4zNjEtLjYzNC0uNTQyLTEuMzUtLjU0Mi0yLjE0NSAwLS43OTYuMTg0LTEuNTEuNTUzLTIuMTQ1YTMuOTI5IDMuOTI5IDAgMCAxIDEuNTE0LTEuNDg0Yy42NDgtLjM2MyAxLjM3LS41NDUgMi4xNjktLjU0NS42NDcgMCAxLjIzOS4xMTYgMS43NzMuMzQ4LjUzNS4yMzIuOTg2LjU2OCAxLjM1NiAxLjAwOWwtLjk1LjkxNmMtLjU3Mi0uNjM0LTEuMjc2LS45NTEtMi4xMTEtLjk1MS0uNTQzIDAtMS4wMjguMTI0LTEuNDU4LjM3MWEyLjU2IDIuNTYgMCAwIDAtMS4wMDUgMS4wMDhjLS4yNDEuNDMzLS4zNjEuOTI0LS4zNjEgMS40NzNzLjEyIDEuMDQuMzYgMS40NzJjLjI0Mi40MzMuNTc3Ljc3MyAxLjAwNiAxLjAyLjQzLjI0LjkxNS4zNiAxLjQ1Ny4zNi44MzYgMCAxLjU0LS4zMiAyLjExMy0uOTYybC45NDkuOTI3Yy0uMzcuNDQtLjgyNS43NzctMS4zNjcgMS4wMDhhNC40MTEgNC40MTEgMCAwIDEtMS43NzMuMzQ4Wm0xNy45OS04LjIzMmgxLjQ2OHY2Ljg0aDQuMTM0djEuMjc1aC01LjYwM3YtOC4xMTVaTTkxLjY0NiA0NmMtLjgwNiAwLTEuNTMyLS4xNzctMi4xOC0uNTMzYTMuOTg2IDMuOTg2IDAgMCAxLTEuNTI1LTEuNDk1IDQuMjI1IDQuMjI1IDAgMCAxLS41NTMtMi4xNDVjMC0uNzg4LjE4NC0xLjUuNTUzLTIuMTMzYTMuODggMy44OCAwIDAgMSAxLjUyNS0xLjQ5NmMuNjQ4LS4zNjMgMS4zNzQtLjU0NSAyLjE4LS41NDVzMS41MzIuMTgyIDIuMTguNTQ1Yy42NDguMzU2IDEuMTU2Ljg1IDEuNTI1IDEuNDg0cy41NTQgMS4zNDkuNTU0IDIuMTQ1LS4xODUgMS41MS0uNTU0IDIuMTQ1YTMuOTg4IDMuOTg4IDAgMCAxLTEuNTI1IDEuNDk1Yy0uNjQ4LjM1Ni0xLjM3NC41MzMtMi4xOC41MzNabTAtMS4zMjFjLjUyNyAwIDEuMDAxLS4xMiAxLjQyMy0uMzZhMi42NiAyLjY2IDAgMCAwIC45OTQtMS4wMmMuMjQyLS40NC4zNjItLjkzMS4zNjItMS40NzJhMi45NSAyLjk1IDAgMCAwLS4zNjItMS40NmMtLjI0LS40NDEtLjU3MS0uNzgyLS45OTQtMS4wMjFhMi43NjMgMi43NjMgMCAwIDAtMS40MjMtLjM3MWMtLjUyNyAwLTEuMDAxLjEyNC0xLjQyMy4zNzEtLjQyMi4yNC0uNzUzLjU4LS45OTQgMS4wMi0uMjQxLjQzMy0uMzYyLjkyLS4zNjIgMS40NiAwIC41NDIuMTIxIDEuMDMzLjM2MiAxLjQ3My4yNDEuNDMzLjU3Mi43NzMuOTk0IDEuMDIuNDIyLjI0Ljg5Ni4zNiAxLjQyMy4zNlptMjIuNjU3IDEuMzIxYy0xLjA5MiAwLTEuOTQzLS4zMTMtMi41NTMtLjkzOS0uNjEtLjYzNC0uOTE1LTEuNTM4LS45MTUtMi43MTJ2LTQuNThoMS40Njl2NC41MjJjMCAxLjU5Mi42NyAyLjM4OCAyLjAxIDIuMzg4IDEuMzMzIDAgMi0uNzk2IDItMi4zODh2LTQuNTIyaDEuNDQ1djQuNThjMCAxLjE3NS0uMzA1IDIuMDc4LS45MTUgMi43MTItLjYwMi42MjctMS40NS45NC0yLjU0MS45NFptMTguOTU0LTguMjNoMy40NTdjLjg0NCAwIDEuNTkzLjE3IDIuMjQ4LjUxYTMuNjMgMy42MyAwIDAgMSAxLjUyNSAxLjQyNWMuMzYxLjYxMS41NDIgMS4zMTguNTQyIDIuMTIyIDAgLjgwNC0uMTgxIDEuNTE1LS41NDIgMi4xMzNhMy43MjYgMy43MjYgMCAwIDEtMS41MjUgMS40MjZjLS42NTUuMzMyLTEuNDA0LjQ5OC0yLjI0OC40OThoLTMuNDU3di04LjExNVptMy4zODkgNi44NGMuNTggMCAxLjA4OS0uMTEzIDEuNTI1LS4zMzdhMi40MTkgMi40MTkgMCAwIDAgMS4wMTctLjk3NGMuMjQxLS40MjUuMzYxLS45MTYuMzYxLTEuNDcyIDAtLjU1Ni0uMTItMS4wNDQtLjM2MS0xLjQ2YTIuMzMgMi4zMyAwIDAgMC0xLjAxNy0uOTc1Yy0uNDM2LS4yMzEtLjk0NS0uMzQ4LTEuNTI1LS4zNDhoLTEuOTJ2NS41NjVoMS45MloiLz48L3N2Zz4=',
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
