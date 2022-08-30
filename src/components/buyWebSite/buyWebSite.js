import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../../components/styles/main.css"
import "../../components/styles/icons.css"
import "../../components/styles/modules.css"
import "../../components/styles/mixins.css"
import "../../components/styles/media_1920.css"
import "../../components/styles/media_1366.css"
import "../../components/styles/media_1024.css"
import "../../components/styles/media_768.css"
import "../../components/styles/media_375.css"

const BuyWebSite = ({ siteTitle }) => {
  return (
    <div className="container">
      <div className="bpm_cloud margin_bottom_240">
        <div className="bpm_cloud__title title_62">Buy website designs at «BPM Cloud»</div>
        <div className="bpm_cloud__info">
          <div className="bpm_cloud_block">
            <div className="bpm_cloud_block_text">
              Depending on the needs and goals of your business, «BPM Cloud» web design 
              marketing company offers software of any complexity. It can be either a 
              one-page site or a whole structure of interaction with your customers. 
              Individual web design project will invariably make any site functionality 
              convenient, attractive and fast for your clients.
            </div>
          </div>
          <div className="bpm_cloud_block">
            <div className="bpm_cloud_block_text">
              If you need website design, don’t hesitate. Creation of maximum excitement, 
              maximum information about products in order to attract attention to it helps 
              to gain trust and loyalty of consumers. And for each company the best advertisement 
              is a serious, high-quality, modern website. If your website is already up and 
              running, consider whether it requires updating. Outdated and inconvenient site 
              design repels customers, worsens image, and lowers the sales level.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

BuyWebSite.propTypes = {
  siteTitle: PropTypes.string,
}

BuyWebSite.defaultProps = {
  siteTitle: ``,
}

export default BuyWebSite
