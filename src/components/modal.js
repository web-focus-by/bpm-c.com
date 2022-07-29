import * as React from "react"
import { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"
import gifUriy from "../images/uriy.gif"
import gifKanu from "../images/kanu.gif"
import gifVlada from "../images/vlada.png"

const Modal = ({onClickClose}) => {
  const ref = useRef();
  const clickOut = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClickClose();
    }
  }
 
  return(
    <React.Fragment>
    <div className="out_modal_space" onClick={clickOut}></div>
    <div className="modal">
      <div className="modal__content" ref={ref}>
        <div className="form">
          <div className="form__block">
            <div className="form_block_title title_62">Get in touch</div>
            <div className="form_block_text">
              <p>Write to us, Yuri, Kanu or Vlada will contact you</p>
              <div className="form_block_gif">
                <img src={gifUriy} />
                <img src={gifKanu} />
                <img src={gifVlada} />
              </div>
            </div>
            <div className="form_block_wrapper">
              <form id="search-form" action="#" method="POST">
                <div className="form_line-wrapper">
                  <input
                    id="name"
                    type="text"
                    autoComplete="off"
                    name="user_name"
                    className="form_name input-yellow "
                    required />
                  <label>Name*</label>
                </div>
                <div className="form_line-wrapper">
                  <input
                    type="tel"
                    id="tel"
                    autoComplete="off"
                    name="user_phone"
                    className="form-phone input-phone form_phone input-yellow"
                    required />
                  <label>Phone*</label>
                </div>
                <div className="form_line-wrapper">
                  <input
                    type="text"
                    id="mail"
                    autoComplete="off"
                    name="user_mail"
                    className="form-mail input-mail form_mail input-yellow"
                    required />
                  <label>E-mail</label>
                </div>
                <div className="form_block_send">
                  <div>
                    <button className="button_black">
                      Send<span className="arrow_white"></span>
                    </button>
                  </div>
                  <p>
                    By pressing the button, I agree for the processing of
                    personal data
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="form__block">
            <div className="form_block_modal_button" onClick={onClickClose}></div>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
)}

Modal.propTypes = {
  siteTitle: PropTypes.string,
}

Modal.defaultProps = {
  siteTitle: ``,
}

export default Modal
