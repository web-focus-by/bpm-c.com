import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "../../components/styles/main.css"
import "../../components/styles/icons.css"
import "../../components/styles/modules.css"
import "../../components/styles/mixins.css"
import "../../components/styles/media_1920.css"
import "../../components/styles/media_1366.css"
import "../../components/styles/media_1024.css"
import "../../components/styles/media_768.css"
import "../../components/styles/media_375.css"
import "./serviceITOutsourcing.css"

const ServicesITOutsourcing = ({ title, themes }) => {
  let baseUrl = '';
  if (typeof window !== 'undefined') {
    baseUrl =  new URL(window.location.href).origin;
  }

  const result = themes.map((value, index) => {
    return (
      <Link to={ baseUrl + value.uri }>
        <button key = { index + value.id } className="button_white_item">
          { value.title }
        </button>
      </Link>
    )
  });

  if (result && result.length > 0) {
    return (
      <div className="container">
        <div className="service_oitsourcing margin_bottom_240">
          <div className="service_oitsourcing_choice">
            <div className="service_oitsourcing_choice__title title_62">
              Services in&nbsp;{ title }
            </div>
          </div>
          <div className="items_tagline__butn">
            { result }
          </div>
        </div>
      </div>
    )
  }
}

ServicesITOutsourcing.propTypes = {
  siteTitle: PropTypes.string,
}
  
ServicesITOutsourcing.defaultProps = {
  siteTitle: ``,
}

export default ServicesITOutsourcing;