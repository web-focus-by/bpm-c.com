import * as React from "react"
import { useRef, useEffect, useState, useCallback } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/mixins.scss"
import "../components/styles/header.scss"

const MenuBurger = ({ isOpenBurgerMenu, mainItems, allItems, clickOut }) => {
  const [activeMenuItems, setActiveMenuItems] = useState(null)
  const [actualUsingId, setActualUsingId] = useState()
  const menuItemsRef = useRef([])
  const subsequentsItem = useRef([])
  const item = [{ id: "", primaryItem: "", subsequentItems: [] }]
  let counter = 0
  const itemsByMainItems = mainItems
    .reduce((result, value) => {
      allItems.map((prevValue, i) => {
        if (prevValue.id === value.id && !prevValue.parentId) {
          item.push({
            id: value.id,
            primaryItem: prevValue.label,
            subsequentItems: [],
          })
          counter++
        } else if (prevValue.parentId && prevValue.parentId === value.id) {
          item[counter].subsequentItems.push(prevValue)
        }
      })
      result = [...result, item]
      return result
    }, [])
    .slice(5)
    .flat()
    .slice(1)

  const toggleInnerMenu = (index) => {
    index === activeMenuItems ? setActiveMenuItems(null) : setActiveMenuItems(index);
  }

  const showHoverSubsequentItems = useCallback(e => {
    let subItem =
      subsequentsItem &&
      subsequentsItem.current &&
      subsequentsItem.current.filter(
        subseqItem => subseqItem && subseqItem.contains(e.target)
      )
        ? subsequentsItem.current.filter(
            subseqItem => subseqItem && subseqItem.contains(e.target)
          )[0]
        : null
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
      setActualUsingId(currentCase.firstChild.id)
    } else if (subItem && subsequentsItem.current.includes(subItem)) {
      setActualUsingId(subItem.id)
    }
  }, [])
  const firstMenuLevel = itemsByMainItems.slice(0, 7) //выводит меню 2 раза, поэтому обрезаем
  const resultData = firstMenuLevel.map((item, index) => {
    let itemId = item.id
    let contentMenu =
      item && item.subsequentItems && item.subsequentItems.length
        ? item.subsequentItems.map((subValue, ind) => {
            return (
              <li id={subValue.id} key={ind}>
                <Link to={subValue.path} itemprop="url"><span itemprop="name">{subValue.label}</span></Link>
              </li>
            )
          })
        : []
    if (index === 0 || index === (firstMenuLevel.length - 1)) {
      return (
        <li
          key={index}
          ref={el => (menuItemsRef.current[index] = el)}
          onClick={() => {
            setActiveMenuItems(null)
          }}
        >
          <Link id={itemId} to={"/" + item.primaryItem.toLowerCase() + "/"} itemprop="url">
            <span itemprop="name">{item.primaryItem}</span>
          </Link>
        </li>
      )
    } else {
      return (
        <li
          key={index}
          ref={el => (menuItemsRef.current[index] = el)}
          onClick={() => (toggleInnerMenu(index))}
          className={activeMenuItems === index ? 'active-mobil' : ''}
        >
          <a id={itemId} itemprop="url">
            <span itemprop="name">{item.primaryItem}</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.96967 8.46967C4.26256 8.17678 4.73744 8.17678 5.03033 8.46967L12 15.4393L18.9697 8.46967C19.2626 8.17678 19.7374 8.17678 20.0303 8.46967C20.3232 8.76256 20.3232 9.23744 20.0303 9.53033L12.5303 17.0303C12.2374 17.3232 11.7626 17.3232 11.4697 17.0303L3.96967 9.53033C3.67678 9.23744 3.67678 8.76256 3.96967 8.46967Z"/>
              </svg>
            </span>
            </a>
          <div
            className="subsequentItem"
            id={itemId}
            ref={el => (subsequentsItem.current[index] = el)}
            style={{ height: activeMenuItems === index ? "100%" : "0"}}
          >
            <ul>{contentMenu}</ul>
          </div>
        </li>
      )
    }
  })

  useEffect(() => {
    menuItemsRef.current = menuItemsRef.current.slice(
      0,
      itemsByMainItems.length
    )
    subsequentsItem.current = subsequentsItem.current.slice(
      0,
      itemsByMainItems.length
    )
    if (activeMenuItems && !clickOut) {
      document.addEventListener("mouseover", showHoverSubsequentItems, true)
    } else {
      document.removeEventListener("mouseover", showHoverSubsequentItems, true)
    }
  }, [itemsByMainItems])

  if (isOpenBurgerMenu) {
    return (
      <div className="dropdown_burgermenu_sticky">
        <div className="dropdown_burgermenu">
          <div className="dropdown_burgermenu__info">
            <ul>{resultData}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuBurger
