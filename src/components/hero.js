import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Hero = ({ location }) => {
  return (
    <div className="container">
      <div className="breadcrumb-container" style={{visibility: "hidden"}}>
        <Breadcrumbs breadcrumbs={ location } title="Main page"/>
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

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
