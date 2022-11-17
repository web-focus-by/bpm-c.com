import * as React from "react"
import { useRef, useEffect, useState } from "react"
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

const Header = ({ siteTitle, turnOnMenu, mainItems, toggle, justTurnOnMenu, justTurnOffMenu }) => {
  const refHeader = useRef();
  const menuItemsRef = useRef([]);
  const [isToggle, setIsToggle] = useState(toggle);
  let url = '';
  if (typeof window !== 'undefined') {
    url = new URL(window.location.href);
  }
  console.log(siteTitle);

  useEffect(
    () => {
      menuItemsRef.current = menuItemsRef.current.slice(0, mainItems.length);
      document.addEventListener("mouseover", (e) => {
        let currentCase = menuItemsRef && menuItemsRef.current && menuItemsRef.current.filter(menuItemRef => menuItemRef && menuItemRef.contains(e.target)) ?
        menuItemsRef.current.filter(menuItemRef => menuItemRef && menuItemRef.contains(e.target))[0] : null;
        if (toggle) {
          if (currentCase && menuItemsRef.current.includes(currentCase) && (e.target.innerText !== 'Portfolios')) {
            justTurnOnMenu(e.target.innerText);
            return;
          }
          return;
        }
      }, true);
      document.addEventListener("mouseout", (e) => {
        let currentCase = menuItemsRef && menuItemsRef.current && menuItemsRef.current.filter(menuItemRef => menuItemRef && menuItemRef.contains(e.target)) ?
        menuItemsRef.current.filter(menuItemRef => menuItemRef && menuItemRef.contains(e.target))[0] : null;
        if (toggle) {
          if (currentCase && menuItemsRef.current.includes(currentCase) && (e.target.innerText === 'Portfolios')) {
            justTurnOffMenu();
            return;
          }
          return;
        }
      }, true);
    }, [mainItems]
  );

  const homeUrl = url ? url.origin : '';
  const activeMenu = (e) => {
    turnOnMenu(e.target.innerText);
  }

  const menuItems = mainItems.map((item, index) => {
    if (index === 0) {
      return (
        <li id = { item.id } ref={ el => menuItemsRef.current[index] = el } key={ index }><Link to={ homeUrl + item.path }>{ item.label }</Link></li>
      )
    } else {
      return (
        <li id = { item.id } ref={ el => menuItemsRef.current[index] = el } key={ index } onClick={ activeMenu } ><a>{ item.label }</a></li>
      )
    }
    
  });

  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <div style={{ paddingBottom: '20px' }}>
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
