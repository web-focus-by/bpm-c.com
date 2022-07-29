import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const PhoneButn = ({onClick}) => (
  <div className="phone_butn">
    <div className="phone" onClick={onClick}></div>
    <span className="phone_icon"></span>
  </div>
)

PhoneButn.propTypes = {
  siteTitle: PropTypes.string,
}

PhoneButn.defaultProps = {
  siteTitle: ``,
}

export default PhoneButn
