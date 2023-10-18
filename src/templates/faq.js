import * as React from "react"
import { useState } from "react"
import { Link, graphql } from "gatsby"
import { fractionContent } from "../utils/fractionContent"
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

const Faq = ({ location, data }) => {

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
              <div className="fqa__list">
                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-01">
                  <input type="radio" class="accordion_toggle" name="accordion" id="toggle-01" hidden></input>
                    <div className="fqa_number"><p>01.</p></div>
                    <div className="fqa_icon"><span className="label_icon"></span></div>
                  <div className="fqa_question">
                    <p className="question">How does custom software differ from off-the-shelf solutions?</p>
                      <div className="fqa_answer">
                        <p className="answer">Custom software is tailor-made to your specific business needs and processes. It's designed from scratch to precisely fit your requirements, providing unique functionalities and features.</p>
                        <p className="answer">Off-the-shelf solutions, on the other hand, are pre-built software products designed for general use and a wide audience. While they offer convenience and quicker implementation, they might not align perfectly with your unique workflows and can require adjustments to fit your needs. </p>
                        <p className="answer">Custom software offers unparalleled customization and can be a better fit for businesses with specific requirements.</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-02">
                  <input type="radio" class="accordion_toggle" name="accordion" id="toggle-02" hidden></input>
                    <div className="fqa_number"><p>02.</p></div>
                    <div className="fqa_icon"><span className="label_icon"></span></div>
                  <div className="fqa_question">
                    <p className="question">What software development services do you provide?</p>
                      <div className="fqa_answer" >
                        <p className="answer">We provide a comprehensive range of software development services tailored to your needs. Our expertise covers:</p>
                      <ul className="answer">
                        <li>Custom Software Development;</li>
                        <li>Mobile App Development;</li>
                        <li>Web Application Development;</li>
                        <li>UI/UX Design;</li>
                        <li>Software Testing;</li>
                        <li>Integration Solutions;</li>
                        <li>Ongoing Maintenance.</li>
                      </ul>
                        <p className="answer">Custom software offers unparalleled customization and can be a better fit for businesses with specific requirements.</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-03">
                  <input type="radio" class="accordion_toggle" name="accordion" id="toggle-03" hidden></input>
                  <div className="fqa_number"><p>03.</p></div>
                  <div className="fqa_icon"><span className="label_icon"></span></div>
                  <div className="fqa_question">
                    <p className="question">What technologies and programming languages are used in custom software development?</p>
                      <div className="fqa_answer" >
                        <p className="answer">In custom software development, we utilize a diverse range of technologies and programming languages based on the project's specific requirements. </p>
                        <p className="answer">This can include languages like Python, Java, C#, Ruby, and more. We leverage frameworks like React, Angular, and Vue.js for web development, and Swift or Kotlin for mobile app development.Our technology stack also encompasses databases like MySQL, PostgreSQL, and MongoDB, along with cloud platforms such as AWS, Azure, or Google Cloud for scalability and security.  </p>
                        <p className="answer">The choice of technologies is tailored to ensure optimal performance, security, and future scalability of your custom software solution.</p>
                      </div>
                    </div>
                    </label>
                </div>

                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-04">
                   <input type="radio" class="accordion_toggle" name="accordion" id="toggle-04" hidden></input>
                    <div className="fqa_number"><p>04.</p></div>
                    <div className="fqa_icon"><span className="label_icon"></span></div>
                  <div className="fqa_question">
                    <p className="question">What types of industries have you worked with for custom software development?</p>
                      <div className="fqa_answer" >
                        <p className="answer">We have a diverse <Link to='/portfolio/'>portfolio</Link> of custom software development spanning various industries. Our experience includes, but is not limited to:</p>
                        <ul className="answer">
                          <li>Finance;</li>
                          <li>Healthcare;</li>
                          <li>E-commerce;</li>
                          <li>Manufacturing;</li>
                          <li>Logistics;</li>
                          <li>Education;</li>
                          <li>Entertainment.</li>
                        </ul>
                        <p className="answer">We adapt our expertise to suit the unique needs of each industry, leveraging our knowledge to create tailored solutions that address specific challenges. Our cross-industry experience ensures that we bring valuable insights to your project, regardless of your industry, resulting in a software solution that aligns seamlessly with your business goals.</p>
                      </div>
                    </div>
                    </label>
                </div>

                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-05">
                  <input type="radio" class="accordion_toggle" name="accordion" id="toggle-05" hidden></input>
                    <div className="fqa_number"><p>05.</p></div>
                    <div className="fqa_icon"><span className="label_icon"></span></div>
                  <div className="fqa_question">
                    <p className="question">What are the advantages of outsourcing your project to our team?</p>
                      <div className="fqa_answer" >
                        <p className="answer"><Link to="/">Software development outsourcing</Link> your project to our team offers numerous advantages:</p>
                        <ul className="answer">
                          <li>Our skilled professionals bring expertise across various domains, ensuring a fresh perspective and innovative solutions.</li>
                          <li>We provide cost-effectiveness by eliminating the need for in-house infrastructure and staff.</li>
                          <li>With a proven track record, we ensure timely delivery, quality assurance, and reduced development time.</li>
                          <li>Our collaborative approach promotes clear communication and transparent progress tracking.</li>
                        </ul>
                        <p className="answer">Additionally, outsourcing allows your business to focus on core activities while we handle the technical complexities, resulting in a tailored, efficient, and competitive software solution.</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-06">
                  <input type="radio" class="accordion_toggle" name="accordion" id="toggle-06" hidden></input>
                    <div className="fqa_number"><p>06.</p></div>
                    <div className="fqa_icon"><span className="label_icon"></span></div>
                    <div className="fqa_question">
                      <p className="question">Will you sign an NDA?</p>
                        <div className="fqa_answer" >
                        <p className="answer">Absolutely, ensuring confidentiality is a priority for us. We are more than willing to sign a Non-Disclosure Agreement (NDA) to safeguard your sensitive information and project details. Your trust is paramount, and we're committed to maintaining the security and privacy of all aspects of our collaboration.</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-07">
                  <input type="radio" class="accordion_toggle" name="accordion" id="toggle-07" hidden></input>
                    <div className="fqa_number"><p>07.</p></div>
                    <div className="fqa_icon"><span className="label_icon"></span></div>
                  <div className="fqa_question">
                    <p className="question">What methodologies do you use in your work?</p>
                      <div className="fqa_answer" >
                        <p className="answer">In our work, we employ a range of effective methodologies tailored to project needs. Agile methodologies like Scrum and Kanban ensure flexibility, allowing for iterative development, frequent feedback, and adaptability to changing requirements. For more structured projects, we use Waterfall, where phases follow a linear sequence. Our choice depends on project complexity, timelines, and client preferences.</p>
                      </div>
                    </div>
                    </label>
                </div>

                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-08">
                  <input type="radio" class="accordion_toggle" name="accordion" id="toggle-08" hidden></input>
                  <div className="fqa_number"><p>08.</p></div>
                  <div className="fqa_icon"><span className="label_icon"></span></div>
                  <div className="fqa_question">
                    <p className="question">Do you provide outstaffing services?</p>
                      <div className="fqa_answer" >
                        <p className="answer">Yes, we offer <Link to="/">outstaffing services</Link> as part of our comprehensive offerings. Outstaffing allows you to augment your team with our skilled professionals who work remotely as an extension of your workforce. This arrangement provides flexibility in scaling your team as needed, while we handle the recruitment, onboarding, and management of our dedicated resources. You retain control over the tasks and projects they work on, ensuring seamless integration and enhanced productivity.</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-09">
                  <input type="radio" class="accordion_toggle" name="accordion" id="toggle-09" hidden></input>
                  <div className="fqa_number"><p>09.</p></div>
                  <div className="fqa_icon"><span className="label_icon"></span></div>
                  <div className="fqa_question">
                    <p className="question">How long does it usually take to develop custom software?</p>
                      <div className="fqa_answer" >
                        <p className="answer">The timeline for custom software development varies based on project complexity. Simple projects might take a few months, while complex ones can span a year or more. Our team ensures efficient development by setting realistic milestones and closely collaborating with you throughout the process.</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-10">
                  <input type="radio" class="accordion_toggle" name="accordion" id="toggle-10" hidden></input>
                  <div className="fqa_number"><p>10.</p></div>
                  <div className="fqa_icon"><span className="label_icon"></span></div>
                  <div className="fqa_question">
                    <p className="question">What is the typical process involved in custom software development?</p>
                      <div className="fqa_answer" >
                        <p className="answer">The typical process of <Link to="/">custom software development</Link> involves the following steps:</p>
                        <ul className="answer">
                          <li>Requirements Gathering and Analysis</li>
                          <li>Design</li>
                          <li>Development</li>
                          <li>Testing</li>
                          <li>Deployment</li>
                          <li>Training and Documentation</li>
                          <li>Launch</li>
                          <li>Support and Maintenance</li>
                        </ul>
                        <p className="answer">This structured process ensures that the software is developed systematically, meeting your unique requirements while maintaining high quality and effectiveness throughout its lifecycle.</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-11">
                  <input type="radio" class="accordion_toggle" name="accordion" id="toggle-11" hidden></input>
                  <div className="fqa_number"><p>11.</p></div>
                  <div className="fqa_icon"><span className="label_icon"></span></div>
                  <div className="fqa_question">
                    <p className="question">How can I choose the right software development company or team?</p>
                      <div className="fqa_answer" >
                        <p className="answer">Selecting the right software development team involves defining project needs, checking their expertise, reviewing past work, and evaluating communication skills. Ensure technical proficiency, scalability, and transparent pricing. Look for a company that offers post-launch support, and has a proven track record. By assessing these factors, you can make an informed choice for a successful partnership.</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-12">
                  <input type="radio" class="accordion_toggle" name="accordion" id="toggle-12" hidden></input>
                  <div className="fqa_number"><p>12.</p></div>
                  <div className="fqa_icon"><span className="label_icon"></span></div>
                  <div className="fqa_question">
                    <p className="question">How is the security of my custom software ensured?</p>
                      <div className="fqa_answer" >
                        <p className="answer">The security of your custom software is a top priority. We implement multiple layers of security measures, including robust authentication, encryption, and access controls. Regular security audits and code reviews help identify vulnerabilities. We follow best practices to protect against data breaches and cyber threats, ensuring your software and sensitive information are safeguarded at all times.</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-13">
                  <input type="radio" class="accordion_toggle" name="accordion" id="toggle-13" hidden></input>
                  <div className="fqa_number"><p>13.</p></div>
                  <div className="fqa_icon"><span className="label_icon"></span></div>
                  <div className="fqa_question">
                    <p className="question">Can I make changes or updates to the software after it's developed?</p>
                      <div className="fqa_answer" >
                        <p className="answer">Absolutely, you retain the flexibility to make changes and updates to your custom software after development. We design solutions with scalability and adaptability in mind. Our team can assist in implementing modifications, adding new features, or refining existing ones to align with evolving business needs. Post-launch support ensures seamless integration of updates while maintaining software integrity and functionality.</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-14">
                  <input type="radio" class="accordion_toggle" name="accordion" id="toggle-14" hidden></input>
                  <div className="fqa_number"><p>14.</p></div>
                  <div className="fqa_icon"><span className="label_icon"></span></div>
                  <div className="fqa_question">
                    <p className="question">What are the potential risks or challenges in custom software development?</p>
                      <div className="fqa_answer" >
                        <p className="answer">Custom software development may pose several risks and challenges:</p>
                        <ul className="answer">
                          <li><strong>Scope Creep:</strong> Expanding project scope beyond initial plans, affecting timelines and costs.</li>
                          <li><strong>Budget Overruns:</strong> Unforeseen complexities leading to increased expenses.</li>
                          <li><strong>Timeline Delays:</strong> Technical issues, scope changes, or external factors causing delays.</li>
                          <li><strong>Quality Assurance:</strong> Ensuring bug-free software through rigorous testing can be challenging.</li>
                          <li><strong>Communication Issues:</strong> Misunderstandings can lead to misaligned expectations.</li>
                          <li><strong>Technology Changes:</strong> Rapid tech advancements may necessitate updates for long-term relevance.</li>
                          <li><strong>Security Concerns:</strong> Ensuring software security against cyber threats and data breaches.</li>
                          <li><strong>User Adoption:</strong> Ensuring the software is intuitive and user-friendly for optimal user adoption.</li>
                          <li><strong>Integration Challenges:</strong> Compatibility issues with existing systems during integration.</li>
                          <li><strong>Resource Availability:</strong> Ensuring skilled developers are available throughout the project.</li>
                        </ul>
                        <p className="answer">Awareness of these challenges enables proactive mitigation and better <Link to="/">project management</Link> for successful custom software development.</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-15">
                  <input type="radio" class="accordion_toggle" name="accordion" id="toggle-15" hidden></input>
                  <div className="fqa_number"><p>15.</p></div>
                  <div className="fqa_icon"><span className="label_icon"></span></div>
                  <div className="fqa_question">
                    <p className="question">What level of involvement will I have during the development process?</p>
                      <div className="fqa_answer" >
                        <p className="answer">Your involvement during the development process can be tailored to your preferences. We value collaboration and transparency, so you can actively participate in:</p>
                        <ul className="answer">
                          <li><strong>Requirements Gathering:</strong> Defining project goals and features.</li>
                          <li><strong>Design Phase:</strong> Providing feedback on the software's look and feel.</li>
                          <li><strong>Development:</strong> Reviewing progress, suggesting adjustments.</li>
                          <li><strong>Testing:</strong> Participating in <Link to="/">quality assurance</Link> and bug identification.</li>
                          <li><strong>Feedback Loop:</strong> Regular updates and incorporating your suggestions.</li>
                        </ul>
                        <p className="answer">Your input ensures the final software aligns precisely with your vision and needs. We adapt to your desired level of engagement to create a successful and satisfying partnership.</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-16">
                   <input type="radio" class="accordion_toggle" name="accordion" id="toggle-16" hidden></input>
                  <div className="fqa_number"><p>16.</p></div>
                  <div className="fqa_icon"><span className="label_icon"></span></div>
                  <div className="fqa_question">
                    <p className="question">Do I own the rights to the source code and intellectual property?</p>
                      <div className="fqa_answer" >
                        <p className="answer">Yes, you retain ownership of the source code and intellectual property of the custom software we develop for you. We provide clear agreements that transfer these rights to you upon project completion. This ensures you have full control over the software's use, modification, and distribution, allowing you to make future enhancements or collaborate with other developers as needed.</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-17">
                   <input type="radio" class="accordion_toggle" name="accordion" id="toggle-17" hidden></input>
                  <div className="fqa_number"><p>17.</p></div>
                  <div className="fqa_icon"><span className="label_icon"></span></div>
                  <div className="fqa_question">
                    <p className="question">What factors influence the cost of software development?</p>
                      <div className="fqa_answer" >
                        <p className="answer">Custom software development may pose several risks and challenges:</p>
                        <ul className="answer">
                          <li><strong>Complexity:</strong> Intricate features and functionality can increase development time and cost.</li>
                          <li><strong>Scope:</strong> The number of features, user roles, and modules affects workload and expenses.</li>
                          <li><strong>Technology:</strong> The choice of programming languages, frameworks, and tools can impact costs.</li>
                          <li><strong>Design:</strong> Elaborate UI/UX design or custom graphics may incur additional expenses.</li>
                          <li><strong>Integration:</strong> Connecting with other systems or APIs can affect complexity and budget.</li>
                          <li><strong>Security:</strong> Implementing robust security measures adds development effort.</li>
                          <li><strong>Testing:</strong> Rigorous testing and quality assurance contribute to the overall cost.</li>
                          <li><strong>Customization:</strong> Tailoring the software to specific business needs may require extra effort.</li>
                          <li><strong>Timeline:</strong> Expedited delivery might require more resources and thus higher costs.</li>
                          <li><strong>Support and Maintenance:</strong> Including post-launch support and updates influences cost.</li>
                           <li><strong>Team Expertise:</strong> Skilled developers may command higher rates, impacting expenses.</li>
                          <li><strong>Geographical Location:</strong> Development costs can vary based on regional rates.</li>
                        </ul>
                        <p className="answer">By understanding these factors, you can make informed decisions and effectively manage your software development budget.</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-18">
                  <input type="radio" class="accordion_toggle" name="accordion" id="toggle-18" hidden></input>
                  <div className="fqa_number"><p>18.</p></div>
                  <div className="fqa_icon"><span className="label_icon"></span></div>
                  <div className="fqa_question">
                    <p className="question">Do you provide end-user documentation?</p>
                      <div className="fqa_answer" >
                        <p className="answer">At <Link to="/">BPM Cloud</Link>, we ensure comprehensive end-user documentation is available. However, its provision is subject to inclusion in the work contract. This guarantees transparency and aligns with our commitment to meeting your specific project needs.</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="fqa__list-item">
                  <label className="fqa_label" htmlFor="toggle-19">
                  <input type="radio" class="accordion_toggle" name="accordion" id="toggle-19" hidden></input>
                  <div className="fqa_number"><p>19.</p></div>
                  <div className="fqa_icon"><span className="label_icon"></span></div>
                  <div className="fqa_question">
                    <p className="question">How do you ensure that the final product meets my expectations?</p>
                      <div className="fqa_answer" >
                        <p className="answer">Ensuring your satisfaction is paramount. We employ a meticulous process that involves continuous communication, regular progress updates, and milestone reviews. Your feedback is integrated throughout development, addressing any concerns promptly. Rigorous testing and quality assurance verify the software's functionality, aligning it with your expectations. Our collaborative approach guarantees the final product meets or exceeds your envisioned outcomes.</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
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
  )
}

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
