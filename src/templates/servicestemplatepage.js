import * as React from "react"
import { graphql } from "gatsby"
import { fractionContent } from "../utils/fractionContent"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroServiceItems from "../components/heroServiceItems/heroServiceItems"
import ServiceItemsTextContent from "../components/serviceItemsTextContent/serviceItemsTextContent"
import ServiceBenefitsItems from "../components/serviceBenefitsItems/serviceBenefitsItems"
import ResultsOfWebDesign from "../components/resultsOfWebDesign/resultsOfWebDesign"
import ServiceITOutsourcing from "../components/serviceITOutsourcing/serviceITOutsourcing"
import SiteDesignByBpmCloud from "../components/siteDesignByBpmCloud/siteDesignByBpmCloud"
import FooterBlock from "../components/footerBlock/footerBlock"
import WorkTogether from "../components/workTogether/workTogether"
import Others from "../components/others/others"

const Servicestemplatepage = ({ pageContext, location, data }) => {
  const contentPage = data ? data.wpPage : {}
  const posts = data ? data.allWpPost.edges : []
  const items = data ? data.allWpPage.edges : []
  const themes = items.reduce((res, val) => {
    let item = {
      id: val.node.id,
      title: val.node.title,
      uri: val.node.uri,
      content: val.content,
    }
    return [...res, item]
  }, [])
  const content = contentPage.content
    ? fractionContent(contentPage.content)
    : null
  let counter = 0
  const otherArray =
    content && content.length && content.length > 9
      ? content.reduce((res, val) => {
          if (counter > 9) {
            return [...res, val]
          }
          counter = counter + 1
          return res
        }, [])
      : null

  return (
    <Layout>
      <HeroServiceItems
        title={contentPage.title}
        content={content && content[0] ? content[0] : null}
        location={location}
      ></HeroServiceItems>
      <ServiceITOutsourcing
        title={pageContext.title}
        themes={themes}
      ></ServiceITOutsourcing>
      <ServiceItemsTextContent
        content={content && content[1] ? content[1] : null}
      ></ServiceItemsTextContent>
      <ServiceItemsTextContent
        content={content && content[2] ? content[2] : null}
      ></ServiceItemsTextContent>
      <ServiceBenefitsItems
        content={content && content[3] ? content[3] : null}
      ></ServiceBenefitsItems>
      <ResultsOfWebDesign
        content={content && content[4] ? content[4] : null}
      ></ResultsOfWebDesign>
      <ResultsOfWebDesign
        content={content && content[5] ? content[5] : null}
      ></ResultsOfWebDesign>
      <ResultsOfWebDesign
        content={content && content[6] ? content[6] : null}
      ></ResultsOfWebDesign>
      <SiteDesignByBpmCloud
        content={content && content[7] ? content[7] : null}
      ></SiteDesignByBpmCloud>
      <FooterBlock
        content={content && content[8] ? content[8] : null}
      ></FooterBlock>
      {otherArray && otherArray.length > 0 ? (
        <Others content={otherArray ? otherArray : null}></Others>
      ) : null}
      <WorkTogether></WorkTogether>
      <Seo title={pageContext.title} />
    </Layout>
  )
}

export default Servicestemplatepage

export const query = graphql`
  query siteGetPostsDataQuery($slug: String) {
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
    wpPage(slug: { eq: $slug }) {
      id
      uri
      title
      content
      parentId
      slug
      featuredImage {
        node {
          id
          mediaItemUrl
          sizes
        }
      }
    }
    allWpPage(filter: { wpParent: { node: { slug: { eq: $slug } } } }) {
      edges {
        node {
          id
          title
          uri
        }
      }
    }
  }
`
