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

const Others = ({ content }) => {
  if (content) {
    const title = content.title.replace(/<[^>]+>/g, '');
    const text = content.content.replace(/<[^>]+>/g, '');
    return (
      <div className="container">
        <div className="result_web_design margin_bottom_240">
          <div className="result_web_design_choice">
            <div className="result_web_design_choice__title title_62" dangerouslySetInnerHTML={{__html: title }}>
            </div>
            <div className="result_web_design_choice__block">
              <div className="result_web_design_choice_block_list" dangerouslySetInnerHTML={{__html: text }}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Others.propTypes = {
  siteTitle: PropTypes.string,
}

Others.defaultProps = {
  siteTitle: ``,
}

export default Others
