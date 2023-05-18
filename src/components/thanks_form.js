import * as React from "react"
import PropTypes from "prop-types"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"
import gifUriy from "../images/uriy.gif"
import gifKanu from "../images/kanu.gif"
import gifVlada from "../images/vlada.gif"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

const ThanksForm = ({ backPage }) => {
  return (
    <div className="container thanks_form_container">
      <div className="form thanks_form margin_bottom_240">
        <div className="form__block thanks_form_block">
          <div className="form_block_title title_62">
            Thank you for the request!{" "}
          </div>
          <div className="form_block_text">
            <p>Write to us, Yuri, Kanu or Vlada will contact you</p>
            <div className="form_block_gif">
              <img src={gifUriy} alt="Uriy" />
              <img src={gifKanu} alt="Kanu" />
              <img src={gifVlada} alt="Vlada" />
            </div>
          </div>
          <div className="form_block_wrapper">
            <form id="search-form">
              <div className="form_block_send">
                <button className="button_black" onClick={backPage}>
                  Fill in again
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

ThanksForm.propTypes = {
  siteTitle: PropTypes.string,
}

ThanksForm.defaultProps = {
  siteTitle: ``,
}

export default ThanksForm
