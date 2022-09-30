import * as React from "react"
import PropTypes from "prop-types"
import "../../components/styles/main.css"
import "../../components/styles/icons.css"
import "./webSiteDesignReason.css"
import "../../components/styles/modules.css"
import "../../components/styles/mixins.css"
import "../../components/styles/media_1920.css"
import "../../components/styles/media_1366.css"
import "../../components/styles/media_1024.css"
import "../../components/styles/media_768.css"
import "../../components/styles/media_375.css"

const WebSiteDesignReason = ({content}) => {
  if ( content ) {
    const title = content.title.replace(/<[^>]+>/g, '');
    const contentString = content.content.join('');
    return (
      <div className="container">
        <div className="web-site-reason margin_bottom_240">
          <div className="web-site-reason__title title_62">{ title }</div>
          <div className="web-site-reason__info font_18" dangerouslySetInnerHTML={{ __html: contentString }} />
        </div>
      </div>
    )
  } else {
    return;
  }
}

WebSiteDesignReason.propTypes = {
  siteTitle: PropTypes.string,
}

WebSiteDesignReason.defaultProps = {
  siteTitle: ``,
}

export default WebSiteDesignReason
