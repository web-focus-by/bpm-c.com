import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../../components/styles/main.scss"
import "../../components/styles/icons.scss"
import "../../components/styles/modules.scss"
import "../../components/styles/mixins.scss"
import "../../components/styles/media_1920.scss"
import "../../components/styles/media_1366.scss"
import "../../components/styles/media_1024.scss"
import "../../components/styles/media_768.scss"
import "../../components/styles/media_375.scss"

const Service = ({ title }) => {
  const data = useStaticQuery(graphql`
    query getServicesDataQuery {
      allWpPage(
        filter: { wpParent: { node: { slug: { eq: "services" } } } }
        limit: 8
      ) {
        edges {
          node {
            id
            uri
            title
          }
        }
      }
    }
  `)
  const dataItems = data ? data.allWpPage.edges : null
  const result = dataItems
    ? dataItems.map((value, index) => {
        return (
          <Link
            className="services_list_item"
            id={index}
            key={value.node.id}
            style={{ textDecoration: "none" }}
            to={value.node.uri}
          >
            {value.node.title}
          </Link>
        )
      })
    : ""
  return (
    <div className="container">
      <div className="services margin_bottom_240">
        <div className="services__title title_62">{title}</div>
        <div className="services__list">{result}</div>
      </div>
    </div>
  )
}

export default Service
