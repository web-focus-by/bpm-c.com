import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "../../components/styles/main.scss"
import "../../components/styles/icons.scss"
import "../../components/styles/modules.scss"
import "../../components/styles/mixins.scss"
import "../../components/styles/media_1920.scss"
import "../../components/styles/media_1366.scss"
import "../../components/styles/media_1024.scss"
import "../../components/styles/media_768.scss"
import "../../components/styles/media_375.scss"
import "./serviceITOutsourcing.scss"

const ServicesITOutsourcing = ({ title, themes }) => {
  const result = themes.map((value, index) => {
    return (
      <Link to={value.uri} itemprop="url">
        <button key={index + value.id} className="button_white_item">
          {value.title}
        </button>
      </Link>
    )
  })

  if (result && result.length > 0) {
    return (
      <div className="container">
        <div className="service_oitsourcing margin_bottom_240">
          <div className="service_oitsourcing_choice">
            <h2 className="service_oitsourcing_choice__title title_62">
              Services in&nbsp;{title}
            </h2>
          </div>
          <div className="items_tagline__butn">{result}</div>
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

export default ServicesITOutsourcing
