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

const DropdownServices = ({ isToggle, turnOffMenu, location }) => {
  let url = '';
  if (typeof window !== 'undefined') {
    url =  new URL(window.location.href);
  } else {
    if (location && location.href) {
      url =  new URL(location.href);
    }
  }
  
  const baseUrl = url.origin + "/";
  const data = [
    { name: "IT Outsourcing", routeLink: baseUrl + "websiteDesign/" }, { name: "ASO Mobile App Optimisation", routeLink: baseUrl + "websiteDesign/" },
    { name: "IT Outstaffing", routeLink: baseUrl + "websiteDesign/" }, { name: "GameDev", routeLink: baseUrl + "websiteDesign/" },
    { name: "IT Consulting", routeLink: baseUrl + "websiteDesign/" }, { name: "Web Development Services", routeLink: baseUrl + "websiteDesign/" },
    { name: "Web App Development", routeLink: baseUrl + "websiteDesign/" }, { name: "Website modification", routeLink: baseUrl + "websiteDesign/" },
    { name: "Mobile App Development", routeLink: baseUrl + "websiteDesign/" }, { name: "Digital marketing", routeLink: baseUrl + "websiteDesign/" },
    { name: "Desktop App Development", routeLink: baseUrl + "websiteDesign/" }, { name: "PPC Advertasing", routeLink: baseUrl + "websiteDesign/" },
    { name: "UX/UI Services", routeLink: baseUrl + "websiteDesign/" }, { name: "SMM", routeLink: baseUrl + "websiteDesign/" },
    { name: "Testing and QA", routeLink: baseUrl + "websiteDesign/" }, { name: "Landing page development", routeLink: baseUrl + "websiteDesign/" },
    { name: "Web application design", routeLink: baseUrl + "websiteDesign/" },{ name: "Marketplace development", routeLink: baseUrl + "websiteDesign/" },
    { name: "UI/UX mobile app design", routeLink: baseUrl + "websiteDesign/"}
  ]
  const [isOpenPoint, setOpenPoint] = useState(false);
  const closeMenu = () =>{
    setOpenPoint(!isOpenPoint);
    turnOffMenu();
  }
  const resultData = data.map((value, index) => {
    return <li key={ index } onClick={ closeMenu }><a href={ value.routeLink }>{ value.name }</a></li>
  })
  if (isToggle) {
  return (
    <div className="dropdown_services_sticky">
      <div className="dropdown_services">
        <div className="dropdown_services__title">Services</div>
        <div className="dropdown_services__info">
          <ul>
            { resultData }
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
