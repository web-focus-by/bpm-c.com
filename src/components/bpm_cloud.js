import * as React from "react"
import PropTypes from "prop-types"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

const BPMCloud = ({ siteTitle }) => (
  <div className="container">
    <div className="bpm_cloud margin_bottom_240">
      <h2 className="bpm_cloud__title title_62">BPM CLOUD</h2>
      <div className="bpm_cloud__info">
        <div className="bpm_cloud_block">
          <h3 className="bpm_cloud_block_title">
            Comprehensive approach to internet marketing
          </h3>
          <div className="bpm_cloud_block_text">
            Our online marketing agency has comprehensive approach to Internet
            marketing, so representatives of service sector, trade,
            construction, real estate managers and large players in other
            business areas trust exactly to «BPM CLOUD». We use the latest
            company products for our clients only. With our agency, you will get
            the most out of online advertising and online promotion.
          </div>
        </div>
        <div className="bpm_cloud_block">
          <h3 className="bpm_cloud_block_title">
            Dynamically developing digital marketing firm
          </h3>
          <div className="bpm_cloud_block_text">
            Digital space is very multifaceted. We have provided impressive
            number of vectors for making efforts. With advancement of
            technology, «BPM CLOUD» has improved turnkey experience for you,
            rather than a disparate activity set. Our web marketing company
            works with all existing effective worldwide network promotion
            channels. We have access to secrets of the most effective
            combinations of steps, tools, techniques so that you attract desired
            category customers at a mutually beneficial price. «BPM CLOUD» never
            stops, but is always in innovative tools search in order to take our
            partners’ business to the top.
          </div>
        </div>
      </div>
    </div>
  </div>
)

BPMCloud.propTypes = {
  siteTitle: PropTypes.string,
}

BPMCloud.defaultProps = {
  siteTitle: ``,
}

export default BPMCloud
