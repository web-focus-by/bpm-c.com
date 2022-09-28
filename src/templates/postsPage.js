import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import HeroPost from "../components/heroPosts/heroPost"
import ContentPost from "../components/contentPost/contentPost"
import LeadersChoiceForPortfolios from "../components/leadersChoiceForPortfolios/leadersChoiceForPortfolios"
import Blog from "../components/blog"

const PostsPage = ({ location, pageContext, data }) => {
  return (
    <>
      <Layout>
        <HeroPost location={ location } photo={ pageContext.featuredImage.node.mediaItemUrl } info={ pageContext }></HeroPost>
        <ContentPost content={ pageContext }></ContentPost>
        <Blog titlePage="Other news"></Blog>
        <LeadersChoiceForPortfolios></LeadersChoiceForPortfolios>
      </Layout>
    </>
  );
};

export default PostsPage

export const query = graphql`
  query siteGetPostsDataTagsQuery {
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
  }`