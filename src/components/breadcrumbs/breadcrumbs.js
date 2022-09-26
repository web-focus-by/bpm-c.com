import * as React from "react"
import style from "./breadcrumbs.module.scss"
import { Link } from "gatsby"

const Breadcrumbs = ({ breadcrumbs }) => {
  let breadcrumbItems;
  let path = '';
  const pathname = breadcrumbs.pathname;
  const domain = breadcrumbs.origin;
  const host = breadcrumbs.host;
  const ourPath = breadcrumbs.href.split("/").slice(1,-1).slice(1);
  if (pathname) {
    breadcrumbItems = ourPath.map((item, index) => {
      path = (index !== 0) ? path + item + "/": '';
      let link = ( host === item ) ? domain : domain + "/" + path;
      return (
        <span key={index}>
          <Link to={ `${link}` }>
            { item === breadcrumbs.host ? "Main page" : item }
            { index === ourPath.length - 1 ? "" : " / " }
          </Link>
        </span>
      )
    })
    return breadcrumbItems
  } 
  return (
    <div>
      <div>{ breadcrumbItems }</div>
    </div>
  )
}

export default Breadcrumbs