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
  {
    allWpPage(filter: {wpParent: {node: {slug: {eq: "servicesitoutsourcing"}}}}) {
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
        slug: item.node.slug 
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

  // Create Page pages.
  //const pageTemplate = path.resolve(`./src/templates/page-template/page.js`);
  //const developPage = path.resolve(`./src/templates/categoryPage/developPage/developPage.js`);
  //allWpPage.edges.forEach(edge => {
    /*Gatsby uses Redux to manage its internal state.
    Plugins and sites can use functions like "createPage"
    to interact with Gatsby.*/
    /*let template
    switch (edge.node.id) {
      default:
        template = pageTemplate
    }
    createPage({*/

      /*path: edge.node.uri,
      component: slash(template),
      context: {
        id: edge.node.id,
      },
    })
  });*/

  /*We want to create a detailed page for each post node.
  The path field stems from the original WordPress link
  and we use it for the slug to preserve url structure.
  The Post ID is prefixed with 'POST_'*/

  /*const postTemplate = path.resolve(`./src/templates/post-template/post.js`);
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
  
}*/