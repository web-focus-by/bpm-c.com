import * as React from "react"
import { useState } from "react"
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

  const addItem = item => {
    if (interestedItems.indexOf(item) === -1) {
      setInterestedItems([...interestedItems, item])
    }
    return interestedItems
  }

  const clear = () => {
    setInterestedItems([""])
  }

  return (
    <>
      <Layout>
        <Seo title="Contacts" />
        <div className="container">
          <div class="breacrumbs-list" itemscope="" itemtype="http://schema.org/BreadcrumbList">
            <Breadcrumbs breadcrumbs={location} title="Contacts" />
          </div>
          <div className="hero">
            <h1 className="hero__title title_62">
              Contacts<span className="phone_icon"></span>
            </h1>
            <p className="hero__description">Feel free to get in touch with us by filling out our contact form. Your insights and details will enable us to understand your needs accurately and provide you with the best assistance possible. We look forward to assisting you at the earliest convenience.</p>
          </div>
          <div className="header_circle_yellow"></div>
          <div className="header_circle_pink"></div>
          <div className="header_circle_purple"></div>
        </div>
        <div className="container">
          <div className="contacts margin_bottom_60">
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
                  <div className="contact_form_block_buttons_title">
                    Services interested in:{" "}
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
                      onClick={() => {
                        addItem("development")
                      }}
                      className="button_item_tag"
                    >
                      + Development
                    </button>
                    <button
                      id="design"
                      key="design"
                      onClick={() => {
                        addItem("design")
                      }}
                      className="button_item_tag"
                    >
                      + Design
                    </button>
                    <button
                      id="seo"
                      key="seo"
                      onClick={() => {
                        addItem("seo")
                      }}
                      className="button_item_tag"
                    >
                      + SEO
                    </button>
                    <button
                      id="ppc"
                      key="ppc"
                      onClick={() => {
                        addItem("ppc")
                      }}
                      className="button_item_tag"
                    >
                      + PPC
                    </button>
                    <button
                      id="copywriting"
                      key="copywriting"
                      onClick={() => {
                        addItem("copywriting")
                      }}
                      className="button_item_tag"
                    >
                      + Copywriting
                    </button>
                    {interestedItems && interestedItems.length > 1 ? (
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
                    )}
                  </div>
                  <div className="contact_form_block_wrapper">
                    <form
                      id="search-contact_form"
                      onSubmit={e => {
                        e.preventDefault()
                        createSubmission({
                          variables: {
                            company: companyValue,
                            name: nameValue,
                            telephone: telephoneValue,
                            email: emailValue,
                            message: messageValue,
                          },
                        })
                        clear()
                      }}
                    >
                      <div className="contact_form_line-wrapper">
                        <input
                          id="company"
                          value={companyValue}
                          type="text"
                          autoComplete="off"
                          name="company"
                          className="contact_form_company input-yellow "
                          maxlength="100"
                          onChange={e => {
                            setCompanyValue(e.target.value)
                          }}
                        />
                        <label>Company</label>
                      </div>

                      <div className="contact_form_line-wrapper">
                        <input
                          id="name"
                          value={nameValue}
                          type="text"
                          autoComplete="off"
                          name="name"
                          className="contact_form_name input-yellow "
                          maxlength="50"
                          onChange={e => {
                            setNameValue(e.target.value)
                          }}
                          required
                        />
                        <label>Name*</label>
                      </div>

                      <div className="contact_form_line-wrapper">
                        <InputMask
                          value={telephoneValue}
                          type="text"
                          id="tel"
                          autoComplete="off"
                          name="telephone"
                          className="contact_form-phone input-phone contact_form_phone input-yellow"
                          maxlength="13"
                          mask="+"
                          maskChar=" "
                          onChange={e => {
                            setTelephoneValue(e.target.value)
                          }}
                          required
                        />
                        <label>Phone*</label>
                      </div>

                      <div className="contact_form_line-wrapper">
                        <input
                          value={emailValue}
                          type="text"
                          id="mail"
                          autoComplete="off"
                          name="email"
                          className="contact_form-mail input-mail contact_form_mail input-yellow"
                          onChange={e => {
                            setEmailValue(e.target.value)
                          }}
                          required
                        />
                        <label>E-mail*</label>
                      </div>

                      <div className="contact_form_line-wrapper">
                        <input
                          value={messageValue}
                          type="text"
                          id="message"
                          autoComplete="off"
                          name="message"
                          maxlength="256"
                          className="contact_form-message input-message contact_form_message input-yellow"
                          onChange={e => {
                            setMessageValue(e.target.value)
                          }}
                        />
                        <label>Message</label>
                      </div>
                      <div className="contact_form_block_send">
                        <div>
                          <button className="button_white" type="submit">
                            Send<span className="arrow_black"></span>
                          </button>
                        </div>
                        <input type="checkbox" id="agree" name="agree" value="yes"/>
                        <label htmlFor="agree">I agree to the Privacy Policy and Terms of Service</label>
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
