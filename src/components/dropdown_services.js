import * as React from "react"
import { useState } from "react"
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

const DropdownServices = ({ isToggle, turnOffMenu }) => {
  const data = [
    "IT Outsourcing","ASO Mobile App Optimisation","IT Outstaffing","GameDev","IT Consulting",
    "Web Development Services","Web App Development","Website modification","Mobile App Development","Digital marketing",
    "Desktop App Development","PPC Advertasing","UX/UI Services","SMM","Testing and QA",
    "Landing page development","Web application design","Marketplace development","UI/UX mobile app design"
  ]
  const [isOpenPoint, setOpenPoint] = useState(false);
  const closeMenu = () =>{
    setOpenPoint(!isOpenPoint);
    turnOffMenu();
  }
  const resultData = data.map((value, index) => {
    return <li key={index} onClick={ closeMenu }><a href="#">{value}</a></li>
  })
  if (isToggle) {
  return (
    <div className="dropdown_services_sticky">
      <div className="dropdown_services">
        <div className="dropdown_services__title">Services</div>
        <div className="dropdown_services__info">
          <ul>
            {resultData}
          </ul>
        </div>
      </div>
    </div>
    )
  }
}

DropdownServices.propTypes = { 
  siteTitle: PropTypes.string,
}

DropdownServices.defaultProps = {
  siteTitle: ``,
}

export default DropdownServices
