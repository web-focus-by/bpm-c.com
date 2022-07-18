import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./main.css"
import "./icons.css"
import "./moduls.css"

const Hero = ({ siteTitle }) => (
  <div className="container">
    <div className="hero">
      <div className="hero__title">«BPM CLOUD» an IT company that clearly knows</div>
      <div className="hero__subtitle">We know all about art of creating effective websites, using both classic techniques and the most innovative world-class approaches.</div>
      <div className="hero__butn"><button className="button">View work<span className="arrow_black"></span></button></div>
    </div>
    <div className="header_circle"></div>
    <div className="header_circle-2"></div>
    <div className="header_circle-3"></div>
  </div>
)

Hero.propTypes = {
  siteTitle: PropTypes.string, 
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
