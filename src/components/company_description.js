import * as React from "react"
import PropTypes from "prop-types"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import imgLaptop_2 from "../images/laptop_2.svg"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const CompanyDescription = ({ siteTitle }) => (
  <div className="container">
    <div className="company_description margin_bottom_240">
      <div>
        <div className="company_description__title title_62">
          «BPM CLOUD» leading digital marketing agency
        </div>
        <div className="company_description__info">
          <ul>
            <li className="font_18">
              Stable «BPM CLOUD» digital marketing agency team doesn’t give
              empty promises, always strives to do what is assumed and is
              responsible for the work fruits.
            </li>
            <li className="font_18">
              We do not do useless and scattered work, but we get guaranteed
              results.
            </li>
            <li className="font_18">
              «BPM CLOUD» continually develops current skills and knowledge.
            </li>
            <li className="font_18">
              Priority for our online marketing agency is transparent and
              mutually beneficial cooperation with each partner, client, and
              team.
            </li>
            <li className="font_18">
              «BPM CLOUD» operates in open and transparent manner, without
              failing promises or negligence.
            </li>
            <li className="font_18">
              Each team member takes proactive attitude towards clients. Each
              specialist continually offers the latest opportunities to grow
              your business.
            </li>
          </ul>
        </div>
      </div>
      <div className="company_description__pic">
        <img src={ imgLaptop_2 } alt="the laptop" />
      </div>
    </div>
  </div>
)

CompanyDescription.propTypes = {
  siteTitle: PropTypes.string,
}

CompanyDescription.defaultProps = {
  siteTitle: ``,
}

export default CompanyDescription
