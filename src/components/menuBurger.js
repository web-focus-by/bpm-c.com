import * as React from "react"
import { useRef, useEffect, useState, useCallback } from "react"
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

const MenuBurger = ({ isOpenBurgerMenu, mainItems, allItems }) => {
  let url = '';
  const homeUrl = url ? url.origin : '';
  const [activeMenuItems, setActiveMenuItems] = useState(false);
  console.log(allItems);
  const activeMenu = () => {
    setActiveMenuItems(!activeMenuItems);
    console.log(activeMenuItems);
  }
  const resultData = mainItems.map((item, index) => {
    if (index === 0) {
      return (
        <li id = { item.id } key={ index }>
          <Link to={ homeUrl + item.path }>{ item.label }</Link>
        </li>
      )
    } else {
      return (
        <li id = { item.id } key={ index } onMouseOver={ activeMenu } onMouseOut={ activeMenu }>
          <a>{ item.label }</a>
        </li>
      )
    }
  });

  const menuItems = (item) => {
    if (allItems && allItems.length && activeMenuItems) {
      console.log(item);
    }
  }

  if (isOpenBurgerMenu) {
    return (
      <div className="dropdown_burgetmenu_sticky">
        <div className="dropdown_burgetmenu">
          <div className="dropdown_burgetmenu__info">
            <ul>
              { resultData }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuBurger;