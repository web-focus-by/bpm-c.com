import * as React from "react"
import PropTypes from "prop-types"
import "../../components/styles/main.scss"
import "../../components/styles/icons.scss"
import "../../components/styles/modules.scss"
import "../../components/styles/mixins.scss"
import gifUriy from "../../images/uriy.gif"
import gifKanu from "../../images/kanu.gif"
import gifVlada from "../../images/vlada.gif"
import "../../components/styles/media_1920.scss"
import "../../components/styles/media_1366.scss"
import "../../components/styles/media_1024.scss"
import "../../components/styles/media_768.scss"
import "../../components/styles/media_375.scss"

const LeadersChoiceForPortfolios = () => {
  return (
    <div className="container">
      <div className="leaders">
        <div className="leaders_choice_tagline">
          <div className="leaders_choice_tagline__block">
            <h2 className="leaders_choice_tagline_block_title">
              Let’s work together
            </h2>
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

LeadersChoiceForPortfolios.propTypes = {
  siteTitle: PropTypes.string,
}

LeadersChoiceForPortfolios.defaultProps = {
  siteTitle: ``,
}

export default LeadersChoiceForPortfolios
