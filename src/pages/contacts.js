import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"
import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css"

const Contacts = ({ location }) => {
  const [interestedItems, setInterestedItems] = useState(['']);
  const socialMaediaLinks = [
    { link: "#", name: "insta" },
    { link: "#", name: "facebook" },
    { link: "#", name: "link" },
    { link: "#", name: "behance" }
  ];

  const socialMedia = socialMaediaLinks.map((val, index)=>{
    return (
      <li key={ index.toString() }>
        <Link to={ val.link }>
          <span className={ val.name }></span>
        </Link>
      </li>
    )
  });

  const addItem = (item) => {
    if (interestedItems.indexOf(item) === -1) {
      setInterestedItems([...interestedItems, item]);
    }
    return interestedItems;
  }

  const clear = () => {
    setInterestedItems(['']);
  }

  const submitForm = () => {
    return;
  }

  return (
    <>
      <Layout>
        <Seo title="Contacts" />
        <div className="container">
          <div className="breadcrumb-container">
            <Breadcrumbs breadcrumbs={ location } />
          </div>
          <div className="hero">
            <div className="hero__title title_62">
              Contacts<span className="phone_icon"></span>
            </div>
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
                    <li key="address">Address</li>
                    <li key="socialMedia">Social media</li>
                  </ul>
                </div>
                <div className="contacts_value">
                  <ul>
                    <li key="phoneNumber">+ 375 29 715 05 86</li>
                    <li key="mail">info@bpmcloud.com</li>
                    <li key="addressValue">Independence Avenue, 77, office 53</li>
                    <li key="socialMediaLinks">{ socialMedia }</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="contacts__contacts_form">
              <div className="contact_form">
                <div className="contact_form__block">
                  <div className="contact_form_block_buttons_title">
                  Services interested in: <span style={{fontWeight:'bold'}}>
                    { interestedItems && interestedItems.length > 0 ? interestedItems.slice(1).join(', ') : '' }
                  </span>
                  </div>
                  <div className="contact_form_block_buttons">
                    <button id="development" key="development" onClick={ ()=>{ addItem('development') } } className="button_item_tag">+ Development</button>
                    <button id="design" key="design" onClick={ ()=>{ addItem('design') } } className="button_item_tag">+ Design</button>
                    <button id="seo" key="seo" onClick={ ()=>{ addItem('seo') } } className="button_item_tag">+ SEO</button>
                    <button id="ppc" key="ppc" onClick={ ()=>{ addItem('ppc') } } className="button_item_tag">+ PPC</button>
                    <button id="copywriting" key="copywriting" onClick={ ()=>{ addItem('copywriting') } } className="button_item_tag">+ Copywriting</button>
                    { interestedItems && interestedItems.length > 1 ?
                      (<button id="clear" key="clear" onClick={()=>{ clear() } } className="button_item_tag">Clear</button>) :
                      (<button id="clear" key="clear" onClick={()=>{ clear() } } className="button_item_tag__not_visible">Clear</button>)}
                  </div>
                  <div className="contact_form_block_wrapper">
                    <form id="search-contact_form" action="#" method="POST">
                      <div className="contact_form_line-wrapper">
                        <input
                          id="name"
                          type="text"
                          autoComplete="off"
                          name="user_name"
                          className="contact_form_name input-yellow "
                          required
                        />
                        <label>Name*</label>
                      </div>

                      <div className="contact_form_line-wrapper">
                        <input
                          type="tel"
                          id="tel"
                          autoComplete="off"
                          name="user_phone"
                          className="contact_form-phone input-phone contact_form_phone input-yellow"
                          required
                        />
                        <label>Phone*</label>
                      </div>

                      <div className="contact_form_line-wrapper">
                        <input
                          type="text"
                          id="mail"
                          autoComplete="off"
                          name="user_mail"
                          className="contact_form-mail input-mail contact_form_mail input-yellow"
                          required
                        />
                        <label>E-mail</label>
                      </div>
                      <div className="contact_form_block_send">
                        <div>
                          <button className="button_white" onClick={ submitForm }>
                            Send<span className="arrow_black"></span>
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
          </div>
          <div className="margin_bottom_240">
            <iframe
              title="address of office on google map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.544970835492!2d27.596358815992996!3d53.9220613391322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf5d99239d81%3A0x9abeb6f83c6393fb!2z0L_RgC4g0J3QtdC30LDQstC40YHQuNC80L7RgdGC0LggNzcsINCc0LjQvdGB0Lo!5e0!3m2!1sru!2sby!4v1664284593785!5m2!1sru!2sby"
              width="100%" height="480"
              style={{border:0,borderRadius:25}} allowfullscreen=""
              loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Contacts