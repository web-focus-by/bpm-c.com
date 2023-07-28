import * as React from "react"
import { useRef, useEffect, useState, useCallback } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

const Header = ({
  turnOnMenu,
  mainItems,
  clickOut,
  justTurnOnMenu,
  justTurnOffMenu,
  openCloseMenu,
}) => {
  const refHeader = useRef()
  const refHeaderBurger = useRef()
  const menuItemsRef = useRef([])
  const [isTurnOn, setIsTurnOn] = useState(false)

  const activeMenu = e => {
    turnOnMenu(e.target.innerText)
    if (!(clickOut && isTurnOn)) {
      setIsTurnOn(isTurnOn => !isTurnOn)
    }
  }
  const activeMenuBurger = e => {
    openCloseMenu(e.target.innerText)
    /*if (!(clickOut && isTurnOn)) {
      setIsTurnOn(!isTurnOn);
    }*/
  }
  const menuItems = mainItems.map((item, index) => {
    if (index === 0) {
      return (
        <li
          id={item.id}
          ref={el => (menuItemsRef.current[index] = el)}
          key={index}
        >
          <Link to={item.path} itemprop="url">{item.label}</Link>
        </li>
      )
    } else {
      return (
        <li
          id={item.id}
          ref={el => (menuItemsRef.current[index] = el)}
          key={index}
          onClick={activeMenu}
        >
          <span>{item.label}</span>
        </li>
      )
    }
  })
  const movingMouse = useCallback(e => {
    let currentCase =
      menuItemsRef &&
      menuItemsRef.current &&
      menuItemsRef.current.filter(
        menuItemRef => menuItemRef && menuItemRef.contains(e.target)
      )
        ? menuItemsRef.current.filter(
            menuItemRef => menuItemRef && menuItemRef.contains(e.target)
          )[0]
        : null
    if (currentCase && menuItemsRef.current.includes(currentCase)) {
      if (e.target.innerText !== "Portfolio") {
        justTurnOnMenu(e.target.innerText)
      } else if (e.target.innerText === "Portfolio") {
        justTurnOffMenu()
      }
    }
  }, [])

  useEffect(() => {
    menuItemsRef.current = menuItemsRef.current.slice(0, mainItems.length)
    if (isTurnOn && !clickOut) {
      document.addEventListener("mouseover", movingMouse, true)
    } else {
      document.removeEventListener("mouseover", movingMouse, true)
    }
  }, [mainItems])

  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <div className="header__logo">
            <Link to={"/"} itemprop="url">
              <span className="logo" itemprop="name"></span>
            </Link>
          </div>
          <div className="header_nav_list" ref={refHeader}>
            <ul>{menuItems}</ul>
          </div>
          <div
            className="burger"
            ref={refHeaderBurger}
            onClick={activeMenuBurger}
          ></div>
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
