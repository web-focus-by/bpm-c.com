import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import HeroPortfolio from "../components/heroPortfolio/heroPortfolio"
import ListOfPortfolio from "../components/listOfPortfolio/listOfPortfolio"
import LeadersChoiceForPortfolios from "../components/leadersChoiceForPortfolios/leadersChoiceForPortfolios"

const Tag = ({ location }) => {
    const PostsAndTags = useStaticQuery(graphql`
      query getSiteAllTagQuery {
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
        allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {in: ["blog","news","portfolios"]}}}}}) {
          edges {
            node {
              id
              title
              link
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
                }
              }
              categories {
                nodes {
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
          <Seo title="tag" />
          <HeroPortfolio location={ location } tags={ allTags } selectedTag={ null } title="Tags" ></HeroPortfolio>
          <ListOfPortfolio posts={ allPosts }></ListOfPortfolio>
          <LeadersChoiceForPortfolios></LeadersChoiceForPortfolios>
        </Layout>
      </>
    );
  };
  
  export default Tag