import * as React from "react"
import PropTypes from "prop-types"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"
import Uriy from "../images/uriy.mp4"
import Kanu from "../images/kanu.mp4"
import Vlada from "../images/vlada.mp4"
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
          <h2 className="form_block_title title_62">
            Thank you for the request!{" "}
          </h2>
          <div className="form_block_text">
            <p>Write to us, Yuri, Kanu or Vlada will contact you</p>
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
