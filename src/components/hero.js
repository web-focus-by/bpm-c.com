import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Hero = ({ siteTitle, data }) => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero__title title_80">
          «BPM CLOUD» an IT company that clearly knows
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
      <div className="header_circle"></div>
      <div className="header_circle-2"></div>
      <div className="header_circle-3"></div>
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
