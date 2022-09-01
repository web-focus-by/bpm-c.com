import * as React from "react"
import { useRef } from "react"
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

const Header = ({ siteTitle, turnOnMenu, mainItems }) => {
  const refHeader = useRef();
  let url = '';
  if (typeof window !== 'undefined') {
    url = new URL(window.location.href);
  }

  const homeUrl = url.origin;
  const activeMenu = (e) => {
    turnOnMenu(e.target.innerText);
  }

  const menuItems = mainItems.map((item, index) => {
    return (
      <li key={ index } onClick={ activeMenu } ><a>{ item.label }</a></li>
    )
  });
  console.log(siteTitle + ' is already loaded!')

  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <div>
            <Link to={ homeUrl }>
              <span className="logo"></span>
            </Link>
          </div>
          <div className="header_nav_list" ref={ refHeader } >
            <ul>
              { menuItems }
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
