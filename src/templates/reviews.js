import * as React from "react"
import Layout from "../components/layout"
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs"
import Seo from "../components/seo"
import AllReviews from "../components/allReviews"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Reviews = ({ location }) => {
  return (
    <>
      <Layout>
        <div className="container">
          <Breadcrumbs breadcrumbs={ location } title="Reviews"/>
          <div className="hero">
            <div className="hero__title title_62">
              Reviews<span className="notes_of_reviewes"></span>
            </div>
          </div>
          <div className="header_circle_yellow"></div>
          <div className="header_circle_pink"></div>
          <div className="header_circle_purple"></div>
        </div>
        <AllReviews></AllReviews>
        <Seo title="Reviews" />
      </Layout>
    </>
  )
}

export default Reviews;