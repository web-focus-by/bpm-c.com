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

const DropdownServices = ({ siteTitle }) => {
    
    return(
        <div className="dropdown_services_sticky">
            <div className="dropdown_services">
                <div className="dropdown_services__title">Services</div>
                <div className="dropdown_services__info">
                    <ul>
                        <li><a href="#">IT Outsourcing</a></li>
                        <li><a href="#">ASO Mobile App Optimisation</a></li>
                        <li><a href="#">IT Outstaffing</a></li>
                        <li><a href="#">GameDev</a></li>
                        <li><a href="#">IT Consulting</a></li>
                        <li><a href="#">Web Development Services</a></li>
                        <li><a href="#">Web App Development</a></li>
                        <li><a href="#">Website modification</a></li>
                        <li><a href="#">Mobile App Development</a></li>
                        <li><a href="#">Digital marketing</a></li>
                        <li><a href="#">Desktop App Development</a></li>
                        <li><a href="#">PPC Advertasing</a></li>
                        <li><a href="#">UX/UI Services</a></li>
                        <li><a href="#">SMM</a></li>
                        <li><a href="#">Testing and QA</a></li>
                        <li><a href="#">Landing page development</a></li>
                        <li><a href="#">Web application design</a></li>
                        <li><a href="#">Marketplace development</a></li>
                        <li><a href="#">UI/UX mobile app design</a></li>
                    </ul>
                </div>
            </div>
         </div>
    )}

DropdownServices.propTypes = { 
  siteTitle: PropTypes.string,
}

DropdownServices.defaultProps = {
  siteTitle: ``,
}

export default DropdownServices
