import * as React from "react"
import Layout from "../components/layout"
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
          <div className="notFoundPage">Page does not exist</div>
        </div>
        <div className="header_circle_yellow"></div>
        <div className="header_circle_pink"></div>
        <div className="header_circle_purple"></div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
