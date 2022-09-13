/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`);
const { captureRejectionSymbol } = require("events");

exports.createPages = async function ({ actions, graphql }) {
  const result = await graphql(`
  {
    allWpPage {
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
    allWpTag {
      edges {
        node {
          id
          name
          description
          uri
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
          slug
        }
      }
    }
    allWpPost {
      edges {
        node {
          id
          title
          uri
          content
          tags {
            nodes {
              slug
            }
          }
          featuredImage {
            node {
              id
              mediaItemUrl
            }
          }
        }
      }
    }
  }`)
  if (result.errors) {
    throw new Error(data.errors);
  }
  const { allWpPage, allWpPost, allWpCategory, allWpTag } = result.data
  const pageTemplate = path.resolve(`./src/templates/servicestemplatepage.js`)
  const tagsTemplate = path.resolve(`./src/templates/tagsPage.js`)
  const postTemplate = path.resolve(`./src/templates/postsPage.js`)
  const categoryTemplate = path.resolve(`./src/templates/categoryTemplate.js`)
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

  allWpTag.edges.forEach(tag => {
    actions.createPage({
      path: tag.node.uri,
      component: slash(tagsTemplate),
      context: {
        id: tag.node.id,
        name: tag.node.name,
        description: tag.node.description,
        uri: tag.node.uri,
        slug: tag.node.slug
      }
    })
  })

  allWpPost.edges.forEach(post => {
    actions.createPage({
      path: post.node.uri,
      component: slash(postTemplate),
      context: {
        id: post.node.id,
        title: post.node.title,
        uri: post.node.uri,
        content: post.node.content,
        tags: post.node.tags,
        featuredImage: post.node.featuredImage
      }
    })
  })

  allWpCategory.edges.forEach(edge => {
    actions.createPage({
      path: edge.node.uri,
      component: slash(categoryTemplate),
      context: {
        id: edge.node.id,
        name: edge.node.name,
        description: edge.node.description,
        uri: edge.node.uri,
        slug: edge.node.slug
      },
    })
  })

  actions.createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}