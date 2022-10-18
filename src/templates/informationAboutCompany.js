import * as React from "react"
import Layout from "../components/layout"
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs"
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

const InformationAboutCompany = ({ location }) => {
  return (
    <>
      <Layout>
        <div className="container">
          <div className="breadcrumb-container">
            <Breadcrumbs breadcrumbs={ location } title="Information about company"/>
          </div>
          <div className="hero">
            <div className="hero__title title_62">
              Information about company<span className="faq"></span>
            </div>
          </div>
          <div className="header_circle_yellow"></div>
          <div className="header_circle_pink"></div>
          <div className="header_circle_purple"></div>
        </div>
        <Seo title="Information about company" />
      </Layout>
    </>
  )
}

export default InformationAboutCompany;