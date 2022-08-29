import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../../components/styles/main.css"
import "../../components/styles/icons.css"
import "../../components/styles/modules.css"
import "../../components/styles/mixins.css"
import gifUriy from "../../images/uriy.gif"
import gifKanu from "../../images/kanu.gif"
import gifVlada from "../../images/vlada.gif"
import "../../components/styles/media_1920.css"
import "../../components/styles/media_1366.css"
import "../../components/styles/media_1024.css"
import "../../components/styles/media_768.css"
import "../../components/styles/media_375.css"

const SiteDesignByBpmCloud = ({ siteTitle }) => {
  return (
    <div className="container">
      <div className="leaders">    
        <div className="leaders_choice">
          <div className="leaders_choice__title title_62">
            Why site design by «BPM Cloud»?
          </div>
          <div className="leaders_choice__block">
            <div className="leaders_choice_block_list">
              <ul>
                <li className="font_18">
                  Responsive site design works on mobile devices and tablets.
                </li>
                <li className="font_18">
                  Creative website design is out of the box and doesn’t look like competitors.
                </li>
                <li className="font_18">
                  Technical high quality condition.
                </li>
                <li className="font_18">
                  Marketing research of business niche and competitors.
                </li>
                <li className="font_18">
                  Responsible attitude to customers and execution of all works on time.
                </li>
                <li className="font_18">
                  Profitable and individual website design price system.
                </li>
              </ul>
            </div>
            <div className="leaders_choice_block_list font_18">
              Website design price includes web designer and developer services 
              at «BPM Cloud» web design agency. Cost of website design is calculated 
              strictly individually. Ask your colleagues for examples of our successful 
              and selling design developments and see for yourself, 
              getting stunning results with «BPM Cloud».
            </div>
          </div>
        </div>
        <div className="leaders_choice_tagline">
          <div className="leaders_choice_tagline__block">
            <div className="leaders_choice_tagline_block_title">
              Let’s work together
            </div>
            <div className="leaders_choice_tagline_block_gif">
              <img src={ gifUriy } />
              <img src={ gifKanu } />
              <img src={ gifVlada } />
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

  SiteDesignByBpmCloud.propTypes = {
  siteTitle: PropTypes.string,
}

SiteDesignByBpmCloud.defaultProps = {
  siteTitle: ``,
}

export default SiteDesignByBpmCloud
