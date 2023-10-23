import * as React from "react"
import PropTypes from "prop-types"
import Modal from "../modal"
import ThanksModal from "../thanks_modal"
import { useState, useRef } from "react"

import "../../components/styles/main.scss"
import "../../components/styles/icons.scss"
import "../../components/styles/modules.scss"
import "../../components/styles/mixins.scss"
import Uriy from "../../images/uriy.mp4"
import Kanu from "../../images/kanu.mp4"
import Vlada from "../../images/vlada.mp4"
import "../../components/styles/media_1920.scss"
import "../../components/styles/media_1366.scss"
import "../../components/styles/media_1024.scss"
import "../../components/styles/media_768.scss"
import "../../components/styles/media_375.scss"

const WorkTogether = ({}) => {
  const [isShowThankModal, setIsShowThankModal] = useState(false)
  const [isShowModal, setIsShowModal] = useState(true)
  const [isOpen, setModalActive] = useState(false)
  const toggleModalActive = () => {
    setModalActive(!isOpen)
  }

  const showThankFormModal = () => {
    setIsShowModal(false)
    setIsShowThankModal(true)
  }

  const backPageModal = () => {
    setIsShowModal(true)
    setIsShowThankModal(false)
    setModalActive(true)
  }

  return (
    <div className="container">
      <div className="leaders">
        <div className="leaders_choice_tagline">
          <div className="leaders_choice_tagline__block">
            <h2 className="leaders_choice_tagline_block_title">
              Let’s Work Together
            </h2>
            <div className="leaders_choice_tagline_block_gif" itemtype="https://schema.org/ImageObject" itemscope="">
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
          <div className="leaders_choice_tagline__butn">
            <button className="button_white" onClick={(e) => toggleModalActive()}>
              Get in touch<span className="arrow_black"></span>
            </button>
            {isOpen && isShowModal ? (
            <Modal
              onClickClose={toggleModalActive}
              showThankForm={showThankFormModal}
            ></Modal>
            ) : null}
            {isShowThankModal ? (
              <ThanksModal
                onClickClose={toggleModalActive}
                backPageModal={backPageModal}
              ></ThanksModal>
            ) : null}
          </div>
          <div className="footer_circle_yellow"></div>
          <div className="footer_circle_pink"></div>
          <div className="footer_circle_purple"></div>
        </div>
      </div>
    </div>
  )
}

WorkTogether.propTypes = {
  siteTitle: PropTypes.string,
}

WorkTogether.defaultProps = {
  siteTitle: ``,
}

export default WorkTogether
