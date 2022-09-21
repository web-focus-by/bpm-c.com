import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Footer = () => {
  const footerMenuLinks = [
    { link: "/portfolio/", name: "Portfolio" }, { link: "/services/servicesitoutsourcing/", name: "Services" },
    { link: "/blog/", name: "Blog" }, { link: "/about-us/informationaboutcompany/", name: "About us" },
    { link: "/contacts/", name: "Contacts" }
  ];
  const socialMaediaLinks = [
    { link: "#", name: "insta" },
    { link: "#", name: "facebook" },
    { link: "#", name: "link" },
    { link: "#", name: "behance" }
  ];

  const menuFooter = footerMenuLinks.map((val, index) => {
    return (
      <li key={ index }>
        <a><Link to={ val.link }>{ val.name }</Link></a>
      </li>
    )
  });

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
              <a>hello@bpm-c.com</a>
            </li>
            <li>
              <a>USA + 1 929 547 9159</a>
            </li>
            <li>
              <a>Canada + 1 647 493 9093</a>
            </li>
          </ul>
        </div>
        <div className="footer__menu">
          <ul>
            { menuFooter }
          </ul>
        </div>
        <div className="footer__copyright">
          © 2022 LLC "BPM" UNP 11111111111111
        </div>
        <div className="footer__social_net">
          <ul>
            { socialMedia }
          </ul>
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
