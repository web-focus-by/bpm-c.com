import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { gql, useMutation } from "@apollo/client"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import gifUriy from "../images/uriy.gif"
import gifKanu from "../images/kanu.gif"
import gifVlada from "../images/vlada.gif"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const CONTACT_MUTATION = gql`
  mutation CreateSubmissionMutation(
    $name: String!
    $telephone: String!
    $email: String!
  ) {
    createSubmission(
      input: { name: $name, telephone: $telephone, email: $email }
    ) {
      success
      data
    }
  }
`

const Form = ({ siteTitle, showThankForm }) => {
  const [createSubmission, { loading, error, data }] =
    useMutation(CONTACT_MUTATION)
  const [nameValue, setNameValue] = useState("")
  const [telephoneValue, setTelephoneValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const isNonEmpty = e => {
    if (e.target.value.length === 0) {
      document.getElementById(e.target.id).classList.add("input_invalid")
    } else {
      document.getElementById(e.target.id).classList.remove("input_invalid")
    }
  }

  if (loading) return "Submitting..."
  if (error) return `Submission error! ${error.message}`

  return (
    <div className="containerForm">
      <div className="form margin_bottom_240">
        <div className="form__block">
          <div className="form_block_title title_62">Get in touch</div>
          <div className="form_block_info">
            Is there any point in delaying starting our cooperation, if leading
            experts are already with our digital marketing agency? Let’s get
            acquainted and jointly go towards necessary goals in goods and
            services digital promotion. The first step is so easy!
          </div>
          <div className="form_block_text">
            <p>Write to us, Yuri, Kanu or Vlada will contact you</p>
            <div className="form_block_gif">
              <img src={gifUriy} alt="Uriy" />
              <img src={gifKanu} alt="Kanu" />
              <img src={gifVlada} alt="Vlada" />
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
            <form
              id="search-form"
              onSubmit={e => {
                e.preventDefault()
                createSubmission({
                  variables: {
                    name: nameValue,
                    telephone: telephoneValue,
                    email: emailValue,
                  },
                })
                showThankForm()
              }}
            >
              <div className="form_line-wrapper">
                <input
                  id="name"
                  type="text"
                  value={nameValue}
                  autoComplete="off"
                  name="name"
                  className="form_name input-yellow"
                  onChange={e => {
                    setNameValue(e.target.value)
                  }}
                  onBlur={e => isNonEmpty(e)}
                  required
                />
                <label>Name*</label>
              </div>

              <div className="form_line-wrapper">
                <input
                  value={telephoneValue}
                  type="text"
                  id="tel"
                  autoComplete="off"
                  name="telephone"
                  className="form-phone input-phone form_phone input-yellow"
                  onChange={e => {
                    setTelephoneValue(e.target.value)
                  }}
                  onBlur={e => isNonEmpty(e)}
                  required
                />
                <label>Phone*</label>
              </div>

              <div className="form_line-wrapper">
                <input
                  value={emailValue}
                  type="text"
                  id="mail"
                  autoComplete="off"
                  name="email"
                  className="form-mail input-mail form_mail input-yellow"
                  onChange={e => {
                    setEmailValue(e.target.value)
                  }}
                  onBlur={e => isNonEmpty(e)}
                  required
                />
                <label>E-mail</label>
              </div>

              <div className="form_block_send">
                <div>
                  <button className="button_black" type="submit">
                    Send<span className="arrow_white"></span>
                  </button>
                </div>
                <p>
                  By pressing the button, I agree for the processing of personal
                  data
                </p>
              </div>
            </form>
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
