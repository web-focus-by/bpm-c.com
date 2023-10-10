import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

const Hero = ({ location }) => {
  return (
    <div className="container">
      <div className="breacrumbs-list">
      <Breadcrumbs
        className="display_none"
        breadcrumbs={location}
        title="Main page"
      />
      </div>
      <div className="hero">
        <h1 className="hero__title title_80">
          «BPM CLOUD» an IT company that clearly knows
          <span className="yellow_hand"></span>
        </h1>
        <div className="hero__subtitle">
          We know all about art of creating effective websites, using both
          classic techniques and the most innovative world-class approaches.
        </div>
        <div className="hero__butn">
          <Link className="link_btn" to={"/portfolio/"}>
            <button className="button_white">
              View work<span className="arrow_black" itemprop="name"></span>
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

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
