/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import Hero from "./hero"
import Header from "./header"
import ITCompany from "./it_company"
import Portfolio from "./portfolio"
import Form from "./form"
import Services from "./services"
import Technologies from "./technologies"
import BPMCloud from "./bpm_cloud"
import "../components/styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Hero></Hero>
      <ITCompany></ITCompany>
      <Portfolio></Portfolio>
      <Form></Form>
      <Services></Services>
      <Technologies></Technologies>
      <BPMCloud></BPMCloud>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
