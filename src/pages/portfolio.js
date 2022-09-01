import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import HeroPortfolio from "../components/heroPortfolio/heroPortfolio"
import ListOfPortfolio from "../components/listOfPortfolio/listOfPortfolio"
import LeadersChoice from "../components/leaders_choice"

const Portfolio = ({ location }) => {
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
            slug
            link
            content
            date
            title
            tags {
              nodes {
                slug
              }
            }
            status
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
        <ListOfPortfolio post={ allPosts }></ListOfPortfolio>
        <LeadersChoice></LeadersChoice>
      </Layout>
    </>
  );
};

export default Portfolio