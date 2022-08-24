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

const Footer = ({ siteTitle }) => (
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
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer__copyright">
        © 2022 LLC "BPM" UNP 11111111111111
      </div>
      <div className="footer__social_net">
        <ul>
          <li>
            <a href="#">
              <span className="insta"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="facebook"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="vk"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="link"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="behance"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
