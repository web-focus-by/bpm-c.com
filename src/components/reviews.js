import * as React from "react"
import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Reviews = ({ siteTitle, data }) => {
  //const [dataText] = useState(data);
  const dataText = [
    {
      id: "slide_1",
      description:
        "Is there any point in delaying starting our cooperation, if " +
        "leading experts are already with our digital marketing agency? " +
        "Let’s get acquainted and jointly go towards necessary goals in " +
        "goods and services digital promotion.",
      signature: "Valentina Gubareva",
      date: "12.10.2021",
    },
    {
      id: "slide_2",
      description:
        "Is there any point in delaying starting our cooperation, if " +
        "leading experts are already with our digital marketing agency? " +
        "Let’s get acquainted and jointly go towards necessary goals in " +
        "goods and services digital promotion.",
      signature: "Maria Ivanova",
      date: "12.10.2021",
    },
    {
      id: "slide_3",
      description:
        "Is there any point in delaying starting our cooperation, if " +
        "leading experts are already with our digital marketing agency? " +
        "Let’s get acquainted and jointly go towards necessary goals in " +
        "goods and services digital promotion.",
      signature: "Ekaterina Gubareva",
      date: "12.10.2021",
    },
    {
      id: "slide_4",
      description:
        "Is there any point in delaying starting our cooperation, if " +
        "leading experts are already with our digital marketing agency? " +
        "Let’s get acquainted and jointly go towards necessary goals in " +
        "goods and services digital promotion.",
      signature: "Valentina Gubarevich",
      date: "12.10.2021",
    },
  ]
  const result = dataText.map(obj => {
    return (
      <SwiperSlide>
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
          <div className="view_all">
            <a href="#">View all</a>
          </div>
        </div>
        <div className="reviews__info">
          <Swiper
            spaceBetween={20}
            slidesPerView={"auto"}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
            breakpoints={{
              1920: {
                width: 1920,
                allowTouchMove: false,
              },
              1366: {
                width: 1366,
                allowTouchMove: false,
              },
              1025: {
                width: 1025,
                allowTouchMove: false,
              },
              1024: {
                width: 1366,
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
