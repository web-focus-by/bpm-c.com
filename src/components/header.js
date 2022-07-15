import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./main.css"
import "./icons.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container">
      <div className="header__nav">
        <div>
          <a href="#"><span className="logo"></span></a>
        </div>
        <div className="header_nav_list">
          <ul>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
