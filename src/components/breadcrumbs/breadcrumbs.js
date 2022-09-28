import * as React from "react"
import { Link } from "gatsby"

const Breadcrumbs = ({ breadcrumbs, title }) => {
  let breadcrumbItems = '';
  let path = '';
  const pathname = breadcrumbs ? breadcrumbs.pathname : '';
  const domain = breadcrumbs ? breadcrumbs.origin : '';
  const host = breadcrumbs ? breadcrumbs.host : '';
  const filePath = breadcrumbs && breadcrumbs.href ? breadcrumbs.href.split("/").slice(1,-1).slice(1) : '';
  if (pathname) {
    breadcrumbItems = filePath ? filePath.map((item, index) => {
      if (item === "news") { item = "blog"; }
      path = (index !== 0) ? path + item + "/": '';
      let link = ( host === item ) ? domain : domain + "/" + path;
      return (
        <span key={index}>
          <Link to={ `${link}` }>
            { item === breadcrumbs.host ? "Main page" :
            ((filePath.length - 1) === index) ? title : item.replace("-"," ")}
            { index === filePath.length - 1 ? "" : " / " }
          </Link>
        </span>
      )
    }) : ''
    return breadcrumbItems
  } 
  return (
    <div>
      <div>{ breadcrumbItems }</div>
    </div>
  )
}

export default Breadcrumbs