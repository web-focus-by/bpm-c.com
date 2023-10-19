import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import HeroFacts from "../components/heroFacts/heroFacts.js"
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

  const facts = [
    {
      title: 'Full dedication',
      content: 'Our managers, team leads, business analysts, programmers, tester, and designers dive into your project and do their best in order to fulfill your business’s requirements and IT needs.',
      classCircle: 'three'
    },
    {
      title: 'High level of expertise',
      content: 'The experience of an average BPM Cloud specialist is at least several years, so there’s no need to worry about lack of knowledge or quality of the final product.',
      classCircle: 'three'
    },
    {
      title: 'Relevant methods and technologies',
      content: 'At BPM Cloud we use the most up-to-date development, testing, designing and managing methods that fulfill the clients needs in the most effective way. Our specialists always look for the latest IT updates, being part of large professional communities.',
      classCircle: 'three'
    },
    {
      title: 'High level of security',
      content: 'While taking responsibility for the product development, our software building company also takes responsibility for the code and full product security. Moreover, we are ready to provide services of further maintenance and take care of any hacker attacks.',
      classCircle: 'three'
    }
  ]

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
        <HeroFacts
          title="What are the benefits of our software development services?"
          description="There are many software development IT companies all around the world, but BPM Cloud has several main advantages that allow it to distinguish from the whole mass."
          flex="false"
          dataContent={facts}
        ></HeroFacts>
          <Portfolio posts={allPosts}></Portfolio>
          {isShowForm ? <Form showThankForm={showThankForm}></Form> : null}
          {isShowThankForm ? <ThanksForm backPage={backPage}></ThanksForm> : null}
          <ServicesItem></ServicesItem>
          <Technologies></Technologies>
          <BPMCloud></BPMCloud>
          <ProjectsProcess></ProjectsProcess>
          <Blog titlePage="Blog"></Blog>
          <Advantages></Advantages>
          <Reviews titlePage="Testimonials"></Reviews>
          <CompanyDescription></CompanyDescription>
          <ServicePackage></ServicePackage>
          <LeadersChoice></LeadersChoice>
        </Layout>
    </>
  )
}

export default IndexPage
