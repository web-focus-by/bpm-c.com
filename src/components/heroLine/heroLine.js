import * as React from "react"
import PropTypes from "prop-types"
import Marqure from "react-fast-marquee"

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

const HeroLine = ({}) => {

  return (
    <div className="line_wrapper">
        <marquee class="line" scrolldelay="50" truespeed behavior="scroll"  direction="left" loop="-1" hspace="0">
            <div className="line_inner">
                <p>BPM CLOUD</p>
                <p>BPM CLOUD</p>
                <div className="clapp">
                    <span className="clapp-icon"></span>
                </div>
                <p>BPM CLOUD</p>
                <p>BPM CLOUD</p>
                <div className="power">
                    <span className="power-icon"></span>
                </div>

            </div>
        </marquee>
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
