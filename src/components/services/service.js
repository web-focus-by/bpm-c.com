import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "../../components/styles/main.css"
import "../../components/styles/icons.css"
import "../../components/styles/modules.css"
import "../../components/styles/mixins.css"
import "../../components/styles/media_1920.css"
import "../../components/styles/media_1366.css"
import "../../components/styles/media_1024.css"
import "../../components/styles/media_768.css"
import "../../components/styles/media_375.css"

const Service = () => {
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
      <div id={ index } key={ value.node.id } className="services_list_item">
        <Link to={ value.node.uri }>{ value.node.title }</Link>
      </div>
    )
  }) : '';
  return (
    <div className="container">
      <div className="services margin_bottom_240">
        <div className="services__title title_62">Services</div>
          <div className="services__list">
          { result }
        </div>
      </div>
    </div>
  );
}

export default Service;