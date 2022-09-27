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

const GoalsDesign = ({ siteTitle }) => {
  return (
    <div className="container">
      <div className="leaders margin_bottom_240">    
        <div className="leaders_choice">
          <div className="leaders_choice__title title_62">
            Goals of site design
          </div>
          <div className="leaders_choice__block">
            <div className="leaders_choice_block_list">
              <ul>
                <li className="font_18">
                  Customers visit websites of the winning design more often to get information.
                </li>
                <li className="font_18">
                  Each new client gets opportunity to find the desired product or service in 
                  attractive design, without getting up from the couch.
                </li>
              </ul>
            </div>
            <div className="leaders_choice_block_list">
              <ul>
                <li className="font_18">
                  Direct advertising of products or services while saving on advertising and 
                  product promotion. Site with unique design by «BPM Cloud» constantly 
                  attracts new customers.
                </li>
                <li className="font_18">
                  Interaction with social networks in uniform design style and work on positive 
                  business image. As result, attracting new customers from social networks.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

GoalsDesign.propTypes = {
  siteTitle: PropTypes.string,
}

GoalsDesign.defaultProps = {
  siteTitle: ``,
}

export default GoalsDesign
