import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
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
  const [isShowThankModal, setIsShowThankModal] = React.useState(false)
  // const [isShowModal, setIsShowModal] = React.useState(true)
  const [isShowThankForm, setIsShowThankForm] = React.useState(false)
  const [isShowForm, setIsShowForm] = React.useState(true)
  const postsAndTags = useStaticQuery(graphql`
    query GetPostQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "portfolio" } } } }
        }
      ) {
        edges {
          node {
            id
            title
            link
            uri
            content
            tags {
              nodes {
                slug
              }
            }
            featuredImage {
              node {
                id
                mediaItemUrl
                sizes
              }
            }
          }
        }
      }
    }
  `)
  const allPosts = postsAndTags ? postsAndTags.allWpPost.edges : []

  const backPageModal = () => {
    setIsShowThankForm(false)
  }

  const backPage = () => {
    setIsShowThankModal(false)
    setIsShowForm(true)
  }

  const showThankForm = () => {
    setIsShowThankForm(true)
    setIsShowForm(false)
  }

  return (
    <>
        <Layout>
          <Seo title="Index" />
          <Hero location={location}></Hero>
          {isShowThankModal ? (
            <ThanksModal backPage={backPageModal}></ThanksModal>
          ) : null}
          <ITCompany></ITCompany>
          <Portfolio posts={allPosts}></Portfolio>
          {isShowForm ? <Form showThankForm={showThankForm}></Form> : null}
          {isShowThankForm ? <ThanksForm backPage={backPage}></ThanksForm> : null}
          <ServicesItem></ServicesItem>
          <Technologies></Technologies>
          <BPMCloud></BPMCloud>
          <ProjectsProcess></ProjectsProcess>
          <Blog titlePage="Blog"></Blog>
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
