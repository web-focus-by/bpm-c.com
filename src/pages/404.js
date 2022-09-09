import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const NotFoundPage = () => {
  //Page does not exist
  return (
    <Layout>
      <Seo title="404: Page does not exist" />
      <div className="container">
        <div className="hero margin_bottom_240">
          <div className="notFoundPage">
            <div className="not-found"></div>
          </div>
          <div className="notFoundPage">
            <p>Page does not exist</p>
          </div>
        </div>
        <div className="header_circle_yellow"></div>
        <div className="header_circle_pink"></div>
        <div className="header_circle_purple"></div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
