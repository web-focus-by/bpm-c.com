import * as React from "react"
import { graphql } from "gatsby"
import { fractionContent } from "../utils/fractionContent"
import Layout from "../components/layout"
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs"
import Seo from "../components/seo"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

const Faq = ({ location, data }) => {
  const content =
    data && data.wpPage ? fractionContent(data.wpPage.content) : null
  const title = content[0].title
    ? content[0].title.replace(/<[^>]+>/g, "")
    : null
  const contentPage = content[0].content.map((item, index) => {
    if (index === 0) {
      return (
        <div
          className="hero__subtitle"
          style={{ LineHeight: "27px", fontSize: "18px", color: "#5C5C5C" }}
        >
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: item.replace(/<[^>]+>/g, "") }}
            style={{ width: "100%" }}
          />
        </div>
      )
    } else if (index === 1) {
      return (
        <div
          className="hero__subtitle margin_bottom_240"
          style={{ LineHeight: "26.4px", fontSize: "24px", color: "#1A1B1F" }}
        >
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: item.replace(/<[^>]+>/g, "") }}
            style={{ width: "100%" }}
          />
        </div>
      )
    }
  })
  return (
    <>
      <Layout>
        <div className="container">
          <div class="breacrumbs-list" itemscope itemtype="http://schema.org/BreadcrumbList">
            <Breadcrumbs breadcrumbs={location} title="FAQ" />
          </div>
          <div className="hero">
            <h1 className="hero__title title_62">
              FAQ<span className="faq"></span>
            </h1>
            {contentPage}
          </div>
          <div className="header_circle_yellow"></div>
          <div className="header_circle_pink"></div>
          <div className="header_circle_purple"></div>
        </div>
        <Seo title="FAQ" />
      </Layout>
    </>
  )
}

export default Faq
export const query = graphql`
  query getFaqDataQuery($slug: String) {
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
  }
`
