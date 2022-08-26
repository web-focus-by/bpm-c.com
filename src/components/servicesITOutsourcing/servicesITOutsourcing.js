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


const ServicesITOutsourcing = ({ siteTitle }) => {
  return (
    <div className="container">
      <div className="result_web_design margin_bottom_240">    
        <div className="result_web_design_choice">
          <div className="result_web_design_choice__title title_62">
            Services in IT Outsourcing
          </div>
        </div>
      <div className="leaders_choice_tagline__butn">
        <button className="button_white">
          Get in touch<span className="arrow_black"></span>
        </button>
      </div>
    </div>
    </div>
  )
}

ServicesITOutsourcing.propTypes = {
  siteTitle: PropTypes.string,
}
  
ServicesITOutsourcing.defaultProps = {
  siteTitle: ``,
}

export default ServicesITOutsourcing;