import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/mixins.css"

const PhoneButn = ({ siteTitle }) => (
  <div className="phone_butn">
    <div className="phone"></div>
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
