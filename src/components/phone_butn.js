import * as React from "react"
import PropTypes from "prop-types"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const PhoneButn = ({ onClick }) => {
  const phoneButn = React.useRef()
  const poused = e => {
    if (
      phoneButn &&
      phoneButn.current &&
      phoneButn.current.contains(e.target)
    ) {
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
      <span ref={phoneButn} className="phone_icon" onClick={onClick}></span>
    </div>
  )
}

PhoneButn.propTypes = {
  siteTitle: PropTypes.string,
}

PhoneButn.defaultProps = {
  siteTitle: ``,
}

export default PhoneButn
