import React, { useRef } from "react"
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
import ContactForm from "./contactForm/ContactForm"

const Modal = ({ onClickClose, showThankForm }) => {
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
      <div className="modal" onClick={clickOut} ref={refOutside}>
        <div className="modal__content" ref={refInside}>
          <div className="form">
            <div className="form__block">
              <h2 className="form_block_title title_62">Get in touch</h2>
              <div className="form_block_text">
                <p>Write to us, Yuri, Kanu or Vlada will contact you</p>
                <div className="form_block_gif">
                  <img src={gifUriy} alt="Uriy" />
                  <img src={gifKanu} alt="Kanu" />
                  <img src={gifVlada} alt="Vlada" />
                </div>
              </div>
              <div className="form_block_wrapper">
                <ContactForm submitCallback={showThankForm} />
              </div>
            </div>

            <div
              className="form__block"
              onClick={onClickClose}
              style={{ cursor: "pointer" }}
            >
              <div className="form_block_modal_button"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

Modal.propTypes = {
  siteTitle: PropTypes.string,
}

Modal.defaultProps = {
  siteTitle: ``,
}

export default Modal
