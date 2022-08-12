import * as React from "react"
import { useRef, useState } from "react"
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

const Header = ({ siteTitle, turnOnMenu }) => {
  const refHeader = useRef();
  const [isActive, setActive] = useState(false);
  const activeMenu = () => {
    setActive(!isActive);
    turnOnMenu();
  }
    return (
      <header className="header">
        <div className="container">
          <div className="header__nav">
            <div>
              <a href="#">
                <span className="logo"></span>
              </a>
            </div>
            <div className="header_nav_list" ref={refHeader} >
              <ul>
                <li key="idPortfolioMenu" onClick={ activeMenu }>
                  <a href="#">Portfolio</a>
                </li>
                <li key="idServicesMenu" onClick={ activeMenu }>
                  <a href="#">Services</a>
                </li>
                <li key="idTechnologiesMenu" onClick={ activeMenu }>
                  <a href="#">Technologies</a>
                </li>
                <li key="idSolutionsMenu" onClick={ activeMenu }>
                  <a href="#">Solutions</a>
                </li>
                <li key="idIndustriesMenu" onClick={ activeMenu }>
                  <a href="#">Industries</a>
                </li>
                <li key="idAboutMenu" onClick={ activeMenu }>
                  <a href="#">About us</a>
                </li>
              </ul>
            </div>
            <div className="burger"></div>
          </div>
        </div>
      </header>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
