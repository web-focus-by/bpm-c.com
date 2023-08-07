import * as React from "react"
import PropTypes from "prop-types"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import "../../components/styles/main.scss"
import "../../components/styles/icons.scss"
import "../../components/styles/modules.scss"
import "../../components/styles/mixins.scss"
import "../../components/styles/media_1920.scss"
import "../../components/styles/media_1366.scss"
import "../../components/styles/media_1024.scss"
import "../../components/styles/media_768.scss"
import "../../components/styles/media_375.scss"

const HeroNews = ({ location, title }) => {
  return (
    <div className="container">
      <ul class="breacrumbs-list" itemscope="" itemtype="http://schema.org/BreadcrumbList">
        <Breadcrumbs breadcrumbs={location} title={title} />
      </ul>
      <div className="hero margin_bottom_60">
        <h1 className="hero__title title_80">
          {title}
          <span className="newspaper"></span>
        </h1>
      </div>
      <div className="header_circle_yellow"></div>
      <div className="header_circle_pink"></div>
      <div className="header_circle_purple"></div>
    </div>
  )
}

HeroNews.propTypes = {
  siteTitle: PropTypes.string,
}

HeroNews.defaultProps = {
  siteTitle: ``,
}

export default HeroNews
