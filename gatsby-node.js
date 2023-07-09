/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const { captureRejectionSymbol } = require("events")

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
            date
            tags {
              nodes {
                slug
              }
            }
            featuredImage {
              node {
                id
                mediaItemUrl
                sizes
              }
            }
            comments {
              nodes {
                id
                date
                content
                author {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw new Error(data.errors)
  }
  const { allWpPage, allWpPost, allWpCategory, allWpTag } = result.data
  const pageTemplate = path.resolve(`./src/templates/servicestemplatepage.js`)
  const tagsTemplate = path.resolve(`./src/templates/tagsPage.js`)
  const pageContactsTemplate = path.resolve(`./src/templates/contacts.js`)
  const pageReviewsTemplate = path.resolve(`./src/templates/reviews.js`)
  const pageFAQTemplate = path.resolve(`./src/templates/faq.js`)
  const pageBlogTemplate = path.resolve(`./src/templates/templateBlog.js`)
  const informationAboutCompanyTemplate = path.resolve(
    `./src/templates/informationAboutCompany.js`
  )
  const postTemplate = path.resolve(`./src/templates/postsPage.js`)
  const categoryTemplate = path.resolve(`./src/templates/categoryTemplate.js`)
  allWpPage.edges.forEach(item => {
    let template
    switch (item.node.id) {
      case "cG9zdDozNzAw":
        template = pageReviewsTemplate
        break
      case "cG9zdDoyNjU4":
        template = pageContactsTemplate
        break
      case "cG9zdDoxMzc0":
        template = pageBlogTemplate
        break
      case "cG9zdDoxMzY1":
        template = informationAboutCompanyTemplate
        break
      case "cG9zdDoxMzY4":
        template = pageFAQTemplate
        break
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
        slug: item.node.slug,
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
        slug: tag.node.slug,
      },
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
        featuredImage: post.node.featuredImage,
        comments: post.node.comments,
        date: post.node.date,
      },
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
        slug: edge.node.slug,
      },
    })
  })
  actions.createRedirect({
    fromPath: `/:page/index.html`,
    toPath: `/:page`,
    statusCode: 301,
    isPermanent: true,
  })
  actions.createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
