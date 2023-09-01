import * as React from "react"
import { Navigate } from "react-router-dom"
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
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { slug: { in: ["blog", "news"] } } }
          }
        }
      ) {
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
                sizes
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
  `)
  const allTags = PostsAndTags ? PostsAndTags.allWpTag.edges : []
  const allPosts = PostsAndTags ? PostsAndTags.allWpPost.edges : []

  if(typeof document !== 'undefined') {
    return ( <Navigate to='/blog' /> )
  } else {
    return (
      <>
        <Layout>
          <Seo title="blog" />
          <HeroNews location={location} title="Blog"></HeroNews>
          <ListOfNews posts={allPosts} tags={allTags}></ListOfNews>
          <LeadersChoiceForPortfolios></LeadersChoiceForPortfolios>
        </Layout>
      </>
    )
  }
}

export default News
