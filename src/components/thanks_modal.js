import * as React from "react"
import { useRef } from "react"
import PropTypes from "prop-types"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"
import gifUriy from "../images/uriy.gif"
import gifKanu from "../images/kanu.gif"
import gifVlada from "../images/vlada.gif"

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
              <h1 className="form_block_title title_62">
                Thank you for the request!
              </h1>
              <div className="form_block_text">
                <p>
                  <i>Write to us,</i> Yuri, Kanu or Vlada will contact you{" "}
                  <b>as soon as possible</b>
                </p>
                <div className="form_block_gif" itemscope itemtype="https://schema.org/ImageObject">
                  <img src={gifUriy} alt="Uriy" itemprop="image"/>
                  <img src={gifKanu} alt="Kanu" itemprop="image"/>
                  <img src={gifVlada} alt="Vlada" itemprop="image"/>
                </div>
              </div>
              <div className="form_block_wrapper">
                <form id="search-form" action="#" method="POST">
                  <div className="form_block_send">
                    <button className="button_black" onClick={backPageModal}>
                      Back to page
                    </button>
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
