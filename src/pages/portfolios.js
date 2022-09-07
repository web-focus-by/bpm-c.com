import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import HeroPortfolio from "../components/heroPortfolio/heroPortfolio"
import ListOfPortfolio from "../components/listOfPortfolio/listOfPortfolio"
import LeadersChoiceForPortfolios from "../components/leadersChoiceForPortfolios/leadersChoiceForPortfolios"

const Portfolios = ({ location }) => {
  const PostsAndTags = useStaticQuery(graphql`
    query SiteTagQuery {
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
      allWpPost {
        edges {
          node {
            id
            title
            link
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
    }
  `);
  const allTags = PostsAndTags ? PostsAndTags.allWpTag.edges : [];
  const allPosts = PostsAndTags ? PostsAndTags.allWpPost.edges : [];

  return (
    <>
      <Layout>
        <HeroPortfolio location={ location } crumbLabel="Portfolio" tags={ allTags }></HeroPortfolio>
        <ListOfPortfolio posts={ allPosts } ></ListOfPortfolio>
        <LeadersChoiceForPortfolios></LeadersChoiceForPortfolios>
      </Layout>
    </>
  );
};

export default Portfolios