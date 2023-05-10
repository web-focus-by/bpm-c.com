import * as React from "react"
import PropTypes from "prop-types"
import "../../components/styles/main.scss"
import "../../components/styles/icons.scss"
import "./webSiteDesignReason.scss"
import "../../components/styles/modules.scss"
import "../../components/styles/mixins.scss"
import "../../components/styles/media_1920.scss"
import "../../components/styles/media_1366.scss"
import "../../components/styles/media_1024.scss"
import "../../components/styles/media_768.scss"
import "../../components/styles/media_375.scss"

const WebSiteDesignReason = ({ content }) => {
  if (content) {
    const title = content.title.replace(/<[^>]+>/g, "")
    const contentString = content.content.join("")
    return (
      <div className="container">
        <div className="web-site-reason margin_bottom_240">
          <div className="web-site-reason__title title_62">{title}</div>
          <div
            className="web-site-reason__info font_18"
            dangerouslySetInnerHTML={{ __html: contentString }}
          />
        </div>
      </div>
    )
  } else {
    return
  }
}

WebSiteDesignReason.propTypes = {
  siteTitle: PropTypes.string,
}

WebSiteDesignReason.defaultProps = {
  siteTitle: ``,
}

export default WebSiteDesignReason
