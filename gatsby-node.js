/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async function ({ actions, graphql }) {
  const result = await graphql(`
  {allWpPage {
      edges {
        node {
          id
          title
          uri
          content
          slug
        }
      }
    }
    allWpCategory {
      edges {
        node {
          id
          name
          description
          uri
        }
      }
    }
    allWpTag {
      edges {
        node {
          id
          name
          description
          uri
        }
      }
    }
  }`)
  if (result.errors) {
    throw new Error(data.errors);
  }
  const { allWpPage, allWpPost, allWpCategory, allWpTag } = result.data
  const pageTemplate = path.resolve(`./src/templates/servicestemplatepage.js`)
  allWpPage.edges.forEach(item => {
    let template
    switch (item.node.id) {
      default:
        template = pageTemplate
    }
    actions.createPage({
      path: item.node.uri,
      component: slash(template),
      context: {
        id: item.node.id,
        title: item.node.title,
        content: item.node.content,
        uri: item.node.uri,
        slug: item.node.slug
      },
    })
  })

  //allWpPost

  actions.createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}