import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"

const BPMCloud = ({ siteTitle }) => (
  <div className="container">
    <div className="bpm_cloud margin_bottom_240">
      <div className="bpm_cloud__title title_62">Process of projects</div>
      <div className="bpm_cloud__subtitle">We divide development into stages according to the end result. We can run them in parallel to help speed up the launch of the product.</div>
      <div className="bpm_cloud__list">
      <div class="bpm_cloud_list_item">
        <p>analytics</p><span className="puzzle"></span>
            <div class="bpm_cloud_list_item">
            <p>graphics</p><span className="pen"></span>
                <div class="bpm_cloud_list_item">
                <p>design</p><span className="dye"></span>
                    <div class="bpm_cloud_list_item">
                    <p>front-end</p><span className="front"></span>
                        <div class="bpm_cloud_list_item">
                        <p>back-end</p><span className="back "></span>
                            <div class="bpm_cloud_list_item">
                            <p>testing</p><span className="testing"></span>
                                <div class="bpm_cloud_list_item"><p>launch</p><span className="star"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
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
