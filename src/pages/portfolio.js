import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroPortfolio from "../components/heroPortfolio/heroPortfolio"
import ListOfPortfolio from "../components/listOfPortfolio/listOfPortfolio"
import LeadersChoiceForPortfolios from "../components/leadersChoiceForPortfolios/leadersChoiceForPortfolios"

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
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "portfolio" } } } }
        }
      ) {
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
                sizes
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
        <Seo title="Portfolio" description="Explore BPM Cloud's impressive portfolio showcasing impactful data-driven solutions across fintech, travel & leisure, music, and e-commerce. Witness the results of our expertly crafted work."/>
        <HeroPortfolio
          location={location}
          tags={allTags}
          selectedTag={null}
          title="Portfolio"
        ></HeroPortfolio>
        <ListOfPortfolio posts={allPosts}></ListOfPortfolio>
        <LeadersChoiceForPortfolios></LeadersChoiceForPortfolios>
      </Layout>
    </>
  )
}

export default Portfolio
