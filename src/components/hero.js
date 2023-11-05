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
      <div className="hero">
        <h1 className="hero__title title_80 index_title">
          <span class="vio_title">BPM&nbsp;Cloud</span><br />A&nbsp;Custom Software<br />Development Company
          <span className="yellow_hand"></span>
        </h1>
        <div className="hero__subtitle">
          If you’re struggling to find proper software development IT company that will provide you with the high-quality and cost-efficient result, BPM Cloud will put an end to your struggles. Our company is ready to cover your IT needs with years of working experience on different markets along with the large expertise of our specialists.
        </div>
        <div className="hero__butn">
          <Link className="link_btn" to={"/portfolio/"}>
            <button className="button_white">
              Let’s work together<span className="arrow_black" itemprop="name"></span>
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
