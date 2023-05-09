import * as React from "react"
import PropTypes from "prop-types"
import Service from "../components/services/service"

const ServicesItem = ({ siteTitle }) => {
  return <Service title="Services"></Service>
}

ServicesItem.propTypes = {
  siteTitle: PropTypes.string,
}

ServicesItem.defaultProps = {
  siteTitle: ``,
}

export default ServicesItem
