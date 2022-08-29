import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
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

const WebSiteDesignReason = ({ siteTitle }) => {
    return (
        <div className="container">
            <div className="web-site-reason margin_bottom_240">
                <div className="web-site-reason__title title_62">Why website design is needed?</div>
                <div className="web-site-reason__info font_18">
                    <ul>
                        <li className="font_18">This shows status. Information about services, products attracts potential customers.</li>
                        <li className="font_18">This means online presence in the desired market segment using online tools.</li>
                        <li className="font_18">This gives high image. Maintaining easily recognizable image of reputable company.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

WebSiteDesignReason.propTypes = {
  siteTitle: PropTypes.string,
}

WebSiteDesignReason.defaultProps = {
  siteTitle: ``,
}

export default WebSiteDesignReason
