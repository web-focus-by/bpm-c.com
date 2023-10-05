import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroNews from "../components/heroNews/heroNews"
import ListOfNews from "../components/listOfNews/listOfNews"
import LeadersChoiceForPortfolios from "../components/leadersChoiceForPortfolios/leadersChoiceForPortfolios"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

const TemplateBlog = ({ location }) => {
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


  return (
    <>
      <Layout>
        <Seo title="Blog" />
        <HeroNews location={location} title="Blog"></HeroNews>
        <ListOfNews posts={allPosts} tags={allTags}></ListOfNews>
        <LeadersChoiceForPortfolios></LeadersChoiceForPortfolios>
      </Layout>
    </>
  )
}

export default TemplateBlog
