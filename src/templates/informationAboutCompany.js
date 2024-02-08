import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { fractionContent } from "../utils/fractionContent"
import HeroWebSiteDesign from "../components/heroWebSiteDesign/heroWebSiteDesign"
import FooterBlock from "../components/footerBlock/footerBlock"
import Form from "../components/form"
import WorkTogether from "../components/workTogether/workTogether"
import HeroFacts from "../components/heroFacts/heroFacts"
import HeroValues from "../components/heroValues/heroValues"
import HeroBlack from "../components/heroBlack/heroBlack"

import Yuri from "../images/Yuri.png"
import command_1 from "../images/Command_1.png"
import command_2 from "../images/Command_2.png"
import command_3 from "../images/Command_3.png"
import command_4 from "../images/Command_4.png"
import profit_1 from "../images/profit_1.png"
import profit_2 from "../images/profit_2.png"

import Maria from "../images/maria.jpeg"
import Yurij from "../images/yuriy.jpeg"
import Andrei from "../images/andrei.jpeg"
import Vlad from "../images/vlad.jpeg"
import Diana from "../images/diana.jpeg"
import AnnaDev from "../images/anna-dev.jpeg"
import Anna from "../images/anna.jpeg"
import Margo from "../images/margo.jpeg"
import Olga from "../images/olga.jpeg"
import Sergei from "../images/sergej.jpeg"
import Veronica from "../images/veronica.png"
import Ilja from "../images/ilya.jpg"


import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"

const facts = [
  {
    title: 'Years of experience',
    content: 'Our outsourcing company has been providing numerous IT services since 2018. These years have made our expertise high enough for successfully dealing with different businesses and fulfilling any IT solution requests. ',
    classCircle: 'two'
  },
  {
    title: 'Dedicated professional stuff',
    content: 'There are more than 50 experienced specialists working at BPM Cloud, including managers, marketers, QA engineers, business analysts and developers of all kind. ',
    classCircle: 'two'
  },
  {
    title: 'Hundreds of satisfied clients',
    content: 'Our company has successfully finished nearly 500 projects, shaping our market reputation as a dedicated team of professionals ready to handle tasks of any size or complexity. ',
    classCircle: 'two'
  },
  {
    title: 'Diversity of spheres',
    content: 'There are more than 10 spheres of selling goods and services that our clients work with, including fintech, e-commerce, healthcare, and others. We’re able to find proper solution for all of them. ',
    classCircle: 'two'
  }
]

const descriptionOfValues = ["As any experienced and respected company who cares about its reputation, BPM Cloud follows several rules and values that define our success and help to deal even with the most sophisticated tasks.", "These are the principles that work with us from the very first days of our work, and they have never let us down."]

const values = [
  {
    num: '01',
    title: 'Clear conditions and fair cooperation',
    content: 'We stand on the principle that client’s wishes are the most important, but we do not follow the policy of fawning. If we see, that client’s idea is impossible for practical implementation, they’ll be informed about it and offered other solutions.  '
  },
  {
    num: '02',
    title: 'Permanent professional development',
    content: 'We always try to find new ways and methods of development, quality assurance and management, so you will get the most up-to-date solutions. Our employees are permanently developing their skills, and we pay thorough attention to their hard skills growth '
  },
      {
    num: '03',
    title: 'Thinking about business',
    content: 'By partnering with us, you get not just a product development. You get a real business IT solution, that will cover many aspects of your activity on the market, including deployment, marketing and further support.'
  },
  {
    num: '04',
    title: 'The most precious capital are people',
    content: 'No matter the stack of technologies we use, or business processes we practice, everything is made by the people. We value our employees and partners and try to build the most pleasant working and cooperation conditions. '
  },
]

const descriptionOfPricing = ["BPM Cloud shows high level of flexibility when the topic comes to the financial part. There are three main options available for you."]

const princip = [
  {
    num: '01',
    title: 'Fixed project price',
    content: 'This is the format, when you have to pay some particular price for the whole project. All the costs and necessary resources are already included.'
  },
  {
    num: '02',
    title: 'Flexible price',
    content: 'This is the format when you pay only for the amount of work, according to the hourly/daily/ weekly rate or to the amount of resources spent.'
  },
      {
    num: '03',
    title: 'Monthly subscription',
    content: 'If your project is so complicated that requires months for its development, deployment and further maintenance, you may choose this option.'
  },
]

