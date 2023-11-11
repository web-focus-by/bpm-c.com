import * as React from "react"
import { useState } from "react"
import { Link, graphql } from "gatsby"
import { AccordionItem } from "../components/faqItem"
import Layout from "../components/layout"
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs"
import Seo from "../components/seo"
import ScriptLDFQA from "../components/ScriptLDFQA"

import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

const faqList = [
  {
    q: "How does custom software differ from off-the-shelf solutions?",
    a: ["Custom software is tailor-made to your specific business needs and processes. It's designed from scratch to precisely fit your requirements, providing unique functionalities and features.", "Off-the-shelf solutions, on the other hand, are pre-built software products designed for general use and a wide audience. While they offer convenience and quicker implementation, they might not align perfectly with your unique workflows and can require adjustments to fit your needs.", "Custom software offers unparalleled customization and can be a better fit for businesses with specific requirements."],
  },
  {
    q: "What software development services do you provide?",
    a: ["We provide a comprehensive range of software development services tailored to your needs. Our expertise covers:", "— Custom software development", "— Mobile app development", "— Web application development", "— UI/UX design", "— Software testing", "— Integration solutions", "— Ongoing maintenance", "Custom software offers unparalleled customization and can be a better fit for businesses with specific requirements."],
  },
  {
    q: "What technologies and programming languages are used in custom software development?",
    a: ["In custom software development, we utilize a diverse range of technologies and programming languages based on the project's specific requirements.", "This can include languages like Python, Java, C#, Ruby, and more. We leverage frameworks like React, Angular, and Vue.js for web development, and Swift or Kotlin for mobile app development.Our technology stack also encompasses databases like MySQL, PostgreSQL, and MongoDB, along with cloud platforms such as AWS, Azure, or Google Cloud for scalability and security.", "The choice of technologies is tailored to ensure optimal performance, security, and future scalability of your custom software solution."],
  },
  {
    q: "What types of industries have you worked with for custom software development?",
    a: [`We have a diverse" portfolio of custom software development spanning various industries. Our experience includes, but is not limited to:`, "— Finance;",
    "— Healthcare",
    "— E-commerce",
    "— Manufacturing",
    "— Logistics",
    "— Education",
    "— Entertainment", "We adapt our expertise to suit the unique needs of each industry, leveraging our knowledge to create tailored solutions that address specific challenges. Our cross-industry experience ensures that we bring valuable insights to your project, regardless of your industry, resulting in a software solution that aligns seamlessly with your business goals."],
  },
  {
    q: "What are the advantages of outsourcing your project to our team?",
    a: ["Software development outsourcing your project to our team offers numerous advantages:", "— Our skilled professionals bring expertise across various domains, ensuring a fresh perspective and innovative solutions.",
    "— We provide cost-effectiveness by eliminating the need for in-house infrastructure and staff.",
    "— With a proven track record, we ensure timely delivery, quality assurance, and reduced development time.",
    "— Our collaborative approach promotes clear communication and transparent progress tracking.", "Additionally, outsourcing allows your business to focus on core activities while we handle the technical complexities, resulting in a tailored, efficient, and competitive software solution."],
  },
  {
    q: "Will you sign an NDA?",
    a: ["LoremAbsolutely, ensuring confidentiality is a priority for us. We are more than willing to sign a Non-Disclosure Agreement (NDA) to safeguard your sensitive information and project details. Your trust is paramount, and we're committed to maintaining the security and privacy of all aspects of our collaboration. ipsum dolor sit amet consectetur adipisicing elit. Eius accusamus cumque officiis, tempora ipsa a."],
  },
  {
    q: "What methodologies do you use in your work?",
    a: ["Absolutely, ensuring confidentiality is a priority for us. We are more than willing to sign a Non-Disclosure Agreement (NDA) to safeguard your sensitive information and project details. Your trust is paramount, and we're committed to maintaining the security and privacy of all aspects of our collaboration."],
  },
  {
    q: "Do you provide outstaffing services?",
    a: ["Yes, we offer outstaffing services as part of our comprehensive offerings. Outstaffing allows you to augment your team with our skilled professionals who work remotely as an extension of your workforce. This arrangement provides flexibility in scaling your team as needed, while we handle the recruitment, onboarding, and management of our dedicated resources. You retain control over the tasks and projects they work on, ensuring seamless integration and enhanced productivity."],
  },
  {
    q: "How long does it usually take to develop custom software?",
    a: ["The timeline for custom software development varies based on project complexity. Simple projects might take a few months, while complex ones can span a year or more. Our team ensures efficient development by setting realistic milestones and closely collaborating with you throughout the process."],
  },
  {
    q: "What is the typical process involved in custom software development?",
    a: ["The typical process of custom software development involves the following steps:","— Requirements gathering and analysis",
   "— Design",
   "— Development",
   "— Testing",
   "— Deployment",
   "— Training and documentation",
   "— Launch",
   "— Support and maintenance", "This structured process ensures that the software is developed systematically, meeting your unique requirements while maintaining high quality and effectiveness throughout its lifecycle."],
  },
  {
    q: "How can I choose the right software development company or team?",
    a: ["Selecting the right software development team involves defining project needs, checking their expertise, reviewing past work, and evaluating communication skills. Ensure technical proficiency, scalability, and transparent pricing. Look for a company that offers post-launch support, and has a proven track record. By assessing these factors, you can make an informed choice for a successful partnership."],
  },
  {
    q: "How is the security of my custom software ensured?",
    a: ["The security of your custom software is a top priority. We implement multiple layers of security measures, including robust authentication, encryption, and access controls. Regular security audits and code reviews help identify vulnerabilities. We follow best practices to protect against data breaches and cyber threats, ensuring your software and sensitive information are safeguarded at all times."],
  },
  {
    q: "Can I make changes or updates to the software after it's developed?",
    a: ["Absolutely, you retain the flexibility to make changes and updates to your custom software after development. We design solutions with scalability and adaptability in mind. Our team can assist in implementing modifications, adding new features, or refining existing ones to align with evolving business needs. Post-launch support ensures seamless integration of updates while maintaining software integrity and functionality."],
  },
  {
    q: "What are the potential risks or challenges in custom software development?",
    a: ["Custom software development may pose several risks and challenges:", "— Scope Creep: Expanding project scope beyond initial plans, affecting timelines and costs.",
    "— Budget overruns: Unforeseen complexities leading to increased expenses.",
    "— Timeline delays: Technical issues, scope changes, or external factors causing delays.",
    "— Quality assurance: Ensuring bug-free software through rigorous testing can be challenging.",
    "— Communication issues: Misunderstandings can lead to misaligned expectations.",
    "— Technology changes: Rapid tech advancements may necessitate updates for long-term relevance.",
    "— Security concerns: Ensuring software security against cyber threats and data breaches.",
    "— User adoption: Ensuring the software is intuitive and user-friendly for optimal user adoption.",
    "— Integration challenges: Compatibility issues with existing systems during integration.",
    "— Resource availability: Ensuring skilled developers are available throughout the project.", "Awareness of these challenges enables proactive mitigation and better project management for successful custom software development."],
  },
  {
    q: "What level of involvement will I have during the development process?",
    a: ["Your involvement during the development process can be tailored to your preferences. We value collaboration and transparency, so you can actively participate in:", "— Requirements gathering: Defining project goals and features.",
    "— Design phase: Providing feedback on the software's look and feel.",
    "— Development: Reviewing progress, suggesting adjustments.",
    "— Testing: Participating in quality assurance and bug identification.",
    "— Feedback loop: Regular updates and incorporating your suggestions.", "Your input ensures the final software aligns precisely with your vision and needs. We adapt to your desired level of engagement to create a successful and satisfying partnership."],
  },
  {
    q: "Do I own the rights to the source code and intellectual property?",
    a: ["Yes, you retain ownership of the source code and intellectual property of the custom software we develop for you. We provide clear agreements that transfer these rights to you upon project completion. This ensures you have full control over the software's use, modification, and distribution, allowing you to make future enhancements or collaborate with other developers as needed."],
  },
  {
    q: "What factors influence the cost of software development?",
    a: ["Custom software development may pose several risks and challenges", "— Complexity: Intricate features and functionality can increase development time and cost:",
    "— Scope: The number of features, user roles, and modules affects workload and expenses.",
    "— Technology: The choice of programming languages, frameworks, and tools can impact costs.",
    "— Design: Elaborate UI/UX design or custom graphics may incur additional expenses.",
    "— Integration: Connecting with other systems or APIs can affect complexity and budget.",
    "— Security: Implementing robust security measures adds development effort.",
    "— Testing: Rigorous testing and quality assurance contribute to the overall cost.",
    "— Customization: Tailoring the software to specific business needs may require extra effort.",
    "— Timeline: Expedited delivery might require more resources and thus higher costs.",
    "— Support and maintenance: Including post-launch support and updates influences cost.",
     "— Team expertise: Skilled developers may command higher rates, impacting expenses.",
    "— Geographical location: Development costs can vary based on regional rates.", "By understanding these factors, you can make informed decisions and effectively manage your software development budget."],
  },
  {
    q: "Do you provide end-user documentation?",
    a: ["At BPM Cloud, we ensure comprehensive end-user documentation is available. However, its provision is subject to inclusion in the work contract. This guarantees transparency and aligns with our commitment to meeting your specific project needs."],
  },
  {
    q: "How do you ensure that the final product meets my expectations?",
    a: ["Ensuring your satisfaction is paramount. We employ a meticulous process that involves continuous communication, regular progress updates, and milestone reviews. Your feedback is integrated throughout development, addressing any concerns promptly. Rigorous testing and quality assurance verify the software's functionality, aligning it with your expectations. Our collaborative approach guarantees the final product meets or exceeds your envisioned outcomes."],
  }
]
const Faq = ({location}) => {
  const [openId, setId] = useState(null);
  const [hoverId, setHover] = useState(null);

  return (
    <>
    <Layout>
        <div className="container">
          <div className="breacrumbs-list" itemscope="" itemtype="http://schema.org/BreadcrumbList">
            <Breadcrumbs breadcrumbs={location} title="FAQ" />
          </div>
          <div className="hero">
            <h1 className="hero__title title_62">
            Frequently Asked Questions<span className="faq"></span>
            </h1>
            <p className="hero__description">Below is a compilation of frequently asked questions that we typically encounter. If you haven't come across the query you're seeking, please feel free to <Link class="contact" to="/about-us/contacts/">contact us</Link>!</p>
          </div>
          <div className="container" style={{padding: 0}}>
            <div className="fqa margin_bottom_240">
              <ul className="accordion">
                {faqList.map((faqItem, id) => {
                  return (
                    <AccordionItem
                      onClick={() => (id === openId ? setId(null) : setId(id))}
                      onMouseOver={(e) => setHover(id)} 
                      onMouseLeave={(e) => setHover(null)}
                      faqItem={faqItem}
                      isOpen={id === openId}
                      isHover={id === hoverId}
                      num={`${id < 9 ? '0' : ''}${id + 1}.`}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="header_circle_yellow"></div>
          <div className="header_circle_pink"></div>
          <div className="header_circle_purple"></div>
        </div>
        <Seo title="Frequently Asked Questions About Software Development" description="Explore our FAQ page to uncover in-depth answers to your queries about software development and the wide range of services offered by BPM Cloud. Get informed and make informed decisions for your business needs." />
      </Layout>
      <ScriptLDFQA/>
    </>
  );
};

export default Faq
export const query = graphql`
  query getFaqDataQuery($slug: String) {
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
