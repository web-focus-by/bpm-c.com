import * as React from "react"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import InputMask from 'react-input-mask'
import { Link } from "gatsby"
import { gql, useMutation } from "@apollo/client"
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

const CONTACT_MUTATION = gql`
  mutation CreateSubmissionMutation(
    $company: String!
    $name: String!
    $telephone: String!
    $email: String!
    $message: String!
  ) {
    createSubmission(
      input: { company: $company, name: $name, telephone: $telephone, email: $email, message: $message }
    ) {
      success
      data
    }
  }
`

const Contacts = ({ location }) => {
  const [createSubmission, { loading, error, data }] =
    useMutation(CONTACT_MUTATION)
  const [companyValue, setCompanyValue] = useState("")
  const [nameValue, setNameValue] = useState("")
  const [telephoneValue, setTelephoneValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [messageValue, setMessageValue] = useState("")
  const [interestedItems, setInterestedItems] = useState([""])
  // const [checked, setChecked] = useState(false);
  // const [disabled, setDisabled] = useState(false);
  const [isEmpty, setIsEmpty] = useState({
    name: true,
    email: true,
    telephone: true,
    company: true,
    message: true,
    checkbox: true
  })

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: { company: "", name: "", email: "", message: "", checkbox: "" },
    mode: "onBlur",
  })

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      setIsEmpty(prevState => ({ ...prevState, [name]: value[name] === "" }))
    })
    return () => subscription.unsubscribe()
  }, [watch])
  // const submitHandler = data => {
  //   if (isValid) {
  //     createSubmission({
  //       variables: {
  //         ...data,
  //       },
  //     }).then(() => {
  //       props.submitCallback()
  //     })
  //   }
  // }

  if (error) return `Submission error! ${error.message}`

  const socialMaediaLinks = [
    { link: "https://www.instagram.com/bpm_cloud/", name: "insta" },
    { link: "https://www.facebook.com/bpm.it1", name: "facebook" },
  ]

  const socialMedia = socialMaediaLinks.map((val, index) => {
    return (
      <li key={index.toString()}>
        <Link to={val.link} target="_blank">
          <span className={val.name} itemprop="name"></span>
        </Link>
      </li>
    )
  })

  const addItem = (item) => {
    if (interestedItems.indexOf(item) === -1) {
      setInterestedItems([...interestedItems, item])
    } 
    return interestedItems
  }

  const removeItem = (item) => {
    setInterestedItems([...interestedItems.filter(elem => elem !== item)]);
    return interestedItems
  }

  const toggleActive = (id) => {
    const activeItem = document.getElementById(id);
    const activeSpan = activeItem.querySelector('span');

    if(activeItem.classList.contains('active')) {
      activeItem.classList.remove('active');
    } else {
      activeItem.classList.add('active');
    }

    if(activeSpan.classList.contains('active')) {
      activeSpan.classList.remove('active');
    } else {
      activeSpan.classList.add('active');
    }
  }

  const style = {
    position: 'relative',
    top: -95,
  }

  return (
    <>
      <Layout>
        <Seo title="Contact Us for Web and Mobile Development " description="Reach out to BPM Cloud for a consultation on your web or mobile application concept. Your ideas will be carefully reviewed by our experts. Simply complete the form, and our team will promptly respond to you!"/>
        <div className="container">
          <div className="breacrumbs-list contacts" itemscope="" itemtype="http://schema.org/BreadcrumbList">
            <Breadcrumbs breadcrumbs={location} title="Contact Us" />
          </div>
          <div className="hero">
            <h1 className="hero__title title_80 contact_title">
              Contact&nbsp;Us<span className="phone_icon"></span>
            </h1>
          </div>
          <div className="header_circle_yellow"></div>
          <div className="header_circle_pink"></div>
          <div className="header_circle_purple"></div>
        </div>
        <div className="container">
          <div className="contacts margin_bottom_240">
            <div className="contacts__contact">
              <div className="contacts_table">
                <div className="contacts_label">
                  <ul>
                    <li key="phone">Phone</li>
                    <li key="e-mail">E-mail</li>
                    <li key="socialMedia">Social media</li>
                  </ul>
                </div>
                <div className="contacts_value">
                  <ul>
                    <li key="phoneNumber"><a href="tel:+19295479159">+ 1 929 547 9159 USA</a><a href="tel:+16474939093">+ 1 647 493 9093 Canada</a></li>
                    <li key="mail"><a href="mailto:hello@bpmcloud.com">hello@bpmcloud.com</a></li>
                    <li key="socialMediaLinks">{socialMedia}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contacts__contacts_form">
              <div className="contact_form">
                <div className="contact_form__block">
                  <div className="contact_form_block_wrapper">
                    <form>
                      {/* // id="search-contact_form" action="https://getform.io/f/8b83345e-926d-46a9-b977-4ea1b3c45ae1" method="POST" onSubmit={null} */}
                      <div className="contact_form_line-double">
                        <div className="contact_form_line-wrapper">
                          <input
                            {...register("name", {
                              required: "Please, complete this field",
                            })}
                            id="name"
                            type="text"
                            name="name"
                            maxLength="50"
                            className={`contact_form_name input-yellow  ${
                              errors.name ? "input_invalid" : ""
                            }`}
                            data-empty={!!isEmpty.name}
                          />
                          <label className={`${errors.name ? "label_invalid" : ""}`}>Name</label>
                          {errors.name && (
                            <span className={"error_message"}>{errors.name?.message}</span>
                          )}
                          </div>

                          <div className="contact_form_line-wrapper">
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
                            className={`contact_form-mail input-mail contact_form_mail input-yellow ${
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

                      <div className="contact_form_line-double">
                        <div className="contact_form_line-wrapper">
                          <InputMask
                            {...register("telephone", {
                              required: "Please, type correct phone",
                            })}
                            className={`contact_form-phone input-phone contact_form_phone input-yellow ${
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

                        <div className="contact_form_line-wrapper">
                          <input
                            {...register("company", {
                              required: "Please, complete this field",
                            })}
                            id="company"
                            type="text"
                            name="company"
                            maxLength="50"
                            className={`contact_form_company input-yellow  ${
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

                      <div className="contact_form_line-wrapper--one">
                        <input
                          {...register("message", {
                              required: "Please, complete this field",
                            })}
                            id="message"
                            type="text"
                            name="message"
                            maxLength="256"
                            className={`contact_form_message input-yellow  ${
                              errors.message ? "input_invalid" : ""
                            }`}
                            data-empty={!!isEmpty.message}
                        />
                        <label className={`${errors.message ? "label_invalid" : ""}`}>Message</label>
                          {errors.message && (
                            <span className={"error_message"}>{errors.message?.message}</span>
                          )}
                      </div>

                  <div className="contact_form_block_buttons_title">
                    Services you are interested in:{" "}
                    <span style={{ fontWeight: "bold" }} itemprop="name">
                      {interestedItems && interestedItems.length > 0
                        ? interestedItems.slice(1).join(", ")
                        : ""}
                    </span>
                  </div>
                  <div className="contact_form_block_buttons">
                    <button
                      id="development"
                      key="development"
                      onClick={(e) => {
                        e.preventDefault();
                        addItem("development");
                        toggleActive("development",);
                      }}
                      onDoubleClick={(e) => {
                        e.preventDefault();
                        removeItem("development")
                      }}
                      className="button_item_tag"
                    >
                      <span className="plus"></span>Development
                    </button>
                    <button
                      id="design"
                      key="design"
                      onClick={(e) => {
                        e.preventDefault();
                        addItem("design");
                        toggleActive("design",);
                      }}
                      onDoubleClick={(e) => {
                        e.preventDefault();
                        removeItem("design")
                      }}
                      className="button_item_tag"
                    >
                      <span className="plus"></span>Design
                    </button>
                    <button
                      id="seo"
                      key="seo"
                      onClick={(e) => {
                        e.preventDefault();
                        addItem("seo");
                        toggleActive("seo",);
                      }}
                      onDoubleClick={(e) => {
                        e.preventDefault();
                        removeItem("seo")
                      }}
                      className="button_item_tag"
                    >
                      <span className="plus"></span>SEO
                    </button>
                    <button
                      id="ppc"
                      key="ppc"
                      onClick={(e) => {
                        e.preventDefault();
                        addItem("ppc");
                        toggleActive("ppc",);
                      }}
                      onDoubleClick={(e) => {
                        e.preventDefault();
                        removeItem("ppc")
                      }}
                      className="button_item_tag"
                    >
                      <span className="plus"></span>PPC
                    </button>
                    <button
                      id="copywriting"
                      key="copywriting"
                      onClick={(e) => {
                        e.preventDefault();
                        addItem("copywriting");
                        toggleActive("copywriting",);
                      }}
                      onDoubleClick={(e) => {
                        e.preventDefault();
                        removeItem("copywriting")
                      }}
                      className="button_item_tag"
                    >
                      <span className="plus"></span>Copywriting
                    </button>
                    {/* {interestedItems && interestedItems.length > 1 ? (
                      <button
                        id="clear"
                        key="clear"
                        onClick={() => {
                          clear()
                        }}
                        className="button_item_tag"
                      >
                        Clear
                      </button>
                    ) : (
                      <button
                        id="clear"
                        key="clear"
                        onClick={() => {
                          clear()
                        }}
                        className="button_item_tag__not_visible"
                      >
                        Clear
                      </button>
                    )} */}
                  </div>
                      <div className="contact_form_block_send">
                        <input {...register("checkbox", {
                              required: "Please, agree to the Terms of Use and the Privacy Policy",
                        })}
                          type="checkbox" id="agree" name="agree" value="yes" data-checked={!!isEmpty.checkbox} className={`${errors.checkbox ? "checkbox_invalid" : ""}`} />
                        <label htmlFor="agree" className={`${errors.checkbox ? "checkbox_invalid" : ""}`}>I agree to the<span>&nbsp;</span><Link to="/">Privacy Policy</Link><span>&nbsp;</span>and<span>&nbsp;</span><Link to="/">Terms of Use</Link></label>
                        {errors.checkbox && (
                            <span className={"error_check"}>{errors.checkbox?.message}</span>
                          )}
                        <button className="button_white" type="submit">
                            Send<span className="arrow_black"></span>
                          </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="margin_bottom_240">
            <iframe
              title="address of office on google map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.544970835492!2d27.596358815992996!3d53.9220613391322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf5d99239d81%3A0x9abeb6f83c6393fb!2z0L_RgC4g0J3QtdC30LDQstC40YHQuNC80L7RgdGC0LggNzcsINCc0LjQvdGB0Lo!5e0!3m2!1sru!2sby!4v1664284593785!5m2!1sru!2sby"
              width="100%"
              height="480"
              style={{ border: 0, borderRadius: 25 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
                        </div> */}
        </div>
      </Layout>
    </>
  )
}

export default Contacts
