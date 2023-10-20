import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import ITCompany from "../components/it_company"
import HeroFacts from "../components/heroFacts/heroFacts.js"
import Portfolio from "../components/portfolio"
import HeroAccordion from "../components/heroAccord/heroAccord"
import Form from "../components/form"
import ThanksForm from "../components/thanks_form"
import ServicesItem from "../components/servicesItem"
import Technologies from "../components/technologies"
import ProjectsProcess from "../components/projects_process"
import Blog from "../components/blog"
import Reviews from "../components/reviews"
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

  const service = ['The number of services provided by BPM Cloud is countless, as we work with a large variety of programming languages and frameworks along with the different development and management practices. However, there are several directions that prove themselves as the most required for the modern market.', 'The list of services provided by our software development company can be continued, but these are the most vital for any business, no matter its specifics and size.']

  const serviceAccor = [
  {
      title: 'IT outsourcing',
      content: 'If your business doesn’t have its own IT department and obtaining of the digital product is an inevitable necessity, we can take care of the product development and further maintenance. Our skilled professional teams are ready to take full responsibility for software or application development from the first till the last step. ',
    },
    {
      title: 'IT outstaffing',
      content: 'If your company’s in-house IT department lacks expertise,  we are ready to provide you with our experts who can help and guide their not so experienced colleagues or even cover some aspects of work, where their knowledge finds the best use.',
    },
    {
      title: 'Web application development',
      content: 'Many years of commercial and development experience allow us to understand the needs and desires of digital market and provide the best IT solutions. We at BPM Cloud possess all the necessary knowledge that will make companies’ Internet products visible and attractive for the users. ',
    },
    {
      title: 'Mobile app development',
      content: 'As more and more people use mobile phones to get access to companies’ products, you definitely need your own mobile app. Our software development IT company works with numerous technologies that help to create digital products both for Android and iOS users.',
    },
    {
      title: 'UX/UI design',
      content: 'The outlook is the part visible for the users from the first second they start interacting with your digital product, and that’s why business pay so much attention to design and user experience. Our software building company is ready to provide you with highly qualified designers, who are well aware about the modern market design preferences.',
    },
    {
      title: 'Quality assurance',
      content: 'Even the best programmers and designers are not guaranteed from mistakes, and even the best products can get flaws. Our QA specialists are ready to help you with chasing these flaws and ensuring that the users will get the product of the highest quality possible. In doing so, they base themselves on the most up-to-date testing practices available.',
    }
  ]

    const commonAccor = [
  {
      title: 'What types of apps can you develop?',
      content: 'If your business doesn’t have its own IT department and obtaining of the digital product is an inevitable necessity, we can take care of the product development and further maintenance. Our skilled professional teams are ready to take full responsibility for software or application development from the first till the last step. ',
    },
    {
      title: 'How long does it take to build an application?',
      content: 'The time of development depends on many factors and individual from case to case. The average timeline is about 4-5 months, but can be longer or shorter depending on the project complexity.',
    },
    {
      title: 'How much does it cost?',
      content: 'The price of development will be different because of the such factors as location, staff experience, deadlines, and the cooperation model chosen by the client company. All the costs are discussed individually.',
    },
    {
      title: 'How do you control the quality of the software you deliver?',
      content: 'We possess a large team of experienced QA engineers who are fully dedicated to the quality assurance process and do their best, so that our client get the flawless final product.',
    },
    {
      title: 'What is your preferred development methodology?',
      content: 'We use all the most popular and efficient methodologies including Scrum, Waterfall, and Kanban. The choice is mostly depended on the project specifics, but Scrum with its iterations is the most widely used. ',
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
          <ITCompany></ITCompany>
          {isShowThankModal ? (
            <ThanksModal backPage={backPageModal}></ThanksModal>
          ) : null}
          <Portfolio posts={allPosts}></Portfolio>
          {isShowForm ? <Form showThankForm={showThankForm}></Form> : null}
        {isShowThankForm ? <ThanksForm backPage={backPage}></ThanksForm> : null}
          <HeroAccordion title="What are the services that we provide?" emoji="service" descr={service} dataContent={serviceAccor}></HeroAccordion>
          <HeroFacts
            title="What are the benefits of our software development services?"
            description="There are many software development IT companies all around the world, but BPM Cloud has several main advantages that allow it to distinguish from the whole mass."
            flex="false"
            dataContent={facts}
          ></HeroFacts>
          <ServicesItem></ServicesItem>
          <Technologies></Technologies>
          <ProjectsProcess></ProjectsProcess>
          <ServicesItem></ServicesItem>
          <Reviews titlePage="Testimonials"></Reviews>
          <Blog titlePage="Blog"></Blog>
          <HeroAccordion title="Common questions about our work" dataContent={commonAccor}></HeroAccordion>
          <LeadersChoice></LeadersChoice>
        </Layout>
    </>
  )
}

export default IndexPage
