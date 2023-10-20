import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

import armani from "../images/Armani.png"
import tourist from "../images/TOURIST.png"
import profit from "../images/Profit.png"

const Reviews = ({}) => {
  const hasWindow = typeof window !== "undefined"
  const widthScreen = hasWindow ? window.innerWidth : null
  const dataText = [
    {
      id: "slide_1",
      img: armani,
      description:
        "I had the pleasure of utilizing the website redesign services offered by BPM Cloud, and I must say, I am thoroughly impressed. As the Marketing Manager, I sought a fresh perspective to elevate our brand. Their concepts seamlessly blended innovation with our identity, redefining our visual appeal. Effective communication, expert design, and a deep understanding of our needs make BPM Cloud our top choice. They've reinvigorated our image, leaving a lasting impact on our success.",
      signature: "Maria Rodriguez",
      vacan: 'Marketing Manager',
    },
    {
      id: "slide_2",
      img: tourist,
      description:
        "Impressed with BPM Cloud's UX/UI design and development service! Crafting our portal showcasing diverse services was seamless. Intuitive design, smooth navigation, and flawless responsiveness. Their team's collaborative approach and technical expertise made the process a breeze. Highly recommend their top-notch services!",
      signature: "Emily Johnson",
      vacan: 'Head of Product',
    },
    {
      id: "slide_3",
      img: profit,
      description:
        "BPM Cloud's software development service transformed our investment corporate website. Their technical prowess elegantly translated intricate financial tools into an intuitive interface. The collaboration was seamless, and the responsive design ensures a flawless experience across devices. Highly recommend BPM Cloud for their expertise in enhancing digital presence.",
      signature: "Michael Smith",
      vacan: 'Chief Investment Officer',
    },
  ]
  const result = dataText.map(obj => {
    return (
      <div key={obj.id} className="reviews__list">
        <div className="list_item">
          <div className="reviews__list_logo">
            <img src={obj.img} alt="logo" />
          </div>
          <div className="reviews__list_text">
            <p>{obj.description}</p>
          </div>
          <div className="reviews__list_info">
              <div className="info_descr">
                <div className="reviews_name">{obj.signature}</div>
                <div className="reviews_vacan">{obj.vacan}</div>
              </div>
              <div className="reviews__project">
                <Link to="/">Check the project</Link>
              </div>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className="container swiper_container">
      <div className="reviews margin_bottom_240">
        <div className="view_title">
          <h2 className="title_62">What Our Clients Say</h2>
          <Link className="active_link" to="/about-us/testimonials/">
            View all
          </Link>
        </div>
        <div className="reviews__info">
            {result}
        </div>
      </div>
    </div>
  )
}

Reviews.propTypes = {
  siteTitle: PropTypes.string,
}

Reviews.defaultProps = {
  siteTitle: ``,
}

export default Reviews
