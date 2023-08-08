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
import "../../components/resultsOfWebDesign/resultsOfWebDesign.scss"

const ServiceHowToWork = ({ content }) => {
  if (content) {
    const title = content.title.replace(/<[^>]+>/g, "")
    return (
        <div className="container">
        <div className="service_how_to margin_bottom_240">
          <div className="result_web_design_choice">
            <h2
              className="result_web_design_choice__title title_62 service-item__subtitle"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div className="result_web_design_choice__block">
              <div
                className="result_web_design_choice_block_list font_18 engagement-item"
                dangerouslySetInnerHTML={{ __html: content.content.join("") }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ServiceHowToWork.propTypes = {
  siteTitle: PropTypes.string,
}

ServiceHowToWork.defaultProps = {
  siteTitle: ``,
}

export default ServiceHowToWork
