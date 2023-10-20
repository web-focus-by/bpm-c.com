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
const ContactForm = props => {
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
          <label className={`${errors.name ? "label_invalid" : ""}`}>Name</label>
          {errors.name && (
            <span className={"error_message"}>{errors.name?.message}</span>
          )}
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
          <label className={`${errors.email ? "label_invalid" : ""}`}>E-mail</label>
          {errors.email && (
            <span className={"error_message"}>{errors.email?.message}</span>
          )}
        </div>
      </div>

      <div className="form_line-double">
        <div className="form_line-wrapper">
          <InputMask
            {...register("telephone", {
              required: "Please, type correct phone",
            })}
            className={`form-phone input-phone form_phone input-yellow ${
              errors.telephone ? "input_invalid" : ""
            }`}
            id="tel"
            mask="+\ 999999999999"
            maskChar=" "
            data-empty={!!isEmpty.telephone}
          />
          <label className={`${errors.telephone ? "label_invalid" : ""}`}>Phone</label>
          {errors.telephone && (
            <span className={"error_message"}>{errors.telephone?.message}</span>
          )}
        </div>

        <div className="form_line-wrapper">
          <input
            {...register("company", {
              required: "Please, complete this field",
            })}
            id="company"
            type="text"
            name="company"
            maxLength="50"
            className={`form_company input-yellow  ${
              errors.company ? "input_invalid" : ""
            }`}
            data-empty={!!isEmpty.company}
          />
          <label className={`${errors.company ? "label_invalid" : ""}`}>Company</label>
          {errors.company && (
            <span className={"error_message"}>{errors.company?.message}</span>
          )}
        </div>
      </div>

      <div className="form_line-wrapper--one">
        <input
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
        <label className={`${errors.message ? "label_invalid" : ""}`}>Message</label>
          {errors.message && (
            <span className={"error_message"}>{errors.message?.message}</span>
          )}
      </div>

      <div className="form_block_send">
          <input type="checkbox" id="agree" name="agree" value="yes" required/>
          <label htmlFor="agree">I agree to the<span>&nbsp;</span><Link to="/">Privacy Policy</Link><span>&nbsp;</span>and<span>&nbsp;</span><Link to="/">Terms of Use</Link></label>
          <div>
            <button className="button_black" type="submit">
              Send<span className="arrow_white"></span>
            </button>
          </div>
        </div>
    </form>
  )
}
ContactForm.defaultProps = {
  submitCallback: () => {},
}

ContactForm.propTypes = {
  submitCallback: PropTypes.func,
}

export default ContactForm
