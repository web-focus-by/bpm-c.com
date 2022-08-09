import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

<<<<<<< HEAD
const PhoneButn = ({ setActive }) => {
  return (
    <div className="phone_butn">
      <div className="phone"></div>
      <span
        className="phone_icon"
        onClick={() => {
          setActive(true)
        }}
      ></span>
    </div>
  )
}
=======
const PhoneButn = ({onClick}) => (
  <div className="phone_butn">
    <div className="phone" onClick={onClick}></div>
    <span className="phone_icon" onClick={onClick}></span>
  </div>
)
>>>>>>> 8f2cb5d0448c5b08625348627e08873b5a7c10bb

PhoneButn.propTypes = {
  siteTitle: PropTypes.string,
}

PhoneButn.defaultProps = {
  siteTitle: ``,
}

export default PhoneButn
