import * as React from "react"
import { Link } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Layout from "../components/layout"
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
import Footer from "../components/footer"

const Contacts = ({ location }) => {
  let url = '';
  if (typeof window !== 'undefined') {
    url = new URL(window.location.href);
  } else {
    if (location && location.href) {
      url = new URL(location.href);
    }
  }
  const socialMaediaLinks = [
    { link: "#", name: "insta" },
    { link: "#", name: "facebook" },
    { link: "#", name: "link" },
    { link: "#", name: "behance" }
  ];

  const socialMedia = socialMaediaLinks.map((val, index)=>{
    return (
      <li key={ index }>
        <a>
          <Link to={ val.link }>
            <span className={ val.name }></span>
          </Link>
        </a>
      </li>
    )
  });

  return (
    <>
      <Layout>
        <div className="container">
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
          <div className="contacts margin_bottom_240">
            <div className="contacts__contact">
              <div className="contacts_table">
                <div className="contacts_label">
                  <ul>
                    <li>Phone</li>
                    <li>E-mail</li>
                    <li>Address</li>
                    <li>Social media</li>
                  </ul>
                </div>
                <div className="contacts_value">
                  <ul>
                    <li>+ 375 29 715 05 86</li>
                    <li>info@bpmcloud.com</li>
                    <li>Independence Avenue, 77, office 53</li>
                    <li>{ socialMedia }</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contacts__contact_form">
              <div className="contacts_type_form">
                
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Contacts
