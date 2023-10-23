import * as React from "react"
import { useRef } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"
import Uriy from "../images/uriy.mp4"
import Kanu from "../images/kanu.mp4"
import Vlada from "../images/vlada.mp4"

const ThanksModal = ({ onClickClose, backPageModal }) => {
  const refOutside = useRef()
  const refInside = useRef()
  const clickOut = e => {
    if (
      refOutside &&
      refInside &&
      refOutside.current &&
      refInside.current &&
      refOutside.current.contains(e.target) &&
      !refInside.current.contains(e.target)
    ) {
      onClickClose()
    }
  }

  return (
    <React.Fragment>
      <div className="modal thanks_modal" onClick={clickOut} ref={refOutside}>
        <div className="modal__content thanks_modal_content" ref={refInside}>
          <div className="form">
            <div className="form__block">
              <h2 className="form_block_title title_62">
                Thank you for your trust!
              </h2>
              <div className="form_block_text">
                <div className="text_info">
                  <p>We'll get back to you shortly</p>
                </div>
                <div className="form_block_gif" itemtype="https://schema.org/ImageObject" itemscope="">
                  <div className="circle-video">
                    <video src={Uriy} type="video/mp4" id="circle" autoPlay muted loop>
                    </video>
                  </div>
                  <div className="circle-video">
                    <video src={Kanu} type="video/mp4" id="circle" autoPlay muted loop>
                    </video>
                  </div>
                  <div className="circle-video">
                    <video src={Vlada} type="video/mp4" id="circle" autoPlay muted loop>
                    </video>
                  </div>
                </div>
              </div>
              <div className="form_block_wrapper">
                <form id="search-form" action="#" method="POST">
                  <div className="form_block_send">
                    <p>In the meantime, you can take a look at our <Link to="/portfolio/">portfolio</Link> or browse through our latest <Link to="/blog/">blog post</Link></p>
                    <div>
                      <button className="button_black" type="submit">
                        Send<span className="arrow_white"></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="form__block">
              <div
                className="form_block_modal_button"
                onClick={onClickClose}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

ThanksModal.propTypes = {
  siteTitle: PropTypes.string,
}

ThanksModal.defaultProps = {
  siteTitle: ``,
}

export default ThanksModal
