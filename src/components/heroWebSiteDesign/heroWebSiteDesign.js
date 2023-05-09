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

const HeroWebSiteDesign = ({ title, content, location, titleLogo }) => {
  const logoTitle = titleLogo && titleLogo.length > 0 ? titleLogo : null
  return (
    <div className="container">
      <Breadcrumbs breadcrumbs={location} title={title} />
      <div className="hero margin_bottom_240">
        <div className="hero__title title_80">
          {title}
          <span className={logoTitle}></span>
        </div>
        {content && content.content[0] ? (
          <div className="hero__subtitle">
            <div dangerouslySetInnerHTML={{ __html: content.content[0] }} />
          </div>
        ) : null}
        <div className="hero__butn">
          <Link className="link_btn" to={"/portfolios/"}>
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
  )
}

HeroWebSiteDesign.propTypes = {
  siteTitle: PropTypes.string,
}

HeroWebSiteDesign.defaultProps = {
  siteTitle: ``,
}

export default HeroWebSiteDesign
