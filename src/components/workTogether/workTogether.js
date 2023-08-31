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

const WorkTogether = ({}) => {
  return (
    <div className="container">
      <div className="leaders">
        <div className="leaders_choice_tagline">
          <div className="leaders_choice_tagline__block">
            <h2 className="leaders_choice_tagline_block_title">
              Let’s work together
            </h2>
            <div className="leaders_choice_tagline_block_gif" itemtype="https://schema.org/ImageObject" itemscope="">
              <img src={gifUriy} alt="Uriy" itemprop="image"/>
              <img src={gifKanu} alt="Kanu" itemprop="image"/>
              <img src={gifVlada} alt="Vlada" itemprop="image"/>
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

WorkTogether.propTypes = {
  siteTitle: PropTypes.string,
}

WorkTogether.defaultProps = {
  siteTitle: ``,
}

export default WorkTogether
