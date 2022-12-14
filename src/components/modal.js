import * as React from "react"
import { useRef, useState } from "react"
import PropTypes from "prop-types"
import { gql, useMutation } from "@apollo/client"
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
import gifVlada from "../images/vlada.gif"

const CONTACT_MUTATION = gql`
  mutation CreateSubmissionMutation(
    $name: String!
    $telephone: String!
    $email: String!
  ) {
    createSubmission(
      input: {
        name: $name
        telephone: $telephone
        email: $email
      }
    ) {
      success
      data
    }
  }`

const Modal = ({onClickClose, showThankForm}) => {
  const [createSubmission, { loading, error, data }] = useMutation(CONTACT_MUTATION);
  const [nameValue, setNameValue] = useState('');
  const [telephoneValue, setTelephoneValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const refOutside = useRef();
  const refInside = useRef();
  const clickOut = (e) => {
    if (refOutside && refInside && refOutside.current && refInside.current
      && refOutside.current.contains(e.target)
      && !refInside.current.contains(e.target)) {
          onClickClose()
        }
  }
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  return(
    <React.Fragment>
    <div className="modal" onClick={ clickOut } ref={ refOutside }>
      <div className="modal__content" ref={ refInside }>
        <div className="form">
          <div className="form__block">
            <div className="form_block_title title_62">Get in touch</div>
            <div className="form_block_text">
              <p>Write to us, Yuri, Kanu or Vlada will contact you</p>
              <div className="form_block_gif">
                <img src={ gifUriy } alt="Uriy"/>
                <img src={ gifKanu } alt="Kanu"/>
                <img src={ gifVlada } alt="Vlada"/>
              </div>
            </div>
            <div className="form_block_wrapper">
              <form id="search-form"
              onSubmit={ e => {
                e.preventDefault();
                  createSubmission({
                    variables: {
                      name: nameValue,
                      telephone: telephoneValue,
                      email: emailValue
                    }
                  });
                  showThankForm();
                }
              }>
                <div className="form_line-wrapper">
                  <input
                    id="name"
                    value = { nameValue }
                    type="text"
                    autoComplete="off"
                    name="user_name"
                    className="form_name input-yellow "
                    onChange={ e => {
                      setNameValue(e.target.value)
                    }}
                    required />
                  <label>Name*</label>
                </div>
                <div className="form_line-wrapper">
                  <input
                    type="text"
                    value = { telephoneValue }
                    id="tel"
                    autoComplete="off"
                    name="telephoneValue"
                    className="form-phone input-phone form_phone input-yellow"
                    onChange={ e => {
                      setTelephoneValue(e.target.value)
                    }}
                    required />
                  <label>Phone*</label>
                </div>
                <div className="form_line-wrapper">
                  <input
                    value = { emailValue }
                    type="text"
                    id="mail"
                    autoComplete="off"
                    name="email"
                    className="form-mail input-mail form_mail input-yellow"
                    onChange={ e => {
                      setEmailValue(e.target.value)
                    }}
                    required />
                  <label>E-mail</label>
                </div>
                <div className="form_block_send">
                  <div>
                    <button className="button_black" type="submit">
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
            <div className="form_block_modal_button" onClick={ onClickClose }></div>
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
