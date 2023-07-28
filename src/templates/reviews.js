import * as React from "react"
import Layout from "../components/layout"
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs"
import Seo from "../components/seo"
import AllReviews from "../components/allReviews"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

const Reviews = ({ location }) => {
  return (
    <>
      <Layout>
        <div className="container">
          <Breadcrumbs breadcrumbs={location} title="Reviews" />
          <div className="hero">
            <h1 className="hero__title title_62">
              Reviews<span className="notes_of_reviewes"></span>
            </h1>
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

export default Reviews
