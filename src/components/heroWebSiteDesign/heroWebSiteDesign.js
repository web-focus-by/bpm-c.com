import * as React from "react"
import { Link } from "gatsby"
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

const HeroWebSiteDesign = ({ title, content, location, titleLogo }) => {
  const logoTitle = titleLogo && titleLogo.length > 0 ? titleLogo : null
  return (
    <div className="container">
      <div className="breacrumbs-list about_list" itemscope="" itemtype="http://schema.org/BreadcrumbList">
        <Breadcrumbs breadcrumbs={location} title={title} />
      </div>
      <div className="hero margin_bottom_240">
        <h1 className="hero__title title_80 about_title">
          {title}
          <span className={logoTitle}></span>
        </h1>
        {content && content.content[0] ? (
          <div className="hero__subtitle about_subtitle">
            <div dangerouslySetInnerHTML={{ __html: content.content[0] }} />
          </div>
        ) : null}
        <div className="hero__butn">
          <Link className="link_btn" to={"/portfolio/"}>
            <button className="button_white">
              Let’s work together<span className="arrow_black"></span>
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
