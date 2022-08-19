import * as React from "react"
import PropTypes from "prop-types"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import imgVr from "../images/vr.svg"
import imgPointer from "../images/pointer.svg"
import imgScreen from "../images/screen.svg"
import imgHand from "../images/hand.svg"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Blog = ({ siteTitle }) => {
  const data = [ //temporary data
    { title: "«BPM CLOUD»",date: new Date("12.10.2021"),tags: ['#design', '#design'],imgSrc: imgVr },
    { title: "«BPM CLOUD»",date: new Date("12.10.2021"),tags: ['#design', '#design'],imgSrc: imgPointer },
    { title: "«BPM CLOUD»",date: new Date("12.10.2021"),tags: ['#design', '#design'],imgSrc: imgScreen },
    { title: "«BPM CLOUD»",date: new Date("12.10.2021"),tags: ['#design', '#design'],imgSrc: imgHand }
  ];

  const result = data.map((obj, index) => {
    return (
      <SwiperSlide key={ index }>
        <div className="blog_products_block">
          <div className="blog_products_block_pic">
            <img src={ obj.imgSrc } />
          </div>
          <div className="blog_products_block_list hash">
            <ul className="hash__list">
              {obj.tags.map((tag, id) => {
                return (
                  <li key={ id } className="hash_list_block">
                    <a href="#">{ tag }</a>
                  </li>
                )
              })}
            </ul>
            <div className="blog_products_block_list_date">{ data.date }</div>
          </div>
          <div className="blog_products_block_title">{ data.title }</div>
        </div>
      </SwiperSlide>
    );
  })

  return(
  <div className="container">
    <div className="blog margin_bottom_240">
      <div className="view_title">
        <div className="title_62">Blog</div>
        <div className="view_all">
          <a href="#">View all</a>
        </div>
      </div>
      <div className="blog__products">
      <Swiper
            spaceBetween={20}
            slidesPerView={"auto"}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
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
                width: 1366,
                allowTouchMove: true,
              },
            }}
          >
            { result }
          </Swiper>
      </div>
    </div>
  </div>
  )
}

Blog.propTypes = {
  siteTitle: PropTypes.string,
}

Blog.defaultProps = {
  siteTitle: ``,
}

export default Blog
