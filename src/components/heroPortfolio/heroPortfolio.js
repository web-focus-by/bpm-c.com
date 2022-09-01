import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
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

const HeroPortfolio = ({ location, crumbLabel, tags }) => {
  let url = '';
  if (typeof window !== 'undefined') {
    url = new URL(window.location.href);
  } else {
    if (location && location.href) {
      url = new URL(location.href);
    }
  }
  const [longList, setLongList] = useState(false);

  const isPartiallyActive = ({ isPartiallyCurrent, isCurrent }) => {
    return isPartiallyCurrent && isCurrent
      ? { className: 'breadcrumb__link breadcrumb__link__active' }
      : {}
  }
  const result = tags.map((tag, index) => {
    if (!longList) {
      if (index < 6) {
        return (
          <button key = { index } className="button_item_tag">
            { tag.node.name }
          </button>
        )
      }
    } else {
      return (
        <button key = { index } className="button_item_tag">
          { tag.node.name }
        </button>
      )
    }
  })

  return (
    <div className="container">
      <div className="breadcrumb-container">
        <Breadcrumb location={ location } crumbSeparator="/" crumbLabel={ crumbLabel } getProps={ isPartiallyActive } />
      </div>
      <div className="hero">
        <div className="hero__title title_80">
            Portfolio<span className="puzzle"></span>
        </div>
        <div className="hero__butntag">
            { result }
            <button onClick={()=>{ setLongList(!longList) }} className="button_item_tag">
              { longList ? 'Close' : 'See more' }
            </button>
        </div>
        <div className="portfolio">
          <span className="portfolio-container">200+ completed projects</span>
          <span className="portfolio-container">200+ specialists in the team</span>
          <span className="portfolio-container">200% of clients come back to us</span>
        </div>
      </div>
      <div className="header_circle_yellow"></div>
      <div className="header_circle_pink"></div>
      <div className="header_circle_purple"></div>
    </div>
  );
}

HeroPortfolio.propTypes = {
  siteTitle: PropTypes.string,
}

HeroPortfolio.defaultProps = {
  siteTitle: ``,
}

export default HeroPortfolio
