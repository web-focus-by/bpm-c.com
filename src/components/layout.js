/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useState, useEffect, useRef } from "react"
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
import ProjectsProcess from "./projects_process"
import Blog from "./blog"
import Advantages from "./advantages"
import Reviews from "./reviews"
import CompanyDescription from "./company_description"
import ServicePackage from "./service_package"
import LeadersChoice from "./leaders_choice"
import Footer from "./footer"
import PhoneButn from "./phone_butn"
import Modal from "./modal"
import ThanksModal from "./thanks_modal"
import DropdownServices from "./dropdown_services"
import "../components/styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
        }
      }
    }
  `)
  const refMenu = useRef();
  const [isToggle, setToggle] = useState(false, setToggle);
  const [isOpen, setModalActive] = useState(false);
  const toggleModalActive = () => {
    setModalActive(!isOpen);
  }

  const clickOut = (e) => {
    if (isToggle && refMenu && refMenu.current && !refMenu.current.contains(e.target))
      {
        closeMenu();
      }
  }
  useEffect(() => {
    document.addEventListener("click", clickOut, true);
    return () => {
      document.removeEventListener("click", clickOut, true);
    };
  });

  const openMenu = () => {
    setToggle(true);
  }
  const closeMenu = () => {
    setToggle(false);
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} turnOnMenu={openMenu} turnOffMenu={closeMenu} isToggle = {isToggle} />
      <div ref={refMenu}><DropdownServices isToggle = {isToggle} turnOffMenu={closeMenu} /></div>
      <Hero></Hero>
      <PhoneButn onClick={toggleModalActive}></PhoneButn>
      {isOpen? <Modal
        onClickClose={toggleModalActive}
      ></Modal> : null}
      <ThanksModal></ThanksModal>
      <ITCompany></ITCompany>
      <Portfolio></Portfolio>
      <Form></Form>
      <Services></Services>
      <Technologies></Technologies>
      <BPMCloud></BPMCloud>
      <ProjectsProcess></ProjectsProcess>
      <Blog></Blog>
      <Advantages></Advantages>
      <Reviews></Reviews>
      <CompanyDescription></CompanyDescription>
      <ServicePackage></ServicePackage>
      <LeadersChoice></LeadersChoice>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
