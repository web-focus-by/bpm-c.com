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
    ? dataItems.map(value => {
        return (
          <div className="services_list_item_wrapper" key={value.node.id}>
            <Link style={{ textDecoration: "none" }} to={value.node.uri}>
              <div className="services_list_item">
                <span>{value.node.title}</span>
              </div>
            </Link>
          </div>
        )
      })
    : ""
  return (
    <div className="container">
      <div className="services margin_bottom_240">
        <h2 className="services__title title_62">{title}</h2>
        <div className="services__list">{result}</div>
      </div>
    </div>
  )
}

export default Service
