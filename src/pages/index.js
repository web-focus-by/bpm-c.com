import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import ITCompany from "../components/it_company"
import Portfolio from "../components/portfolio"
import Form from "../components/form"
import ThanksForm from "../components/thanks_form"
import ServicesItem from "../components/servicesItem"
import Technologies from "../components/technologies"
import BPMCloud from "../components/bpm_cloud"
import ProjectsProcess from "../components/projects_process"
import Blog from "../components/blog"
import Advantages from "../components/advantages"
import Reviews from "../components/reviews"
import CompanyDescription from "../components/company_description"
import ServicePackage from "../components/service_package"
import LeadersChoice from "../components/leaders_choice"
import ThanksModal from "../components/thanks_modal"

const IndexPage = ({ location }) => {
  return (
    <>
      <Layout>
        <Hero location={ location } crumbLabel="Main page"></Hero>
        <ThanksModal></ThanksModal>
        <ITCompany></ITCompany>
        <Portfolio></Portfolio>
        <Form></Form>
        <ThanksForm></ThanksForm>
        <ServicesItem></ServicesItem>
        <Technologies></Technologies>
        <BPMCloud></BPMCloud>
        <ProjectsProcess></ProjectsProcess>
        <Blog></Blog>
        <Advantages></Advantages>
        <Reviews></Reviews>
        <CompanyDescription></CompanyDescription>
        <ServicePackage></ServicePackage>
        <LeadersChoice></LeadersChoice>
      </Layout>
    </>
  )
}

export default IndexPage
