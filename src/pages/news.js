import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import HeroPortfolio from "../components/heroPortfolio/heroPortfolio"
import ListOfPortfolio from "../components/listOfPortfolio/listOfPortfolio"
import LeadersChoiceForPortfolios from "../components/leadersChoiceForPortfolios/leadersChoiceForPortfolios"

const Portfolios = ({ location }) => {
  const PostsAndTags = useStaticQuery(graphql`
    query SiteNewsQuery {
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
      allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {in: ["news", "articles"]}}}}}) {
        edges {
          node {
            id
            title
            link
            date
            tags {
              nodes {
                id
                slug
              }
            }
            featuredImage {
              node {
                id
                mediaItemUrl
              }
            }
            categories {
              nodes {
                id
                slug
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
        <HeroPortfolio location={ location } crumbLabel="Portfolio" tags={ allTags } selectedTag={ null }></HeroPortfolio>
        <ListOfPortfolio posts={ allPosts }></ListOfPortfolio>
        <LeadersChoiceForPortfolios></LeadersChoiceForPortfolios>
      </Layout>
    </>
  );
};

export default Portfolios