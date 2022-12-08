import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../../components/styles/main.css"
import "../../components/styles/icons.css"
import "../../components/styles/modules.css"
import "../../components/styles/mixins.css"
import "../../components/styles/media_1920.css"
import "../../components/styles/media_1366.css"
import "../../components/styles/media_1024.css"
import "../../components/styles/media_768.css"
import "../../components/styles/media_375.css"

const Service = ({ title }) => {
  const data = useStaticQuery(graphql`
    query getServicesDataQuery {
      allWpPage(filter: {wpParent: {node: {slug: {eq: "services"}}}}, limit: 8) {
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
  const result = dataItems ? dataItems.map((value, index) => {
    return (
      <Link className="services_list_item" id={ index } key={ value.node.id } style={{textDecoration: 'none'}} to={ value.node.uri }>
        { value.node.title }
      </Link>
    )
  }) : '';
  return (
    <div className="container">
      <div className="services margin_bottom_240">
        <div className="services__title title_62">{ title }</div>
          <div className="services__list">
          { result }
        </div>
      </div>
    </div>
  );
}

export default Service;