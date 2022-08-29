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
import "./resWebDesign.css"

const ResWebDesign = ({ siteTitle }) => {
  return (
    <div className="container">
      <div className="result_web_design margin_bottom_240">
        <div className="result_web_design_choice">
          <div className="result_web_design_choice__title title_62">
            Result of web design at «BPM Cloud»
          </div>
          <div className="result_web_design_choice__block">
            <div className="result_web_design_choice_block_list">
              <ul>
                <li className="font_18">
                  Weighted and unique interface with thinking through the paths of users through the site to ensure maximum conversion.
                </li>
                <li className="font_18">
                  «BPM Cloud» web design agency guarantees creation of sites with unique designs and sets of desired functions.
                </li>
                <li className="font_18">
                  Professional websites design uses clean code, which leads to creation of fast websites.
                </li>
                <li className="font_18">
                  Setting up everything necessary for promotion in search engines.
                </li>
                <li className="font_18">
                  Simple and easy-to-understand instructions for content management of the site.
                </li>
                <li className="font_18">
                  Our web design agency gives guarantee for sites and carries out services.
                </li>
              </ul>
            </div>
            <div className="result_web_design_choice_block_list">
              <div className="font_18">
                Websites with attractive designs at «BPM Cloud» guarantees effective representation on 
                the network. It attracts new customers, quickly and easily distributes, demonstrates 
                and publishes necessary business information. Personalized design increases prestige of 
                company, credibility, recognition, demonstrates professionalism.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ResWebDesign.propTypes = {
  siteTitle: PropTypes.string,
}
  
ResWebDesign.defaultProps = {
  siteTitle: ``,
}

export default ResWebDesign;