/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import PhoneButn from "./phone_butn"
import Modal from "./modal"
import DropdownServices from "./dropdown_services"
import "../components/styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      wpMenu {
        menuItems {
          nodes {
            id
            path
            label
            parentId
          }
        }
      }
    }
  `);

  const [selectedItem, setItem] = useState();
  const allItems = data.wpMenu && data.wpMenu.menuItems &&  data.wpMenu.menuItems.nodes ? data.wpMenu.menuItems.nodes : null;
  const allItemsForMenu = allItems.reduce((res,val)=>{
    let item = val.path.slice(1,-1).split("/");
    if( item.length < 3) {
      return [...res, val]
    }
    return res
  },[]);
  const mainItems = allItemsForMenu.reduce(
    (result, value) => {
      if (value.path.slice(1, -1).split("/").length === 1) {
        result.push({ path: value.path, label: value.label });
      }
      return result;
    },[]
  );
   
  const refMenu = useRef();
  const [isToggle, setToggle] = useState(false);

  const closeOpenMenu = (e) => {
    setToggle(!isToggle);
    setItem(e);
  }

  const closeMenu = () => {
    setToggle(false);
  }

  const [isOpen, setModalActive] = useState(false);
  const toggleModalActive = () => {
    setModalActive(!isOpen);
  }

  const clickOut = (e) => {
    if (refMenu && refMenu.current && !refMenu.current.contains(e.target))
    {
      closeMenu();
    }
  }

  useEffect(
    () => {
      document.addEventListener("click", clickOut, true);
      return () => {
        document.removeEventListener("click", clickOut, true);
      };
    }, []
  );

  return (
    <>
      <div className="header" ref={ refMenu }>
        <Header siteTitle={ data.site.siteMetadata?.title || `Title` } turnOnMenu={ closeOpenMenu } mainItems={ mainItems } />
        <DropdownServices isToggle = { isToggle } turnOffMenu={ closeMenu } selectedItem={ selectedItem } allItems={ allItemsForMenu } />
      </div>
      <PhoneButn onClick={ toggleModalActive }></PhoneButn>
      { isOpen ? <Modal onClickClose={ toggleModalActive }></Modal> : null}
      { children }
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
