import * as React from "react"
import PropTypes from "prop-types"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import "../../components/styles/main.css"
import "../../components/styles/icons.css"
import "../../components/styles/modules.css"
import "../../components/styles/mixins.css"
import "../../components/styles/media_1920.css"
import "../../components/styles/media_1366.css"
import "../../components/styles/media_1024.css"
import "../../components/styles/media_768.css"
import "../../components/styles/media_375.css"
import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css"

const HeroNews = ({ location, title }) => {
  return (
    <div className="container">
      <div className="breadcrumb-container">
        <Breadcrumbs breadcrumbs={ location } />
      </div>
      <div className="hero margin_bottom_60">
        <div className="hero__title title_80">
            { title }<span className="newspaper"></span>
        </div>
      </div>
      <div className="header_circle_yellow"></div>
      <div className="header_circle_pink"></div>
      <div className="header_circle_purple"></div>
    </div>
  );
}

HeroNews.propTypes = {
  siteTitle: PropTypes.string,
}

HeroNews.defaultProps = {
  siteTitle: ``,
}

export default HeroNews
