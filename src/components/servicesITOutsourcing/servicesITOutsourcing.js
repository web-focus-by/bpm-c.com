import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "../../components/styles/main.css"
import "../../components/styles/icons.css"
import "../../components/styles/modules.css"
import "../../components/styles/mixins.css"
import "../../components/styles/media_1920.css"
import "../../components/styles/media_1366.css"
import "../../components/styles/media_1024.css"
import "../../components/styles/media_768.css"
import "../../components/styles/media_375.css"
import "./servicesITOutsourcing.css"


const ServicesITOutsourcing = () => {
  const data = [
    { key: 'OutsourcingFrontEndDevelopment', name: 'Outsourcing front-end development', link: '#' },
    { key: 'OutsourcingBackEndDevelopment', name: 'Outsourcing of back-end development', link: '#' }, 
    { key: 'OutsourcingFullStackDevelopment', name: 'Outsourcing of full-stack development', link: '#' },
    { key: 'DevOpsOutsourcing', name: 'DevOps Outsourcing', link: '#' },
    { key: 'OutsourcingUXUIDesigners', name: 'Outsourcing of UX/UI designers', link: '#' },
    { key: 'OutsourcingBusinessSystemsAnalysts', name: 'Outsourcing of business and systems analysts', link: '#' },
    { key: 'ProjectManagementOutsourcing', name: 'Project Management Outsourcing', link: '#' },
    { key: 'DevelopmentOutsourcingJavaScript', name: 'Development Outsourcing in JavaScript', link: '#' },
    { key: 'DevelopmentOutsourcingJava', name: 'Development Outsourcing in Java', link: '#' },
    { key: 'DevelopmentOutsourcingYii', name: 'Development Outsourcing on Yii', link: '#' },
    { key: 'DevelopmentOutsourcingPHP', name: 'Development Outsourcing on PHP', link: '#' },
    { key: 'DevelopmentOutsourcingKotlin', name: 'Development Outsourcing on Kotlin', link: '#' },
    { key: 'DevelopmentOutsourcingReactjs', name: 'Development Outsourcing on React.js', link: '#' },
    { key: 'DevelopmentOutsourcingReactNative', name: 'Development Outsourcing on React Native', link: '#' },
    { key: 'DevelopmentOutsourcingSymfony', name: 'Development Outsourcing on Symfony', link: '#' },
    { key: 'Development Outsourcing on Angular.js', name: 'Development Outsourcing on Angular.js', link: '#' },
    { key: 'OutsourcingManualTesting', name: 'Outsourcing manual testing', link: '#' },
    { key: 'OutsourcingAutomatedTesting', name: 'Outsourcing  automated testing', link: '#' }
  ];

  const result = data.map((value, index) => {
    return (
      <button key = { index + value.key } className="button_white_item">
        { value.name }
      </button>
    )
  });

  return (
    <div className="container">
      <div className="service_oitsourcing margin_bottom_240">
        <div className="service_oitsourcing_choice">
          <div className="service_oitsourcing_choice__title title_62">
            Services in IT Outsourcing
          </div>
        </div>
        <div className="items_tagline__butn">
          { result }
        </div>
      </div>
    </div>
  )
}

ServicesITOutsourcing.propTypes = {
  siteTitle: PropTypes.string,
}
  
ServicesITOutsourcing.defaultProps = {
  siteTitle: ``,
}

export default ServicesITOutsourcing;