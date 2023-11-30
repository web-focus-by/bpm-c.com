import * as React from "react"
import PropTypes from "prop-types"

import "./heroLine.scss"
import "../../components/styles/main.scss"
import "../../components/styles/icons.scss"
import "../../components/styles/modules.scss"
import "../../components/styles/mixins.scss"
import "../../components/styles/media_1920.scss"
import "../../components/styles/media_1366.scss"
import "../../components/styles/media_1024.scss"
import "../../components/styles/media_768.scss"
import "../../components/styles/media_375.scss"

const HeroLine = () => {

  return (
    <div className="line_wrapper">
        <div class="items-wrap">
            <div class="items marquee">
                <div class="item change">BPM Cloud</div>
                <div class="item change">BPM Cloud</div>
                <div class="item">
                    <div className="clapp">
                        <span className="clapp-icon"></span>
                    </div>
                </div>
                <div class="item change">BPM Cloud</div>
                <div class="item change">BPM Cloud</div>
                <div class="item item_icon">
                    <div className="power">
                        <span className="power-icon"></span>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" class="items marquee">
                <div class="item change">BPM Cloud</div>
                <div class="item change">BPM Cloud</div>
                <div class="item item_icon">
                    <div className="clapp">
                        <span className="clapp-icon"></span>
                    </div>
                </div>
                <div class="item change">BPM Cloud</div>
                <div class="item change">BPM Cloud</div>
                <div class="item">
                    <div className="power">
                        <span className="power-icon"></span>
                    </div>
                </div>
            </div>
        </div>
          <div className="emily">
            <span className="cursor"></span>
            <p className="name">Emily</p>
          </div>
          <div className="joshua">
            <span className="cursor"></span>
            <p className="name">Joshua</p>
          </div>
          <div className="michael">
            <span className="cursor"></span>
            <p className="name">Michael</p>
          </div>
    </div>
  )
}

HeroLine.propTypes = {
  siteTitle: PropTypes.string,
}

HeroLine.defaultProps = {
  siteTitle: ``,
}

export default HeroLine
