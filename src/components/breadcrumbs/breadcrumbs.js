import * as React from "react"
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

  console.log(title);

  const name = title === 'bpm-c.com' || 'Bpm-c.com' ? "IT Company" : title;
  if (pathname) {
    breadcrumbItems = filePath
      ? filePath.map((item, index) => {
        item = item.charAt(0).toUpperCase() + item.slice(1);
          if (item === "news") {
            item = "Blog"
          }
          path = index !== 0 ? path + item.toLowerCase() + "/" : ""
          let link = host === item.toLowerCase() ? domain.toLowerCase() : domain.toLowerCase() + "/" + path.toLowerCase()
          if (breadcrumbs.pathname !== "/") {
            return (
              <span key={index} className="span_breadcrumbs" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                <Link className="breadcrumbs" to={`${link}`} itemprop="url">
                  { index === 0 ?
                  "IT Company" :
                   filePath.length - 1 === index
                    ? `${index === 0 ? "IT Company" : title}`
                    : item.replace("-", " ")}
                    <meta itemprop="position" content={index} /> 
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

  return (
    <div>
      <div>
        {breadcrumbItems}
        </div>
    </div>
  )
}

export default Breadcrumbs
