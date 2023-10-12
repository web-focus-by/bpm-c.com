import * as React from "react"
import PropTypes from "prop-types"
import ContactForm from "./contactForm/ContactForm"

import Uriy from "../images/uriy.mp4"
import Kanu from "../images/kanu.mp4"
import Vlada from "../images/vlada.mp4"

import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"

const Form = ({ showThankForm }) => {
  return (
    <div className="containerForm">
      <div className="form margin_bottom_240">
        <div className="form__block">
          <h2 className="form_block_title title_62">Want to talk about your project?</h2>
          <div className="form_block_info">
            Please, do not hesitate to share any of your ideas or demands with us.
          </div>
          <div className="form_block_text">
            <div className="text_info">
              <p>Fill out the form</p>
              <p>Yuri, Kanu or Vlada will get back to you soon</p>
            </div>
            <div className="form_block_gif" itemtype="https://schema.org/ImageObject" itemscope>
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
        </div>
        <div className="form__block">
          <div className="form_block_wrapper">
            <ContactForm submitCallback={showThankForm} />
          </div>
        </div>
      </div>
    </div>
  )
}

Form.propTypes = {
  siteTitle: PropTypes.string,
}

Form.defaultProps = {
  siteTitle: ``,
}

export default Form
