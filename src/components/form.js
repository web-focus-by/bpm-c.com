import * as React from "react"
import PropTypes from "prop-types"
import ContactForm from "./contactForm/ContactForm"

import gifUriy from "../images/uriy.gif"
import gifKanu from "../images/kanu.gif"
import gifVlada from "../images/vlada.gif"

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
          <h2 className="form_block_title title_62">Get in touch</h2>
          <div className="form_block_info">
            Is there any point in delaying starting our cooperation, if leading
            experts are already with our digital marketing agency? Let’s get
            acquainted and jointly go towards necessary goals in goods and
            services digital promotion. The first step is so easy!
          </div>
          <div className="form_block_text">
            <p>Write to us, Yuri, Kanu or Vlada will contact you</p>
            <div className="form_block_gif" itemtype="https://schema.org/ImageObject" itemscope>
              <img src={gifUriy} alt="Uriy" itemprop="image"/>
              <img src={gifKanu} alt="Kanu" itemprop="image"/>
              <img src={gifVlada} alt="Vlada" itemprop="image"/>
            </div>
          </div>
          <div className="form_block_email">
            <a href="mailto:hello@bpm-c.com" target="_blank">
              info@bpm-c.com
            </a>
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
