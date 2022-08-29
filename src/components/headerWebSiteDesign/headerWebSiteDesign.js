import * as React from "react"
import { useRef, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../../components/styles/main.css"
import "../../components/styles/icons.css"
import "../../components/styles/mixins.css"
import "../../components/styles/media_1920.css"
import "../../components/styles/media_1366.css"
import "../../components/styles/media_1024.css"
import "../../components/styles/media_768.css"
import "../../components/styles/media_375.css"

const HeaderWebSiteDesign = ({ siteTitle, turnOnMenu, location }) => {
  const refHeader = useRef();
  let url = '';
  if (typeof window !== 'undefined') {
    url = new URL(window.location.href);
  } else {
    url = new URL(location.href);
  }
  
  const homeUrl = url.origin;
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
              <a href={ homeUrl }>
                <span className="logo"></span>
              </a>
            </div>
            <div className="header_nav_list" ref={ refHeader } >
              <ul>
                <li key="idPortfolioMenu" onClick={ activeMenu }>
                  <a>Portfolio</a>
                </li>
                <li key="idServicesMenu" onClick={ activeMenu }>
                  <a>Services</a>
                </li>
                <li key="idTechnologiesMenu" onClick={ activeMenu }>
                  <a>Technologies</a>
                </li>
                <li key="idSolutionsMenu" onClick={ activeMenu }>
                  <a>Solutions</a>
                </li>
                <li key="idIndustriesMenu" onClick={ activeMenu }>
                  <a>Industries</a>
                </li>
                <li key="idAboutMenu" onClick={ activeMenu }>
                  <a>About us</a>
                </li>
              </ul>
            </div>
            <div className="burger"></div>
          </div>
        </div>
      </header>
    )
}

HeaderWebSiteDesign.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderWebSiteDesign.defaultProps = {
  siteTitle: ``,
}

export default HeaderWebSiteDesign;
