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
import "./requiresWebsiteDesign.css"

const RequiresWebsiteDesign = ({ content }) => {
  if (content) {
    const title = content.title.replace(/<[^>]+>/g, "")
    return (
      <div className="container">
        <div className="circle_container">
          <div className="requires_design margin_bottom_240">
            <div className="requires_design__pic">
              <div className="circle_purple"></div>
              <div className="circle_yellow"></div>
              <div className="circle_pink"></div>
            </div>
            <div>
              <div className="requires_design__title title_62">{title}</div>
              <div
                className="requires_design__info font_18"
                dangerouslySetInnerHTML={{ __html: content.content.join("") }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

RequiresWebsiteDesign.propTypes = {
  siteTitle: PropTypes.string,
}

RequiresWebsiteDesign.defaultProps = {
  siteTitle: ``,
}

export default RequiresWebsiteDesign
