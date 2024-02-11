import * as React from "react"
import { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Form from "../components/form"
import ITCompany from "../components/it_company"
import HeroFacts from "../components/heroFacts/heroFacts.js"
import Portfolio from "../components/portfolio"
import HeroAccordion from "../components/heroAccord/heroAccord"
import HeroValues from "../components/heroValues/heroValues"
import HeroLine from "../components/heroLine/heroLine"
import ServicesIndex from "../components/servicesIndex"
import ServicesItem from "../components/servicesItem"
import Technologies from "../components/technologies"
import ProjectsProcess from "../components/projects_process"
import Blog from "../components/blog"
import Reviews from "../components/reviews"
import WorkTogether from "../components/workTogether/workTogether"

const IndexPage = ({ location }) => {
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
      q: 'IT outsourcing',
      a: ['If your business doesn’t have its own IT department and obtaining of the digital product is an inevitable necessity, we can take care of the product development and further maintenance. Our skilled professional teams are ready to take full responsibility for software or application development from the first till the last step.'],
    },
    {
      q: 'IT outstaffing',
      a: ['If your company’s in-house IT department lacks expertise,  we are ready to provide you with our experts who can help and guide their not so experienced colleagues or even cover some aspects of work, where their knowledge finds the best use.'],
    },
    {
      q: 'Web application development',
      a: ['Many years of commercial and development experience allow us to understand the needs and desires of digital market and provide the best IT solutions. We at BPM Cloud possess all the necessary knowledge that will make companies’ Internet products visible and attractive for the users. '],
    },
    {
      q: 'Mobile app development',
      a: ['As more and more people use mobile phones to get access to companies’ products, you definitely need your own mobile app. Our software development IT company works with numerous technologies that help to create digital products both for Android and iOS users.'],
    },
    {
      q: 'UX/UI design',
      a: ['The outlook is the part visible for the users from the first second they start interacting with your digital product, and that’s why business pay so much attention to design and user experience. Our software building company is ready to provide you with highly qualified designers, who are well aware about the modern market design preferences.'],
    },
    {
      q: 'Quality assurance',
      a: ['Even the best programmers and designers are not guaranteed from mistakes, and even the best products can get flaws. Our QA specialists are ready to help you with chasing these flaws and ensuring that the users will get the product of the highest quality possible. In doing so, they base themselves on the most up-to-date testing practices available.'],
    }
  ]

    const commonAccor = [
    {
      q: 'What types of apps can you develop?',
      a: ['The range of our possibilities is extremely wide, as we develop web applications, desktop and mobile applications, marketplaces, and other platforms for companies working in e-commerce, fintech, health industry and many others. If you have a special request, just contact us and we’ll discuss all the peculiarities.'],
    },
    {
      q: 'How long does it take to build an application?',
      a: ['The time of development depends on many factors and individual from case to case. The average timeline is about 4-5 months, but can be longer or shorter depending on the project complexity.'],
    },
    {
      q: 'How much does it cost?',
      a: ['The price of development will be different because of the such factors as location, staff experience, deadlines, and the cooperation model chosen by the client company. All the costs are discussed individually.'],
    },
    {
      q: 'How do you control the quality of the software you deliver?',
      a: ['We possess a large team of experienced QA engineers who are fully dedicated to the quality assurance process and do their best, so that our client get the flawless final product.'],
    },
    {
      q: 'What is your preferred development methodology?',
      a: ['We use all the most popular and efficient methodologies including Scrum, Waterfall, and Kanban. The choice is mostly depended on the project specifics, but Scrum with its iterations is the most widely used. '],
    }
]

const buisness = [ 'Though the market is full of software development companies of different size, working experience and project scales, BPM Cloud is able to provide your business with IT development services based on many years of practical and commercial experience. ', 'Partnering with BPM Cloud is the key to successful and cost-efficient realization of business’s IT needs and goals or brave plans and dreams. We’re always ready to discuss the peculiarities of the project and IT solutions you need till both sides come to agreement, so you’re guaranteed a satisfying result. ']

const buisChoose = [
    {
      title: 'Prompt start',
      content: ['There are no delays and excessive bureaucracy, as we are ready to start within 1-2 weeks.'],
    },
    {
      title: 'Clear conditions and policy',
      content: ['We are always ready to discuss the project details and explain all the costs and terms of our cooperation.'],
    },
    {
      title: 'High quality',
      content: ['Obtaining the experienced teams of developers, QA-engineers and UX/UI designers guarantees that the final product will be flawless.'],
    },
    {
      title: 'Assistance and maintenance',
      content: ['We will not leave you alone, and you may request further help at any moment.'],
    }
  ]
  return (
    <>
        <Layout>
          <Seo title="Custom Software Development Company" description="BPM Cloud is a leading custom software development company. Our skilled and experienced team delivers tailored web app development services to help achieve your business goals efficiently. Get started on your project today!" />
          <Hero location={location}></Hero>
          <ITCompany></ITCompany>
          <Portfolio posts={allPosts}></Portfolio>
          <Form></Form>
          <HeroAccordion title="What Are the Services That We Provide?" emoji="service" descr={service} dataContent={serviceAccor}></HeroAccordion>
          <HeroFacts
            title="What Are the Benefits of Our Software Development Services?"
            description="There are many software development IT companies all around the world, but BPM Cloud has several main advantages that allow it to distinguish from the whole mass."
            flex="false"
            dataContent={facts}
          ></HeroFacts>
          <HeroLine></HeroLine>
          {/* <ServicesItem></ServicesItem> */}
          <Technologies></Technologies>
          <ProjectsProcess></ProjectsProcess>
          <ServicesIndex title="Industries We Serve"></ServicesIndex>
          <HeroValues title="Why Do Businesses Choose BPM Cloud?" description={buisness} dataContent={buisChoose}></HeroValues>
          <Reviews titlePage="Testimonials"></Reviews>
          <Blog titlePage="Blog"></Blog>
          <HeroAccordion title="Common Questions About Our Work" dataContent={commonAccor}></HeroAccordion>
          <WorkTogether></WorkTogether>
        </Layout>
    </>
  )
}

export default IndexPage
