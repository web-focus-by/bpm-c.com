import * as React from "react"
import style from "./breadcrumbs.module.scss"
import { Link } from "gatsby"

const Breadcrumbs = ({ breadcrumbs }) => {
  const domain = breadcrumbs[0].url;
  const breadcrumbItems = breadcrumbs.map((breadcrumb, index) => {
    const link = breadcrumb.url.replace(domain, "/");
    return (
      <span key={index} className={style.listItem}>
        <Link to={`${link}`}>
          { breadcrumb.text }
          { index == breadcrumbs.length - 1 ? "" : " / " }
        </Link>
      </span>
    )
  })
  return (
    <div className={ style.wrapper }>
      <div className={ style.list }>{ breadcrumbItems }</div>
    </div>
  )
}

export default Breadcrumbs