import React, { useEffect, useState } from "react"
import { gql, useMutation } from "@apollo/client"
import PropTypes from "prop-types"
import { useForm } from "react-hook-form"

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
      <div className="form_line-wrapper">
        <input
          {...register("name", {
            required: "Please enter your name.",
          })}
          id="name"
          type="text"
          autoComplete="off"
          name="name"
          className={`form_name input-yellow ${
            errors.name ? "input_invalid" : ""
          }`}
          data-empty={!!isEmpty.name}
        />
        <label>Name*</label>
        {errors.name && (
          <span className={"error_message"}>{errors.name?.message}</span>
        )}
      </div>

      <div className="form_line-wrapper">
        <input
          {...register("telephone", {
            required: "Please enter your phone number.",
            pattern: {
              value:
                /^(?:\+1)?[ -]?\(?([2-9][0-8][0-9])\)?[ -]?([2-9][0-9]{2})[ -]?([0-9]{4})$/,
              message: "Phone number in not correct",
            },
          })}
          className={`form-phone input-phone form_phone input-yellow ${
            errors.telephone ? "input_invalid" : ""
          }`}
          id="tel"
          autoComplete="off"
          data-empty={!!isEmpty.telephone}
        />
        <label>Phone*</label>
        {errors.telephone && (
          <span className={"error_message"}>{errors.telephone?.message}</span>
        )}
      </div>

      <div className="form_line-wrapper">
        <input
          {...register("email", {
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          type="text"
          id="mail"
          autoComplete="off"
          className={`form-mail input-mail form_mail input-yellow ${
            errors.email ? "input_invalid" : ""
          }`}
          data-empty={!!isEmpty.email}
        />
        <label>E-mail</label>
        {errors.email && (
          <span className={"error_message"}>{errors.email?.message}</span>
        )}
      </div>

      <div className="form_block_send">
        <div>
            <button className="button_white" type="submit">
              Send<span className="arrow_black"></span>
            </button>
          </div>
          <input type="checkbox" id="agree" name="agree" value="yes" required/>
          <label htmlFor="agree">I agree to the Privacy Policy and Terms of Service</label>
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
