import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"

const ITCompany = ({ siteTitle }) => (
  <div className="container">
    <div className="it_company margin_bottom_240">
     <div className="it_company__title title_62">IT company</div>
     <div className="it_company__info">«BPM CLOUD» digital marketing agency clearly knows what tools used to increase your sales and achieve your goals. We know all about art of creating effective websites, using both classic techniques and the most innovative world-class approaches. Result is important for our partners, and our web studio is ready to achieve it by joint efforts!</div>
    </div>
  </div>
)

ITCompany.propTypes = {
  siteTitle: PropTypes.string, 
}

ITCompany.defaultProps = {
  siteTitle: ``,
}

export default ITCompany



