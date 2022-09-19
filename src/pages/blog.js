import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import HeroNews from "../components/heroNews/heroNews"
import ListOfNews from "../components/listOfNews/listOfNews"
import LeadersChoiceForPortfolios from "../components/leadersChoiceForPortfolios/leadersChoiceForPortfolios"

const Blog = ({ location }) => {
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
        <HeroNews location={ location } crumbLabel="Blog"  title="Blog" ></HeroNews>
        <ListOfNews posts={ allPosts } tags={ allTags }></ListOfNews>
        <LeadersChoiceForPortfolios></LeadersChoiceForPortfolios>
      </Layout>
    </>
  );
};

export default Blog