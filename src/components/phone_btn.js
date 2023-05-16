import * as React from "react"
import PropTypes from "prop-types"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

const PhoneBtn = ({ onClick }) => {
  const phoneBtn = React.useRef()
  const poused = e => {
    if (phoneBtn && phoneBtn.current && phoneBtn.current.contains(e.target)) {
      document.getElementById("phone").setAttribute("class", "phone paused")
    } else {
      document.getElementById("phone").setAttribute("class", "phone")
    }
  }

  React.useEffect(() => {
    document.addEventListener("mouseover", poused, true)
    return () => {
      document.removeEventListener("mouseover", poused, true)
    }
  }, [])

  return (
    <div className="phone_butn">
      <div id="phone" className="phone" onClick={onClick}></div>
      <span ref={phoneBtn} className="phone_icon" onClick={onClick}></span>
    </div>
  )
}

PhoneBtn.propTypes = {
  siteTitle: PropTypes.string,
}

PhoneBtn.defaultProps = {
  siteTitle: ``,
}

export default PhoneBtn
