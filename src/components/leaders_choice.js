import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import gifUriy from "../images/uriy.gif"
import gifKanu from "../images/kanu.gif"
import gifVlada from "../images/vlada.png"

const LeadersChoice = ({ siteTitle }) => (
  <div className="container">
    <div className="leaders_choice">
      <div className="leaders_choice__title title_62">
        «BPM CLOUD» is chosen by leaders
      </div>
      <div className="leaders_choice__block_title">
        Why do Belarus and foreign partners choose us?
      </div>
      <div className="leaders_choice__block">
        <div className="leaders_choice_block_list">
          <ul>
            <li>
              We are extremely interested in our partners’ business growth.
            </li>
            <li>
              Leaders with many years of experience in Belarus and abroad.
            </li>
            <li>
              Team of web studio specialists is highly certified. Many of us
              started working abroad.
            </li>
          </ul>
        </div>
        <div className="leaders_choice_block_list">
          <ul>
            <li>We achieve results and, like clockwork, achieve our goals.</li>
            <li>Managers keep in touch with clients at any moment.</li>
            <li>Full circle digital agency.</li>
            <li>Reconciled and balanced pricing policy.</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="leaders_choice_tagline">
      <div className="leaders_choice_tagline__block">
        <div className="leaders_choice_tagline_block_title">
          Let’s work together
        </div>
        <div className="leaders_choice_tagline_block_gif">
          <img src={gifUriy} />
          <img src={gifKanu} />
          <img src={gifVlada} />
        </div>
      </div>
      <div className="leaders_choice_tagline__butn">
        <button className="button_white">
          Get in touch<span className="arrow_black"></span>
        </button>
      </div>
    </div>
  </div>
)

LeadersChoice.propTypes = {
  siteTitle: PropTypes.string,
}

LeadersChoice.defaultProps = {
  siteTitle: ``,
}

export default LeadersChoice
