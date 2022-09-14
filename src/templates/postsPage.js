import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import HeroPost from "../components/heroPosts/heroPost"
import ContentPost from "../components/contentPost/contentPost"
import LeadersChoiceForPortfolios from "../components/leadersChoiceForPortfolios/leadersChoiceForPortfolios"

const PostsPage = ({ location, pageContext, data }) => {
  return (
    <>
      <Layout>
        <HeroPost location={ location } crumbLabel="Portfolio" title={ pageContext.title }></HeroPost>
        <ContentPost content={ pageContext }></ContentPost>
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