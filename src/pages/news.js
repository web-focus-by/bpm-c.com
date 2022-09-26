import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroNews from "../components/heroNews/heroNews"
import ListOfNews from "../components/listOfNews/listOfNews"
import LeadersChoiceForPortfolios from "../components/leadersChoiceForPortfolios/leadersChoiceForPortfolios"

const News = ({ location }) => {
  const PostsAndTags = useStaticQuery(graphql`
    query getCategoryByNewsQuery {
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
      allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {in: ["news"]}}}}}) {
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
                name
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
        <Seo title="news" />
        <HeroNews location={ location } title="News" ></HeroNews>
        <ListOfNews posts={ allPosts } tags={ allTags }></ListOfNews>
        <LeadersChoiceForPortfolios></LeadersChoiceForPortfolios>
      </Layout>
    </>
  );
};

export default News