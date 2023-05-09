import * as React from "react"
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

const TemplateBlog = ({ location }) => {
  return (
    <>
      <Layout>
        <div className="container">
          <Breadcrumbs breadcrumbs={location} title="BLOG" />
          <div className="hero">
            <div className="hero__title title_62">BLOG</div>
          </div>
          <div className="header_circle_yellow"></div>
          <div className="header_circle_pink"></div>
          <div className="header_circle_purple"></div>
        </div>
        <Seo title="BLOG" />
      </Layout>
    </>
  )
}

export default TemplateBlog
