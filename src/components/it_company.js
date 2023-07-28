import * as React from "react"
import PropTypes from "prop-types"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

const ITCompany = ({ siteTitle }) => (
  <div className="container">
    <div className="it_company margin_bottom_240">
      <h1 className="it_company__title title_62">IT company</h1>
      <div className="it_company__info font_18">
        «BPM CLOUD» digital marketing agency clearly knows what tools used to
        increase your sales and achieve your goals. We know all about art of
        creating effective websites, using both classic techniques and the most
        innovative world-class approaches. Result is important for our partners,
        and our web studio is ready to achieve it by joint efforts!
      </div>
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
