import React, { useEffect, useState } from "react"
import { gql, useMutation } from "@apollo/client"
import PropTypes from "prop-types"
import { useForm } from "react-hook-form"
import InputMask from 'react-input-mask'
import { Link } from "gatsby"

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
const ModalForm = props => {
  const [isEmpty, setIsEmpty] = useState({
    name: true,
    email: true,
    telephone: true,
  })
  const [createSubmission, { loading, error }] = useMutation(CONTACT_MUTATION)

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: { name: "", email: "", telephone: "" },
    mode: "onBlur",
  })

  useEffect(() => {
    const subscription = watch((value, { name }) =>
      setIsEmpty(prevState => ({ ...prevState, [name]: value[name] === "" }))
    )
    return () => subscription.unsubscribe()
  }, [watch])

  const submitHandler = data => {
    if (isValid) {
      createSubmission({
        variables: {
          ...data,
        },
      }).then(() => {
        props.submitCallback()
      })
    }
  }

  if (error) return `Submission error! ${error.message}`

  return (
    <form id="search-form" onSubmit={handleSubmit(submitHandler)}>
      <div className="form_line-double">
        <div className="form_line-wrapper">
          <input
            {...register("name", {
              required: "Please, complete this field",
            })}
            id="name"
            type="text"
            name="name"
            maxLength="50"
            className={`form_name input-yellow  ${
              errors.name ? "input_invalid" : ""
            }`}
            data-empty={!!isEmpty.name}
          />
          <label className={`${errors.name ? "label_invalid" : ""}`}>Name*</label>
          <br></br>
          <span className={`error_message ${errors.name ? "show_error" : ""}`}>{errors.name?.message}</span>
          </div>

          <div className="form_line-wrapper">
          <input
            {...register("email", {
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please, type correct email",
              },
              required: "Please, complete this field",
            })}
            type="text"
            id="mail"
            maxLength="100"
            className={`form-mail input-mail form_mail input-yellow ${
              errors.email ? "input_invalid" : ""
            }`}
            data-empty={!!isEmpty.email}
          />
          <label className={`${errors.email ? "label_invalid" : ""}`}>E-mail*</label>
          <br></br>
          <span className={`error_message ${errors.email ? "show_error" : ""}`}>{errors.email?.message}</span>
        </div>
      </div>

      <div className="form_line-double">
        <div className="form_line-wrapper">
          <InputMask
            {...register("telephone")}
            className="form-phone input-phone form_phone input-yellow"
            id="tel"
            mask="+\ 999 (99) 999-99-99"
            maskChar=" "
          />
          <label>Phone</label>
        </div>

        <div className="form_line-wrapper">
          <input
            {...register("company")}
            id="company"
            type="text"
            name="company"
            maxLength="50"
            className="form_company input-yellow"
          />
          <label>Company</label>
        </div>
      </div>

      <div className="form_line-wrapper--one">
        <textarea
          {...register("message", {
              required: "Please, complete this field",
            })}
            id="message"
            type="text"
            name="message"
            maxLength="256"
            className={`form_message input-yellow  ${
              errors.message ? "input_invalid" : ""
            }`}
            data-empty={!!isEmpty.message}
        />
        <label className={`${errors.message ? "label_invalid" : ""}`}>Message*</label>
        <br></br>
        <span className={`error_message ${errors.message ? "show_error" : ""}`}>{errors.message?.message}</span>
      </div>

      <div className="form_block_send">
          <input class="modal" type="checkbox" id="agree-modal" name="agree-modal" value="yes" required/>
          <label htmlFor="agree-modal">I agree to the<span>&nbsp;</span><Link to="/">Privacy Policy</Link><span> &nbsp;</span>and<span>&nbsp;</span><Link to="/">Terms of Use</Link></label>
          <div>
          <button className="button_black" type={ errors.message || errors.company || errors.email || errors.name ? '' : 'submit'}>
  Send<span className="arrow_white"></span>
            </button>
          </div>
        </div>
        <span class="violett"></span>
    </form>
  )
}
ModalForm.defaultProps = {
  submitCallback: () => {},
}

ModalForm.propTypes = {
  submitCallback: PropTypes.func,
}

export default ModalForm
