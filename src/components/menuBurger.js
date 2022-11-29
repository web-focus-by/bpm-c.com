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

const MenuBurger = ({ isOpenBurgerMenu, mainItems, allItems, clickOut }) => {
  const [activeMenuItems, setActiveMenuItems] = useState(false);
  const menuItemsRef = useRef([]);
  const [contentMenuItems, setContentMenu] = useState();
  const item = [{ id: "", primaryItem:"", subsequentItems: [], },]
  let counter = 0;
  const itemsByMainItems = mainItems.map((value, index) => {
    allItems.map((prevValue, i)=>{
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
    return item.slice(1);
  }).slice(5).flat();
  
  let getItems = [];
  const subsequentItemsByMainItems = (e) => {
    let currentCase = menuItemsRef && menuItemsRef.current && menuItemsRef.current.filter(menuItemRef => menuItemRef && menuItemRef.contains(e.target)) ?
    menuItemsRef.current.filter(menuItemRef => menuItemRef && menuItemRef.contains(e.target))[0] : null;
    let contentMenu = [];
    getItems = itemsByMainItems.filter(item => item.id === e.target.id)[0] &&
    itemsByMainItems.filter(item => item.id === e.target.id)[0].subsequentItems ?
    itemsByMainItems.filter(item => item.id === e.target.id)[0].subsequentItems : null;
    if (currentCase && menuItemsRef.current.includes(currentCase)) {
      contentMenu.id = e.target.id;
      contentMenu.body = getItems ? getItems.map((value, index) => {
        return (
          <li id = { value.id } key={ index }>
            <Link to={ value.path }>{ value.label }</Link>
          </li>
        )
      }) : [];
    }
    setContentMenu(contentMenu);
  }

  const activeSubsequentItems = (e) => {
    setActiveMenuItems(!activeMenuItems);
    if (!activeMenuItems) { subsequentItemsByMainItems(e); }
  }

  const showSubsequentItems = useCallback((e) => {
    let currentCase = menuItemsRef && menuItemsRef.current && menuItemsRef.current.filter(menuItemRef => menuItemRef && menuItemRef.contains(e.target)) ?
    menuItemsRef.current.filter(menuItemRef => menuItemRef && menuItemRef.contains(e.target))[0] : null;
    if (currentCase && menuItemsRef.current.includes(currentCase)) {
      if (e.target.innerText !== 'Portfolios') {
        setActiveMenuItems(true);
        subsequentItemsByMainItems(e);
        
      } else if (e.target.innerText === 'Portfolios') {
        setActiveMenuItems(false);
      }
    }
  }, []);

  const isShow = (item) => {
    if (activeMenuItems && contentMenuItems.id === item.id) { 
      return 'block';
    } else {
      return 'none';
    }
  }

  const resultData = itemsByMainItems.map((item, index) => {
    if (index === 0) {
      return (
        <li key={ index } ref={ el => menuItemsRef.current[index] = el } onClick={ () => { setActiveMenuItems(false); } }>
          <Link id = { item.id } to={ "/" + item.primaryItem.toLowerCase() + "/" }>{ item.primaryItem }</Link>
        </li>
      )
    } else {
      return (
        <li key={ index } ref={ el => menuItemsRef.current[index] = el } onClick={ activeSubsequentItems }>
          <a id = { item.id }>{ item.primaryItem }</a>
          <div className="subsequentItem" id = { item.id } style={{display: isShow(item)}}>
            <ul>{ contentMenuItems && contentMenuItems.body ? contentMenuItems.body : null }</ul>
          </div>
        </li>
      )
    }
  });

  useEffect(
    () => {
      menuItemsRef.current = menuItemsRef.current.slice(0, mainItems.length);
      if (activeMenuItems && !clickOut) {
        document.addEventListener("mouseover", showSubsequentItems, true);
      } else {
        document.removeEventListener("mouseover", showSubsequentItems, true);
      }
    }, [mainItems]
  );

  if (isOpenBurgerMenu) {
    return (
      <div className="dropdown_burgermenu_sticky">
        <div className="dropdown_burgermenu">
          <div className="dropdown_burgermenu__info">
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