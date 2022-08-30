import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../../components/styles/main.css"
import "../../components/styles/icons.css"
import "../../components/styles/modules.css"
import "../../components/styles/mixins.css"
import imgLaptop_2 from "../../images/laptop_2.svg"
import "../../components/styles/media_1920.css"
import "../../components/styles/media_1366.css"
import "../../components/styles/media_1024.css"
import "../../components/styles/media_768.css"
import "../../components/styles/media_375.css"
import "./requiresWebsiteDesign.css"

const RequiresWebsiteDesign = ({ siteTitle }) => {
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
        <div className="requires_design__title title_62">
          Who requires website design creation?
        </div>
        <div className="requires_design__info">
          <ul>
            <li className="font_18">
              A startup company entering the market desperately needs to disseminate 
              information about goods and services to target audience.
            </li>
            <li className="font_18">
              A manufacturing company that introduces products or services to the 
              market, or wishes to talk about existing services.
            </li>
            <li className="font_18">
              A company with history that has existed for a long time in the market 
              understands that in order to develop and increase income in changing 
              environment, you need to keep up with the market.
            </li>
            <li className="font_18">
              Everyone who wants to increase profits and understands that virtual 
              reality is also serious sales market and is growing rapidly.
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

RequiresWebsiteDesign.propTypes = {
  siteTitle: PropTypes.string,
}

RequiresWebsiteDesign.defaultProps = {
  siteTitle: ``,
}

export default RequiresWebsiteDesign
