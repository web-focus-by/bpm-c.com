import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

const Footer = () => {
  const hasWindow = typeof window !== "undefined"
  const widthScreen = hasWindow ? window.innerWidth : null
  const footerMenuLinks = [
    { link: "/portfolio/", name: "Portfolio" },
    { link: "/services/it-outsourcing/", name: "Services" },
    { link: "/blog/", name: "Blog" },
    { link: "/about-us/information-about-company/", name: "About us" },
    { link: "/about-us/contacts/", name: "Contacts" },
  ]
  const numberUsa = "+ 1 929 547 9159"
  const numberCanada = "+ 1 647 493 9093"

  const socialMaediaLinks = [
    { link: "https://www.instagram.com/bpm_cloud/", name: "insta" },
    { link: "https://www.facebook.com/bpm.it1", name: "facebook" },
  ]
  const menuFooter = footerMenuLinks.map((val, index) => {
    return (
      <li key={index}>
        <Link to={val.link}>{val.name}</Link>
      </li>
    )
  })

  const socialMedia = socialMaediaLinks.map((val, index) => {
    return (
      <li key={index}>
        <Link to={val.link} target="_blank">
          <span className={val.name}></span>
        </Link>
      </li>
    )
  })

  return (
    <div className="container">
      <div className="footer margin_bottom_60">
        <div className="footer__logo">
          <a href="#">
            <span className="logo"></span>
          </a>
        </div>
        <div className="footer__contacts">
          <ul>
            <li>
              <a href="mailto:hello@bpm-c.com" target="_blank">
                hello@bpm-c.com
              </a>
            </li>
            <li>
              <a href="tel:19295479159">
                {numberUsa}{" "}
                {widthScreen && widthScreen > 375 ? (
                  <span style={{ color: "#B3B3B3" }}>USA</span>
                ) : null}
              </a>
            </li>
            <li>
              <a href="tel:16474939093">
                {numberCanada}{" "}
                {widthScreen && widthScreen > 375 ? (
                  <span style={{ color: "#B3B3B3" }}>Canada</span>
                ) : null}
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__menu">
          <ul>{menuFooter}</ul>
        </div>
        <div className="footer__copyright">{/*unp*/}</div>
        <div className="footer__social_net">
          <ul>
            {socialMedia}
          </ul>
          <a href="//www.dmca.com/Protection/Status.aspx?ID=38306ddf-a860-49ff-808b-f77ceba4d9d7" title="DMCA.com Protection Status" class="dmca-badge"> <img src ="https://images.dmca.com/Badges/dmca-badge-w250-5x1-08.png?ID=38306ddf-a860-49ff-808b-f77ceba4d9d7"  alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
        </div>
      </div>
    </div>

  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
