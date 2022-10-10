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

const Header = ({ turnOnMenu, mainItems }) => {
  const refHeader = useRef();
  let url = '';
  if (typeof window !== 'undefined') {
    url = new URL(window.location.href);
  }

  const homeUrl = url ? url.origin : '';
  const activeMenu = (e) => {
    turnOnMenu(e.target.innerText);
  }

  const menuItems = mainItems.map((item, index) => {
    if (index === 0 || index === 6) {
      return (
        <li key={ index }><Link to={ homeUrl + item.path }>{ item.label }</Link></li>
      )
    } else {
      return (
        <li key={ index } onClick={ activeMenu } ><a>{ item.label }</a></li>
      )
    }
    
  });

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
