const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)




exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    allWpPage {
      edges {
        node {
          id
          status
          uri
          template {
            templateName
          }
          content
        }
      }
    }
    allWpPost {
      edges {
        node {
          id
          status
          uri
          template {
            templateName
          }
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
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  // Access query results via object destructuring
  const { allWpPage, allWpPost, allWpCategory, allWpTag } = result.data;

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/page-template/page.js`);
  const developPage = path.resolve(`./src/templates/categoryPage/developPage/developPage.js`);
  allWpPage.edges.forEach(edge => {
    /*Gatsby uses Redux to manage its internal state.
    Plugins and sites can use functions like "createPage"
    to interact with Gatsby.*/
    let template
    switch (edge.node.id) {
      default:
        template = pageTemplate
    }
    createPage({
      /*Each page is required to have a `path` as well
      as a template component. The `context` is
      optional but is often necessary so the template
      can query data specific to each page.*/
      path: edge.node.uri,
      component: slash(template),
      context: {
        id: edge.node.id,
      },
    })
  });

  /*We want to create a detailed page for each post node.
  The path field stems from the original WordPress link
  and we use it for the slug to preserve url structure.
  The Post ID is prefixed with 'POST_'*/

  const postTemplate = path.resolve(`./src/templates/post-template/post.js`);
  allWpPost.edges.forEach(edge => {
    createPage({
      path: edge.node.uri,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  });

  const categoryTemplate = path.resolve(`./src/templates/post-category-template/category.js`);
  allWpCategory.edges.forEach(edge => {
    createPage({
      path: edge.node.uri,
      component: slash(categoryTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  const tagTemplate = path.resolve(`./src/templates/post-category-template/tagTemplate.js`);
  allWpTag.edges.forEach(edge => {
    createPage({
      path: edge.node.uri,
      component: slash(tagTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
  
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
