import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroPortfolio from "../components/heroPortfolio/heroPortfolio"
import ListOfPortfolio from "../components/listOfPortfolio/listOfPortfolio"
import LeadersChoiceForPortfolios from "../components/leadersChoiceForPortfolios/leadersChoiceForPortfolios"

const TagsPage = ({ pageContext, location, data }) => {
  return (
    <Layout>
      <HeroPortfolio
        location={location}
        tags={data.allWpTag.edges}
        selectedTag={pageContext.uri}
        title="Posts by the tag"
      ></HeroPortfolio>
      <ListOfPortfolio posts={data.allWpPost.edges}></ListOfPortfolio>
      <LeadersChoiceForPortfolios></LeadersChoiceForPortfolios>
      <Seo title={pageContext.name} />
    </Layout>
  )
}

export default TagsPage

export const query = graphql`
  query siteGetTagsDataTagsQuery($slug: String) {
    allWpPost(
      filter: { tags: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
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
`
