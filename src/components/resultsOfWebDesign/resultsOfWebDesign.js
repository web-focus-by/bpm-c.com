import * as React from "react"
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
import "./resultsOfWebDesign.css"

const ResultsOfWebDesign = ({ siteTitle }) => {
    return (
      <div className="container">
        <div className="result_web_design margin_bottom_240">    
          <div className="result_web_design_choice">
            <div className="result_web_design_choice__title title_62">
              Results of web design
            </div>
            <div className="result_web_design_choice__block">
              <div className="result_web_design_choice_block_list">
                <ul>
                  <li className="font_18">
                    You see beautiful web design of personalized website for your business.
                  </li>
                  <li className="font_18">
                    You hear flattering reviews from customers and partners.
                  </li>
                  <li className="font_18">
                    You experience comfort and convenience of working with your site.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  ResultsOfWebDesign.propTypes = {
    siteTitle: PropTypes.string,
  }
    
  ResultsOfWebDesign.defaultProps = {
    siteTitle: ``,
  }
  
  export default ResultsOfWebDesign;