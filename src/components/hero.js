import * as React from "react"
import PropTypes from "prop-types"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"
import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css"

const Hero = ({ location, crumbLabel }) => {
  let url = '';
  if (typeof window !== 'undefined') {
    url = new URL(window.location.href);
  } else {
    if (location &&  location.href) {
      url = new URL(location.href);
    }
  }

  const isPartiallyActive = ({ isPartiallyCurrent, isCurrent }) => {
    return isPartiallyCurrent && isCurrent
      ? { className: 'breadcrumb__link breadcrumb__link__active' }
      : {}
  }

  return (
    <div className="container">
      <div className="breadcrumb-container" style={{visibility: "hidden"}}>
        <Breadcrumb location={ location } crumbSeparator="/" crumbLabel={ crumbLabel }  getProps={isPartiallyActive} />
      </div>
      <div className="hero">
        <div className="hero__title title_80">
          «BPM CLOUD» an IT company that clearly knows<span className="yellow_hand"></span>
        </div>
        <div className="hero__subtitle">
          We know all about art of creating effective websites, using both classic
          techniques and the most innovative world-class approaches.
        </div>
        <div className="hero__butn">
          <button className="button_white">
            View work<span className="arrow_black"></span>
          </button>
        </div>
      </div>
      <div className="header_circle_yellow"></div>
      <div className="header_circle_pink"></div>
      <div className="header_circle_purple"></div>
    </div>
  );
}

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
