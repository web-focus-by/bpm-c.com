import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"


const Services = ({ siteTitle }) => (
  <div className="container">
    <div className="services margin_bottom_240">
    <div className="services__title title_62">Services</div>
    <div className="services__list">
    <div className="services_list_item"><a href="#">Development</a></div>
    <div className="services_list_item"><a href="#">Design and Branding</a></div>
    <div className="services_list_item"><a href="#">SEO</a></div>
    <div className="services_list_item"><a href="#">SERM</a></div>
    <div className="services_list_item"><a href="#">SMM</a></div>
    <div className="services_list_item"><a href="#">Copywriting</a></div>
    <div className="services_list_item"><a href="#">PPC</a></div>
    <div className="services_list_item"><a href="#">Website development for business</a></div>
    </div>
    </div>
  </div>
)

Services.propTypes = {
  siteTitle: PropTypes.string, 
}

Services.defaultProps = {
  siteTitle: ``,
}

export default Services



