import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import HeroPortfolio from "../components/heroPortfolio/heroPortfolio"
import ContentPost from "../components/contentPost/contentPost"
import LeadersChoiceForPortfolios from "../components/leadersChoiceForPortfolios/leadersChoiceForPortfolios"

const PostsPage = ({ location, pageContext }) => {
  const tags = useStaticQuery(graphql`
    query getTagQuery {
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
    }
  `);
  const allTags = tags ? tags.allWpTag.edges : [];

  return (
    <>
      <Layout>
        <HeroPortfolio location={ location } crumbLabel="Portfolio" tags={ allTags }></HeroPortfolio>
        <ContentPost posts={ pageContext } ></ContentPost>
        <LeadersChoiceForPortfolios></LeadersChoiceForPortfolios>
      </Layout>
    </>
  );
};

export default PostsPage