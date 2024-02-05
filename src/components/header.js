import * as React from "react"
import { useRef, useEffect, useState, useCallback, componentWillMount, componentWillUnmount} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/mixins.scss"
import "../components/styles/header.scss"

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
  const [burgerOpen, setBurgerOpen] = useState(false);

  const activeMenu = e => {
    turnOnMenu(e.target.innerText)
    if (!(clickOut && isTurnOn)) {
      setIsTurnOn(isTurnOn => !isTurnOn)
    }
  }
  const activeMenuBurger = e => {
    openCloseMenu(e.target.innerText);
    setBurgerOpen(!burgerOpen);
  }
  const menuItems = mainItems.map((item, index) => {
    if (index === 0 || index === (mainItems.length - 1)) {
      return (
        <li
          id={item.id}
          ref={el => (menuItemsRef.current[index] = el)}
          key={index}
        >
          <Link to={item.path} itemprop="url"><span itemprop="name">{item.label}</span></Link>
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
          <span itemprop="name">{item.label}</span>
        </li>
      )
    }
  })
  const movingMouse = useCallback(e => {
    console.log(e.target.innerText)
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
      if (e.target.innerText !== "Portfolio" && e.target.innerText !== "Blog") {
        justTurnOnMenu(e.target.innerText)
      } else if (e.target.innerText === "Portfolio") {
                console.log('dfff')
        justTurnOffMenu()
      } else if (e.target.innerText === "Blog") {
        console.log('dd')
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


  if(burgerOpen)  {
    document.body.style.overflow = 'hidden';
    document.body.style.maxHeight = '100vh';
  } else {
    document.body.style.overflow = '';
    document.body.style.maxHeight = '';
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <div className="header__logo">
            <Link to={"/"} itemprop="url">
              <span className="logo" itemprop="name"></span>
            </Link>
          </div>
          <div className="header_nav_list" ref={refHeader} itemscope="" itemtype="https://schema.org/SiteNavigationElement">
            <ul>{menuItems}</ul>
          </div>
          <div
            className={`burger ${burgerOpen ? 'active' : ''}`}
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
