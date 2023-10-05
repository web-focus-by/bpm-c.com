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
          <div class="breacrumbs-list" itemscope="" itemtype="http://schema.org/BreadcrumbList">
            <Breadcrumbs breadcrumbs={location} title="Reviews" />
          </div>
          <div className="hero">
            <h1 className="hero__title title_62">
              Testimonials<span className="notes_of_reviewes"></span>
            </h1>
          </div>
          <div className="container">
            <div className="reviews margin_bottom_60">
              <div className="reviews__list">
                <div className="list_item">
                  <div className="rewiews__list_logo">
                    <img src="" alt="logo" />
                  </div>
                  <div className="rewievs__list_text">
                    <p>I had the pleasure of utilizing the website redesign services offered by BPM Cloud, and I must say, I am thoroughly impressed. As the Marketing Manager, I sought a fresh perspective to elevate our brand. Their concepts seamlessly blended innovation with our identity, redefining our visual appeal. Effective communication, expert design, and a deep understanding of our needs make BPM Cloud our top choice. They've reinvigorated our image, leaving a lasting impact on our success.</p>
                  </div>
                  <div className="reviews__list_info">
                      <div className="info_descr">
                        <div className="reviews_name">Maria Rodriguez</div>
                        <div className="reviews_vacan">Marketing Manager</div>
                      </div>
                      <div className="reviews__project">
                        <Link to="/">Check the project</Link>
                      </div>
                  </div>
                </div>
              </div>
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

export default Reviews
