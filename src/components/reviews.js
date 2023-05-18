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

const Reviews = ({}) => {
  const hasWindow = typeof window !== "undefined"
  const widthScreen = hasWindow ? window.innerWidth : null
  const dataText = [
    {
      id: "slide_1",
      description:
        "Is there any point in delaying starting our cooperation, if " +
        "leading experts are already with our digital marketing agency? " +
        "Let’s get acquainted and jointly go towards necessary goals in " +
        "goods and services digital promotion. The first step is so easy!",
      signature: "Valentina Gubareva",
      date: "12.10.2021",
    },
    {
      id: "slide_2",
      description:
        "Is there any point in delaying starting our cooperation, if " +
        "leading experts are already with our digital marketing agency? " +
        "Let’s get acquainted and jointly go towards necessary goals in " +
        "goods and services digital promotion. The first step is so easy!",
      signature: "Maria Ivanova",
      date: "12.10.2021",
    },
    {
      id: "slide_3",
      description:
        "Is there any point in delaying starting our cooperation, if " +
        "leading experts are already with our digital marketing agency? " +
        "Let’s get acquainted and jointly go towards necessary goals in " +
        "goods and services digital promotion. The first step is so easy!",
      signature: "Ekaterina Gubareva",
      date: "12.10.2021",
    },
    {
      id: "slide_4",
      description:
        "Is there any point in delaying starting our cooperation, if " +
        "leading experts are already with our digital marketing agency? " +
        "Let’s get acquainted and jointly go towards necessary goals in " +
        "goods and services digital promotion. The first step is so easy!",
      signature: "Valentina Gubarevich",
      date: "12.10.2021",
    },
  ]
  const result = dataText.map(obj => {
    return (
      <SwiperSlide key={obj.id}>
        <div className="reviews_info_block">
          <div className="reviews_info_block_text">{obj.description}</div>
          <div className="reviews_info_block_name">{obj.signature}</div>
          <div className="reviews_info_block_date">
            <ul>
              <li>Creative director</li>
              <li>{obj.date}</li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
    )
  })
  return (
    <div className="container">
      <div className="reviews margin_bottom_240">
        <div className="view_title">
          <div className="title_62">Reviews</div>
          <Link className="active_link" to="/about-us/reviews/">
            View all
          </Link>
        </div>
        <div className="reviews__info">
          <Swiper
            spaceBetween={widthScreen <= 1024 ? 20 : 26}
            slidesPerView={"auto"}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={swiper => console.log(swiper)}
            breakpoints={{
              1920: {
                width: 1920,
                allowTouchMove: true,
              },
              1366: {
                width: 1366,
                allowTouchMove: true,
              },
              1025: {
                width: 1025,
                allowTouchMove: true,
              },
              1024: {
                width: 1024,
                allowTouchMove: true,
              },
              768: {
                width: 768,
                allowTouchMove: true,
              },
            }}
          >
            {result}
          </Swiper>
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
