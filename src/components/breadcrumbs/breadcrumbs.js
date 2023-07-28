import * as React from "react"
import { useEffect } from "react"
import { Link } from "gatsby"
import "./breadcrumbs.scss"

const Breadcrumbs = ({ breadcrumbs, title }) => {
  let breadcrumbItems = ""
  let path = ""
  const pathname = breadcrumbs ? breadcrumbs.pathname : ""
  const domain = breadcrumbs ? breadcrumbs.origin : ""
  const host = breadcrumbs ? breadcrumbs.host : ""
  const filePath =
    breadcrumbs && breadcrumbs.href
      ? breadcrumbs.href.split("/").slice(1, -1).slice(1)
      : ""
  if (pathname) {
    breadcrumbItems = filePath
      ? filePath.map((item, index) => {
        item = item.charAt(0).toUpperCase() + item.slice(1);
          if (item === "news") {
            item = "Blog"
          }
          path = index !== 0 ? path + item.toLowerCase() + "/" : ""
          let link = host === item.toLowerCase() ? domain : domain + "/" + path
          if (breadcrumbs.pathname !== "/") {
            return (
              <span key={index} className="span_breadcrumbs" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                <Link className="breadcrumbs" to={`${link}`} itemprop="url">
                  {item === breadcrumbs.host
                    ? "Main page"
                    : filePath.length - 1 === index
                    ? `${title.charAt(0).toUpperCase() + title.slice(1)}`
                    : item.replace("-", " ")}
                    <meta itemprop="position" content={filePath.findIndex(i=>i == item) + 1} /> 
                </Link>
                <span className="breadcrumbs_span">
                  {index === filePath.length - 1 ? "" : "/"}
                </span>
              </span>
            )
          }
        })
      : ""
    return breadcrumbItems
  }


  useEffect(() => {
    const itemUp = documetn.querySelectorAll('a.breadcrumbs');

    itemUp.forEach(item => {
      item = item.charAt(0).toUpperCase() + item.slice(1);
    });
  })

  return (
    <div>
      <div class="breacrumbs-list" itemscope itemtype="http://schema.org/BreadcrumbList">
        {breadcrumbItems}
        </div>
    </div>
  )
}

export default Breadcrumbs
