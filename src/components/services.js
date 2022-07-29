import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Service from "../components/services/service.js"

const Services = ({ siteTitle }) => {
  return (
    <Service></Service>
  );
}

Services.propTypes = {
  siteTitle: PropTypes.string,
}

Services.defaultProps = {
  siteTitle: ``,
}

export default Services
