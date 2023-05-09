import * as React from "react"
import PropTypes from "prop-types"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import gifUriy from "../images/uriy.gif"
import gifKanu from "../images/kanu.gif"
import gifVlada from "../images/vlada.gif"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const LeadersChoice = ({ siteTitle }) => {
  return (
    <div className="container">
      <div className="leaders">
        <div className="leaders_choice">
          <div className="leaders_choice__title title_62">
            «BPM CLOUD» is chosen by leaders
          </div>
          <div className="leaders_choice__block font_18">
            Why do partners choose us?
          </div>
          <div className="leaders_choice__block">
            <div className="leaders_choice_block_list">
              <ul>
                <li className="font_18">
                  We are extremely interested in our partners’ business growth.
                </li>
                <li className="font_18">
                  Leaders with many years of experience.
                </li>
                <li className="font_18">
                  Team of web studio specialists is highly certified. Many of us
                  started working abroad.
                </li>
              </ul>
            </div>
            <div className="leaders_choice_block_list">
              <ul>
                <li className="font_18">
                  We achieve results and, like clockwork, achieve our goals.
                </li>
                <li className="font_18">
                  Managers keep in touch with clients at any moment.
                </li>
                <li className="font_18">Full circle digital agency.</li>
                <li className="font_18">
                  Reconciled and balanced pricing policy.
                </li>
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
              <img src={gifUriy} alt="Uriy" />
              <img src={gifKanu} alt="Kanu" />
              <img src={gifVlada} alt="Vlada" />
            </div>
          </div>
          <div className="leaders_choice_tagline__butn">
            <button className="button_white">
              Get in touch<span className="arrow_black"></span>
            </button>
          </div>
          <div className="footer_circle_yellow"></div>
          <div className="footer_circle_pink"></div>
          <div className="footer_circle_purple"></div>
        </div>
      </div>
    </div>
  )
}

LeadersChoice.propTypes = {
  siteTitle: PropTypes.string,
}

LeadersChoice.defaultProps = {
  siteTitle: ``,
}

export default LeadersChoice