const specialist = [
  "Work-life balance. We are not the company that would drain their employees till the last drop, thinking only about profit. We care about our workers’ physical and mental condition and ready to provide far more than acceptable working conditions.",
  "Flexibility and autonomy. We are not the fans of all-sides control, and have no need to follow each your step. Moreover, you’ll get the opportunity to choose flexible working schedule and provide the team with your own vision and ideas on the project specifics.",
  "No glass ceiling. If you’re afraid, that your skills will not be noticed and rewarded properly because of some personal reasons, we are ready to allay your fears. You’ll not see any professional discrimination or financial limitations, if your requirements are real.",
  "Efficient communication. We follow the same practice as with our clients. If something is going wrong, we are ready to communicate and come to some agreements. We are also ready to provide you with an objective and useful feedback. "]

const InformationAboutCompany = ({ location, data }) => {
  const contentPage = data ? data.wpPage : {}
  const content = contentPage.content
    ? fractionContent(contentPage.content)
    : null
  const featuredImage =
    contentPage.featuredImage && contentPage.featuredImage.node
      ? contentPage.featuredImage.node.mediaItemUrl
      : null
  return (
    <>
      <Layout>
        <HeroWebSiteDesign
          title={contentPage.title}
          content={content && content[0] ? content[0] : null}
          location={location}
          titleLogo="about_company"
        ></HeroWebSiteDesign>
        <HeroFacts
          title="BPM Cloud in Facts"
          description="There is a great number of outsourcing companies that are ready to sell their expertise and different IT solutions, but BPM Cloud obtains its unique sides and features that allow it to stand out the competitors. "
          flex="true"
          dataContent={facts}
        ></HeroFacts>
        <div className="container">
          <div className="mission margin_bottom_240">
            <div className="mission__title">
              <h2 className="title">Our Mission</h2>
              <div className="mission_description">
                <p>Our goal has been remaining unchanged since the very first days of our work – high-quality IT services and results within satisfying costs, timelines, and cooperation conditions.</p>
                <p>We are always ready to negotiate and look for compromises, as we understand market specifics and client company’s possibilities. There are no exceptions, as we have similar attitude regarding all our partners.</p>
              </div>
            </div>
            <div className="mission__quote">
              <div className="quote">“There are no secrets in our work. Planning, working and further support – these are three core bases of our services quality and clients’ satisfaction.”</div>
              <div className="image"><img src={Yuri} alt="Yuri" /></div>
              <div className="name">Yuri Krivko</div>
              <div className="position">CEO</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="prof_path margin_bottom_240">
            <div className="prof_path__wrap">
              <h2 className="prof_path_title">Our Professional Path</h2>
              <div className="prof_path_description">
                Every business has its own unique history of success, and BPM Cloud is not an exception. We’re sure, that we’ll get far more achievement and new stages of our professional growth that we’ll gladly share with our partners and leads.
              </div>
              <div className="prof_path_history">
                <div className="prof_path_line">
                  <div className="year">2018</div>
                  <div className="circle"><span className="line"></span></div>
                  <div className="descr">Our company was founded by Yuri Krivko. This is how we started our way from small enterprise with no more than several people responsible for many business aspects simultaneously.</div>
                </div>
                <div className="prof_path_line">
                  <div className="year">2019</div>
                  <div className="circle"></div>
                  <div className="descr">BPM Cloud was growing both professionally and with people. Now the company team was more than 20 people, all with a diverse specialization and responsibilities.</div>
                </div>
                <div className="prof_path_line">
                  <div className="year">2020</div>
                  <div className="circle"></div>
                  <div className="descr">We came to the next level of services, starting providing software outsourcing development for insurance and financial companies all over the world.</div>
                </div>
                <div className="prof_path_line">
                  <div className="year">2021</div>
                  <div className="circle"></div>
                  <div className="descr">Our professional growth was unstoppable and by that point we got more than 100 successfully finished projects in our portfolio.</div>
                </div>
                <div className="prof_path_line">
                  <div className="year">2022</div>
                  <div className="circle"></div>
                  <div className="descr">The new sphere of work has been discovered, as BPM Cloud started providing development services for health care industry.</div>
                </div>
                <div className="prof_path_line">
                  <div className="year">2023</div>
                  <div className="circle"></div>
                  <div className="descr">More and more people demonstrated their determination and willingness to work with us, and now our company’s team has more than 50 employees. These are professional developers, QA engineers, UX/UI designers and many other specialists who are ready to grow and put their efforts into the outsourcing development and business cooperation.</div>
                </div>
              </div>
            </div>
            <div className="prof_path__images">
              <div className="images_table">
                <img src={command_1} alt="our_command" />
                <img src={command_2} alt="our_command" />
                <img src={command_3} alt="our_command" />
                <img src={command_4} alt="our_command" />
              </div>
              <div className="stick_cup"><span className="cup"></span></div>
              <div className="stick_heart"><span className="heart"></span></div>
            </div>
          </div>

        </div>
        <HeroValues title="What Are the Values That Drive Us to Go Further?" emoji='true' description={descriptionOfValues} dataContent={values}></HeroValues>
        <div className="container">
          <div className="our-command margin_bottom_240">
            <div className="our-command_title__wrap">
              <h2 className="our-command_title">Meet Our Team<span className="bomb"></span></h2>
              <div className="our-command_description">
                At BPM Cloud, we believe that the strength of our company lies in the passion, expertise, and dedication of our team members. Our diverse and talented team is the driving force behind our success, and we take great pride in introducing them to you.              
              </div>
            </div>

            <div className="our-command_images__wrap">
                <div className="command-card">
                  <div className="card-image"><img src={Yurij} alt="Yurij" /></div>
                  <div className="card-title">Yuri Krivko</div>
                  <div className="card-position">SEO</div>
                </div>
                <div className="command-card">
                  <div className="card-image"><img src={Veronica} alt="Veronica" /></div>
                  <div className="card-title">Veronika Shaveiko</div>
                  <div className="card-position">Project Manager</div>
                </div>
                <div className="command-card">
                  <div className="card-image"><img src={Olga} alt="Olga" /></div>
                  <div className="card-title">Olga Balatsun</div>
                  <div className="card-position">UX/UI Designer</div>
                </div>
                <div className="command-card">
                  <div className="card-image"><img src={Maria} alt="Maria" /></div>
                  <div className="card-title">Maria Chernova</div>
                  <div className="card-position">UX/UI Designer</div>
                </div>
                <div className="command-card">
                  <div className="card-image"><img src={Anna} alt="Anna" /></div>
                  <div className="card-title">Anya Vershenya</div>
                  <div className="card-position">Recruiter</div>
                </div>
                <div className="command-card">
                  <div className="card-image"><img src={Andrei} alt="Andrei" /></div>
                  <div className="card-title">Andrei Burak</div>
                  <div className="card-position">Frontend Developer</div>
                </div>
                <div className="command-card">
                  <div className="card-image"><img src={Sergei} alt="Sergei" /></div>
                  <div className="card-title">Sergei Greben</div>
                  <div className="card-position">Web/Frontend Developer</div>
                </div>
                <div className="command-card">
                  <div className="card-image"><img src={Vlad} alt="Vlad" /></div>
                  <div className="card-title">Vladislav Volkov</div>
                  <div className="card-position">Web/Frontend Developer</div>
                </div>
                <div className="command-card">
                  <div className="card-image"><img src={Margo} alt="Margo" /></div>
                  <div className="card-title">Margarita Sukhonosova</div>
                  <div className="card-position">SEO Specialist</div>
                </div>
                <div className="command-card">
                  <div className="card-image"><img src={Diana} alt="Diana" /></div>
                  <div className="card-title">Diana Pitalenko</div>
                  <div className="card-position">SEO Specialist</div>
                </div>
                <div className="command-card">
                  <div className="card-image"><img src={Ilja} alt="Ilja" /></div>
                  <div className="card-title">Ilya Stvolov</div>
                  <div className="card-position">Java Backend Developer</div>
                </div>
                <div className="command-card">
                  <div className="card-image"><img src={AnnaDev} alt="AnnaDev" /></div>
                  <div className="card-title">Anna Novikova</div>
                  <div className="card-position">Head of Business Development</div>
                </div>
            </div>
            <div className="our-command__button"><button className="button_black"><span className="plus"></span></button></div>
          </div>
        </div>
        <HeroBlack title="Why Should Specialists Work in Our Team?" description="Besides partnering with businesses, BPM Cloud is always ready to invite professional developers, QA engineers, designers, business analysts, managers and many other specialists ready to use their expertise in a profitable field." undertitle="We offer" dataContent={specialist}></HeroBlack>
        <div className="container">
          <div className="profit margin_bottom_240">
            <div className="profit__wrap">
              <h2 className="profit_title">Who Can Profit From Our Services?</h2>
              <div className="profit_description">
                Though the range of businesses we work with is literally unlimited, we can highlight the main types of our clients who find our services useful.
              </div>
              <div className="profit__companie">
                <div className="profit_not-it">
                  <h3 className="title">Non-IT companies</h3>
                  <div className="descr">These are the clients who work in the spheres not connected with informational technologies, but who also want to obtain any digital product. For them, we offer a vast range of services, including software and application development, full IT augmentation and many others.</div>
                </div>
                <div className="profit_it">
                  <h3 className="title">IT product companies</h3>
                  <div className="descr">These are in some way our colleagues, who lack experience or staff and want to fill this gap. We may offer such types of services as IT consulting, QA outsourcing or project management outsourcing.</div>
                </div>
              </div>
            </div>
            <div className="profit__images">
              <img src={profit_1} alt="profit" />
              <img src={profit_2} alt="profit" />
              <div className="stick_computer"><span className="computer"></span></div>
              <div className="stick_light"><span className="light"></span></div>
            </div>
          </div>
        </div>
        <HeroValues title="What Is Our Pricing Policy?" emoji='false' description={descriptionOfPricing} dataContent={princip}></HeroValues>
        <div className="container">
          <div className="partnering margin_bottom_240">
              <h2 className="partnering_title">What Can You Get From Partnering With Us?</h2>
              <div className="partnering_description">
                Though you may see many outsourcing IT companies of different size and experience, we at BPM Cloud can offer you several benefits.</div>
              <div className="partnering__cards">
                <div className="cards_item">
                  <span className="icon-partnering"><span className="time"></span></span>
                  <h3 className="title">No delays</h3>
                  <div className="descr">Immediately after finalizing the negotiation stage, we initiate work on your project, ensuring a seamless transition from planning to execution.</div>
                </div>
                <div className="cards_item">
                <span className="icon-partnering"><span className="puzzle"></span></span>
                  <h3 className="title">Cost-efficient solutions</h3>
                  <div className="descr">The market statistics and our own practice say that working with us is about 30% cheaper if compared to hiring, training and managing an in-house IT department.</div>
                </div>
                <div className="cards_item">
                <span className="icon-partnering"><span className="folder"></span></span>
                  <h3 className="title">Clear working conditions</h3>
                  <div className="descr">Frankness and corporate sincerity are the main principles of our working policy, so you’ll always be aware of the work in progress. And of course, no pitfalls in contracts and working conditions.</div>
                </div>
                <div className="cards_item">
                <span className="icon-partnering"><span className="comp"></span></span>
                  <h3 className="title">Full dedication</h3>
                  <div className="descr">We’re ready to take full responsibility for the development process, so a minimum of your attention is required. </div>
                </div>
            </div>
            <span className="yellow_circle"></span>
            <span className="peach_circle"></span>
          </div>
        </div>
        <FooterBlock
          content={content && content[1] ? content[1] : null}
          contentImage={featuredImage}
        ></FooterBlock>
        <Form></Form>
        <WorkTogether></WorkTogether>
        <Seo title="Get to Know About Our Company" description="Discover BPM Cloud - Your reliable offshore development partner for businesses in the USA, Canada, and Western Europe. Explore our company's history, view our team's achievements, and get in touch with us for top-notch solutions. Contact us now!" />
      </Layout>
    </>
  )
}

export default InformationAboutCompany

export const query = graphql`
  query getInformationAboutCompanyQuery($slug: String) {
    wpPage(slug: { eq: $slug }) {
      id
      uri
      title
      content
      parentId
      slug
      featuredImage {
        node {
          id
          mediaItemUrl
          sizes
        }
      }
    }
  }
`
