import * as React from "react"
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
import "./resultsOfWebDesign.scss"

const ResultsOfWebDesign = ({ content }) => {
  if (content) {
    const title = content.title.replace(/<[^>]+>/g, "")
    return (
      <div className="container">
        <div className="result_web_design margin_bottom_240">
          <div className="result_web_design_choice">
            <h2
              className="result_web_design_choice__title title_62"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div className="result_web_design_choice__block">
              <div
                className="result_web_design_choice_block_list font_18"
                dangerouslySetInnerHTML={{ __html: content.content.join("") }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ResultsOfWebDesign.propTypes = {
  siteTitle: PropTypes.string,
}

ResultsOfWebDesign.defaultProps = {
  siteTitle: ``,
}

export default ResultsOfWebDesign
