import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { fractionContent } from "../utils/fractionContent"
import HeroWebSiteDesign from "../components/heroWebSiteDesign/heroWebSiteDesign"
import FooterBlock from "../components/footerBlock/footerBlock"
import Form from "../components/form"
import WorkTogether from "../components/workTogether/workTogether"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const InformationAboutCompany = ({ location, data }) => {
  const contentPage = data ? data.wpPage : {};
  const content = contentPage.content ? fractionContent(contentPage.content): null;
  const featuredImage = contentPage.featuredImage && contentPage.featuredImage.node ? contentPage.featuredImage.node.mediaItemUrl : null;
  return (
    <>
      <Layout>
        <HeroWebSiteDesign title={ contentPage.title } content={ content && content[0] ? content[0] : null } location={ location } titleLogo="about_company"></HeroWebSiteDesign>
        <FooterBlock content={ content && content[1] ? content[1] : null } contentImage = { featuredImage }></FooterBlock>
        <Form></Form>
        <WorkTogether></WorkTogether>
        <Seo title="Information about company" />
      </Layout>
    </>
  )
}

export default InformationAboutCompany;

export const query = graphql`
  query getInformationAboutCompanyQuery ($slug: String) {
    wpPage(slug: {eq: $slug}) {
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
  }`