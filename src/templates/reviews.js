import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs"
import Seo from "../components/seo"
import AllReviews from "../components/allReviews"
import armani from "../images/Armani.png"
import tourist from "../images/TOURIST.png"
import profit from "../images/Profit.png"
import aybivet from "../images/Aibyvet.png"
import mp from "../images/mp.png"
import mining from "../images/mining.png"
import gold from "../images/gold.png"
import ce from "../images/ce.png"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

const Reviews = ({ location }) => {
  return (
    <>
      <Layout>
        <div className="container">
          <div class="breacrumbs-list" itemscope="" itemtype="http://schema.org/BreadcrumbList">
            <Breadcrumbs breadcrumbs={location} title="Reviews" />
          </div>
          <div className="hero">
            <h1 className="hero__title title_62">
              Testimonials<span className="notes_of_reviewes"></span>
            </h1>
          </div>
          <div className="container" style={{padding: 0}}>
            <div className="reviews margin_bottom_240">
              <div className="reviews__list">
                <div className="list_item">
                  <div className="reviews__list_logo">
                    <img src={armani} alt="logo" />
                  </div>
                  <div className="reviews__list_text">
                    <p>I had the pleasure of utilizing the website redesign services offered by BPM Cloud, and I must say, I am thoroughly impressed. As the Marketing Manager, I sought a fresh perspective to elevate our brand. Their concepts seamlessly blended innovation with our identity, redefining our visual appeal. Effective communication, expert design, and a deep understanding of our needs make BPM Cloud our top choice. They've reinvigorated our image, leaving a lasting impact on our success.</p>
                  </div>
                  <div className="reviews__list_info">
                      <div className="info_descr">
                        <div className="reviews_name">Maria Rodriguez</div>
                        <div className="reviews_vacan">Marketing Manager</div>
                      </div>
                      <div className="reviews__project">
                        <Link to="/">Check the project</Link>
                      </div>
                  </div>
                </div>

                <div className="list_item">
                  <div className="reviews__list_logo">
                    <img src={tourist} alt="logo" />
                  </div>
                  <div className="reviews__list_text">
                    <p>Impressed with BPM Cloud's UX/UI design and development service! Crafting our portal showcasing diverse services was seamless. Intuitive design, smooth navigation, and flawless responsiveness. Their team's collaborative approach and technical expertise made the process a breeze. Highly recommend their top-notch services!</p>
                  </div>
                  <div className="reviews__list_info">
                      <div className="info_descr">
                        <div className="reviews_name">Emily Johnson</div>
                        <div className="reviews_vacan">Head of Product</div>
                      </div>
                      <div className="reviews__project">
                        <Link to="/">Check the project</Link>
                      </div>
                  </div>
                </div>

                <div className="list_item">
                  <div className="reviews__list_logo">
                    <img src={profit} alt="logo" />
                  </div>
                  <div className="reviews__list_text">
                    <p>BPM Cloud's software development service transformed our investment corporate website. Their technical prowess elegantly translated intricate financial tools into an intuitive interface. The collaboration was seamless, and the responsive design ensures a flawless experience across devices. Highly recommend BPM Cloud for their expertise in enhancing digital presence.</p>
                  </div>
                  <div className="reviews__list_info">
                      <div className="info_descr">
                        <div className="reviews_name">Michael Smith</div>
                        <div className="reviews_vacan">Chief Investment Officer</div>
                      </div>
                      <div className="reviews__project">
                        <Link to="/">Check the project</Link>
                      </div>
                  </div>
                </div>

                <div className="list_item">
                  <div className="reviews__list_logo">
                    <img src={aybivet} alt="logo" />
                  </div>
                  <div className="reviews__list_text">
                    <p>I'm truly grateful for the dedicated efforts of the BPM Cloud team on our project. Witnessing the seamless integration of various components into cohesive workflows is truly impressive. My colleague and I have consistently remarked on how enjoyable it is to test the new functionalities.</p>
                    <p>While I am meticulous about my requirements, I must emphasize that the BPM Cloud team consistently demonstrates remarkable decision-making abilities. Their proactive approach is noteworthy. The quick response to issues we identify is highly appreciated. Starting each workday with a plethora of fixes and new features awaiting testing is a delight. I am aware that the BPM Cloud development team has invested substantial hours, and I want to extend my heartfelt gratitude for their unwavering dedication. Your hard work does not go unnoticed. Please maintain this exceptional level of commitment!</p>
                  </div>
                  <div className="reviews__list_info">
                      <div className="info_descr">
                        <div className="reviews_name">Leo Holloway</div>
                        <div className="reviews_vacan">Head of Digital</div>
                      </div>
                      <div className="reviews__project">
                        <Link to="/">Check the project</Link>
                      </div>
                  </div>
                </div>

                <div className="list_item">
                  <div className="reviews__list_logo">
                    <img src={mp} alt="logo" />
                  </div>
                  <div className="reviews__list_text">
                    <p>BPM Cloud's software development service for our electronic medical record platform at Medesk was exceptional. Their expertise translated into a seamless user experience and efficient workflows. Their team's collaborative approach and attention to detail ensured a top-notch product. Highly recommend BPM Cloud for their prowess in healthcare software development.</p>
                  </div>
                  <div className="reviews__list_info">
                      <div className="info_descr">
                        <div className="reviews_name">Rachel Carter</div>
                        <div className="reviews_vacan">Product Manager</div>
                      </div>
                      <div className="reviews__project">
                        <Link to="/">Check the project</Link>
                      </div>
                  </div>
                </div>

                <div className="list_item">
                  <div className="reviews__list_logo">
                    <img src={mining} alt="logo" />
                  </div>
                  <div className="reviews__list_text">
                    <p>BPM Cloud's design and development service exceeded my expectations for our Mining me app. Their expertise seamlessly translated our intricate concepts into a user-friendly platform. The UI/UX design is not only visually appealing, but also intuitive, making navigation a breeze for users new to cryptocurrency mining.</p>
                    <p>The development process was a collaborative journey. The BPM Cloud team took the time to understand our vision and provided valuable insights to enhance functionality. They skillfully integrated complex mining calculators and real-time data feeds, delivering a dynamic user experience. Communication was seamless throughout the project. Regular updates kept us informed, and they were receptive to our feedback at every stage. Their flexibility and ability to accommodate our requests while providing expert guidance ensured a harmonious collaboration. Their technical proficiency, innovative design, and collaborative spirit make them an invaluable partner. If you're looking to create an effective, way to go.</p>
                  </div>
                  <div className="reviews__list_info">
                      <div className="info_descr">
                        <div className="reviews_name">David Miller</div>
                        <div className="reviews_vacan">CEO</div>
                      </div>
                      <div className="reviews__project">
                        <Link to="/">Check the project</Link>
                      </div>
                  </div>
                </div>

                <div className="list_item">
                  <div className="reviews__list_logo">
                    <img src={gold} alt="logo" />
                  </div>
                  <div className="reviews__list_text">
                    <p>I'm Anastasia Ivanova, Marketing Director at Bauarenda. Our experience with BPM Cloud's website redesign service has been exceptional. They grasped our brand essence and translated it into a website that surpassed our expectations. BPM Cloud's redesign breathed fresh life into our online presence. The new design perfectly encapsulated our company's identity, with a sleek and intuitive interface. The user experience is now seamless, leading to increased engagement and longer time spent on our site. BPM Cloud's team collaborated closely with us, taking our inputs into account and suggesting innovative solutions. The result is a website that not only looks great but also functions flawlessly, making navigation a breeze. I know that the BPM Cloud development team has worked long hours at times and I just want to say thank you for the effort.</p>
                  </div>
                  <div className="reviews__list_info">
                      <div className="info_descr">
                        <div className="reviews_name">Anastasia Ivanova</div>
                        <div className="reviews_vacan">Marketing Director</div>
                      </div>
                      <div className="reviews__project">
                        <Link to="/">Check the project</Link>
                      </div>
                  </div>
                </div>

                <div className="list_item">
                  <div className="reviews__list_logo">
                    <img src={ce} alt="logo" />
                  </div>
                  <div className="reviews__list_text">
                    <p>I'm thrilled to share my experience with BPM Cloud's UX/UI design service. Their redesign of our company website has been a game-changer. BPM Cloud's UX/UI design service has breathed new life into Cerium Group AG's online presence. The redesigned website is a testament to their creativity and expertise. We're proud to showcase our brand through their work, and we highly recommend their services.</p>
                  </div>
                  <div className="reviews__list_info">
                      <div className="info_descr">
                        <div className="reviews_name">Michael Thompson</div>
                        <div className="reviews_vacan">Creative Director</div>
                      </div>
                      <div className="reviews__project">
                        <Link to="/">Check the project</Link>
                      </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="header_circle_yellow"></div>
          <div className="header_circle_pink"></div>
          <div className="header_circle_purple"></div>
        </div>
        <AllReviews></AllReviews>
        <Seo title="Reviews" />
      </Layout>
    </>
  )
}

export default Reviews
