import * as React from "react"
import { Link } from "gatsby"
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

const HeroWebSiteDesign = ({ content, location }) => {
  let url = '';
  if (typeof window !== 'undefined') {
    url = new URL(window.location.href);
  } else {
    if (location && location.href) {
      url = new URL(location.href);
    }
  }
  return (
    <div className="container">
      <div className="breadcrumb-container">
        <Breadcrumbs breadcrumbs={ location } />
      </div>
      <div className="hero margin_bottom_240">
        <div className="hero__title title_80">
            { content.title }<span className="star"></span>
        </div>
        <div className="hero__subtitle">{ content.content }</div>
        <div className="hero__butn">
          <Link to={ "/portfolios/" }>
            <button className="button_white">
              View work<span className="arrow_black"></span>
            </button>
          </Link>
        </div>
      </div>
      <div className="header_circle_yellow"></div>
      <div className="header_circle_pink"></div>
      <div className="header_circle_purple"></div>
    </div>
  );
}

HeroWebSiteDesign.propTypes = {
  siteTitle: PropTypes.string,
}

HeroWebSiteDesign.defaultProps = {
  siteTitle: ``,
}

export default HeroWebSiteDesign
