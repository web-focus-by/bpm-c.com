import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import imgLaptop_2 from "../images/laptop_2.svg"

const CompanyDescription = ({ siteTitle }) => (
  <div className="container">
    <div className="company_description margin_bottom_240">
      <div>
        <div className="company_description__title title_62">
          «BPM CLOUD» leading digital marketing agency
        </div>
        <div className="company_description__info">
          <ul>
            <li>
              Stable «BPM CLOUD» digital marketing agency team doesn’t give
              empty promises, always strives to do what is assumed and is
              responsible for the work fruits.
            </li>
            <li>
              We do not do useless and scattered work, but we get guaranteed
              results.
            </li>
            <li>
              «BPM CLOUD» continually develops current skills and knowledge.
            </li>
            <li>
              Priority for our online marketing agency is transparent and
              mutually beneficial cooperation with each partner, client, and
              team.
            </li>
            <li>
              «BPM CLOUD» operates in open and transparent manner, without
              failing promises or negligence.
            </li>
            <li>
              Each team member takes proactive attitude towards clients. Each
              specialist continually offers the latest opportunities to grow
              your business.
            </li>
          </ul>
        </div>
      </div>
      <div className="company_description__pic">
        <img src={imgLaptop_2} />
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
