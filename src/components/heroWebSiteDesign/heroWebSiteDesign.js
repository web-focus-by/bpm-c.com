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
  const logoTitle = titleLogo && titleLogo.length > 0 ? titleLogo : null;
  const itemUp = document.querySelectorAll('a.breadcrumbs');
  itemUp.forEach(item => {
    item.charAt(0).toUpperCase() + item.slice(1)
  })
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
          <Link className="link_btn" to={"/portfolio/"}>
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
